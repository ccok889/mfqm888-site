import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(import.meta.dirname,'..');
const errors=[];
const pages=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(entry.name==='.git')continue;const file=path.join(dir,entry.name);if(entry.isDirectory())walk(file);else if(file.endsWith('.html'))pages.push(file);}}
walk(root);
for(const file of pages){
 const html=fs.readFileSync(file,'utf8');
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const url=match[1];if(/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(url))continue;
  const [relative,anchor]=url.split('#');let target=relative?path.resolve(path.dirname(file),relative.split('?')[0]):file;
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  if(!fs.existsSync(target)){errors.push(`${path.relative(root,file)}: missing ${url}`);continue;}
  if(anchor&&target.endsWith('.html')){const ids=[...fs.readFileSync(target,'utf8').matchAll(/\bid=["']([^"']+)["']/g)].map(x=>x[1]);if(!ids.includes(anchor))errors.push(`${path.relative(root,file)}: missing anchor ${url}`);}
 }
 for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))try{JSON.parse(block[1]);}catch{errors.push(`${file}: invalid JSON-LD`);}
}
const js=fs.readFileSync(path.join(root,'assets/js/main.js'),'utf8');
new vm.Script(js);
const rows=vm.runInNewContext(js.slice(js.indexOf('const searchIndex='),js.indexOf('const matchSearch=')).replace('const searchIndex=',''));
const search=JSON.parse(fs.readFileSync(path.join(root,'search.json'),'utf8'));
for(const [name,list] of [['JS',rows],['JSON',search]]){const seen=new Set();for(const row of list){if(seen.has(row.url))errors.push(`${name}: duplicate ${row.url}`);seen.add(row.url);if(!fs.existsSync(path.join(root,row.url)))errors.push(`${name}: missing page ${row.url}`);if(row.image&&!fs.existsSync(path.join(root,row.image)))errors.push(`${name}: missing image ${row.image}`);}}
for(const row of rows)if(!search.some(x=>x.url===row.url))errors.push(`JSON index missing ${row.url}`);
for(const row of search)if(!rows.some(x=>x.url===row.url))errors.push(`JS index missing ${row.url}`);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'scripts/published-main-city-2026-09-15.json'),'utf8'));
const paragraphs=new Map();
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const row of manifest){const html=fs.readFileSync(path.join(root,row.url),'utf8');for(const tag of ['og:url','rel="canonical"','og:image'])if(!html.includes(tag))errors.push(`${row.url}: missing ${tag}`);if(!sitemap.includes(`https://www.mfqm888.com/${row.url}`))errors.push(`${row.url}: sitemap missing`);for(const p of html.matchAll(/<p(?: class="article-lead")?>(.*?)<\/p>/g)){if(p[1].length<80)continue;const key=p[1].replace(/北京|上海|广州|深圳|杭州|南京|成都|武汉|重庆|苏州|天津|西安|主站/g,'城市');if(paragraphs.has(key))errors.push(`${row.url}: repeated paragraph from ${paragraphs.get(key)}`);else paragraphs.set(key,row.url);}}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`PASS: ${pages.length} pages; links, anchors, structured data, ${rows.length} search entries and article uniqueness.`);
