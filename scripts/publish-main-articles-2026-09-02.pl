#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
use open qw(:std :encoding(UTF-8));
use JSON::PP;
use File::Spec;

my $root = File::Spec->rel2abs(File::Spec->catdir(File::Spec->curdir));
my $date = '2026-09-02';

my @articles = (
  {
    dir=>'mofang-biji', cat=>'模仿笔迹', catfile=>'mofang-biji.html', file=>'full-page-photo-keep-edges.html', image=>'article-page-edge-reference-20260902.jpg',
    title=>'一页手写材料拍了三次，模仿笔迹参考图为什么仍要保留原件边缘',
    desc=>'从一页手写材料的三种照片说起，说明模仿笔迹参考图为什么要保留页面边缘、原始比例和未经压缩的完整图。',
    keywords=>'模仿笔迹,模仿签名,模仿签字,笔迹鉴定,模仿笔迹参考图,手写文件拍照,完整页面,原图保存,模仿笔迹能鉴定出来吗',
    lead=>'同一页手写材料，有人发来整页照片，又补了两张局部近照。三张图看起来都很清楚，真正整理时却发现：局部图能看笔画，只有保留纸张四周的那张，才能交代行距、留白和落款位置。',
    sections=>[
      ['三张照片各自回答不同问题','整页图首先回答“这段字写在什么位置”。页面边缘、装订孔、折痕和上下留白，都能帮助还原文字在纸面上的实际比例。局部图适合观察转折和浅色笔画，斜角照片则能补充纸张起伏与光线情况。它们不是互相替代，而是各有用途。','搜索“手写文件拍照”时，很多人只关心字够不够大。实际更容易遗漏的是拍摄范围：一旦把纸边裁掉，字的大小、行距和签字位置就失去参照。整理模仿笔迹参考图时，先留完整页，再补重点局部，通常比连续发送多张裁剪图更清楚。'],
      ['原图比聊天截图多保留了什么','聊天软件中的预览图可能已经缩小，截图又会再压缩一次。细小的停顿、较淡的笔画以及纸面纹理，经过几次转发后容易变成模糊边缘。最稳妥的做法是保存手机拍摄的原文件，并把整页图和局部图用同一编号对应起来。','如果材料中同时有模仿签名或模仿签字，不要只截取姓名。签字前后的短句、日期、表格线和落款区域都应保留；后续若用于笔迹鉴定资料整理，也能看出图片来自哪一页、是否经过裁切。'],
      ['拍摄当天就把顺序理清','可以先拍正面完整页，再拍需要放大的两三个位置，最后核对照片编号。纸张尽量放平，镜头与页面保持平行，避免强光把墨迹照白。与其事后凭印象重命名，不如拍完一页就检查一次。','很多人搜索“模仿笔迹能鉴定出来吗”，背后其实关心材料能不能被可靠比较。图片只能呈现其中一部分信息，清晰度、完整范围、形成时间和原件是否保留都会影响可观察内容，因此资料来源要如实标注。'],
      ['收到图片后先做一次反向检查','打开第一张图时，应该能一眼确认页码和整体版式；打开局部图时，应该知道它来自整页的哪个位置。如果做不到，说明命名或拍摄范围还不够清楚。把这一步放在发送之前，往往能省去多轮补图。']
    ],
    faqs=>[
      ['整页图需要把桌面也拍进去吗？','不需要大面积拍桌面，但纸张四周应留出少量边界，让页面尺寸和方向有明确参照。'],
      ['照片已经很清楚，还要保留原文件吗？','要。原文件通常比聊天预览和截图保留更多细节，也便于确认拍摄时间与原始尺寸。'],
      ['模仿签名、模仿签字的照片也这样整理吗？','原则相同：先保留签字所在的完整区域，再补充局部，不能只留下一个被裁切的名字。']
    ]
  },
  {
    dir=>'mofang-qianming', cat=>'模仿签名', catfile=>'mofang-qianming.html', file=>'five-signatures-stable-motion.html', image=>'article-five-signature-variation-20260902.jpg',
    title=>'同一个名字签了五遍都不完全相同：模仿签名要看的是稳定动作',
    desc=>'同一个名字连续签五遍也会有自然差别。文章从真实书写变化入手，说明模仿签名样本中稳定动作与偶然差异怎么看。',
    keywords=>'模仿笔迹,模仿签名,模仿签字,笔迹鉴定,多次签名样本,签名稳定特征,签名自然变化,模仿签名能鉴定出来吗,模仿签名技巧',
    lead=>'把同一个名字连续签五遍，常见的结果不是五张“复印件”，而是整体走势相近，局部每次略有变化。有人把这种差别当成样本不统一，其实恰恰相反：自然变化本来就是日常签写的一部分。',
    sections=>[
      ['先看反复出现的动作，不急着挑最像的一张','五次签名中，起笔方向、主要转折、姓名所占比例和收笔去向如果反复出现，这些往往比某一处偶然的弯钩更稳定。整理样本时不必只留下最工整的一张，连续的几次自然签写更能说明平时的动作范围。','网上常搜“模仿签名技巧”，但真正有价值的阅读角度不是把每一笔拆成固定公式，而是理解签名为什么会随速度、姿势和空间产生小幅变化。只盯着静止字形，很容易忽略连贯动作。'],
      ['正式签名和随手签字不要混成一组','同一个人可能有正式版本、日常简写和快速落款。三种版本的长度与结构可能明显不同，应先按使用场景分组，再在组内比较。模仿签名通常围绕固定姓名的整体形式，模仿签字还可能包括日期、意见短句或更随意的落款。','如果一组里既有会议签到，也有合同末页签名，还夹着练习纸，表面上数量不少，实际比较价值会被场景差异稀释。注明日期、纸张类型和书写环境，比简单写“样本一、样本二”更实用。'],
      ['“能不能鉴别”要回到材料本身','“模仿签名能鉴定出来吗”是常见关联搜索。这个问题不能脱离材料直接回答：原件是否存在、自然样本是否同期、签名数量是否足够、图片有没有压缩，都会改变能够观察的范围。笔迹鉴定重视的是多项特征的综合比较，不是寻找某一个万能标记。','连续文字的模仿笔迹与固定姓名的签名观察重点也不同。前者还能从字距、行距和长篇节奏中获取信息，后者篇幅短，更依赖多份自然样本来理解稳定动作与正常波动。'],
      ['五张卡片怎样整理才一眼看懂','把同一场景下的五次签写按时间从左到右排列，保留原始顺序，不挑选、不描深，也不把大小强行缩放到一致。旁边单独记录纸张和书写工具，查看时就能分清哪些差别来自环境，哪些动作长期保留。']
    ],
    faqs=>[
      ['签名每次不一样，样本还有用吗？','有用。自然差异本身就是样本信息，关键是确认它们来自同一版本和相近场景。'],
      ['只提供一张最清楚的签名可以吗？','一张图能看局部形态，却很难说明正常变化范围；条件允许时，应保留多次自然签写。'],
      ['为什么不能把五张图缩放成同样大小？','强行缩放会掩盖签名原本的尺寸变化，最好保留原始比例并记录纸张参照。']
    ]
  },
  {
    dir=>'mofang-qianming', cat=>'模仿签名', catfile=>'mofang-qianming.html', file=>'contract-last-page-signing-space.html', image=>'article-narrow-signing-space-20260902.jpg',
    title=>'合同末页空间变窄时，模仿签字的大小和收笔会跟着变',
    desc=>'合同末页签字区域变窄，签字大小、倾斜和收笔会自然调整。结合模仿签字场景说明为什么样本要保留页面位置。',
    keywords=>'模仿笔迹,模仿签名,模仿签字,笔迹鉴定,合同末页签字,签字位置,快速签字,模仿签字能鉴别出来吗,签字样本',
    lead=>'同一个人在空白纸上签名舒展，到了合同末页却可能写得更短。原因并不神秘：签字线长度、表格边框、旁边印章位置，都会让手在落笔前先做一次空间判断。',
    sections=>[
      ['页面留白会先改变整体尺寸','宽阔的纸面允许签名自然展开，狭窄签字栏则容易出现横向压缩、字间连接变紧和收笔提前。若只把两个名字裁成一样大的图片，看上去像是形态变化；放回完整页面，就能理解这种变化与空间有关。','因此整理合同末页签字时，应保留表格线、签字栏和相邻落款。模仿签字样本不只是一个名字的图片，还包括它在具体位置中的比例。'],
      ['站着签、坐着签，速度也不一样','前台登记时常常站立落笔，合同确认时多在桌面书写。支撑条件、笔尖角度和停留时间不同，会影响线条舒展程度。快速签字可能更简略，却不意味着它与正式版本没有联系。','模仿签名资料可以按“正式落款、日常签收、快速登记”分组。模仿笔迹正文如果与签字在同一份文件上，也应保留整页关系，而不是把正文和落款拆成互不相关的两套图片。'],
      ['别把场景差别当成唯一结论','用户常搜“模仿签字能鉴别出来吗”。在笔迹鉴定中，页面位置只是背景条件之一，还要结合原件、自然样本、形成时期和可观察特征综合判断。单凭签字大了一点或收笔短了一点，不能独立说明全部问题。','更实际的准备方式，是把相近场景的样本放在一起比较。例如合同与合同一组、签收单与签收单一组，再记录每份材料的日期和来源。这样既保留变化，也不混淆使用环境。'],
      ['裁图之前先问一句：位置还看得出来吗','如果裁完后已经看不出签字栏有多宽、签名离边框多远，就说明范围太小。可同时保存一张整页图、一张落款区域图和一张原比例局部图，三者用同一编号关联。']
    ],
    faqs=>[
      ['签字变小一定是刻意改变吗？','不一定。签字栏宽度、书写姿势和时间紧迫程度都可能造成自然缩小。'],
      ['合同只剩复印件，图片该怎么拍？','先平整拍摄完整末页，再补签字区域；不要加滤镜，也不要把黑白复印件处理成看似原件的颜色。'],
      ['正文和签字需要分别编号吗？','可以分别归类，但应保留它们来自同一文件、同一页的对应关系。']
    ]
  },
  {
    dir=>'biji-jianding', cat=>'笔迹鉴定', catfile=>'biji-jianding.html', file=>'accuracy-depends-on-materials.html', image=>'article-identification-material-conditions-20260902.jpg',
    title=>'先别急着问准不准——笔迹鉴定结果取决于这些材料条件',
    desc=>'笔迹鉴定准确吗，不能脱离材料条件回答。原件、同期自然样本、图像质量和文件来源都会影响可比较范围。',
    keywords=>'模仿笔迹,模仿签名,模仿签字,笔迹鉴定,笔迹鉴定准确吗,笔迹鉴定流程,笔迹鉴定机构哪里有,同期样本,笔迹鉴定材料',
    lead=>'咨询笔迹鉴定时，最常听到的一句话是“到底准不准”。这个问题像拿着一张模糊照片问能不能看清细节：先要知道照片从哪里来、压缩过几次，以及有没有可供对照的清晰材料。',
    sections=>[
      ['原件和清晰图片承担的任务不同','原件能够保留纸张、墨迹和书写痕迹的原始状态，清晰图片便于前期查看和归档，但二者不是同一种材料。只有手机截图时，应说明来源和转发过程；能够找到扫描原图或纸质原件时，则不要用截图替代。','“笔迹鉴定准确吗”之所以没有脱离条件的统一答案，正是因为每个案例能看到的信息不同。材料完整、来源清楚、对比样本合适，才有讨论判断范围的基础。'],
      ['同期自然样本比临时照写更有解释力','对比样本应尽量接近待分析文件的形成时间，并来自日常自然书写。年代跨度过大，个人书写习惯可能已经变化；临时、刻意放慢的抄写，也未必能代表平时状态。','模仿笔迹涉及连续文字时，可观察的相同字和整体节奏通常更多；模仿签名、模仿签字篇幅较短，更需要多份同版本的自然签写。不同材料不能只按关键词归类，还要看它们的形成场景。'],
      ['流程的第一步不是立即下结论','常见的笔迹鉴定流程通常从确认委托事项、清点材料和判断检材条件开始，再决定需要哪些补充样本。寻找笔迹鉴定机构时，应先问清接收什么材料、是否需要原件、样本时间怎样要求，而不只是比较一句口头承诺。','“笔迹鉴定机构哪里有”属于明确的办事型搜索。实际沟通时，把文件页数、形成时间、目前持有原件还是复印件一次说清，比只发一张局部图更容易得到有用答复。'],
      ['四类信息放进同一张清单','清单可以分为待分析文件、自然样本、文件来源和图像版本四栏。每份材料写清日期、页码及是否为原件。这样整理后，即使需要补充，也能准确指出缺的是哪一类，而不是把相似图片重复发送。']
    ],
    faqs=>[
      ['只有一个字可以做笔迹鉴定吗？','单字可观察的信息有限，能否开展要结合字形复杂度、原件状态和对比样本，由接收材料的机构具体判断。'],
      ['自然样本越多越好吗？','不是简单越多越好。来源明确、时期接近且包含可比特征的样本更重要。'],
      ['先发手机照片有没有意义？','可用于初步说明材料情况，但应保留原图，并提前说明纸质原件是否存在。']
    ]
  },
  {
    dir=>'biji-jianding', cat=>'笔迹鉴定', catfile=>'biji-jianding.html', file=>'pricing-workload-factors.html', image=>'article-identification-workload-cost-20260902.jpg',
    title=>'笔迹鉴定收费标准背后：页数、样本时期与图像质量怎样影响工作量',
    desc=>'解读笔迹鉴定收费标准背后的实际工作量，说明文件页数、样本时期、图像质量和检材数量为何会影响费用沟通。',
    keywords=>'模仿笔迹,模仿签名,模仿签字,笔迹鉴定,笔迹鉴定收费标准,笔迹鉴定费用,笔迹鉴定一个字多少钱,笔迹鉴定机构,材料页数',
    lead=>'有人拿着一页签字材料询价，也有人带来几本跨越多年的手写记录。表面上都是“看笔迹”，需要清点、筛选和比较的工作量却完全不同，所以笔迹鉴定收费标准不能只按一个字或一张纸简单理解。',
    sections=>[
      ['页数多不等于有效信息一定多','十页重复复印件，可能不如两页来源明确的原件有用。前期需要先排除重复页、区分原件与复制件，再确认哪些内容包含可比较的相同字。材料数量影响整理时间，有效性则决定后续比较能走到哪一步。','搜索“笔迹鉴定一个字多少钱”时，用户希望快速得到数字，但单字复杂程度、是否有原件、对比样本是否充足都会造成差别。先说明材料条件，比把所有情况压成统一单价更接近实际。'],
      ['样本跨期越长，筛选越不能省','样本如果跨越数年，需要按时期分组，查看书写习惯是否出现阶段性变化。同一时期的自然样本不足时，还可能需要补充来源明确的材料。这些工作不会直接显示在最终页数上，却是理解差异的重要过程。','模仿笔迹的连续正文、模仿签名的固定姓名和模仿签字的快速落款，可比较内容各不相同。涉及多种材料时，不能把它们全部按“手写页”笼统计数。'],
      ['图像质量决定有多少细节可供查看','低清截图、二次拍屏和多次压缩图片，往往需要先确认是否还有原图。图像修复不能凭空补回已经丢失的笔画信息，因而材料沟通中应如实区分原件、扫描件、照片和截图。','询问笔迹鉴定费用时，可以同时提供四项信息：待分析文件页数、原件状态、自然样本时期、图片来源。笔迹鉴定机构据此确认受理范围，通常比只问一个总价更高效。'],
      ['一份清楚的目录能减少无效往返','按照“文件名称—日期—页数—材料形式—备注”建立目录，重复件单独标记，不覆盖原始文件。目录本身不会替代专业判断，但能让双方先对材料范围达成一致，也便于发现缺失页和错配样本。']
    ],
    faqs=>[
      ['笔迹鉴定收费标准全国都一样吗？','不同机构、委托事项和材料复杂程度可能不同，应以受理机构根据实际材料给出的说明为准。'],
      ['只有照片能先询问费用吗？','可以先说明情况，但要注明照片来源、是否压缩以及纸质原件能否提供。'],
      ['重复页会增加有效样本数量吗？','不会。相同文件的复印或截图不等于新的自然书写样本，整理时应标记为重复件。']
    ]
  }
);

