import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const date = '2026-10-19';
const base = 'https://www.mfqm888.com/';
const data = [
  {slug:'main', city:'', title:'一页字迹里的停顿与连写：模仿笔迹不能只看单个字', lead:'同一个字写得相似，整页文字却仍可能显得生硬。原因常在停顿、连写和行内节奏。', sections:[
    ['单字像，不代表整段自然','把一个字放大，容易注意到笔画轮廓；把整页缩回正常阅读距离，字间留白、行尾收束和重复字的变化才会浮现。模仿笔迹涉及连续书写，逐字描画往往会打断原有节奏。'],
    ['从签名回到正文','模仿签名通常是一组熟悉的固定文字，速度和连笔相对集中。模仿签字若落在表格或便条上，还会受栏位宽度、纸张角度影响。不能拿一张单独的签名图，推断整段正文的写法。'],
    ['比较时先保留整页','做笔迹鉴定资料整理时，局部图适合观察起收笔，整页图能交代书写位置和行距。两种图片一起保存，并标明形成时间与来源，后续比较才不会把裁切造成的错觉当成书写特征。']
  ]},
  {slug:'beijing',city:'北京',title:'北京商务文件中的手写批注，先按时间排还是按文件排？',lead:'会议纪要、审批页和随手批注混在一起时，整理顺序会影响后续阅读。',sections:[
    ['先还原文件关系','一张批注页往往属于某份完整文件。北京办公室常见的会议材料、签批表和便笺，最好先按原文件归组，保留页码和上下文；只截取签字局部，容易丢掉落款位置。'],
    ['再建立时间顺序','同一人的模仿签字参考材料可能横跨几年。按日期排列后，正式签名、快速批注和日常笔记的变化会更清楚。日期不明的页面单独放置，不要凭字形猜测年份。'],
    ['两类需求别混用样本','模仿笔迹需要连续文字观察字距与行距，模仿签名更关心固定姓名的结构。笔迹鉴定则要核对待比较材料与自然样本的来源。分类完成后再拍整页和局部，沟通时会少很多反复。']
  ]},
  {slug:'chengdu',city:'成都',title:'一本文字练习簿，能看出成都模仿笔迹所需的书写习惯吗',lead:'练习簿页数多，却未必每页都适合作为自然书写样本。',sections:[
    ['先看是否连续自然','反复临写同一句话的练习页，通常更能反映练习目标，而非平时的行文习惯。挑选成都模仿笔迹参考材料时，可优先找写给自己看的笔记、日程记录或较长的手写段落。'],
    ['重复字要跨页观察','一个字在同一页出现几次，形态略有不同很正常。把不同日期的页面放在一起，观察稳定的笔画安排与自然波动，比只挑最像的一处有用。模仿签字也有正式和快速写法，不宜混为一种。'],
    ['扫描不要抹掉细节','手机美化会压平淡墨和细笔画。保留未经滤镜处理的原图，再附一张正面拍摄的完整页。需要笔迹鉴定时，材料形成时间与纸张来源也应写清楚。']
  ]},
  {slug:'chongqing',city:'重庆',title:'扫描太黑还是太浅？重庆手写材料对比中的灰度问题',lead:'同一张手写纸换两种扫描设置，笔画的粗细可能看起来不同。',sections:[
    ['对比先看原始图','重庆模仿笔迹资料常经手机拍照、聊天软件转发，再变成打印件。每一步都可能损失浅色线条。开始比较之前，先找最接近原件的照片或扫描文件。'],
    ['灰度影响哪些细节','过高对比度会把笔锋边缘变硬，过低又让细小的收笔消失。模仿签名、模仿签字若只剩二值黑白图，连笔处容易粘成一块。可以保留彩色原图作为对照，再另做便于阅读的副本。'],
    ['记录图像版本','笔迹鉴定需要知道哪张是原件照片、哪张是复印扫描。给文件标注来源与处理方式，比反复调滤镜更重要；不同版本不要以同一个文件名互相覆盖。']
  ]},
  {slug:'guangzhou',city:'广州',title:'广州模仿签名参考图为何要留几次自然签写',lead:'一张漂亮的签名样本并不能代表所有落款场景。',sections:[
    ['签写速度会改变形态','在合同页郑重签名，与在收件单上快速模仿签字的动作不同。广州模仿签名资料若只提供一张精心挑选的样本，容易忽略这种速度差异。'],
    ['选样本看稳定部分','把多次自然签写按日期排开，比较姓名各字的相对大小、连笔方向与末笔位置。偶尔拉长的一笔未必是固定习惯，反复出现的结构才值得重点观察。'],
    ['保留所在页面','签名栏宽窄、纸面角度和笔具都影响结果。整页图解释环境，局部图展示细节。模仿笔迹正文与笔迹鉴定对比也同样需要上下文，不能只看一张孤立的裁切图。']
  ]},
  {slug:'hangzhou',city:'杭州',title:'手写字转成字体前，杭州样本里的标点和数字别漏掉',lead:'一套看起来完整的汉字字稿，实际排版时可能卡在数字和标点。',sections:[
    ['先列真实使用场景','杭州个人手写字体项目若主要用于短文、贺卡或日记，数字、日期、括号和常用标点的使用频率很高。采集前先从真实文本列出缺字清单，比盲目补录整页更省时间。'],
    ['区分字体与模仿笔迹','字体文件把单字拼接到新文本里，模仿笔迹则要处理连续书写时的字距、行距和自然变化。模仿签名、模仿签字的固定落款又是另一种场景，不能直接用字库替代。'],
    ['补字也要同一条件','补录标点时尽量保持原来的笔具、纸张和拍摄比例。笔迹鉴定比较的材料应另外保存来源信息，避免把后补练习字误当成旧时自然样本。']
  ]},
  {slug:'nanjing',city:'南京',title:'南京笔迹鉴定资料跨了几年，哪些差异先别急着下结论',lead:'时间跨度大的材料，不能把每一处形态变化都当成异常。',sections:[
    ['先把时期分开','学生时期的课堂笔记、工作后的会议记录、近年的手机签收，书写条件差别很大。南京笔迹鉴定资料整理时，先按形成时间和使用场景归组。'],
    ['看组合，不看孤例','同一个字的高度变了，可能是格线、笔具或速度所致。更值得连续观察的是起收笔、结构安排、字间连接与整页布局是否共同出现相近规律。'],
    ['为不同用途另建清单','模仿笔迹、模仿签名和模仿签字需要的目标内容不同，不能把所有纸张简单塞进一个文件夹。待比较文件、同期自然材料和补充材料分别编号，后续沟通更清楚。']
  ]},
  {slug:'shanghai',city:'上海',title:'上海手写长文和落款签名，为什么不宜用同一张样本说明',lead:'正文写法与落款动作常常相连，却不是一回事。',sections:[
    ['阅读距离不同','一段长文首先呈现行距、段落留白和字形变化；落款签名则以几个字的组合与连贯动作为主。上海模仿笔迹样本若只有签名近照，难以判断整页文字的节奏。'],
    ['同一人也有不同写法','正式信件末尾可能写全名，内部便条上却只写简写。模仿签名与模仿签字应区分使用场景，别把两种写法拼成一套不存在的样本。'],
    ['分别保存文件','拍长文时保留完整页和几处局部；拍签名时连同所在纸面、日期一起留存。笔迹鉴定的对比材料还应记录来源，避免后来无法确定哪个版本最接近原件。']
  ]},
  {slug:'shenzhen',city:'深圳',title:'深圳线上提交手写文件，手机原图和压缩预览怎样分开',lead:'聊天窗口里的图片看着清楚，下载后未必仍有足够细节。',sections:[
    ['原图单独存放','深圳模仿笔迹沟通常先用手机拍材料。拍摄前把纸张放平、避开阴影，保留相机原文件；在聊天软件里发送的缩略预览可用于定位，不应覆盖原图。'],
    ['整页与细节各有用途','整页显示栏位、页边和正文分布，近照用于观察连笔与笔锋。模仿签名、模仿签字样本尤其需要说明签署位置，不要只留下裁切后的姓名。'],
    ['版本名说清来源','若后续要做笔迹鉴定资料整理，文件名写明拍摄日期、页码和是否为原件、复印件或扫描件。压缩版可加“预览”标记，防止和原始材料混淆。']
  ]},
  {slug:'suzhou',city:'苏州',title:'苏州商务书信的落款，要连正文一起看吗',lead:'只截一张落款图片，常会错过它与页面的比例关系。',sections:[
    ['先确认书信版式','苏州商务往来材料有手写整页，也有打印正文后手写落款。两种文件的书写范围不同。需要模仿笔迹时应先看正文是否确为手写，而不是仅凭落款判断。'],
    ['落款受空间影响','签名旁若有日期、职位或盖章位置，模仿签名与模仿签字的长度和倾斜可能随空间调整。保留完整页面，再补拍清晰落款，能说明这种限制。'],
    ['对比材料注明场景','日常便笺与正式信函不宜直接当成同条件样本。笔迹鉴定资料应写明形成时间、书写工具及文件用途；不确定的项目如实标为未知。']
  ]},
  {slug:'tianjin',city:'天津',title:'蓝笔黑笔写出的天津手写样本，能放在一起比较吗',lead:'笔色不同不等于写法不同，但拍照方式也会改变我们看到的线条。',sections:[
    ['先分开记录笔具','天津模仿笔迹资料里，圆珠笔与签字笔的出墨和摩擦感并不一样。整理时记录笔具、纸张和日期，先比较字形结构，再看线条粗细。'],
    ['别用颜色代替判断','模仿签名或模仿签字的整体倾斜、字间连接，不会因为蓝黑颜色差异就自动失去参考价值。反过来，同色墨迹也不保证书写条件一致。'],
    ['保存未经处理的照片','笔迹鉴定比较照片时，白平衡和压缩会影响颜色。每页留一份原始图，必要时再制作便于阅读的副本，副本和原图使用不同文件名。']
  ]},
  {slug:'wuhan',city:'武汉',title:'武汉连续手写记录里，行距忽宽忽窄说明什么',lead:'看似不整齐的行距，有时只是自然书写推进到页尾后的调整。',sections:[
    ['把变化放回整页','武汉模仿笔迹样本若只看中间一行，很难知道前后文字是否为了避开页边、表格或涂改而收紧。完整页能交代空间约束。'],
    ['观察节奏而非找完美行','自然书写会有停顿、连写和反复修改。对比模仿签名、模仿签字时，也应看多次签写的共同结构，不要把某次特别流畅的结果当成唯一标准。'],
    ['材料先排除图像干扰','笔迹鉴定资料中，透视拍摄会把一侧行距拉宽。拍照时保持镜头平行纸面，补一张整页正面图；无法重拍的资料应标注拍摄条件。']
  ]},
  {slug:'xian',city:'西安',title:'西安资料只有复印件时，原始手写照片该怎么对应',lead:'复印件便于传阅，却常常丢失纸张质感和浅色笔画。',sections:[
    ['先找对应页','西安笔迹鉴定资料若同时有复印件和手机原图，可以按文件名称、页码、边缘折痕对应。不要因为局部字像就认定两张图来自同一页。'],
    ['说明每份材料的身份','原件照片、复印扫描和裁切近照分开命名。模仿笔迹长文需要整页布局，模仿签名、模仿签字则要同时看到落款位置和笔画细节。'],
    ['缺失信息留空','找不到拍摄日期或原件来源时，直接标注“未核实”。把不确定的事情写成确定事实，会影响后续比较；补到新材料后再更新对应清单。']
  ]}
];

