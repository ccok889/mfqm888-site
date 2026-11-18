import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const write=(p,t)=>fs.writeFileSync(path.join(root,p),t);
const d=JSON.parse(read('scripts/news-20261116.json')).find(d=>d.slug==='wuhan');
const p='city/wuhan/wuhan-handwriting-note-20261116.html';
if(fs.existsSync(path.join(root,p)))throw Error('Backlog already recovered');
let renderer=read('scripts/publish-news-20261019.mjs');
renderer=renderer.slice(0,renderer.indexOf('for(const d of data) create(d);'));
renderer=renderer.replace("const date = '2026-10-19';","const date = '2026-11-16';").replaceAll('.png','.webp').replace(/const data = \[[\s\S]*?\n\];/,`const data = [${JSON.stringify(d)}];`);
renderer+='\ncreate(data[0]);\n';
const temp=path.join(root,'scripts/.recover-wuhan-20261116.mjs');
try{fs.writeFileSync(temp,renderer);await import('file:///'+temp.replaceAll('\\','/'));}finally{fs.unlinkSync(temp);}
let html=read(p).replaceAll('2026-11-16','2026-11-18');
const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'首页',item:'https://www.mfqm888.com/'},{'@type':'ListItem',position:2,name:'武汉分站',item:'https://www.mfqm888.com/city/wuhan/index.html'},{'@type':'ListItem',position:3,name:d.title,item:'https://www.mfqm888.com/'+p}]};
html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`);write(p,html);
const image='assets/images/news-wuhan-20261116.webp';
const row=`<article class="article-row"><a class="thumb" href="wuhan-handwriting-note-20261116.html"><img src="../../${image}" alt="蓝黑笔与笔记本的材料观察主图" loading="lazy" width="1536" height="1024"></a><div><h3><a href="wuhan-handwriting-note-20261116.html">${d.title}</a></h3><p>${d.lead}</p><div class="meta">2026-11-18　武汉</div></div></article>`;
for(const file of ['city/wuhan/index.html','city/wuhan/news.html']){
 let s=read(file);const start=s.indexOf('<div class="article-list">'),end=s.indexOf('</section>',start);const block=s.slice(start,end);const rows=[...block.matchAll(/<article class="article-row">[\s\S]*?<\/article>/g)];
 const fresh=[rows[0][0],row,...rows.slice(1).map(m=>m[0])];
 const a=start+rows[0].index,b=start+rows.at(-1).index+rows.at(-1)[0].length;
 s=s.slice(0,a)+(file.endsWith('index.html')?fresh.slice(0,5):fresh).join('')+s.slice(b);write(file,s);
}
const entry={title:d.title,url:p,keywords:'武汉 模仿笔迹 模仿签名 模仿签字 笔迹鉴定',description:d.lead,image};
const search=JSON.parse(read('search.json'));if(search.some(x=>x.url===p))throw Error('Duplicate backlog index');search.unshift(entry);write('search.json',JSON.stringify(search,null,2)+'\n');
write('assets/js/main.js',read('assets/js/main.js').replace('const searchIndex=[','const searchIndex=['+JSON.stringify(entry)+','));
write('sitemap.xml',read('sitemap.xml').replace('</urlset>',`<url><loc>https://www.mfqm888.com/${p}</loc><lastmod>2026-11-18</lastmod></url>\n</urlset>`));
console.log('Recovered Wuhan November 16 draft, published with actual November 18 date and independent hero image.');
