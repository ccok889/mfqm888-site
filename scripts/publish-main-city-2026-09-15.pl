#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use open qw(:std :encoding(UTF-8));
use JSON::PP;
use File::Path qw(make_path);
use File::Spec;

my $root = File::Spec->rel2abs(File::Spec->curdir);
my $date = '2026-09-15';
my @core = qw(模仿笔迹 模仿签名 模仿签字 笔迹鉴定);

my @main = (
  ['mofang-biji','mofang-biji.html','complete-page-vs-closeup.html','article-main-complete-page-20260915.jpg','完整页面比局部近照多告诉我们什么：模仿笔迹样本整理实录','模仿笔迹','页面边缘、行距、留白和落款位置只有放回整页才能看清，局部近照更适合补充笔画细节。'],
  ['mofang-qianming','mofang-qianming.html','three-signature-versions.html','article-main-signature-versions-20260915.jpg','正式版、日常版、快速版放在一起，模仿签名的差别才看得清','模仿签名','同一姓名在正式落款、日常签收和快速登记中会形成不同版本，比较前应按场景分开。'],
  ['biji-jianding','biji-jianding.html','original-scan-chat-image.html','article-main-original-scan-20260915.jpg','原件、扫描件和聊天截图排成一列，笔迹鉴定先从图像来源说起','笔迹鉴定','原件、扫描件与聊天截图保留的信息不同，先标明来源和转发过程，后续查看才不会混淆。'],
);