sub slurp { my($p)=@_; open my $f,'<:encoding(UTF-8)',$p or die "$p: $!"; local $/; return <$f>; }
sub spit { my($p,$s)=@_; open my $f,'>:encoding(UTF-8)',$p or die "$p: $!"; print {$f} $s; close $f; }
sub j { JSON::PP->new->utf8(0)->canonical(1)->encode($_[0]) }
sub pretty_search {
  my ($rows)=@_;
  my @blocks;
  for my $x (@$rows) {
    push @blocks, "  {\n".join(",\n",map { '    '.j($_).': '.j($x->{$_}//'') } qw(title url keywords description))."\n  }";
  }
  return "[\n".join(",\n",@blocks)."\n]\n";
}

sub render_article {
  my ($a)=@_;
  my $rel="article/$a->{dir}/$a->{file}";
  my $url="https://www.mfqm888.com/$rel";
  my $img="https://www.mfqm888.com/assets/images/$a->{image}";
  my $article_json=j({'@context'=>'https://schema.org','@type'=>'Article',headline=>$a->{title},description=>$a->{desc},datePublished=>$date,dateModified=>$date,mainEntityOfPage=>$url,image=>$img,author=>{'@type'=>'Organization',name=>'模仿笔迹网编辑部'},publisher=>{'@type'=>'Organization',name=>'模仿笔迹网'}});
  my $faq_json=j({'@context'=>'https://schema.org','@type'=>'FAQPage',mainEntity=>[map {{'@type'=>'Question',name=>$_->[0],acceptedAnswer=>{'@type'=>'Answer',text=>$_->[1]}}} @{$a->{faqs}}]});
  my $crumb_json=j({'@context'=>'https://schema.org','@type'=>'BreadcrumbList',itemListElement=>[{'@type'=>'ListItem',position=>1,name=>'首页',item=>'https://www.mfqm888.com/'},{'@type'=>'ListItem',position=>2,name=>$a->{cat},item=>"https://www.mfqm888.com/category/$a->{catfile}"},{'@type'=>'ListItem',position=>3,name=>$a->{title},item=>$url}]});
  my $body=''; my $toc=''; my $i=0;
  for my $s (@{$a->{sections}}) { $i++; $body.="<h2 id=\"section-$i\">$s->[0]</h2>".join('',map{"<p>$_</p>"}@{$s}[1..$#$s]); $toc.="<li><a href=\"#section-$i\">$s->[0]</a></li>"; }
  $i++; $body.="<div class=\"article-faq\"><h2 id=\"section-$i\">读者常问</h2>".join('',map{"<h3>$_->[0]</h3><p>$_->[1]</p>"}@{$a->{faqs}}).'</div>'; $toc.="<li><a href=\"#section-$i\">读者常问</a></li>";
  return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'.
    "<title>$a->{title} - 模仿笔迹网</title><meta name=\"description\" content=\"$a->{desc}\"><meta name=\"keywords\" content=\"$a->{keywords}\"><link rel=\"canonical\" href=\"$url\">".
    "<meta property=\"og:type\" content=\"article\"><meta property=\"og:title\" content=\"$a->{title}\"><meta property=\"og:description\" content=\"$a->{desc}\"><meta property=\"og:url\" content=\"$url\"><meta property=\"og:image\" content=\"$img\">".
    '<link rel="stylesheet" href="../../assets/css/style.css"><link rel="stylesheet" href="../../assets/css/reference.css">'.
    "<script type=\"application/ld+json\">$article_json</script><script type=\"application/ld+json\">$faq_json</script><script type=\"application/ld+json\">$crumb_json</script></head><body>".
    '<header class="main-header"><div class="container"><a class="brand" href="../../index.html"><span class="brand-mark">迹</span><span class="brand-text"><strong>模仿笔迹网</strong><small>模仿笔迹与模仿签名服务平台</small></span></a><div class="header-search"><div class="search-wrap"><input data-search data-index="../../search.json" aria-label="站内搜索" placeholder="搜索模仿笔迹、模仿签名"><div class="search-results"></div></div><button>搜索</button></div></div></header>'.
    '<nav class="nav"><button class="menu-toggle">网站导航 <span>☰</span></button><div class="container"><a href="../../index.html">首页</a><a href="../../category/mofang-biji.html">模仿笔迹</a><a href="../../category/mofang-qianming.html">模仿签名</a><a href="../../category/biji-jianding.html">笔迹鉴定</a><a href="../../case/index.html">案例展示</a><a href="../../news/index.html">资讯中心</a><a href="../../city/index.html">城市服务</a><a href="../../contact/index.html">联系我们</a><a href="../../about/index.html">关于我们</a></div></nav>'.
    "<div class=\"breadcrumb\"><div class=\"container\">当前位置：<a href=\"../../index.html\">首页</a> &gt; <a href=\"../../category/$a->{catfile}\">$a->{cat}</a> &gt; $a->{title}</div></div>".
    "<main class=\"container article-layout article-detail-layout\"><article class=\"article-body\"><header class=\"article-header\"><h1>$a->{title}</h1><div class=\"meta\">发布时间：$date　来源：模仿笔迹网编辑部</div></header><div class=\"article-content\"><p class=\"article-lead\">$a->{lead}</p><img class=\"case-cover article-cover\" src=\"../../assets/images/$a->{image}\" alt=\"$a->{title}\" width=\"1200\" height=\"800\">$body".
    '<div class="article-topic-links"><a href="../../category/mofang-biji.html">模仿笔迹</a><a href="../../category/mofang-qianming.html">模仿签名与模仿签字</a><a href="../../category/biji-jianding.html">笔迹鉴定</a><a href="../../contact/index.html">联系咨询</a></div></div></article>'.
    "<aside class=\"article-sidebar\"><section class=\"article-toc\"><h2>文章目录</h2><ol>$toc</ol></section></aside></main>".
    '<footer class="footer"><div class="container footer-main"><div><a class="brand" href="../../index.html"><span class="brand-mark">迹</span><span class="brand-text"><strong style="color:#fff">模仿笔迹网</strong><small>模仿笔迹与模仿签名服务平台</small></span></a></div><div><h3>服务项目</h3><ul class="footer-links"><li><a href="../../category/mofang-biji.html">模仿笔迹</a></li><li><a href="../../category/mofang-qianming.html">模仿签名</a></li><li><a href="../../category/biji-jianding.html">笔迹鉴定</a></li></ul></div><div><h3>内容中心</h3><ul class="footer-links"><li><a href="../../case/index.html">案例展示</a></li><li><a href="../../news/index.html">资讯中心</a></li><li><a href="../../contact/index.html">联系我们</a></li></ul></div></div><div class="footer-bottom">© 2026 模仿笔迹网　版权所有</div></footer><script src="../../assets/js/main.js"></script></body></html>';
}

my @added;
for my $a (@articles) {
  my $rel="article/$a->{dir}/$a->{file}";
  spit(File::Spec->catfile($root,split('/',$rel)),render_article($a));
  my $catpath=File::Spec->catfile($root,'category',$a->{catfile});
  my $cat=slurp($catpath);
  if (index($cat,$a->{file})<0) {
    $cat =~ s/当前 (\d+) 篇/'当前 '.($1+1).' 篇'/e;
    $cat =~ s/当前展示最新 (\d+) 篇内容/'当前展示最新 '.($1+1).' 篇内容'/e;
    my $card="<article class=\"article-row\"><a class=\"thumb\" href=\"../$rel\"><img src=\"../assets/images/$a->{image}\" alt=\"$a->{title}\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"800\"></a><div><h3><a href=\"../$rel\">$a->{title}</a></h3><p>$a->{desc}</p><div class=\"meta\">$date　分类：$a->{cat}</div></div></article>";
    $cat =~ s/<article class="article-row"/$card<article class="article-row"/;
    spit($catpath,$cat);
  }
  push @added,{title=>$a->{title},url=>$rel,keywords=>join(' ',split(',',$a->{keywords})),description=>$a->{desc},category=>$a->{cat},date=>$date,image=>"assets/images/$a->{image}"};
}

my $homepath=File::Spec->catfile($root,'index.html'); my $home=slurp($homepath);
for my $a (reverse @articles) {
  next if index($home,$a->{file})>=0;
  my $rel="article/$a->{dir}/$a->{file}";
  my $card="<article class=\"article-row\"><a class=\"thumb\" href=\"$rel\"><img src=\"assets/images/$a->{image}\" alt=\"$a->{title}\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"800\"></a><div><h3><a href=\"$rel\">$a->{title}</a></h3><p>$a->{desc}</p><div class=\"meta\">$date　$a->{cat}</div></div></article>";
  $home =~ s/<div class="article-list">/<div class="article-list">$card/;
}
# 将真实下拉和关联搜索意图补入首页入口，链接直达对应新文章。
$home =~ s#<a href="category/biji-jianding.html">笔迹鉴定费用</a>#<a href="article/biji-jianding/pricing-workload-factors.html">笔迹鉴定收费标准</a>#;
$home =~ s#<a href="category/mofang-biji.html">模仿签名</a>#<a href="article/mofang-qianming/five-signatures-stable-motion.html">模仿签名能鉴定出来吗</a>#;
spit($homepath,$home);

my $sp=File::Spec->catfile($root,'search.json'); my $search=JSON::PP->new->utf8(0)->decode(slurp($sp));
for my $x (@added) { push @$search,{map {$_=>$x->{$_}} qw(title url keywords description)} unless grep {$_->{url} eq $x->{url}} @$search; }
spit($sp,pretty_search($search));

my $jsp=File::Spec->catfile($root,'assets','js','main.js'); my $js=slurp($jsp);
for my $x (@added) {
  next if index($js,"url:'$x->{url}'")>=0;
  my %e=%$x; for (values %e) { s/'/\\'/g if defined }
  my $row="  {title:'$e{title}',url:'$e{url}',keywords:'$e{keywords}',description:'$e{description}',category:'$e{category}',date:'$e{date}',image:'$e{image}'}";
  $js =~ s/\n\];/,\n$row\n];/;
}
spit($jsp,$js);

my $smp=File::Spec->catfile($root,'sitemap.xml'); my $sm=slurp($smp);
for my $x (@added) { my $loc="https://www.mfqm888.com/$x->{url}"; next if index($sm,$loc)>=0; $sm =~ s#</urlset>#  <url><loc>$loc</loc><lastmod>$date</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n</urlset>#; }
spit($smp,$sm);
spit(File::Spec->catfile($root,'scripts','published-main-2026-09-02.json'),JSON::PP->new->utf8(0)->pretty(1)->encode(\@added));
print "已生成并接入5篇差异化文章。\n";
