import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const write=(f,s)=>fs.writeFileSync(path.join(root,f),s);
const date='2026-10-13';
const url='article/news/handwriting-signature-editorial-update-20261013.html';
const image='assets/images/handwriting-rhythm-comparison-20261013.jpg';
const title='模仿笔迹看着像，为什么读起来仍有差别？';
const description='模仿笔迹的相似感不只来自单字外形，字距、行距和连续书写也会影响整体观感。结合模仿签名、模仿签字的场景差异，讨论笔迹鉴定中自然变化与稳定特征的关系。';
const alt='笔记本上的连续手写文字与单独摆放的签名练习纸';
const keywords='模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹样本 模仿签名资料 签字版本 笔迹鉴定原件';
const body=`<p class="article-lead">看一张手写纸，人的第一反应往往是“这个字很像”。但把目光从一个字移到整行，再读完整段话，感觉又可能变了。讨论模仿笔迹时，这种差别很容易被忽略：单字的轮廓只是页面的一部分，字与字怎样相邻、句子在哪里停顿，同样参与了整体观感。</p>
<figure><img class="case-cover article-cover" src="../../${image}" alt="${alt}" width="1536" height="1024" decoding="async"><figcaption>连续正文与短签名呈现的信息不同。图为手写笔迹主题示意配图。</figcaption></figure>
<h2 id="section-1">一个字的相似，解释不了整段文字</h2>
<p>例如同一句“今天下午把资料送过去”，有人写到“资料”时字距略紧，末尾几个字自然放开；也有人整行间隔比较均匀。这些区别不一定醒目，却会让一段字显得紧凑、舒展或零散。把单字逐个裁出来，原来的关系就看不到了。</p>
<p>模仿笔迹之所以不能只用几个相似的字来评价，是因为连续正文还包含行的走向、字的大小变化、标点位置和段落留白。同一人在不同纸张上书写，也会受版面限制影响。窄栏里的字比便笺上的字挤一些，未必意味着书写习惯发生了根本变化。</p>
<h2 id="section-2">模仿签名与模仿签字，短短几个字也有场景差异</h2>
<p>模仿签名和模仿签字在日常表达中经常混用，实际讨论时仍要看具体材料。有人在正式落款时把姓名写全，在日常登记中写得简短；同一个名字，可能出现字形展开程度、连笔多少和末笔长度的差异。短文字提供的信息本来就少，脱离场景比较，容易把正常变化误当成异常。</p>
<p>签名也不总是越整齐越能代表本人习惯。认真写下的落款与匆忙留下的签字，视觉效果可能相差明显。只凭其中一张图片去概括所有签写方式，得到的印象往往偏窄。这里需要分清的是书写条件，而不是给每个版本简单排一个“像”或“不像”的顺序。</p>
<h2 id="section-3">笔迹鉴定关注的是特征组合</h2>
<p>“看着像”是日常观感，笔迹鉴定则需要比较更具体的书写特征，并结合材料条件作判断。字形结构、笔画之间的关系、布局习惯以及书写动作留下的线条表现，都可能成为观察内容。某个字相似，或者某一笔不同，都不足以单独说明整份材料的书写人是否相同。</p>
<p>同一人的笔迹有变化，不同人的笔迹也可能有相似之处。因此，比较时既要看差异出现在哪里，也要看它是不是在相近条件下反复出现。笔迹鉴定中对自然变化与稳定习惯的区分，不能简化成“有连笔就自然”或“有停顿就是模仿”。仅靠网页上的缩略图，更难支持这样的结论。</p>
<h2 id="section-4">图片放大以后，哪些变化其实来自拍摄</h2>
<p>照片斜着拍，纸张一端的字会比另一端显得小；镜头离得太近，页面边缘可能变形；锐化和压缩又会改变细笔画的观感。两张图片并排时，先确认比例、方向和清晰程度是否接近，才能讨论纸面上原本存在的区别。</p>
<p>原件与照片提供的信息也不完全相同。墨色深浅可能受光线影响，不能直接当成用笔力度；屏幕上的笔画宽度，还会受到分辨率和缩放影响。这些因素在模仿笔迹、模仿签名或模仿签字的图片比较中都很常见，也是理解笔迹鉴定材料局限时绕不开的问题。</p>
<p>一页字的特点，常常藏在不那么抢眼的地方：行尾如何收拢，相同的字是否每次都一样，正文与落款之间留了多少空间。把它们放回具体的书写情境，比孤立地挑出一个“最像的字”，更容易理解整页笔迹为什么会给人不同的感觉。</p>`;
const existing=read('article/news/full-page-detail-image-update.html');
assert(fs.existsSync(path.join(root,image)),'New optimized image must exist before publishing.');
const absolute='https://www.mfqm888.com/'+url;
const articleSchema={'@context':'https://schema.org','@type':'Article',headline:title,description,datePublished:date,dateModified:date,mainEntityOfPage:absolute,image:['https://www.mfqm888.com/'+image],inLanguage:'zh-CN',articleSection:'专题内容',author:{'@type':'Organization',name:'模仿笔迹网编辑部'},publisher:{'@type':'Organization',name:'模仿笔迹网'}};
const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['首页','https://www.mfqm888.com/'],['资讯中心','https://www.mfqm888.com/news/'],['专题内容','https://www.mfqm888.com/news/topics.html'],[title,absolute]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))};
const head=`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - 模仿笔迹网</title><meta name="description" content="${description}"><link rel="canonical" href="${absolute}"><meta property="og:type" content="article"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${absolute}"><meta property="og:image" content="https://www.mfqm888.com/${image}"><meta property="og:image:alt" content="${alt}"><meta property="og:image:width" content="1536"><meta property="og:image:height" content="1024"><meta property="article:published_time" content="${date}"><link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css"><script type="application/ld+json">${JSON.stringify(articleSchema)}</script><script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;
let html=existing.replace(/<head>[\s\S]*?<\/head>/,head)
 .replace(/<div class="breadcrumb">[\s\S]*?<\/div><\/div>/,`<div class="breadcrumb"><div class="container">当前位置：<a href="../../index.html">首页</a> &gt; <a href="../../news/index.html">资讯中心</a> &gt; <a href="../../news/service.html">服务动态</a> &gt; ${title}</div></div>`)
 .replace(/<header class="article-header">[\s\S]*?<\/header>/,`<header class="article-header"><h1>${title}</h1><div class="meta">发布时间：<time datetime="${date}">${date}</time>　来源：模仿笔迹网编辑部　栏目：服务动态</div></header>`)
 .replace(/<div class="article-content">[\s\S]*?(?=<div class="article-topic-links">)/,`<div class="article-content">${body}`)
 .replace(/<section class="article-toc">[\s\S]*?<\/section>/,'<section class="article-toc"><h2>文章目录</h2><ol><li><a href="#section-1">单字与连续正文</a></li><li><a href="#section-2">签名与签字的场景</a></li><li><a href="#section-3">笔迹鉴定的特征组合</a></li><li><a href="#section-4">拍摄带来的视觉差异</a></li></ol></section>')
 .replace('<a href="../../news/index.html">资讯中心</a><a href="../../contact/', '<a class="active" href="../../news/index.html">资讯中心</a><a href="../../city/index.html">城市服务</a><a href="../../contact/');
html=html.replaceAll('../../news/service.html','../../news/topics.html').replaceAll('服务动态','专题内容');
write(url,html);
function row(prefix){return `<article class="article-row"><a class="thumb" href="${prefix}${url}"><img src="${prefix}${image}" alt="${alt}" loading="lazy" decoding="async" width="1536" height="1024"></a><div><h3><a href="${prefix}${url}">${title}</a></h3><p>${description}</p><div class="meta">${date}　分类：服务动态</div></div></article>`;}
const rowPattern=/<article class="article-row">[\s\S]*?<\/article>/g;
const first=read('news/index.html'),second=read('news/page-2.html');
const oldRows=[...first.matchAll(rowPattern),...second.matchAll(rowPattern)].map(x=>x[0]).filter(x=>!x.includes(url));
const newRow=prefix=>row(prefix).replace('分类：服务动态','分类：专题内容');
const allRows=[newRow('../'),...oldRows];
assert(allRows.length<=24,'News needs a third pagination page.');
const listReplace=(s,rows)=>s.replace(/<article class="article-row">[\s\S]*?(?=<nav class="pagination")/,rows.join('')).replace(/共 \d+ 篇/g,`共 ${allRows.length} 篇`);
write('news/index.html',listReplace(first,allRows.slice(0,12)));
write('news/page-2.html',listReplace(second,allRows.slice(12)));
let service=read('news/service.html');
service=service.replace(rowPattern,r=>r.includes(url)?'':r);
const serviceCount=[...service.matchAll(rowPattern)].length;
service=service.replace(/共 \d+ 篇/g,`共 ${serviceCount} 篇`);
write('news/service.html',service);
let topics=read('news/topics.html').replace(rowPattern,r=>r.includes(url)?'':r);
const topicsCount=[...topics.matchAll(rowPattern)].length+1;
topics=topics.replace('<article class="article-row">',newRow('../')+'<article class="article-row">').replace(/共 \d+ 篇/g,`共 ${topicsCount} 篇`);
write('news/topics.html',topics);
let home=read('index.html');
home=home.replace(rowPattern,r=>r.includes(url)?'':r);
const homeMarker=home.indexOf('最新文章资讯');
assert(homeMarker>=0);
const homeList=home.indexOf('<div class="article-list">',homeMarker);
assert(homeList>=0);
home=home.slice(0,homeList)+home.slice(homeList).replace('<div class="article-list">','<div class="article-list">'+newRow(''));
write('index.html',home);
const search=JSON.parse(read('search.json')).filter(r=>r.url!==url);
search.unshift({title,url,keywords,description});
write('search.json',JSON.stringify(search,null,2)+'\n');
let js=read('assets/js/main.js');
assert(js.includes('const searchIndex=['));
js=js.replace(/^\{[^\n]*handwriting-signature-editorial-update-20261013[^\n]*\},\r?\n/m,'');
js=js.replace('const searchIndex=[','const searchIndex=[\n'+JSON.stringify({title,url,category:'专题内容',date,keywords,description,image})+',');
new vm.Script(js);
write('assets/js/main.js',js);
let sitemap=read('sitemap.xml');
if(!sitemap.includes(`<loc>${absolute}</loc>`))sitemap=sitemap.replace('</urlset>',`<url><loc>${absolute}</loc><lastmod>${date}</lastmod></url>\n</urlset>`);
for(const loc of ['https://www.mfqm888.com/','https://www.mfqm888.com/news/','https://www.mfqm888.com/news/index.html','https://www.mfqm888.com/news/page-2.html','https://www.mfqm888.com/news/service.html']){
 const escaped=loc.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 sitemap=sitemap.replace(new RegExp(`(<loc>${escaped}</loc>[\\s\\S]*?<lastmod>)[^<]+`),`$1${date}`);
}
write('sitemap.xml',sitemap);
console.log(`Published locally: ${url}; ${allRows.length} news rows; ${serviceCount} service updates; ${search.length} search entries.`);