my %cities = (
  beijing=>['北京',
    ['meeting-notes-by-year.html','北京会议记录页数较多时，模仿笔迹资料先按会议与年份拆开','会议记录常有多页和多次批注，先按会议日期、页码和形成年份建立对应关系。'],
    ['narrow-signature-line-full-page.html','签字栏只有一行，北京模仿签名样本为什么还要保留整页','一行签字栏会限制签字长度，整页图能说明栏位宽度、落款位置和周围表格。'],
    ['samples-across-years.html','北京笔迹鉴定材料跨了几年，先做一张时间清单再比较','跨年份材料要区分早期、同期和近期样本，避免把自然变化误当成同一阶段的差异。']],
  shanghai=>['上海',
    ['business-draft-three-versions.html','上海商务手写文件改了三版，模仿笔迹样本别只留最终稿','初稿、修改稿和定稿各有书写状态，保留版本顺序更容易看出连续正文的变化。'],
    ['formal-and-short-signatures.html','同一姓名有正式版和简写版，上海模仿签名资料这样分组更清楚','正式版与简写版的长度、连接和收笔不同，混在一组会削弱样本的可读性。'],
    ['original-to-scan-links.html','从原件到扫描件：上海笔迹鉴定材料怎样保留对应关系','原件页码、扫描文件名和局部图片应使用同一编号，确保任何细节都能回到原始页面。']],
  guangzhou=>['广州',
    ['receipts-and-notes.html','广州签收单和手写备注放在一起，模仿笔迹样本应该怎样拆分','签收单、备注和连续正文的书写速度不同，分组后再看相同字更符合实际场景。'],
    ['pen-tip-thickness.html','笔尖粗细换了以后，广州模仿签名为什么看起来会变','粗细不同的笔尖会改变线条边缘和转折观感，纸张与工具信息应随样本一起保留。'],
    ['phone-photo-four-corners.html','手机拍广州手写文件，四个纸角留全比拍得很近更重要','四个纸角能交代页面比例和拍摄方向，近照则作为补充，两种图片不能互相替代。']],
  shenzhen=>['深圳',
    ['digital-file-naming.html','深圳手写文件进入电脑前，模仿笔迹图片命名先统一','多设备传图最容易产生重复文件，先约定日期、页码和版本，归档后才能快速定位。'],
    ['phone-scanner-tablet.html','手机、扫描仪与平板预览：深圳笔迹鉴定图片不要混成同一版本','手机照片、扫描件和平板预览的尺寸与颜色不同，应在文件名中直接标明获取方式。'],
    ['three-versions-color-labels.html','深圳模仿签字材料有三个版本，颜色标签比反复改文件名更省事','正式、日常和快速版本分别使用固定标签，既保留原文件名，也能看出使用场景。']],
  hangzhou=>['杭州',
    ['line-spacing-and-margins.html','行距和留白先定下来，杭州模仿笔迹长页才不会越写越挤','长页书写到后半段容易压缩行距，先记录纸张规格和段落位置更便于还原版面。'],
    ['paper-and-pen-width.html','纸张一换，杭州模仿签名的线条粗细为什么也会跟着变','光滑纸与吸墨纸会呈现不同线条，比较签名时要同时记录纸张和笔尖。'],
    ['margin-notes-full-layout.html','杭州手写页边批注较多，笔迹鉴定前先保留完整版面','页边批注的方向和空间受页面限制，裁掉正文或纸边会失去重要的位置参照。']],
  nanjing=>['南京',
    ['same-period-samples.html','南京笔迹鉴定为什么重视同期样本：先把时间范围缩小','与待分析文件形成时间接近的自然样本，更能反映当时的书写状态和稳定习惯。'],
    ['original-copy-color-scan.html','原件、复印件、彩色扫描件，南京笔迹鉴定材料别放错顺序','三种材料的信息层级不同，目录中应先写原件，再写复制方式和对应页码。'],
    ['signature-scenes.html','南京模仿签名样本来自不同场景，比较前先认清签字版本','合同落款、快递签收和签到表属于不同场景，应先确定常用版本，再在组内比较。']],
  chengdu=>['成都',
    ['long-text-rhythm.html','写到第二页后行距变松，成都模仿笔迹要看长文节奏','连续写到第二页后，速度、字距和段落节奏会自然变化，不能只用开头几行代表整篇。'],
    ['notebook-and-loose-pages.html','笔记本与散页尺寸不同，成都手写文件先记录页面规格','装订本和散页的支撑、边距不同，整理时应保留页面尺寸与装订位置。'],
    ['clear-source-over-quantity.html','成都模仿签字样本不必求多，来源清楚比重复截图更重要','重复转发的截图不等于新样本，来源、日期和场景明确的自然签字更便于整理。']],
  wuhan=>['武汉',
    ['three-common-signatures.html','武汉模仿签名遇到三个常用版本，先找使用频率最高的一组','常用版本应结合实际文件判断，不以最工整的一张作为唯一标准。'],
    ['date-note-and-signature.html','日期、短句和落款连在一起，武汉模仿签字别只截姓名','日期与短句能说明签字当时的书写速度和页面位置，保留完整区域更有参照。'],
    ['color-cast-original-image.html','武汉笔迹鉴定图片偏色时，彩色原图要单独保存','暖色、冷色和灰度版本可能改变墨迹观感，未经调整的原图应作为独立版本保存。']],
  chongqing=>['重庆',
    ['curled-paper-proportions.html','纸张卷曲又有阴影，重庆模仿笔迹照片怎样保留真实比例','卷曲页面先轻压四角并垂直拍摄，阴影严重时补拍，但不要覆盖第一张原图。'],
    ['notebook-gutter-writing.html','装订线附近的字容易变形，重庆手写文件要连同书脊一起看','靠近书脊时手腕活动范围变小，字形与行向可能变化，页面结构必须一并保留。'],
    ['trace-first-original-photo.html','重庆笔迹鉴定收到多次转发图片，先追溯第一份原图','转发、裁切和调色会逐步丢失细节，先找到最早文件，再记录后续版本。']],
  suzhou=>['苏州',
    ['business-formal-and-daily.html','苏州商务文件上的模仿签名，正式落款与日常简写分开整理','商务落款与日常简写用途不同，按场景分组能避免把版本差异当成随机变化。'],
    ['date-note-crop-range.html','日期和短句紧挨签字，苏州模仿签字样本应保留多大范围','至少保留完整落款区、日期和相邻短句，同时另存整页照片作为位置参照。'],
    ['three-sample-groups.html','苏州模仿笔迹资料分成三组后，长文与便笺不再混在一起','长文、便笺和正式文件分开后，行距、速度与用笔差异更容易理解。']],
  tianjin=>['天津',
    ['numbers-and-dates.html','数字和日期反复出现，天津模仿笔迹样本可先做字符清单','数字、日期和金额写法出现频率高，可先做索引，再回到原页查看上下文。'],
    ['samples-from-different-periods.html','天津笔迹鉴定遇到跨时期材料，旧样本与近期样本分别说明','纸张年代与书写时期应分别记录，旧样本不能与近期材料无标记地混排。'],
    ['multipage-form-numbering.html','天津多页表格手写内容，页码与局部照片要用同一编号','整页、局部和补拍照片沿用同一页码，查看局部时能立即找到对应表格。']],
  xian=>['西安',
    ['original-or-photocopy.html','西安笔迹鉴定看原件还是复印件，先说明材料从哪里来','原件与复印件可观察的信息不同，咨询前先说明持有形式和复制次数。'],
    ['color-vs-grayscale-scan.html','彩色扫描与灰度扫描差别明显，西安手写文件不要只留一种','彩色扫描保留墨色与纸色，灰度版本便于阅读，两者应对应同一原页。'],
    ['archive-envelope-labels.html','西安模仿签名样本装进档案袋前，日期和场景先写清楚','档案袋外先标明日期、场景与版本，取出后仍能知道每张签名从哪里来。']],
);

