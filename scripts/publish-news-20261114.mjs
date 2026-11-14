import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'scripts/news-20261114.json'),'utf8'));
for(const item of data){
 const slug=item.slug==='main'?'handwriting-comparison':item.slug;
 if(!fs.existsSync(path.join(root,`assets/images/news-${slug}-20261114.webp`))) throw Error(`Missing image: ${slug}`);
}
const target=path.join(root,'article/news/handwriting-rhythm-20261114.html');
if(fs.existsSync(target)) throw Error('Batch already generated; refusing duplicate publication');
// Reuse the established page renderer while keeping this batch data independent.
let source=fs.readFileSync(path.join(root,'scripts/publish-news-20261019.mjs'),'utf8');
source=source.replace("const date = '2026-10-19';","const date = '2026-11-14';");
source=source.replaceAll('.png','.webp');
source=source.replace(/const data = \[[\s\S]*?\n\];/,`const data = ${JSON.stringify(data)};`);
const start=source.indexOf("let news=read('news/index.html');");
const end=source.indexOf("let topics=read('news/topics.html');",start);
if(start<0||end<0) throw Error('Renderer changed');
source=source.slice(0,start)+`
const pageFiles=fs.readdirSync(path.join(root,'news')).filter(x=>x==='index.html'||/^page-\\d+\\.html$/.test(x)).sort((a,b)=>(a==='index.html'?1:Number(a.match(/\\d+/)[0]))-(b==='index.html'?1:Number(b.match(/\\d+/)[0])));
const template=read('news/index.html');
const oldRows=pageFiles.flatMap(f=>[...read('news/'+f).matchAll(/<article class="article-row">[\\s\\S]*?<\\/article>/g)].map(x=>x[0]));
const allRows=[row(data[0],'../'),...oldRows];
const count=Math.ceil(allRows.length/12);
for(let i=0;i<count;i++){
 const filename=i===0?'index.html':'page-'+(i+1)+'.html';
 let html=template;
 const existing=[...html.matchAll(/<article class="article-row">[\\s\\S]*?<\\/article>/g)];
 const a=existing[0].index,b=existing.at(-1).index+existing.at(-1)[0].length;
 html=html.slice(0,a)+allRows.slice(i*12,(i+1)*12).join('')+html.slice(b);
 html=html.replace(/<nav class="pagination"[\\s\\S]*?<\\/nav>/,'<nav class="pagination" aria-label="资讯分页">'+Array.from({length:count},(_,j)=>'<a'+(i===j?' class="active" aria-current="page"':'')+' href="'+(j===0?'index.html':'page-'+(j+1)+'.html')+'">'+(j+1)+'</a>').join('')+'</nav>');
 html=html.replace(/共\\s*\\d+\\s*篇/g,'共 '+allRows.length+' 篇');
 if(i>0){html=html.replace(/<title>[^<]*<\\/title>/,'<title>笔迹服务资讯中心 - 第'+(i+1)+'页 - 模仿笔迹网</title>').replace('rel="canonical" href="https://www.mfqm888.com/news/index.html"','rel="canonical" href="https://www.mfqm888.com/news/'+filename+'"');}
 write('news/'+filename,html);
}
`+source.slice(end);
source=source.replace("console.log(`Prepared ${data.length} articles`);",'');
// Evaluate as a sibling module so the legacy root resolution remains correct.
const generated=path.join(root,'scripts/.news-20261114-renderer.mjs');
try{fs.writeFileSync(generated,source);await import('file:///'+generated.replaceAll('\\','/'));}finally{if(fs.existsSync(generated))fs.unlinkSync(generated);}
let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
if(!sitemap.includes('https://www.mfqm888.com/news/page-3.html')) sitemap=sitemap.replace('</urlset>','<url><loc>https://www.mfqm888.com/news/page-3.html</loc><lastmod>2026-11-14</lastmod></url>\n</urlset>');
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
for(const d of data){
 const p=d.slug==='main'?'article/news/handwriting-rhythm-20261114.html':`city/${d.slug}/${d.slug}-handwriting-note-20261114.html`;
 let html=fs.readFileSync(path.join(root,p),'utf8');
 const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
  {'@type':'ListItem',position:1,name:'首页',item:'https://www.mfqm888.com/'},
  {'@type':'ListItem',position:2,name:d.city?d.city+'分站':'资讯中心',item:'https://www.mfqm888.com/'+(d.city?`city/${d.slug}/index.html`:'news/index.html')},
  {'@type':'ListItem',position:3,name:d.title,item:'https://www.mfqm888.com/'+p}
 ]};
 html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`);
 fs.writeFileSync(path.join(root,p),html);
}
console.log('Prepared 13 articles and paginated news archive.');
