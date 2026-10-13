import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const root=path.resolve(import.meta.dirname,'..');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const write=(f,s)=>fs.writeFileSync(path.join(root,f),s);
const date='2026-10-13';
const cities=[
 ['beijing','北京','商务文件中的正式签字与日常签字怎样分开整理','北京商务文件里的签字页，为什么要和连续正文分开？','商务文件往往同时有合同签字、会议批注和连续正文。整理北京站的模仿笔迹、模仿签名与笔迹鉴定资料时，先按书写场景分组更容易比较。'],
 ['chengdu','成都','连续正文的行距变化怎样观察','成都模仿笔迹资料怎样看连续正文的行距变化？','连续正文的行距和字距会随着页面、速度和书写状态变化。成都站从实际页面整理出观察模仿笔迹、模仿签字和笔迹鉴定材料时的几个重点。'],
 ['chongqing','重庆','手机拍摄手写页面怎样避免透视变形','重庆手机拍手写资料，怎样减少页面边缘变形？','手机拍摄时的角度会改变字的大小和行线方向。重庆站整理模仿笔迹、模仿签名图片以及笔迹鉴定资料时，先检查页面是否端正。'],
 ['guangzhou','广州','模仿签名样本怎样按使用场景分类','广州模仿签名样本，正式落款和日常签字要分开吗？','正式落款、日常签字和快速登记的书写节奏不同。广州站说明模仿签名、模仿签字与笔迹鉴定资料怎样按场景排列。'],
 ['hangzhou','杭州','手写字体字稿中的数字和标点怎样补齐','杭州手写字体字稿，为什么数字和标点也要单独整理？','数字、日期和标点在实际文件中出现频率很高。杭州站从模仿笔迹和手写字稿的连续性出发，说明模仿签名、模仿签字及笔迹鉴定材料的整理方法。'],
 ['nanjing','南京','不同时间的手写样本怎样建立对照','南京笔迹鉴定材料跨了几年，怎样建立时间对照？','不同时间形成的纸面材料，不能只按新旧排列。南京站介绍模仿笔迹、模仿签名、模仿签字和笔迹鉴定资料怎样标注时间与来源。'],
 ['shanghai','上海','模仿笔迹资料怎样区分原件与扫描件','上海模仿笔迹资料，原件照片和扫描件怎样分开保存？','原件、扫描件和聊天软件压缩图提供的细节不同。上海站结合模仿笔迹、模仿签名和笔迹鉴定材料，说明文件来源与版本怎样记录。'],
 ['shenzhen','深圳','电子文件中的手写图片怎样保留清晰度','深圳线上提交手写图片，怎样保留模仿签字细节？','电子文件容易经过压缩、裁剪和重复转存。深圳站说明模仿笔迹、模仿签字、模仿签名与笔迹鉴定图片怎样保存尺寸和原始信息。'],
 ['suzhou','苏州','正式落款与快速签字的书写差异','苏州正式落款和快速签字，为什么会出现不同写法？','书写时间和使用场景会影响落款长度、连笔和收笔。苏州站从模仿签名与模仿签字样本出发，补充模仿笔迹和笔迹鉴定中的比较重点。'],
 ['tianjin','天津','多页手写文件怎样编号并保持顺序','天津多页手写文件，怎样编号才不会打乱页面关系？','多页文件同时包含正文、签字和批注时，页码与来源必须对应。天津站说明模仿笔迹、模仿签名、模仿签字和笔迹鉴定资料的编号方法。'],
 ['wuhan','武汉','颜色偏差会怎样影响笔迹图片比较','武汉手写图片颜色变了，会影响笔迹比较吗？','光线、扫描设置和压缩都会改变纸张与墨迹的颜色。武汉站说明模仿笔迹、模仿签名、模仿签字与笔迹鉴定图片应怎样保留拍摄信息。'],
 ['xian','西安','复印件和原始照片怎样一起整理','西安手写材料里有复印件，怎样和原始照片对应？','复印件适合快速查看，原始照片更能保留页面和笔画细节。西安站整理模仿笔迹、模仿签名、模仿签字和笔迹鉴定资料时，建议建立对应编号。']
];
const template=read('article/city/beijing-material-service-news.html');
const keywords='模仿笔迹 模仿签名 模仿签字 笔迹鉴定';
function article([slug,city,topic,title,lead]){
 const url=`article/city/${slug}-editorial-news-20261013.html`, image=`assets/images/city-${slug}-editorial-20261013.jpg`, absolute=`https://www.mfqm888.com/${url}`;
 const description=lead;
 const schema={'@context':'https://schema.org','@type':'Article',headline:title,description,datePublished:date,dateModified:date,mainEntityOfPage:absolute,image:[`https://www.mfqm888.com/${image}`],articleSection:'城市资讯',inLanguage:'zh-CN',author:{'@type':'Organization',name:'模仿笔迹网编辑部'},publisher:{'@type':'Organization',name:'模仿笔迹网'}};
 const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['首页','https://www.mfqm888.com/'],['城市服务','https://www.mfqm888.com/city/'],[`${city}站`,`https://www.mfqm888.com/city/${slug}/`],[title,absolute]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))};
 const head=`<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} - ${city}模仿笔迹网</title><meta name="description" content="${description}"><meta name="keywords" content="${keywords} ${city} ${topic}"><link rel="canonical" href="${absolute}"><meta property="og:type" content="article"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${absolute}"><meta property="og:image" content="https://www.mfqm888.com/${image}"><meta property="og:image:alt" content="${city}手写资料主题配图"><link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css"><script type="application/ld+json">${JSON.stringify(schema)}</script><script type="application/ld+json">${JSON.stringify(crumbs)}</script></head>`;
 const body=`<p class="article-lead">${lead}</p><figure><img class="case-cover article-cover" src="../../${image}" alt="${city}手写资料主题配图" width="1536" height="1024" decoding="async"><figcaption>${city}站手写资料主题配图。</figcaption></figure><h2 id="section-1">先按书写场景整理页面</h2><p>${city}站收到的材料常常同时包含正文、签字页和零散批注。模仿笔迹主要看连续文字中的字形、字距和行距；模仿签名与模仿签字多出现在固定落款或短文字中。将它们混在同一组里，比较时容易把场景造成的变化当成字迹本身的变化。</p><p>整理时可以先按文件名称、形成时间和使用场景建立文件夹，再在每个文件夹内保留完整页面。完整页能够说明纸张、版面和文字之间的关系，局部图用来补充起笔、转折和收笔细节。</p><h2 id="section-2">图片清楚，还要保留来源和版本</h2><p>${topic}时，文件名不要只写“图片1”或“签字”。建议加入日期、材料类别和页码，原始照片、扫描件和压缩后的沟通图分别保存。照片经过裁剪或锐化后，线条粗细和颜色都可能改变，不能和原始文件混为一谈。</p><p>对笔迹鉴定材料来说，来源、时间和载体与画面细节同样重要。某一页来自复印件，某一页来自手机照片，都应在清单中写清楚。发现页码缺失或版本不明时先标注待核对，不要根据页面内容自行补写。</p><h2 id="section-3">比较时看连续特征，不只挑一个字</h2><p>相同的字偶尔写得相似，并不能单独说明整份材料的关系。比较模仿笔迹时，还要看相同结构在不同位置的表现、行尾如何收拢、段落留白是否稳定；比较模仿签名和模仿签字时，则要注意连笔路线、字间连接和正式与快速场景之间的差异。</p><p>笔迹鉴定需要把多个特征放在同一组材料里观察，并结合纸张、工具、角度和清晰度判断。城市站文章提供的是资料准备和阅读参考，真正使用材料时应保留完整原件和形成背景，避免只依据一张缩略图下结论。</p><h2 id="section-4">提交前的四项检查</h2><ul><li>页面方向端正，完整页和局部图可以相互对应。</li><li>文件名包含日期、类别和页码，新增版本不覆盖旧文件。</li><li>模仿笔迹、模仿签名、模仿签字与笔迹鉴定材料分组清楚。</li><li>原件、扫描件、复印件和手机照片的来源已经备注。</li></ul><div class="article-topic-links"><a href="../../city/${slug}/index.html">进入${city}站</a><a href="../../news/city.html">返回城市资讯</a><a href="../../category/mofang-biji.html">模仿笔迹</a><a href="../../category/mofang-qianming.html">模仿签名与模仿签字</a><a href="../../category/biji-jianding.html">笔迹鉴定</a></div>`;
 let html=template.replace(/<head>[\s\S]*?<\/head>/,head).replace(/<div class="breadcrumb">[\s\S]*?<\/div><\/div>/,`<div class="breadcrumb"><div class="container">当前位置：<a href="../../index.html">首页</a> &gt; <a href="../../city/index.html">城市服务</a> &gt; <a href="../../city/${slug}/index.html">${city}站</a> &gt; ${title}</div></div>`).replace(/<header class="article-header">[\s\S]*?<\/header>/,`<header class="article-header"><h1>${title}</h1><div class="meta">发布时间：<time datetime="${date}">${date}</time>　来源：模仿笔迹网编辑部　分类：城市资讯</div></header>`).replace(/<div class="article-content">[\s\S]*?(?=<div class="article-topic-links">)/,`<div class="article-content">${body}`);
 html=html.replace(/<section class="article-toc">[\s\S]*?<\/section>/,`<section class="article-toc"><h2>文章目录</h2><ol><li><a href="#section-1">按场景整理页面</a></li><li><a href="#section-2">来源和版本</a></li><li><a href="#section-3">比较连续特征</a></li><li><a href="#section-4">提交前检查</a></li></ol></section>`).replaceAll('北京站',`${city}站`).replaceAll('北京',city).replaceAll('beijing',slug);
 write(url,html); return {url,image,title,description,slug,city};
}
const rows=cities.map(article);
const row=r=>`<article class="article-row"><a class="thumb" href="../../${r.url}"><img src="../../${r.image}" alt="${r.city}站：${r.title}" loading="lazy" decoding="async" width="1536" height="1024"></a><div><h3><a href="../../${r.url}">${r.title}</a></h3><p>${r.description}</p><div class="meta">${date}　城市资讯</div></div></article>`;
for(const r of rows){let page=read(`city/${r.slug}/index.html`); const marker='<div class="article-list">'; assert(page.includes(marker)); if(!page.includes(r.url))page=page.replace(marker,marker+row(r)); write(`city/${r.slug}/index.html`,page);}
let search=JSON.parse(read('search.json')); for(const r of rows){search=search.filter(x=>x.url!==r.url);search.unshift({title:r.title,url:r.url,keywords:`${keywords} ${r.city}`,description:r.description});} write('search.json',JSON.stringify(search,null,2)+'\n');
let js=read('assets/js/main.js');
for(const r of rows)js=js.replace(new RegExp(`^\\{[^\\n]*${r.url.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\\\$&')}[^\\n]*\\},\\r?\\n`,'m'),'');
js=js.replace('const searchIndex=[','const searchIndex=[\n'+rows.map(r=>JSON.stringify({title:r.title,url:r.url,category:'城市资讯',date,keywords:`${keywords} ${r.city}`,description:r.description,image:r.image})).join(',\n')+',');
new vm.Script(js); write('assets/js/main.js',js);
let sitemap=read('sitemap.xml'); for(const r of rows){const loc=`https://www.mfqm888.com/${r.url}`;if(!sitemap.includes(`<loc>${loc}</loc>`))sitemap=sitemap.replace('</urlset>',`<url><loc>${loc}</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n</urlset>`);} write('sitemap.xml',sitemap);
console.log(`Published ${rows.length} city articles.`);