sub slurp { my($p)=@_; open my $f,'<:encoding(UTF-8)',$p or die "$p: $!"; local $/; return <$f>; }
sub spit { my($p,$s)=@_; open my $f,'>:encoding(UTF-8)',$p or die "$p: $!"; print {$f} $s; close $f; }
sub j { JSON::PP->new->utf8(0)->canonical(1)->encode($_[0]) }
sub escjs { my($s)=@_; $s =~ s/'/\\'/g; return $s; }

my @openings=(
  '整理手写资料时，最费时间的往往不是文件太多，而是同一页被截成了几张图，后来已经说不清它们之间的关系。',
  '一叠材料放在桌上，看起来都与签字有关，真正逐页翻看才会发现：形成场景、纸张尺寸和保存方式并不相同。',
  '不少问题是在传图之后才暴露出来的。图片能打开，却缺页码、缺日期，也不知道是原件拍照还是聊天截图。',
  '手写内容有自己的使用环境。会议记录、表格落款和便笺短句写法不同，整理时不能只看表面的字形。',
  '把材料按时间铺开以后，很多原本显得杂乱的差别会变得容易理解，哪些属于版本变化也更清楚。',
  '实际准备资料时，清楚通常比数量更重要。十张重复截图，很可能不如一张保留四边的原图有用。'
);
my @heads1=('先把材料关系理顺','先看完整页面，再看局部','文件来源要写在名称里','不同场景不要混成一组','从时间和版本开始整理','一张简单清单能省下反复确认');
my @heads2=('四个核心词对应的材料并不完全一样','模仿笔迹与签字资料要分别看','别把自然变化当成文件错误','图片清楚还不够，比例也要真实','关联搜索背后是具体准备问题','回到原页，很多疑问自然会消失');
my @heads3=('提交之前做一次反向检查','整理完成后再核对一遍','最后留下可追溯的原始版本','发送前确认页码与顺序','让别人打开文件也能看懂','不要覆盖最早收到的文件');

sub paragraphs {
  my ($city,$note,$i)=@_;
  my $place=$city ? "${city}站" : '主站';
  return (
    $openings[$i%@openings].$note.'这不是为了把资料做得复杂，而是让每一张图都能找到来处。',
    "${place}整理模仿笔迹时，更关注连续文字的行距、字距、段落和页面留白；模仿签名通常围绕固定姓名的整体版本；模仿签字还可能连着日期、意见短句或表格栏位。笔迹鉴定所需材料则要明确原件状态、形成时间和自然对比样本。四类内容可以关联阅读，但不应无差别地堆进同一个文件夹。",
    '搜索习惯中经常出现“需要什么样本”“手机照片可以吗”“原件和扫描件有什么区别”等问题。回答这些问题不能只给一句结论：先保留未经裁切的原图，再补充局部近照；文件名写明日期、页码和版本；重复件单独标注，才是可以实际执行的做法。',
    "以这次的情况为例，$note 如果材料来自不同设备，可在原文件名后加上“手机原图”“彩色扫描”或“聊天预览”，而不是反复改成最终版。这样既方便后续查看，也不会在传递过程中误删来源最清楚的一份。",
    '检查时可以倒过来问三个问题：打开局部图能否找到对应整页，看到文件名能否判断形成时间，别人接手后能否分清正式版本与日常版本。三个问题都有答案，资料才算真正整理完成。'
  );
}

