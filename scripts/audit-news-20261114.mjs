import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const data=JSON.parse(read('scripts/news-20261114.json'));
const search=JSON.parse(read('search.json'));
const allImages=fs.readdirSync(path.join(root,'assets/images')).filter(x=>/\.(png|jpg|jpeg|webp)$/i.test(x));
const hashes=new Map();
for(const name of allImages){const h=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'assets/images',name))).digest('hex');hashes.set(h,[...(hashes.get(h)||[]),name]);}
if(data.length!==13||new Set(data.map(x=>x.slug)).size!==13)throw Error('Expected 13 distinct sites');
const titles=new Set(),paragraphs=new Set();
for(const d of data){
 const p=d.slug==='main'?'article/news/handwriting-rhythm-20261114.html':`city/${d.slug}/${d.slug}-handwriting-note-20261114.html`;
 const html=read(p), image=`news-${d.slug==='main'?'handwriting-comparison':d.slug}-20261114.webp`;
 if(titles.has(d.title))throw Error('Duplicate title');titles.add(d.title);
 for(const [,text] of d.sections){if(paragraphs.has(text))throw Error('Duplicate paragraph');paragraphs.add(text);}
 const body=d.lead+d.sections.flat().join('');
 for(const k of ['模仿笔迹','模仿签名','模仿签字','笔迹鉴定'])if(!body.includes(k))throw Error(`${d.slug}: missing ${k}`);
 if(body.length<400)throw Error(`${d.slug}: short body`);
 for(const token of ['BreadcrumbList','datePublished":"2026-11-14','rel="canonical"',image])if(!html.includes(token))throw Error(`${p}: missing ${token}`);
 if(search.filter(x=>x.url===p).length!==1||!read('sitemap.xml').includes('https://www.mfqm888.com/'+p))throw Error(`${p}: index missing or duplicated`);
 const h=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'assets/images',image))).digest('hex');
 if(hashes.get(h).length!==1)throw Error(`Reused image: ${image}`);
 const home=d.city?`city/${d.slug}/index.html`:'index.html';
 if(!read(home).includes(path.basename(p)))throw Error(`${p}: not linked from homepage`);
 const count=[...read(home).matchAll(/<article class="article-row">/g)].length;
 if(count!==(d.city?5:6))throw Error(`${home}: homepage row count ${count}`);
}
const pages=['news/index.html','news/page-2.html','news/page-3.html'];
const links=pages.flatMap(p=>[...read(p).matchAll(/<article class="article-row">[\s\S]*?<\/article>/g)].map(x=>x[0].match(/href="([^"]+)"/)[1]));
if(links.length!==27||new Set(links).size!==27)throw Error('Archive lost or duplicated an article');
console.log('PASS: 13 new articles, 13 unique images, keyword coverage, homepage limits, metadata and 27 archived news entries.');
