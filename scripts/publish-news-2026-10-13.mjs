import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const write=(f,s)=>fs.writeFileSync(path.join(root,f),s);
const date='2026-10-13';
const url='article/news/handwriting-signature-editorial-update-20261013.html';
const image='assets/images/news-editorial-review-20261013.jpg';
const title='模仿笔迹与模仿签名资料完成校订，旧文章保留原链接';
const description='模仿笔迹网完成一轮内容校订，补充模仿签名、模仿签字的场景差异及笔迹鉴定资料说明，原有文章链接继续保留，首页与资讯中心同步更新阅读入口。';
const alt='手写正文与签名样本分开放置，桌面上用红笔标记校订位置';
const keywords='模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹样本 模仿签名资料 签字版本 笔迹鉴定原件';
const body=`<p class="article-lead">10月13日，模仿笔迹网完成一轮文章校订。此次调整涉及主站业务栏目和城市站已有内容，重点处理不同文章中重复的资料说明，并补充模仿笔迹、模仿签名、模仿签字与笔迹鉴定各自需要关注的细节。旧文章仍使用原来的链接，已收藏的页面可以继续打开。</p>
<figure><img class="case-cover article-cover" src="../../${image}" alt="${alt}" width="1536" height="1024" decoding="async"><figcaption>手写正文与签名资料校订示意图，配图为本次新闻独立生成。</figcaption></figure>
<h2 id="section-1">同样是手写材料，文章里的重点不再混在一起</h2>
<p>本次检查发现，部分旧文章虽然讨论的场景不同，正文却反复使用相近的材料整理段落。例如，连续正文的整页照片、正式签名和快速签字的版本区别，以及原件与扫描图的关系，原先有些说明写得过于笼统。读者点开不同标题，容易看到相似的内容，却找不到标题中那个具体问题的回答。</p>
<p>校订后，模仿笔迹栏目中有关完整页面的文章，把行距、留白、落款位置与局部笔画分开说明；模仿签名栏目中的版本文章，则分别讨论正式落款、日常签收和快速登记。涉及模仿签字的段落保留这个名称，不再用其他业务词替换，便于读者按自己的需求查找。</p>
<h2 id="section-2">笔迹鉴定资料说明补回原件与图片的区别</h2>
<p>笔迹鉴定相关文章此次补充了原件、扫描文件和聊天图片之间的差别。页面上看得到一个字，不等于图片已经保留全部细节：聊天软件可能压缩照片，扫描时可能改变颜色，局部裁剪也可能丢掉日期和上下文。文章因此把这些情况分别说明，避免读者把几种材料当作同一份文件。</p>
<p>有关材料的形成时间、来源和版本，仍应以手头真实记录为准。文章提供的是整理与阅读参考；缺少来源说明的地方，不会因为照片清晰就自动补出答案。这也是本轮校订在笔迹鉴定内容中着重补充的一点。</p>
<h2 id="section-3">原链接继续使用，新入口在首页和资讯中心</h2>
<p>此次更新没有给旧文章换地址。主站和城市站仍沿用原有栏目结构，读者可以从模仿笔迹、模仿签名或笔迹鉴定栏目进入，再查看与具体材料有关的文章。网站同时校正了栏目文章数量，并检查站内搜索与内容索引，让标题、摘要和页面地址能够对应。</p>
<p>本条更新归入资讯中心的“服务动态”。首页最新文章区域、服务动态列表和站内搜索同步收录这条新闻。后续已有文章如需补充，将继续在原页面修改正文并标明更新时间，避免同一个问题拆成多篇内容相近的文章。</p>`;
const existing=read('article/news/full-page-detail-image-update.html');
if(fs.existsSync(path.join(root,url)))throw new Error('Article already published; do not overwrite.');
assert(fs.existsSync(path.join(root,image)),'New optimized image must exist before publishing.');
const absolute='https://www.mfqm888.com/'+url;
const articleSchema={'@context':'https://schema.org','@type':'NewsArticle',headline:title,description,datePublished:date,dateModified:date,mainEntityOfPage:absolute,image:['https://www.mfqm888.com/'+image],inLanguage:'zh-CN',articleSection:'服务动态',author:{'@type':'Organization',name:'模仿笔迹网编辑部'},publisher:{'@type':'Organization',name:'模仿笔迹网'}};
const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['首页','https://www.mfqm888.com/'],['资讯中心','https://www.mfqm888.com/news/'],['服务动态','https://www.mfqm888.com/news/service.html'],[title,absolute]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))};
const head=`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - 模仿笔迹网</title><meta name="description" content="${description}"><link rel="canonical" href="${absolute}"><meta property="og:type" content="article"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${absolute}"><meta property="og:image" content="https://www.mfqm888.com/${image}"><meta property="og:image:alt" content="${alt}"><meta property="og:image:width" content="1536"><meta property="og:image:height" content="1024"><meta property="article:published_time" content="${date}"><link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css"><script type="application/ld+json">${JSON.stringify(articleSchema)}</script><script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;
let html=existing.replace(/<head>[\s\S]*?<\/head>/,head)
 .replace(/<div class="breadcrumb">[\s\S]*?<\/div><\/div>/,`<div class="breadcrumb"><div class="container">当前位置：<a href="../../index.html">首页</a> &gt; <a href="../../news/index.html">资讯中心</a> &gt; <a href="../../news/service.html">服务动态</a> &gt; ${title}</div></div>`)
 .replace(/<header class="article-header">[\s\S]*?<\/header>/,`<header class="article-header"><h1>${title}</h1><div class="meta">发布时间：<time datetime="${date}">${date}</time>　来源：模仿笔迹网编辑部　栏目：服务动态</div></header>`)
 .replace(/<div class="article-content">[\s\S]*?(?=<div class="article-topic-links">)/,`<div class="article-content">${body}`)
 .replace(/<section class="article-toc">[\s\S]*?<\/section>/,'<section class="article-toc"><h2>文章目录</h2><ol><li><a href="#section-1">分别说明不同手写材料</a></li><li><a href="#section-2">原件与图片的区别</a></li><li><a href="#section-3">阅读入口与原链接</a></li></ol></section>')
 .replace('<a href="../../news/index.html">资讯中心</a><a href="../../contact/', '<a class="active" href="../../news/index.html">资讯中心</a><a href="../../city/index.html">城市服务</a><a href="../../contact/');
write(url,html);
function row(prefix){return `<article class="article-row"><a class="thumb" href="${prefix}${url}"><img src="${prefix}${image}" alt="${alt}" loading="lazy" decoding="async" width="1536" height="1024"></a><div><h3><a href="${prefix}${url}">${title}</a></h3><p>${description}</p><div class="meta">${date}　分类：服务动态</div></div></article>`;}
const rowPattern=/<article class="article-row">[\s\S]*?<\/article>/g;
const first=read('news/index.html'),second=read('news/page-2.html');
const oldRows=[...first.matchAll(rowPattern),...second.matchAll(rowPattern)].map(x=>x[0]);
const allRows=[row('../'),...oldRows];
assert(allRows.length<=24,'News needs a third pagination page.');
const listReplace=(s,rows)=>s.replace(/<article class="article-row">[\s\S]*?(?=<nav class="pagination")/,rows.join('')).replace(/共 \d+ 篇/g,`共 ${allRows.length} 篇`);
write('news/index.html',listReplace(first,allRows.slice(0,12)));
write('news/page-2.html',listReplace(second,allRows.slice(12)));
let service=read('news/service.html');
const serviceCount=[...service.matchAll(rowPattern)].length+1;
service=service.replace('<article class="article-row">',row('../')+'<article class="article-row">').replace(/共 \d+ 篇/g,`共 ${serviceCount} 篇`);
write('news/service.html',service);
let home=read('index.html');
const homeMarker=home.indexOf('最新文章资讯');
assert(homeMarker>=0);
const homeList=home.indexOf('<div class="article-list">',homeMarker);
assert(homeList>=0);
home=home.slice(0,homeList)+home.slice(homeList).replace('<div class="article-list">','<div class="article-list">'+row(''));
write('index.html',home);
const search=JSON.parse(read('search.json'));
search.unshift({title,url,keywords,description});
write('search.json',JSON.stringify(search,null,2)+'\n');
let js=read('assets/js/main.js');
assert(js.includes('const searchIndex=['));
js=js.replace('const searchIndex=[','const searchIndex=[\n'+JSON.stringify({title,url,category:'服务动态',date,keywords,description,image})+',');
new vm.Script(js);
write('assets/js/main.js',js);
let sitemap=read('sitemap.xml');
sitemap=sitemap.replace('</urlset>',`<url><loc>${absolute}</loc><lastmod>${date}</lastmod></url>\n</urlset>`);
for(const loc of ['https://www.mfqm888.com/','https://www.mfqm888.com/news/','https://www.mfqm888.com/news/index.html','https://www.mfqm888.com/news/page-2.html','https://www.mfqm888.com/news/service.html']){
 const escaped=loc.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 sitemap=sitemap.replace(new RegExp(`(<loc>${escaped}</loc>[\\s\\S]*?<lastmod>)[^<]+`),`$1${date}`);
}
write('sitemap.xml',sitemap);
console.log(`Published locally: ${url}; ${allRows.length} news rows; ${serviceCount} service updates; ${search.length} search entries.`);