sub article_html {
  my ($a)=@_;
  my $url="https://www.mfqm888.com/$a->{url}";
  my $img="https://www.mfqm888.com/assets/images/$a->{image}";
  my @p=paragraphs($a->{city},$a->{note},$a->{idx});
  my @h=($heads1[$a->{idx}%@heads1],$heads2[$a->{idx}%@heads2],$heads3[$a->{idx}%@heads3]);
  my $article=j({'@context'=>'https://schema.org','@type'=>'Article',headline=>$a->{title},description=>$a->{desc},datePublished=>$date,dateModified=>$date,mainEntityOfPage=>$url,image=>$img,author=>{'@type'=>'Organization',name=>'模仿笔迹网编辑部'},publisher=>{'@type'=>'Organization',name=>'模仿笔迹网'}});
  my $crumb=j({'@context'=>'https://schema.org','@type'=>'BreadcrumbList',itemListElement=>[{'@type'=>'ListItem',position=>1,name=>'首页',item=>'https://www.mfqm888.com/'},{'@type'=>'ListItem',position=>2,name=>$a->{section},item=>$a->{section_url}},{'@type'=>'ListItem',position=>3,name=>$a->{title},item=>$url}]});
  my $faq=j({'@context'=>'https://schema.org','@type'=>'FAQPage',mainEntity=>[{'@type'=>'Question',name=>'手机照片可以作为整理材料吗？',acceptedAnswer=>{'@type'=>'Answer',text=>'可以先用于沟通，但应保留未经压缩的原图、完整页面和拍摄顺序。'}},{'@type'=>'Question',name=>'模仿签名与模仿签字需要分开吗？',acceptedAnswer=>{'@type'=>'Answer',text=>'固定姓名的签名版本与带日期、短句的日常签字应按场景分组，同时保留来源关系。'}}]});
  my $prefix=$a->{city} ? '../../' : '../../';
  return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'.
    "<title>$a->{title} - 模仿笔迹网</title><meta name=\"description\" content=\"$a->{desc}\"><meta name=\"keywords\" content=\"$a->{keywords}\"><link rel=\"canonical\" href=\"$url\"><meta property=\"og:type\" content=\"article\"><meta property=\"og:title\" content=\"$a->{title}\"><meta property=\"og:description\" content=\"$a->{desc}\"><meta property=\"og:image\" content=\"$img\"><script type=\"application/ld+json\">$article</script><script type=\"application/ld+json\">$crumb</script><script type=\"application/ld+json\">$faq</script>".
    '<link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css"></head><body id="top"><header class="main-header"><div class="container"><a class="brand" href="../../index.html"><span class="brand-mark">迹</span><span class="brand-text"><strong>模仿笔迹网</strong><small>模仿笔迹与模仿签名服务平台</small></span></a><div class="header-search"><div class="search-wrap"><input data-search data-index="../../search.json" aria-label="站内搜索" placeholder="搜索模仿笔迹、模仿签名"><div class="search-results"></div></div><button>搜索</button></div></div></header><nav class="nav"><button class="menu-toggle">网站导航 <span>☰</span></button><div class="container"><a href="../../index.html">首页</a><a href="../../category/mofang-biji.html">模仿笔迹</a><a href="../../category/mofang-qianming.html">模仿签名</a><a href="../../category/biji-jianding.html">笔迹鉴定</a><a href="../../case/index.html">案例展示</a><a href="../../news/index.html">资讯中心</a><a href="../../city/index.html">城市服务</a><a href="../../contact/index.html">联系我们</a><a href="../../about/index.html">关于我们</a></div></nav>'.
    "<div class=\"breadcrumb\"><div class=\"container\">当前位置：<a href=\"../../index.html\">首页</a> &gt; <a href=\"$a->{section_link}\">$a->{section}</a> &gt; $a->{title}</div></div><main class=\"container article-layout article-detail-layout\"><article class=\"article-body\"><header class=\"article-header\"><h1>$a->{title}</h1><div class=\"meta\">发布时间：$date　来源：模仿笔迹网编辑部</div></header><div class=\"article-content\"><p class=\"article-lead\">$p[0]</p><img class=\"case-cover article-cover\" src=\"../../assets/images/$a->{image}\" alt=\"$a->{title}\" width=\"1200\" height=\"800\"><h2 id=\"section-1\">$h[0]</h2><p>$p[1]</p><h2 id=\"section-2\">$h[1]</h2><p>$p[2]</p><p>$p[3]</p><h2 id=\"section-3\">$h[2]</h2><p>$p[4]</p><div class=\"article-faq\"><h2 id=\"section-4\">读者常问</h2><h3>手机照片可以作为整理材料吗？</h3><p>可以先用于沟通，但应保留未经压缩的原图、完整页面和拍摄顺序。</p><h3>模仿签名与模仿签字需要分开吗？</h3><p>固定姓名的签名版本与带日期、短句的日常签字应按场景分组，同时保留来源关系。</p></div><div class=\"article-topic-links\"><a href=\"../../category/mofang-biji.html\">模仿笔迹</a><a href=\"../../category/mofang-qianming.html\">模仿签名与模仿签字</a><a href=\"../../category/biji-jianding.html\">笔迹鉴定</a></div></div></article><aside class=\"article-sidebar\"><section class=\"article-toc\"><h2>文章目录</h2><ol><li><a href=\"#section-1\">$h[0]</a></li><li><a href=\"#section-2\">$h[1]</a></li><li><a href=\"#section-3\">$h[2]</a></li><li><a href=\"#section-4\">读者常问</a></li></ol></section></aside></main>".
    '<footer class="footer"><div class="container footer-main"><div><a class="brand" href="../../index.html"><span class="brand-mark">迹</span><span class="brand-text"><strong style="color:#fff">模仿笔迹网</strong><small>模仿笔迹与模仿签名服务平台</small></span></a></div><div><h3>服务项目</h3><ul class="footer-links"><li><a href="../../category/mofang-biji.html">模仿笔迹</a></li><li><a href="../../category/mofang-qianming.html">模仿签名</a></li><li><a href="../../category/biji-jianding.html">笔迹鉴定</a></li></ul></div><div><h3>内容中心</h3><ul class="footer-links"><li><a href="../../news/index.html">资讯中心</a></li><li><a href="../../city/index.html">城市服务</a></li><li><a href="../../contact/index.html">联系我们</a></li></ul></div></div><div class="footer-bottom">© 2026 模仿笔迹网　版权所有</div></footer><script src="../../assets/js/main.js"></script></body></html>';
}

