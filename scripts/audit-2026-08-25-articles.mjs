import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const items=JSON.parse(fs.readFileSync(path.join(root,'scripts/published-2026-08-25.json'),'utf8'));
const search=JSON.parse(fs.readFileSync(path.join(root,'search.json'),'utf8'));
const map=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const errors=[];
const titles=new Set();
if(items.length!==17)errors.push(`发布数量应为17，实际${items.length}`);
if(items.filter(x=>x.category==='城市服务').length!==12)errors.push('分站文章数量不是12');
if(items.filter(x=>x.category!=='城市服务').length!==5)errors.push('主站文章数量不是5');
for(const x of items){
  const file=path.join(root,x.url);
  const html=fs.readFileSync(file,'utf8');
  const plain=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,'').replace(/\s+/g,'');
  const title=(html.match(/<h1>(.*?)<\/h1>/)||[])[1];
  if(!title||titles.has(title))errors.push(`${x.url}: 标题缺失或重复`);
  titles.add(title);
  if(plain.length<1150)errors.push(`${x.url}: 可读内容偏短 ${plain.length}`);
  for(const word of ['模仿笔迹','模仿签名','模仿签字','笔迹鉴定'])if((plain.match(new RegExp(word,'g'))||[]).length<3)errors.push(`${x.url}: ${word}覆盖不足`);
  for(const tag of ['meta name="description"','meta name="keywords"','rel="canonical"','og:type','og:url','Article','FAQPage','BreadcrumbList','2026-08-25'])if(!html.includes(tag))errors.push(`${x.url}: 缺少${tag}`);
  for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){try{JSON.parse(m[1])}catch{errors.push(`${x.url}: JSON-LD错误`)}}
  for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){const link=m[1];if(link.startsWith('#')||link.startsWith('http'))continue;const target=path.resolve(path.dirname(file),link.split(/[?#]/)[0]);if(!fs.existsSync(target))errors.push(`${x.url}: 无效链接 ${link}`)}
  if(!search.some(s=>s.url===x.url))errors.push(`${x.url}: search.json缺失`);
  if(!map.includes(`https://www.mfqm888.com/${x.url}`))errors.push(`${x.url}: sitemap缺失`);
  for(const word of ['作为一个','综上所述','值得注意的是','AI生成','备案号请上线前替换'])if(html.includes(word))errors.push(`${x.url}: 出现不自然表达 ${word}`);
}
for(const x of items.filter(x=>x.category==='城市服务')){const [,slug]=x.url.split('/');const index=fs.readFileSync(path.join(root,'city',slug,'index.html'),'utf8');if(!index.includes(path.basename(x.url))||!index.includes('6 篇'))errors.push(`${slug}: 分站首页入口或计数错误`)}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const x of items.filter(x=>x.category!=='城市服务'))if(!home.includes(path.basename(x.url)))errors.push(`${x.url}: 主站首页入口缺失`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('三轮检查通过：5篇主站文章、12篇分站文章的内容、关键词、SEO结构、JSON-LD、图片、内链、入口、搜索索引和站点地图均完整。');
