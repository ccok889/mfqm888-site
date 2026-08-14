import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const source=fs.readFileSync(path.join(root,'scripts/publish-city-articles.mjs'),'utf8');
const pairs=[...source.matchAll(/\['([a-z]+)','([^']+)','([^']+\.html)'/g)].map(m=>({slug:m[1],city:m[2],file:m[3]}));
if(pairs.length!==12)throw new Error(`城市文章数量错误：${pairs.length}`);
const errors=[];
const titles=new Set();
const search=JSON.parse(fs.readFileSync(path.join(root,'search.json'),'utf8'));
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const p of pairs){
 const rel=`city/${p.slug}/${p.file}`;
 const file=path.join(root,rel);
 const html=fs.readFileSync(file,'utf8');
 const plain=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]+>/g,'');
 const title=(html.match(/<title>(.*?) - 模仿笔迹网<\/title>/)||[])[1];
 if(!title||titles.has(title))errors.push(`${rel}: 标题缺失或重复`); else titles.add(title);
 for(const word of ['模仿笔迹','模仿签名','模仿签字','笔迹鉴定'])if((plain.match(new RegExp(word,'g'))||[]).length<4)errors.push(`${rel}: ${word}出现不足4次`);
 if(plain.length<1600)errors.push(`${rel}: 正文偏短 ${plain.length}`);
 for(const tag of ['meta name="description"','meta name="keywords"','rel="canonical"','og:type','Article','FAQPage','BreadcrumbList','<h1>'])if(!html.includes(tag))errors.push(`${rel}: SEO项缺失 ${tag}`);
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const link=match[1]; if(link.startsWith('#')||link.startsWith('http')||link.startsWith('mailto:'))continue;
  const target=path.resolve(path.dirname(file),link.split('#')[0].split('?')[0]);
  if(!fs.existsSync(target))errors.push(`${rel}: 无效链接 ${link}`);
 }
 if(!search.some(x=>x.url===rel))errors.push(`${rel}: 未进入search.json`);
 if(!sitemap.includes(`https://www.mfqm888.com/${rel}`))errors.push(`${rel}: 未进入sitemap.xml`);
 const index=fs.readFileSync(path.join(root,'city',p.slug,'index.html'),'utf8');
 if(!index.includes(p.file)||!index.includes('5 篇'))errors.push(`${rel}: 分站首页入口缺失`);
 for(const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(block[1])}catch{errors.push(`${rel}: JSON-LD格式错误`)}}
}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`三轮检查通过：12篇文章标题互不重复；核心关键词、正文长度、SEO标签、JSON-LD、图片、内链、分站入口、搜索索引和站点地图均完整。`);