my @all; my $idx=0;
for my $m (@main) {
  my ($dir,$catfile,$file,$image,$title,$cat,$note)=@$m;
  push @all,{idx=>$idx++,city=>'',title=>$title,note=>$note,desc=>$note.'文章结合实际资料说明完整页面、文件版本和样本来源的整理方法。',keywords=>join(',',@core,'手写文件','自然样本','原图保存'),image=>$image,url=>"article/$dir/$file",section=>$cat,section_link=>"../../category/$catfile",section_url=>"https://www.mfqm888.com/category/$catfile",catfile=>$catfile,cat=>$cat};
}
for my $slug (qw(beijing shanghai guangzhou shenzhen hangzhou nanjing chengdu wuhan chongqing suzhou tianjin xian)) {
  my ($city,@rows)=@{$cities{$slug}}; my $n=0;
  for my $r (@rows) {
    my ($file,$title,$note)=@$r; $n++;
    push @all,{idx=>$idx++,city=>$city,slug=>$slug,title=>$title,note=>$note,desc=>$note."本文从${city}实际资料整理角度说明页面、版本与原图的保存方法。",keywords=>join(',',@core,"${city}模仿笔迹","${city}模仿签名","${city}模仿签字","${city}笔迹鉴定",'手写文件'),image=>sprintf('article-%s-%02d-20260915.jpg',$slug,$n),url=>"city/$slug/$file",section=>"${city}服务指南",section_link=>'index.html',section_url=>"https://www.mfqm888.com/city/$slug/"};
  }
}

for my $a (@all) {
  my $path=File::Spec->catfile($root,split('/',$a->{url})); my (undef,$dirpart,undef)=File::Spec->splitpath($path); make_path($dirpart);
  spit($path,article_html($a));
}

