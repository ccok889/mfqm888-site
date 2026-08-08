const currentScriptUrl=document.currentScript?.src||'';
const siteRoot=currentScriptUrl?new URL('../../',currentScriptUrl):new URL('./',window.location.href);
const siteUrl=path=>new URL(path,siteRoot).href;

const searchIndex=[
  {title:'模仿笔迹服务与案例',url:'category/mofang-biji.html',keywords:'模仿笔迹 手写笔迹 成人笔迹 学生笔迹 老人笔迹',description:'模仿笔迹服务分类、案例、费用和相关知识。',category:'模仿笔迹',date:'2026-08-05',image:'assets/images/handwriting-detail.jpg'},
  {title:'模仿签名服务与案例',url:'category/mofang-qianming.html',keywords:'模仿签名 签名模仿 模仿签字 商务签字',description:'模仿签名、签字样本、笔迹特征和费用说明。',category:'模仿签名',date:'2026-08-05',image:'assets/images/signature-design.jpg'},
  {title:'笔迹鉴定方法与案例',url:'category/biji-jianding.html',keywords:'笔迹鉴定 真假分析 鉴定方法 形成规律 费用',description:'笔迹真假分析、常见鉴定方法和样本要求。',category:'笔迹鉴定',date:'2026-08-05',image:'assets/images/handwritten-documents.jpg'},
  {title:'上海模仿笔迹费用多少钱？价格与服务分析',url:'article/shanghai-mofang-biji-price.html',keywords:'上海 模仿笔迹 费用 价格 多少钱',description:'分析样本、字数、复杂程度和完成时间对服务价格的影响。',category:'价格说明',date:'2026-08-05',image:'assets/images/hero-handwriting.jpg'},
  {title:'模仿笔迹需要提供哪些手写样本？',url:'article/mofang-biji/handwriting-samples.html',keywords:'模仿笔迹 手写样本 样本准备',description:'说明自然手写样本的数量、清晰度和内容覆盖范围。',category:'模仿笔迹',date:'2026-08-03',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'笔迹分析中常见的书写特征有哪些？',url:'article/mofang-biji/handwriting-features.html',keywords:'笔迹分析 字形 间距 力度 连笔',description:'介绍字形、间距、力度、连笔与整体布局等观察角度。',category:'模仿笔迹',date:'2026-08-01',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'个人手写字体制作需要准备多少字？',url:'article/mofang-biji/personal-font-characters.html',keywords:'个人手写字体 字稿 字符 字库',description:'介绍字稿采集、字符覆盖、整理和字体生成流程。',category:'模仿笔迹',date:'2026-07-29',image:'assets/images/font-workshop-v2.jpg'},
  {title:'学生笔迹的字形变化与书写习惯分析',url:'article/mofang-biji/student-handwriting-changes.html',keywords:'学生笔迹 字形变化 书写习惯',description:'分析不同学习阶段的字形、速度与结构控制变化。',category:'模仿笔迹',date:'2026-07-26',image:'assets/images/student-notebook-v2.jpg'},
  {title:'老人笔迹研究：力度、速度与字形特征',url:'article/mofang-biji/senior-handwriting-features.html',keywords:'老人笔迹 力度 速度 字形',description:'梳理老人手写样本中常见的力度、速度和结构变化。',category:'模仿笔迹',date:'2026-07-22',image:'assets/images/senior-handwriting-v2.jpg'},
  {title:'模仿签名需要提供哪些签字样本？',url:'article/mofang-qianming/signature-samples.html',keywords:'模仿签名 签字样本 样本',description:'说明签字样本的清晰度、数量和书写变化要求。',category:'模仿签名',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'商务签字中的速度、连笔与整体结构',url:'article/mofang-qianming/business-signature-structure.html',keywords:'商务签字 速度 连笔 结构',description:'从起笔、连写、收笔和比例认识商务签字结构。',category:'模仿签名',date:'2026-08-04',image:'assets/images/business-signing.jpg'},
  {title:'签名笔迹分析主要观察哪些特征？',url:'article/mofang-qianming/signature-features.html',keywords:'签名笔迹 字形 倾斜 连笔 力度',description:'介绍签名字形、倾斜、连接、力度与空间布局。',category:'模仿签名',date:'2026-08-02',image:'assets/images/signature-study-v2.jpg'},
  {title:'模仿签字练习中常见的结构问题',url:'article/mofang-qianming/signature-practice-problems.html',keywords:'模仿签字 练习 结构问题',description:'整理字形失衡、速度不一致和连笔生硬等问题。',category:'模仿签名',date:'2026-07-30',image:'assets/images/signature-design.jpg'},
  {title:'模仿签名费用由哪些因素决定？',url:'article/mofang-qianming/signature-price-factors.html',keywords:'模仿签名 费用 价格 因素',description:'说明样本、复杂程度、方案数量和周期对费用的影响。',category:'模仿签名',date:'2026-07-27',image:'assets/images/signature-study-v2.jpg'},
  {title:'笔迹鉴定通常采用哪些观察方法？',url:'article/biji-jianding/identification-methods.html',keywords:'笔迹鉴定 方法 字形 力度 连笔',description:'介绍笔迹鉴定常见的观察维度和样本要求。',category:'笔迹鉴定',date:'2026-08-05',image:'assets/images/document-comparison-v2.jpg'},
  {title:'笔迹真假分析需要对比哪些细节？',url:'article/biji-jianding/authenticity-comparison.html',keywords:'笔迹真假 对比 起收笔 连笔',description:'从相同字形、转折、起收笔和重复特征进行对比。',category:'笔迹鉴定',date:'2026-08-03',image:'assets/images/document-comparison-v2.jpg'},
  {title:'个人书写习惯与笔迹形成规律',url:'article/biji-jianding/handwriting-formation.html',keywords:'书写习惯 笔迹形成 规律',description:'介绍长期书写动作在字形和空间组织上的稳定特征。',category:'笔迹鉴定',date:'2026-08-01',image:'assets/images/handwritten-documents.jpg'},
  {title:'进行笔迹分析需要准备哪些样本？',url:'article/biji-jianding/identification-samples.html',keywords:'笔迹分析 样本 原件 扫描件',description:'说明自然书写样本的时间、内容与清晰度要求。',category:'笔迹鉴定',date:'2026-07-29',image:'assets/images/document-comparison-v2.jpg'},
  {title:'笔迹鉴定费用与完成周期说明',url:'article/biji-jianding/identification-price-cycle.html',keywords:'笔迹鉴定 费用 周期 价格',description:'分析样本数量、范围和交付要求对费用周期的影响。',category:'笔迹鉴定',date:'2026-07-25',image:'assets/images/handwritten-documents.jpg'},
  {title:'上海地区手写资料线上接收说明更新',url:'article/city/shanghai-service-news.html',keywords:'上海 手写资料 线上接收 文件命名 城市资讯',description:'更新上海地区手写资料命名、整页照片和补充材料规则。',category:'城市资讯',date:'2026-07-29',image:'assets/images/shanghai-document-upload.jpg'},
  {title:'笔迹服务案例展示',url:'case/index.html',keywords:'模仿笔迹案例 模仿签名案例 笔迹鉴定案例 手写字体',description:'按业务类型整理的笔迹服务案例内容。',category:'案例展示',date:'2026-08-05',image:'assets/images/handwriting-detail.jpg'},
  {title:'上海模仿笔迹综合案例',url:'case/shanghai-handwriting.html',keywords:'上海 模仿笔迹 案例 样本 字形 书写节奏',description:'展示样本整理、字形拆分、书写节奏调整与成稿过程。',category:'案例展示',date:'2026-08-02',image:'assets/images/handwriting-note-v2.jpg'},
  {title:'商务签字笔迹特征案例',url:'case/business-signature.html',keywords:'模仿签名 商务签字 案例 连笔 转折',description:'展示商务签字样本整理、结构观察和效果调整过程。',category:'案例展示',date:'2026-08-01',image:'assets/images/signature-study-v2.jpg'},
  {title:'手写文件笔迹对比案例',url:'case/document-comparison.html',keywords:'笔迹鉴定 手写文件 对比 案例 字形 力度',description:'按字形结构、书写力度与空间布局展示对比过程。',category:'案例展示',date:'2026-07-30',image:'assets/images/document-comparison-v2.jpg'},
  {title:'个人手写字体制作案例',url:'case/personal-font.html',keywords:'手写字体 字库制作 案例 字稿 字符',description:'展示字稿采集、字符整理、校正和安装测试过程。',category:'案例展示',date:'2026-07-28',image:'assets/images/font-workshop-v2.jpg'},
  {title:'多组签字样本整理案例',url:'case/multi-signature-samples.html',keywords:'模仿签名 多组签字 样本整理 案例',description:'展示不同时间与场景签字样本的分类和特征整理过程。',category:'案例展示',date:'2026-08-05',image:'assets/images/signature-design.jpg'},
  {title:'书写习惯与形成规律案例',url:'case/handwriting-habit-patterns.html',keywords:'笔迹分析 书写习惯 形成规律 案例',description:'对比多份文件中保持稳定的字形与空间组织特征。',category:'案例展示',date:'2026-08-04',image:'assets/images/handwriting-detail.jpg'},
  {title:'自然书写笔迹案例档案',url:'case/natural-handwriting-archive.html',keywords:'模仿笔迹 自然书写 行距 节奏 案例',description:'展示长段手写内容中的自然字形变化和书写节奏。',category:'案例展示',date:'2026-08-02',image:'assets/images/hero-handwriting.jpg'},
  {title:'短内容签字案例整理',url:'case/short-signature-record.html',keywords:'模仿签字 短内容 结构 案例',description:'记录短内容签字从样本选择到效果调整的过程。',category:'案例展示',date:'2026-08-01',image:'assets/images/handwritten-documents.jpg'},
  {title:'笔迹服务资讯中心',url:'news/index.html',keywords:'模仿笔迹资讯 模仿签名资讯 笔迹鉴定知识',description:'持续更新笔迹服务、案例、费用与城市资讯。',category:'资讯中心',date:'2026-08-05',image:'assets/images/handwritten-documents.jpg'},
  {title:'2026手写文件数字化整理专题上线',url:'article/news/handwriting-digital-archive-2026.html',keywords:'手写文件 数字化 扫描 归档 网站动态',description:'新增纸质材料扫描、命名、分类和长期保存专题。',category:'资讯中心',date:'2026-08-05',image:'assets/images/document-digital-archive.jpg'},
  {title:'手机拍摄手写样本清晰度指南发布',url:'article/news/mobile-scan-guide.html',keywords:'手机拍摄 手写样本 清晰度 指南',description:'介绍光线、角度、完整度和局部补充图的拍摄方法。',category:'资讯中心',date:'2026-08-04',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'手写字体字符库新增常用标点模板',url:'article/news/font-library-punctuation-update.html',keywords:'手写字体 字符库 标点 模板 更新',description:'字稿模板新增中文标点、数字和常用符号区域。',category:'资讯中心',date:'2026-08-03',image:'assets/images/font-punctuation-sheet.jpg'},
  {title:'暑期学生书写习惯观察专题更新',url:'article/news/student-handwriting-summer-topic.html',keywords:'学生书写 暑期 专题 更新',description:'新增连续书写时长、速度和字形稳定性记录。',category:'资讯中心',date:'2026-08-01',image:'assets/images/summer-handwriting-study-v2.jpg'},
  {title:'案例资料库新增四类展示标签',url:'article/news/case-library-tags-update.html',keywords:'案例资料库 标签 网站公告',description:'案例页新增四类内容筛选标签并拆分独立详情页。',category:'资讯中心',date:'2026-07-30',image:'assets/images/case-library-folders-v2.jpg'},
  {title:'上海模仿笔迹与模仿签名服务',url:'city/shanghai/index.html',keywords:'上海 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'上海本地笔迹服务、案例与资讯入口。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-design.jpg'},
  {title:'北京模仿笔迹与模仿签名服务',url:'city/beijing/index.html',keywords:'北京 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'北京本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'广州模仿笔迹与模仿签名服务',url:'city/guangzhou/index.html',keywords:'广州 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'广州本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'深圳模仿笔迹与模仿签名服务',url:'city/shenzhen/index.html',keywords:'深圳 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'深圳本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'杭州模仿笔迹与模仿签名服务',url:'city/hangzhou/index.html',keywords:'杭州 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'杭州本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'南京模仿笔迹与模仿签名服务',url:'city/nanjing/index.html',keywords:'南京 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'南京本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'成都模仿笔迹与模仿签名服务',url:'city/chengdu/index.html',keywords:'成都 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'成都本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'武汉模仿笔迹与模仿签名服务',url:'city/wuhan/index.html',keywords:'武汉 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'武汉本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'重庆模仿笔迹与模仿签名服务',url:'city/chongqing/index.html',keywords:'重庆 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'重庆本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'苏州模仿笔迹与模仿签名服务',url:'city/suzhou/index.html',keywords:'苏州 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'苏州本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'天津模仿笔迹与模仿签名服务',url:'city/tianjin/index.html',keywords:'天津 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'天津本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'西安模仿笔迹与模仿签名服务',url:'city/xian/index.html',keywords:'西安 模仿笔迹 模仿签名 笔迹鉴定 手写字体',description:'西安本地笔迹服务、资料准备与热门内容入口。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'手写样本准备文章',url:'category/mofang-biji/samples.html',keywords:'模仿笔迹 手写样本准备',description:'集中说明样本数量、清晰度、拍摄方式和不同材料的整理方法。',category:'模仿笔迹子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'笔迹特征分析文章',url:'category/mofang-biji/features.html',keywords:'模仿笔迹 笔迹特征分析',description:'从字形结构、运笔节奏、间距、力度和形成规律等角度整理相关文章。',category:'模仿笔迹子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'学生书写习惯文章',url:'category/mofang-biji/students.html',keywords:'模仿笔迹 学生书写习惯',description:'围绕学生笔迹变化、连续书写记录和样本准备方式整理内容。',category:'模仿笔迹子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'老年书写特征文章',url:'category/mofang-biji/seniors.html',keywords:'模仿笔迹 老年书写特征',description:'介绍老年书写中的速度、力度、结构变化和多时期样本比较方法。',category:'模仿笔迹子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'手写字体制作文章',url:'category/mofang-biji/fonts.html',keywords:'模仿笔迹 手写字体制作',description:'汇集字稿采集、字符模板、字体整理和成品测试相关内容。',category:'模仿笔迹子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'签字样本准备文章',url:'category/mofang-qianming/samples.html',keywords:'模仿签名 签字样本准备',description:'介绍签字样本数量、拍摄清晰度、多时期样本选择与分类方法。',category:'模仿签名子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'商务签字特征文章',url:'category/mofang-qianming/business.html',keywords:'模仿签名 商务签字特征',description:'围绕商务场景中的签字速度、连笔结构、整体比例和案例进行整理。',category:'模仿签名子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'签名笔迹分析文章',url:'category/mofang-qianming/analysis.html',keywords:'模仿签名 签名笔迹分析',description:'从字形、倾斜、连接、力度和真假对比等角度整理签名分析内容。',category:'模仿签名子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'签字练习问题文章',url:'category/mofang-qianming/practice.html',keywords:'模仿签名 签字练习问题',description:'汇集签字练习中的结构失衡、速度变化、连笔问题和案例记录。',category:'模仿签名子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'费用与周期文章',url:'category/mofang-qianming/price.html',keywords:'模仿签名 费用与周期',description:'说明样本质量、内容复杂程度、方案数量和交付时间对费用周期的影响。',category:'模仿签名子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'鉴定方法文章',url:'category/biji-jianding/methods.html',keywords:'笔迹鉴定 鉴定方法',description:'集中介绍常见观察方法、比较步骤和文件对比案例。',category:'笔迹鉴定子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'真假分析文章',url:'category/biji-jianding/authenticity.html',keywords:'笔迹鉴定 真假分析',description:'围绕相同字、起收笔、转折、连笔和重复特征进行内容整理。',category:'笔迹鉴定子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'形成规律文章',url:'category/biji-jianding/formation.html',keywords:'笔迹鉴定 形成规律',description:'介绍长期书写习惯、自然变化和稳定特征的观察方式。',category:'笔迹鉴定子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'样本要求文章',url:'category/biji-jianding/samples.html',keywords:'笔迹鉴定 样本要求',description:'说明原件、扫描件、手机照片以及不同时期样本的准备标准。',category:'笔迹鉴定子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'费用与周期文章',url:'category/biji-jianding/price.html',keywords:'笔迹鉴定 费用与周期',description:'整理分析范围、样本数量、材料清晰度和交付要求等影响因素。',category:'笔迹鉴定子栏目',date:'2026-08-06',image:'assets/images/handwriting-detail.jpg'},
  {title:'线上手写资料命名规则完成更新',url:'article/news/online-material-naming-update.html',keywords:'服务动态 线上手写资料命名规则完成更新',description:'统一整页图、细节图、补充样本和不同版本的文件命名方式。',category:'服务动态',date:'2026-08-06',image:'assets/images/document-digital-archive.jpg'},
  {title:'案例展示内容整理流程调整说明',url:'article/news/case-display-process-update.html',keywords:'服务动态 案例展示内容整理流程调整说明',description:'案例内容改为按需求、材料、整理过程和结果四个阶段展示。',category:'服务动态',date:'2026-07-27',image:'assets/images/case-library-folders-v2.jpg'},
  {title:'手写文件扫描分辨率与清晰度设置指南',url:'article/news/scan-resolution-guide.html',keywords:'资料指南 手写文件扫描分辨率与清晰度设置指南',description:'说明扫描分辨率、彩色模式、页面边缘和文件压缩的设置方法。',category:'资料指南',date:'2026-08-06',image:'assets/images/document-comparison-v2.jpg'},
  {title:'多份手写样本如何分类整理',url:'article/news/handwriting-sample-sorting-guide.html',keywords:'资料指南 多份手写样本如何分类整理',description:'按形成时间、书写场景、工具和内容类型整理多份样本。',category:'资料指南',date:'2026-08-02',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'签字样本选择与拍摄注意事项',url:'article/news/signature-sample-selection-guide.html',keywords:'资料指南 签字样本选择与拍摄注意事项',description:'介绍自然签字样本的选择、数量、角度和拍摄环境。',category:'资料指南',date:'2026-07-31',image:'assets/images/signature-sample-cards.jpg'},
  {title:'手写文件常用图片与文件格式说明',url:'article/news/handwritten-document-file-format.html',keywords:'资料指南 手写文件常用图片与文件格式说明',description:'比较 JPG、PNG、PDF 和原始扫描文件的使用场景。',category:'资料指南',date:'2026-07-26',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'自然书写节奏与行距变化专题',url:'article/news/natural-writing-rhythm-topic.html',keywords:'专题内容 自然书写节奏与行距变化专题',description:'观察长段书写中的速度、行距、字距和自然字形变化。',category:'专题内容',date:'2026-08-05',image:'assets/images/hero-handwriting.jpg'},
  {title:'老年书写样本阶段变化观察专题',url:'article/news/senior-handwriting-observation-topic.html',keywords:'专题内容 老年书写样本阶段变化观察专题',description:'按时间阶段整理老年笔迹中的力度、速度和结构变化。',category:'专题内容',date:'2026-07-29',image:'assets/images/senior-handwriting-v2.jpg'},
  {title:'商务签字整体结构专题整理',url:'article/news/business-signature-structure-topic.html',keywords:'专题内容 商务签字整体结构专题整理',description:'围绕商务签字的连写速度、整体比例和不同场景变化展开。',category:'专题内容',date:'2026-07-25',image:'assets/images/business-signing.jpg'},
  {title:'个人手写字体字稿采集专题',url:'article/news/personal-font-collection-topic.html',keywords:'专题内容 个人手写字体字稿采集专题',description:'介绍字稿模板、书写工具、字符覆盖和补字流程。',category:'专题内容',date:'2026-07-21',image:'assets/images/font-workshop-v2.jpg'},
  {title:'深圳站数字化手写材料整理说明上线',url:'article/city/shenzhen-digital-material-news.html',keywords:'城市资讯 深圳站数字化手写材料整理说明上线',description:'新增手机原图、扫描文件、PDF 合并和版本命名说明。',category:'城市资讯',date:'2026-08-06',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'北京站商务手写材料分类指南发布',url:'article/city/beijing-material-service-news.html',keywords:'城市资讯 北京站商务手写材料分类指南发布',description:'整理商务文件、签字页、批注和自然书写样本的分类方式。',category:'城市资讯',date:'2026-08-04',image:'assets/images/document-digital-archive.jpg'},
  {title:'广州站签字样本整理内容更新',url:'article/city/guangzhou-signature-service-news.html',keywords:'城市资讯 广州站签字样本整理内容更新',description:'补充商务签字、日常签名和多时期样本的整理说明。',category:'城市资讯',date:'2026-07-27',image:'assets/images/signature-sample-cards.jpg'},
  {title:'杭州站个人手写字体资料清单发布',url:'article/city/hangzhou-font-service-news.html',keywords:'城市资讯 杭州站个人手写字体资料清单发布',description:'发布测试字稿、常用字符、标点和补字清单的准备方法。',category:'城市资讯',date:'2026-07-23',image:'assets/images/font-punctuation-sheet.jpg'},
  {title:'服务动态资讯',url:'news/service.html',keywords:'资讯分类 服务动态',description:'发布网站功能、资料接收、案例展示和服务内容调整。',category:'资讯分类',date:'2026-08-06',image:'assets/images/handwritten-documents.jpg'},
  {title:'资料指南资讯',url:'news/guides.html',keywords:'资讯分类 资料指南',description:'整理手写样本拍摄、扫描、分类、命名和文件格式方法。',category:'资讯分类',date:'2026-08-06',image:'assets/images/handwritten-documents.jpg'},
  {title:'专题内容资讯',url:'news/topics.html',keywords:'资讯分类 专题内容',description:'围绕自然书写、学生与老年笔迹、商务签字和个人字体开展专题整理。',category:'资讯分类',date:'2026-08-06',image:'assets/images/handwritten-documents.jpg'},
  {title:'城市资讯资讯',url:'news/city.html',keywords:'资讯分类 城市资讯',description:'更新不同城市的资料准备重点、内容入口与本地服务说明。',category:'资讯分类',date:'2026-08-06',image:'assets/images/handwritten-documents.jpg'},
  {title:'上海模仿笔迹服务介绍',url:'city/shanghai/mofang-biji.html',keywords:'上海模仿笔迹 上海手写签字 上海手写笔迹',description:'上海模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'上海模仿签名服务介绍',url:'city/shanghai/mofang-qianming.html',keywords:'上海模仿签名 上海手写签字 上海手写笔迹',description:'上海模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'上海笔迹鉴定服务介绍',url:'city/shanghai/biji-jianding.html',keywords:'上海笔迹鉴定 上海手写签字 上海手写笔迹',description:'上海笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'上海手写字体服务介绍',url:'city/shanghai/shouxie-ziti.html',keywords:'上海手写字体 上海手写签字 上海手写笔迹',description:'上海手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'北京模仿笔迹服务介绍',url:'city/beijing/mofang-biji.html',keywords:'北京模仿笔迹 北京手写签字 北京手写笔迹',description:'北京模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'北京模仿签名服务介绍',url:'city/beijing/mofang-qianming.html',keywords:'北京模仿签名 北京手写签字 北京手写笔迹',description:'北京模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'北京笔迹鉴定服务介绍',url:'city/beijing/biji-jianding.html',keywords:'北京笔迹鉴定 北京手写签字 北京手写笔迹',description:'北京笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'北京手写字体服务介绍',url:'city/beijing/shouxie-ziti.html',keywords:'北京手写字体 北京手写签字 北京手写笔迹',description:'北京手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'广州模仿笔迹服务介绍',url:'city/guangzhou/mofang-biji.html',keywords:'广州模仿笔迹 广州手写签字 广州手写笔迹',description:'广州模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'广州模仿签名服务介绍',url:'city/guangzhou/mofang-qianming.html',keywords:'广州模仿签名 广州手写签字 广州手写笔迹',description:'广州模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'广州笔迹鉴定服务介绍',url:'city/guangzhou/biji-jianding.html',keywords:'广州笔迹鉴定 广州手写签字 广州手写笔迹',description:'广州笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'广州手写字体服务介绍',url:'city/guangzhou/shouxie-ziti.html',keywords:'广州手写字体 广州手写签字 广州手写笔迹',description:'广州手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'深圳模仿笔迹服务介绍',url:'city/shenzhen/mofang-biji.html',keywords:'深圳模仿笔迹 深圳手写签字 深圳手写笔迹',description:'深圳模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'深圳模仿签名服务介绍',url:'city/shenzhen/mofang-qianming.html',keywords:'深圳模仿签名 深圳手写签字 深圳手写笔迹',description:'深圳模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'深圳笔迹鉴定服务介绍',url:'city/shenzhen/biji-jianding.html',keywords:'深圳笔迹鉴定 深圳手写签字 深圳手写笔迹',description:'深圳笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'深圳手写字体服务介绍',url:'city/shenzhen/shouxie-ziti.html',keywords:'深圳手写字体 深圳手写签字 深圳手写笔迹',description:'深圳手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'杭州模仿笔迹服务介绍',url:'city/hangzhou/mofang-biji.html',keywords:'杭州模仿笔迹 杭州手写签字 杭州手写笔迹',description:'杭州模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'杭州模仿签名服务介绍',url:'city/hangzhou/mofang-qianming.html',keywords:'杭州模仿签名 杭州手写签字 杭州手写笔迹',description:'杭州模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'杭州笔迹鉴定服务介绍',url:'city/hangzhou/biji-jianding.html',keywords:'杭州笔迹鉴定 杭州手写签字 杭州手写笔迹',description:'杭州笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'杭州手写字体服务介绍',url:'city/hangzhou/shouxie-ziti.html',keywords:'杭州手写字体 杭州手写签字 杭州手写笔迹',description:'杭州手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'南京模仿笔迹服务介绍',url:'city/nanjing/mofang-biji.html',keywords:'南京模仿笔迹 南京手写签字 南京手写笔迹',description:'南京模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'南京模仿签名服务介绍',url:'city/nanjing/mofang-qianming.html',keywords:'南京模仿签名 南京手写签字 南京手写笔迹',description:'南京模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'南京笔迹鉴定服务介绍',url:'city/nanjing/biji-jianding.html',keywords:'南京笔迹鉴定 南京手写签字 南京手写笔迹',description:'南京笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'南京手写字体服务介绍',url:'city/nanjing/shouxie-ziti.html',keywords:'南京手写字体 南京手写签字 南京手写笔迹',description:'南京手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'成都模仿笔迹服务介绍',url:'city/chengdu/mofang-biji.html',keywords:'成都模仿笔迹 成都手写签字 成都手写笔迹',description:'成都模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'成都模仿签名服务介绍',url:'city/chengdu/mofang-qianming.html',keywords:'成都模仿签名 成都手写签字 成都手写笔迹',description:'成都模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'成都笔迹鉴定服务介绍',url:'city/chengdu/biji-jianding.html',keywords:'成都笔迹鉴定 成都手写签字 成都手写笔迹',description:'成都笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'成都手写字体服务介绍',url:'city/chengdu/shouxie-ziti.html',keywords:'成都手写字体 成都手写签字 成都手写笔迹',description:'成都手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'武汉模仿笔迹服务介绍',url:'city/wuhan/mofang-biji.html',keywords:'武汉模仿笔迹 武汉手写签字 武汉手写笔迹',description:'武汉模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'武汉模仿签名服务介绍',url:'city/wuhan/mofang-qianming.html',keywords:'武汉模仿签名 武汉手写签字 武汉手写笔迹',description:'武汉模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'武汉笔迹鉴定服务介绍',url:'city/wuhan/biji-jianding.html',keywords:'武汉笔迹鉴定 武汉手写签字 武汉手写笔迹',description:'武汉笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'武汉手写字体服务介绍',url:'city/wuhan/shouxie-ziti.html',keywords:'武汉手写字体 武汉手写签字 武汉手写笔迹',description:'武汉手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'重庆模仿笔迹服务介绍',url:'city/chongqing/mofang-biji.html',keywords:'重庆模仿笔迹 重庆手写签字 重庆手写笔迹',description:'重庆模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'重庆模仿签名服务介绍',url:'city/chongqing/mofang-qianming.html',keywords:'重庆模仿签名 重庆手写签字 重庆手写笔迹',description:'重庆模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'重庆笔迹鉴定服务介绍',url:'city/chongqing/biji-jianding.html',keywords:'重庆笔迹鉴定 重庆手写签字 重庆手写笔迹',description:'重庆笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'重庆手写字体服务介绍',url:'city/chongqing/shouxie-ziti.html',keywords:'重庆手写字体 重庆手写签字 重庆手写笔迹',description:'重庆手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'苏州模仿笔迹服务介绍',url:'city/suzhou/mofang-biji.html',keywords:'苏州模仿笔迹 苏州手写签字 苏州手写笔迹',description:'苏州模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'苏州模仿签名服务介绍',url:'city/suzhou/mofang-qianming.html',keywords:'苏州模仿签名 苏州手写签字 苏州手写笔迹',description:'苏州模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'苏州笔迹鉴定服务介绍',url:'city/suzhou/biji-jianding.html',keywords:'苏州笔迹鉴定 苏州手写签字 苏州手写笔迹',description:'苏州笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'苏州手写字体服务介绍',url:'city/suzhou/shouxie-ziti.html',keywords:'苏州手写字体 苏州手写签字 苏州手写笔迹',description:'苏州手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'天津模仿笔迹服务介绍',url:'city/tianjin/mofang-biji.html',keywords:'天津模仿笔迹 天津手写签字 天津手写笔迹',description:'天津模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'天津模仿签名服务介绍',url:'city/tianjin/mofang-qianming.html',keywords:'天津模仿签名 天津手写签字 天津手写笔迹',description:'天津模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'天津笔迹鉴定服务介绍',url:'city/tianjin/biji-jianding.html',keywords:'天津笔迹鉴定 天津手写签字 天津手写笔迹',description:'天津笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'天津手写字体服务介绍',url:'city/tianjin/shouxie-ziti.html',keywords:'天津手写字体 天津手写签字 天津手写笔迹',description:'天津手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'西安模仿笔迹服务介绍',url:'city/xian/mofang-biji.html',keywords:'西安模仿笔迹 西安手写签字 西安手写笔迹',description:'西安模仿笔迹服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-06',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'西安模仿签名服务介绍',url:'city/xian/mofang-qianming.html',keywords:'西安模仿签名 西安手写签字 西安手写笔迹',description:'西安模仿签名服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-05',image:'assets/images/signature-sample-cards.jpg'},
  {title:'西安笔迹鉴定服务介绍',url:'city/xian/biji-jianding.html',keywords:'西安笔迹鉴定 西安手写签字 西安手写笔迹',description:'西安笔迹鉴定服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-04',image:'assets/images/handwriting-analysis-lens-v2.jpg'},
  {title:'西安手写字体服务介绍',url:'city/xian/shouxie-ziti.html',keywords:'西安手写字体 西安手写签字 西安手写笔迹',description:'西安手写字体服务范围、样本要求、费用周期和常见问题。',category:'城市服务',date:'2026-08-03',image:'assets/images/font-workshop-v2.jpg'},
  {title:'关于模仿笔迹网',url:'about/index.html',keywords:'关于我们 网站定位 服务栏目',description:'了解网站定位、服务范围、内容维护方式和咨询流程。',category:'网站信息',date:'2026-08-06',image:'assets/images/og-cover-v2.jpg'},
  {title:'全国城市服务中心',url:'city/index.html',keywords:'全国城市 模仿笔迹 模仿签名 笔迹鉴定 城市服务',description:'进入12个重点城市的笔迹服务与资料内容页面。',category:'城市服务',date:'2026-08-06',image:'assets/images/hero-handwriting.jpg'},
  {title:'联系我们',url:'contact/index.html',keywords:'联系 咨询 电话 邮箱 服务时间',description:'查看服务时间、联系方式和咨询前准备事项。',category:'网站信息',date:'2026-08-05',image:'assets/images/og-cover-v2.jpg'}
];

const matchSearch=query=>{
  const q=query.trim().toLowerCase();
  if(!q)return [];
  return searchIndex.filter(item=>(item.title+item.keywords+item.description+item.category).toLowerCase().includes(q));
};

const goSearch=query=>{
  const q=query.trim();
  if(q)window.location.href=siteUrl(`search.html?q=${encodeURIComponent(q)}`);
};

document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(menu&&nav){
    const navContainer=nav.querySelector('.container');
    if(navContainer&&!navContainer.querySelector('.nav-mobile-search'))navContainer.insertAdjacentHTML('beforeend',`<a class="nav-mobile-search" href="${siteUrl('search.html')}">站内搜索</a>`);
    const backdrop=document.createElement('button');
    backdrop.className='nav-backdrop';
    backdrop.setAttribute('aria-label','关闭网站导航');
    nav.after(backdrop);
    const closeMenu=()=>{
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
      menu.setAttribute('aria-expanded','false');
      menu.querySelector('span').textContent='☰';
    };
    menu.setAttribute('aria-expanded','false');
    menu.addEventListener('click',()=>{
      const opened=nav.classList.toggle('open');
      document.body.classList.toggle('menu-open',opened);
      menu.setAttribute('aria-expanded',String(opened));
      menu.querySelector('span').textContent=opened?'×':'☰';
    });
    backdrop.addEventListener('click',closeMenu);
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  }

  const heroCopy=document.querySelector('.hero-grid>div:first-child');
  if(heroCopy&&!heroCopy.querySelector('.hero-search-inline')){
    const search=document.createElement('div');
    search.className='hero-search-inline';
    search.innerHTML='<input aria-label="首页搜索" placeholder="输入关键词，如：笔迹鉴定、模仿签名、手写笔迹"><button>搜索</button>';
    heroCopy.appendChild(search);
    const quick=document.createElement('div');
    quick.className='hero-quick';
    quick.innerHTML=`<span>热门搜索：</span><a href="${siteUrl('category/biji-jianding.html')}">笔迹鉴定</a><a href="${siteUrl('category/mofang-qianming.html')}">模仿签名</a><a href="${siteUrl('category/mofang-biji.html#font')}">手写文件</a><a href="${siteUrl('category/mofang-biji.html')}">手写笔迹</a>`;
    heroCopy.appendChild(quick);
    const heroInput=search.querySelector('input');
    search.querySelector('button')?.addEventListener('click',()=>goSearch(heroInput.value));
    heroInput?.addEventListener('keydown',event=>{if(event.key==='Enter')goSearch(heroInput.value)});
  }

  const categories=document.querySelector('.category-grid');
  if(categories&&categories.children.length===4){
    categories.insertAdjacentHTML('beforeend',`<a class="category-card" href="${siteUrl('case/index.html')}"><span class="cat-no">SERVICE 05</span><h3>鉴定案例</h3><p>笔迹特征案例内容。</p><span class="cat-arrow">→</span></a><a class="category-card" href="${siteUrl('article/shanghai-mofang-biji-price.html')}"><span class="cat-no">SERVICE 06</span><h3>费用标准</h3><p>常见服务价格说明。</p><span class="cat-arrow">→</span></a>`);
  }

  const articleImage=document.querySelector('.article-image');
  if(articleImage){
    articleImage.innerHTML=`<div class="article-photo-grid"><figure><img src="${siteUrl('assets/images/handwriting-note-v2.jpg')}" alt="手写签字服务案例"><figcaption>1. 手写签字案例</figcaption></figure><figure><img src="${siteUrl('assets/images/signature-study-v2.jpg')}" alt="模仿签名过程"><figcaption>2. 模仿签名过程</figcaption></figure><figure><img src="${siteUrl('assets/images/document-comparison-v2.jpg')}" alt="手写文件分析"><figcaption>3. 手写文件分析</figcaption></figure><figure><img src="${siteUrl('assets/images/font-workshop-v2.jpg')}" alt="手写字体整理"><figcaption>4. 手写字体整理</figcaption></figure></div>`;
  }

  const filterButtons=document.querySelectorAll('.case-filter [data-filter]');
  const caseCards=document.querySelectorAll('.case-list-card[data-category]');
  const caseCount=document.querySelector('.case-count');
  filterButtons.forEach(button=>button.addEventListener('click',()=>{
    const filter=button.dataset.filter;
    let visible=0;
    filterButtons.forEach(item=>item.classList.toggle('active',item===button));
    caseCards.forEach(card=>{
      const show=filter==='all'||card.dataset.category===filter;
      card.hidden=!show;
      if(show)visible++;
    });
    if(caseCount)caseCount.textContent=`当前展示 ${visible} 个案例。`;
  }));

  document.querySelectorAll('.header-search').forEach(box=>{
    const input=box.querySelector('[data-search]');
    const button=box.querySelector('button');
    const results=box.querySelector('.search-results');
    if(!input)return;
    const renderDropdown=()=>{
      const found=matchSearch(input.value).slice(0,6);
      if(!input.value.trim()){results?.classList.remove('show');return;}
      if(results){
        results.innerHTML=found.length?found.map(item=>`<a class="search-result" href="${siteUrl(item.url)}"><strong>${item.title}</strong><small>${item.description}</small></a>`).join(''):'<div class="search-empty">没有找到相关内容，请更换关键词</div>';
        results.classList.add('show');
      }
    };
    input.addEventListener('input',renderDropdown);
    input.addEventListener('keydown',event=>{if(event.key==='Enter')goSearch(input.value)});
    button?.addEventListener('click',()=>goSearch(input.value));
  });
  document.addEventListener('click',event=>{if(!event.target.closest('.header-search'))document.querySelectorAll('.search-results.show').forEach(el=>el.classList.remove('show'))});

  const pageForm=document.querySelector('#search-page-form');
  const pageInput=document.querySelector('#search-page-input');
  const pageResults=document.querySelector('#search-page-results');
  const pageSummary=document.querySelector('#search-summary');
  if(pageForm&&pageInput&&pageResults&&pageSummary){
    const params=new URLSearchParams(window.location.search);
    const query=params.get('q')||'';
    pageInput.value=query;
    const renderPage=value=>{
      const found=matchSearch(value);
      pageSummary.textContent=value?`“${value}”相关结果：${found.length} 条`:'请输入关键词开始搜索';
      if(!value){pageResults.innerHTML='';return;}
      pageResults.innerHTML=found.length?found.map(item=>`<article class="search-page-card"><a href="${siteUrl(item.url)}"><img src="${siteUrl(item.image)}" alt="${item.title}"></a><div><h3><a href="${siteUrl(item.url)}">${item.title}</a></h3><p>${item.description}</p><div class="search-meta">${item.category}　${item.date}</div></div></article>`).join(''):'<div class="search-page-empty">没有找到相关内容，建议搜索“模仿笔迹”“模仿签名”或“笔迹鉴定”。</div>';
    };
    renderPage(query);
    pageForm.addEventListener('submit',event=>{event.preventDefault();const value=pageInput.value.trim();if(value){try{history.replaceState(null,'',`?q=${encodeURIComponent(value)}`)}catch{}renderPage(value)}});
  }
});