const read = p => fs.readFileSync(path.join(root,p),'utf8');
const write = (p,s) => fs.writeFileSync(path.join(root,p),s,'utf8');
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const articlePath = d => d.slug === 'main' ? `article/news/handwriting-rhythm-${date.replaceAll('-','')}.html` : `city/${d.slug}/${d.slug}-handwriting-note-${date.replaceAll('-','')}.html`;
const imgPath = d => `assets/images/news-${d.slug === 'main' ? 'handwriting-comparison' : d.slug}-${date.replaceAll('-','')}.png`;
const rel = d => d.slug === 'main' ? '../../' : '../../';
function row(d,prefix) {
  const href = d.slug === 'main' ? `${prefix}${articlePath(d)}` : `${d.slug}-handwriting-note-${date.replaceAll('-','')}.html`;
  return `<article class="article-row"><a class="thumb" href="${href}"><img src="${prefix}${imgPath(d)}" alt="${esc(d.title)}的手写材料主图" loading="lazy" decoding="async" width="1536" height="1024"></a><div><h3><a href="${href}">${esc(d.title)}</a></h3><p>${esc(d.lead)}</p><div class="meta">${date}　${d.city || '专题内容'}</div></div></article>`;
}
function replaceRows(file,d,prefix,max) {
  let s=read(file);
  const start=s.indexOf('<div class="article-list">');
  if(start<0) throw Error(`article-list missing: ${file}`);
  const sectionEnd=s.indexOf('</section>',start);
  if(sectionEnd<0) throw Error(`article-list end missing: ${file}`);
  const block=s.slice(start,sectionEnd);
  const old=[...block.matchAll(/<article class="article-row">[\s\S]*?<\/article>/g)].map(x=>x[0]);
  if(!old.length) throw Error(`No rows: ${file}`);
  const fresh=[row(d,prefix),...old.filter(x=>!x.includes(d.slug==='main'?articlePath(d):`${d.slug}-handwriting-note-${date.replaceAll('-','')}.html`))];
  const first=s.indexOf(old[0],start), last=start+block.lastIndexOf(old.at(-1))+old.at(-1).length;
  s=s.slice(0,first)+(max?fresh.slice(0,max):fresh).join('')+s.slice(last);
  write(file,s);
}
function create(d){
  const p=articlePath(d),img=imgPath(d),url=base+p,city=d.city;
  if(fs.existsSync(path.join(root,p))) return;
  if(!fs.existsSync(path.join(root,img))) throw Error(`Image missing: ${img}`);
  const template=d.slug==='main'?'article/news/handwriting-signature-editorial-update-20261013.html':`city/${d.slug}/${fs.readdirSync(path.join(root,'city',d.slug)).find(x=>x.endsWith('-20261017.html'))}`;
  const sample=read(template);
  const navStart=sample.indexOf('<div class="topbar">')>=0?sample.indexOf('<div class="topbar">'):sample.indexOf('<header class="main-header">');
  const navEnd=sample.indexOf('<main ',navStart);
  const footer=sample.slice(sample.indexOf('<footer class="footer">'));
  if(navStart<0||navEnd<0||!footer) throw Error(`Template structure missing: ${p}`);
  let nav=sample.slice(navStart,navEnd);
  const crumb=d.slug==='main'?`<a href="../../index.html">首页</a> &gt; <a href="../../news/index.html">资讯中心</a>`:`<a href="../../index.html">首页</a> &gt; <a href="index.html">${city}分站</a>`;
  nav=nav.replace(/<div class="breadcrumb">[\s\S]*?<\/div><\/div>/,`<div class="breadcrumb"><div class="container">当前位置：${crumb} &gt; ${esc(d.title)}</div></div>`);
  const description=d.lead+`围绕${city}模仿笔迹、模仿签名、模仿签字与笔迹鉴定资料展开。`;
  const sections=d.sections.map(([h,t],i)=>`<h2 id="section-${i+1}">${esc(h)}</h2><p>${esc(t)}</p>`).join('');
  const jsonld={ '@context':'https://schema.org','@type':'Article',headline:d.title,description,datePublished:date,dateModified:date,author:{'@type':'Organization',name:'模仿笔迹网编辑部'},publisher:{'@type':'Organization',name:'模仿笔迹网'},image:base+img,mainEntityOfPage:url};
  const related=d.slug==='main'?`<a href="../../news/index.html">更多资讯</a>`:`<a href="news.html">${city}更多文章</a>`;
  const html=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(d.title)} - 模仿笔迹网</title><meta name="description" content="${esc(description)}"><meta name="keywords" content="${city}模仿笔迹,${city}模仿签名,${city}模仿签字,${city}笔迹鉴定"><link rel="canonical" href="${url}"><meta property="og:type" content="article"><meta property="og:title" content="${esc(d.title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${base+img}"><link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css"><script type="application/ld+json">${JSON.stringify(jsonld)}</script></head><body>${nav}<main class="container article-layout article-detail-layout"><article class="article-body"><header class="article-header"><h1>${esc(d.title)}</h1><div class="meta">发布时间：${date}　来源：模仿笔迹网编辑部</div></header><div class="article-content"><p>${esc(d.lead)}</p><figure><img src="../../${img}" alt="${esc(d.title)}的手写材料主图" width="1536" height="1024"><figcaption>${esc(d.title)}</figcaption></figure>${sections}<div class="related"><h2>相关阅读</h2><p>${related}</p></div></div></article><aside class="article-sidebar"><section class="article-toc"><h2>文章目录</h2><ol>${d.sections.map(([h],i)=>`<li><a href="#section-${i+1}">${esc(h)}</a></li>`).join('')}</ol></section></aside></main>${footer}`;
  write(p,html);
}
for(const d of data) create(d);
for(const d of data.slice(1)) {
  replaceRows(`city/${d.slug}/index.html`,d,'../../',5);
  replaceRows(`city/${d.slug}/news.html`,d,'../../');
}
replaceRows('index.html',data[0],'',6);
let news=read('news/index.html');
const first=news.indexOf('<article class="article-row">');
const rows=[...news.matchAll(/<article class="article-row">[\s\S]*?<\/article>/g)].map(x=>x[0]);
if(rows.length!==12) throw Error(`Expected 12 news page-one rows, got ${rows.length}`);
const dropped=rows.at(-1);
news=news.replace(dropped,'').slice(0,first)+row(data[0],'../')+news.slice(first).replace(dropped,'');
news=news.replace(/共 23 篇/,'共 24 篇');
write('news/index.html',news);
let page2=read('news/page-2.html');
page2=page2.replace('<article class="article-row">',dropped+'<article class="article-row">').replace(/共 23 篇/,'共 24 篇');
write('news/page-2.html',page2);
let topics=read('news/topics.html');
topics=topics.replace('<article class="article-row">',row(data[0],'../')+'<article class="article-row">');
write('news/topics.html',topics);
const search=JSON.parse(read('search.json'));
for(const d of data) search.unshift({title:d.title,url:articlePath(d),keywords:`${d.city} 模仿笔迹 模仿签名 模仿签字 笔迹鉴定`,description:d.lead,image:imgPath(d)});
write('search.json',JSON.stringify(search,null,2)+'\n');
let js=read('assets/js/main.js');
js=js.replace('const searchIndex=[','const searchIndex=['+data.map(d=>JSON.stringify({title:d.title,url:articlePath(d),keywords:`${d.city} 模仿笔迹 模仿签名 模仿签字 笔迹鉴定`,description:d.lead,image:imgPath(d)})).join(',')+',');
write('assets/js/main.js',js);
let sitemap=read('sitemap.xml');
sitemap=sitemap.replace('</urlset>',data.map(d=>`  <url><loc>${base+articlePath(d)}</loc><lastmod>${date}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join('\n')+'\n</urlset>');
write('sitemap.xml',sitemap);
console.log(`Prepared ${data.length} articles`);