sub card {
  my($a,$base,$label)=@_;
  return "<article class=\"article-row\"><a class=\"thumb\" href=\"$base$a->{url}\"><img src=\"$base"."assets/images/$a->{image}\" alt=\"$a->{title}\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"800\"></a><div><h3><a href=\"$base$a->{url}\">$a->{title}</a></h3><p>$a->{desc}</p><div class=\"meta\">$date　$label</div></div></article>";
}

# 主站首页与三个主栏目。
my $homep=File::Spec->catfile($root,'index.html'); my $home=slurp($homep);
for my $a (reverse grep {!$_->{city}} @all) { next if index($home,$a->{url})>=0; my $c=card($a,'',$a->{cat}); $home =~ s/<div class="article-list">/<div class="article-list">$c/; }
spit($homep,$home);
for my $a (grep {!$_->{city}} @all) {
  my $p=File::Spec->catfile($root,'category',$a->{catfile}); my $html=slurp($p); next if index($html,$a->{url})>=0;
  my $c=card($a,'../','分类：'.$a->{cat}); $html =~ s/<article class="article-row"/$c<article class="article-row"/; spit($p,$html);
}

# 每个城市首页新增三篇，并将篇数按实际文章列表重算。
for my $slug (qw(beijing shanghai guangzhou shenzhen hangzhou nanjing chengdu wuhan chongqing suzhou tianjin xian)) {
  my $p=File::Spec->catfile($root,'city',$slug,'index.html'); my $html=slurp($p);
  my @rows=grep {($_->{slug}//'') eq $slug} @all;
  for my $a (reverse @rows) { next if index($html,$a->{url})>=0; my $local=$a->{url}; $local =~ s#^city/$slug/##; my %x=%$a; $x{url}=$local; my $c=card(\%x,'','城市专题'); $c =~ s#src="assets/#src="../../assets/#g; $html =~ s/<div class="article-list">/<div class="article-list">$c/; }
  if ($html =~ /<small>SERVICE GUIDES<\/small>.*?<span class="more">(\d+) 篇<\/span>/s) { my $old=$1; my $new=$old+3; $html =~ s/(<small>SERVICE GUIDES<\/small>.*?<span class="more">)$old 篇/$1$new 篇/s; }
  spit($p,$html);
}

# 搜索索引。
my $searchp=File::Spec->catfile($root,'search.json'); my $search=JSON::PP->new->utf8(0)->decode(slurp($searchp));
for my $a (@all) { push @$search,{title=>$a->{title},url=>$a->{url},keywords=>join(' ',split(',',$a->{keywords})),description=>$a->{desc}} unless grep {$_->{url} eq $a->{url}} @$search; }
spit($searchp,JSON::PP->new->utf8(0)->pretty(1)->canonical(1)->encode($search));

my $jsp=File::Spec->catfile($root,'assets','js','main.js'); my $js=slurp($jsp);
for my $a (@all) { next if index($js,"url:'$a->{url}'")>=0; my $category=$a->{city} ? "$a->{city}".'服务指南' : $a->{cat}; my @v=map {escjs($_)} ($a->{title},$a->{url},join(' ',split(',',$a->{keywords})),$a->{desc},$category,$date,"assets/images/$a->{image}"); my $row="  {title:'$v[0]',url:'$v[1]',keywords:'$v[2]',description:'$v[3]',category:'$v[4]',date:'$v[5]',image:'$v[6]'}"; $js =~ s/\n\];/,\n$row\n];/; }
spit($jsp,$js);

# sitemap。
my $smp=File::Spec->catfile($root,'sitemap.xml'); my $sm=slurp($smp);
for my $a (@all) { my $loc="https://www.mfqm888.com/$a->{url}"; next if index($sm,$loc)>=0; $sm =~ s#</urlset>#  <url><loc>$loc</loc><lastmod>$date</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n</urlset>#; }
spit($smp,$sm);
spit(File::Spec->catfile($root,'scripts','published-main-city-2026-09-15.json'),JSON::PP->new->utf8(0)->pretty(1)->canonical(1)->encode(\@all));
print "已发布主站3篇、12个城市分站各3篇，共".scalar(@all)."篇。\n";
