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
  {title:'模仿签名需要提供哪些签字样本？',url:'article/mofang-qianming/signature-samples.html',keywords:'模仿签名 签字样本 样本',description:'说明签字样本的清晰度、数量和书写变化要求。',category:'模仿签名',date:'2026-08-05',image:'assets/images/article-signature-sample-types-20260831.jpg'},
  {title:'商务签字中的速度、连笔与整体结构',url:'article/mofang-qianming/business-signature-structure.html',keywords:'商务签字 速度 连笔 结构',description:'从起笔、连写、收笔和比例认识商务签字结构。',category:'模仿签名',date:'2026-08-04',image:'assets/images/business-signing.jpg'},
  {title:'签名笔迹分析主要观察哪些特征？',url:'article/mofang-qianming/signature-features.html',keywords:'签名笔迹 字形 倾斜 连笔 力度',description:'介绍签名字形、倾斜、连接、力度与空间布局。',category:'模仿签名',date:'2026-08-02',image:'assets/images/signature-study-v2.jpg'},
  {title:'模仿签字练习中常见的结构问题',url:'article/mofang-qianming/signature-practice-problems.html',keywords:'模仿签字 练习 结构问题',description:'整理字形失衡、速度不一致和连笔生硬等问题。',category:'模仿签名',date:'2026-07-30',image:'assets/images/article-signature-practice-problems-20260831.jpg'},
  {title:'模仿签名费用由哪些因素决定？',url:'article/mofang-qianming/signature-price-factors.html',keywords:'模仿签名 费用 价格 因素',description:'说明样本、复杂程度、方案数量和周期对费用的影响。',category:'模仿签名',date:'2026-07-27',image:'assets/images/signature-study-v2.jpg'},
  {title:'笔迹鉴定通常采用哪些观察方法？',url:'article/biji-jianding/identification-methods.html',keywords:'笔迹鉴定 方法 字形 力度 连笔',description:'介绍笔迹鉴定常见的观察维度和样本要求。',category:'笔迹鉴定',date:'2026-08-05',image:'assets/images/document-comparison-v2.jpg'},
  {title:'笔迹真假分析需要对比哪些细节？',url:'article/biji-jianding/authenticity-comparison.html',keywords:'笔迹真假 对比 起收笔 连笔',description:'从相同字形、转折、起收笔和重复特征进行对比。',category:'笔迹鉴定',date:'2026-08-03',image:'assets/images/document-comparison-v2.jpg'},
  {title:'个人书写习惯与笔迹形成规律',url:'article/biji-jianding/handwriting-formation.html',keywords:'书写习惯 笔迹形成 规律',description:'介绍长期书写动作在字形和空间组织上的稳定特征。',category:'笔迹鉴定',date:'2026-08-01',image:'assets/images/handwritten-documents.jpg'},
  {title:'进行笔迹分析需要准备哪些样本？',url:'article/biji-jianding/identification-samples.html',keywords:'笔迹分析 样本 原件 扫描件',description:'说明自然书写样本的时间、内容与清晰度要求。',category:'笔迹鉴定',date:'2026-07-29',image:'assets/images/article-identification-samples-20260831.jpg'},
  {title:'笔迹鉴定费用与完成周期说明',url:'article/biji-jianding/identification-price-cycle.html',keywords:'笔迹鉴定 费用 周期 价格',description:'分析样本数量、范围和交付要求对费用周期的影响。',category:'笔迹鉴定',date:'2026-07-25',image:'assets/images/article-price-cycle-20260831.jpg'},
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
  {title:'2026手写文件数字化整理专题上线',url:'article/news/handwriting-digital-archive-2026.html',keywords:'手写文件 数字化 扫描 归档 网站动态',description:'新增纸质材料扫描、命名、分类和长期保存专题。',category:'资讯中心',date:'2026-08-05',image:'assets/images/article-digital-archive-20260831.jpg'},
  {title:'手机拍摄手写样本清晰度指南发布',url:'article/news/mobile-scan-guide.html',keywords:'手机拍摄 手写样本 清晰度 指南',description:'介绍光线、角度、完整度和局部补充图的拍摄方法。',category:'资讯中心',date:'2026-08-04',image:'assets/images/article-mobile-scan-20260831.jpg'},
  {title:'手写字体字符库新增常用标点模板',url:'article/news/font-library-punctuation-update.html',keywords:'手写字体 字符库 标点 模板 更新',description:'字稿模板新增中文标点、数字和常用符号区域。',category:'资讯中心',date:'2026-08-03',image:'assets/images/article-font-punctuation-20260831.jpg'},
  {title:'暑期学生书写习惯观察专题更新',url:'article/news/student-handwriting-summer-topic.html',keywords:'学生书写 暑期 专题 更新',description:'新增连续书写时长、速度和字形稳定性记录。',category:'资讯中心',date:'2026-08-01',image:'assets/images/summer-handwriting-study-v2.jpg'},
  {title:'案例资料库新增四类展示标签',url:'article/news/case-library-tags-update.html',keywords:'案例资料库 标签 网站公告',description:'案例页新增四类内容筛选标签并拆分独立详情页。',category:'资讯中心',date:'2026-07-30',image:'assets/images/article-case-library-tags-20260831.jpg'},
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
  {title:'线上手写资料命名规则完成更新',url:'article/news/online-material-naming-update.html',keywords:'服务动态 线上手写资料命名规则完成更新',description:'统一整页图、细节图、补充样本和不同版本的文件命名方式。',category:'服务动态',date:'2026-08-06',image:'assets/images/article-online-file-naming-20260831.jpg'},
  {title:'案例展示内容整理流程调整说明',url:'article/news/case-display-process-update.html',keywords:'服务动态 案例展示内容整理流程调整说明',description:'案例内容改为按需求、材料、整理过程和结果四个阶段展示。',category:'服务动态',date:'2026-07-27',image:'assets/images/case-library-folders-v2.jpg'},
  {title:'手写文件扫描分辨率与清晰度设置指南',url:'article/news/scan-resolution-guide.html',keywords:'资料指南 手写文件扫描分辨率与清晰度设置指南',description:'说明扫描分辨率、彩色模式、页面边缘和文件压缩的设置方法。',category:'资料指南',date:'2026-08-06',image:'assets/images/article-scan-resolution-20260831.jpg'},
  {title:'多份手写样本如何分类整理',url:'article/news/handwriting-sample-sorting-guide.html',keywords:'资料指南 多份手写样本如何分类整理',description:'按形成时间、书写场景、工具和内容类型整理多份样本。',category:'资料指南',date:'2026-08-02',image:'assets/images/article-sample-sorting-20260831.jpg'},
  {title:'签字样本选择与拍摄注意事项',url:'article/news/signature-sample-selection-guide.html',keywords:'资料指南 签字样本选择与拍摄注意事项',description:'介绍自然签字样本的选择、数量、角度和拍摄环境。',category:'资料指南',date:'2026-07-31',image:'assets/images/article-signature-photo-selection-20260831.jpg'},
  {title:'手写文件常用图片与文件格式说明',url:'article/news/handwritten-document-file-format.html',keywords:'资料指南 手写文件常用图片与文件格式说明',description:'比较 JPG、PNG、PDF 和原始扫描文件的使用场景。',category:'资料指南',date:'2026-07-26',image:'assets/images/article-file-formats-20260831.jpg'},
  {title:'自然书写节奏与行距变化专题',url:'article/news/natural-writing-rhythm-topic.html',keywords:'专题内容 自然书写节奏与行距变化专题',description:'观察长段书写中的速度、行距、字距和自然字形变化。',category:'专题内容',date:'2026-08-05',image:'assets/images/article-writing-rhythm-20260831.jpg'},
  {title:'老年书写样本阶段变化观察专题',url:'article/news/senior-handwriting-observation-topic.html',keywords:'专题内容 老年书写样本阶段变化观察专题',description:'按时间阶段整理老年笔迹中的力度、速度和结构变化。',category:'专题内容',date:'2026-07-29',image:'assets/images/article-senior-stage-changes-20260831.jpg'},
  {title:'商务签字整体结构专题整理',url:'article/news/business-signature-structure-topic.html',keywords:'专题内容 商务签字整体结构专题整理',description:'围绕商务签字的连写速度、整体比例和不同场景变化展开。',category:'专题内容',date:'2026-07-25',image:'assets/images/article-business-signature-structure-20260831.jpg'},
  {title:'个人手写字体字稿采集专题',url:'article/news/personal-font-collection-topic.html',keywords:'专题内容 个人手写字体字稿采集专题',description:'介绍字稿模板、书写工具、字符覆盖和补字流程。',category:'专题内容',date:'2026-07-21',image:'assets/images/article-font-batch-collection-20260831.jpg'},
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
  {title:'联系我们',url:'contact/index.html',keywords:'联系 咨询 电话 邮箱 服务时间',description:'查看服务时间、联系方式和咨询前准备事项。',category:'网站信息',date:'2026-08-05',image:'assets/images/og-cover-v2.jpg'},
  {title:'上海模仿笔迹与模仿签名怎么准备样本？手写文件整理要点',url:'city/shanghai/shanghai-mofang-biji-signature-samples.html',keywords:'上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定',description:'上海分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/handwriting-samples-flatlay-v2.jpg'},
  {title:'北京模仿签名与模仿笔迹资料怎么整理？样本分类指南',url:'city/beijing/beijing-mofang-qianming-biji-guide.html',keywords:'北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定',description:'北京分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/signature-sample-cards.jpg'},
  {title:'广州模仿签名需要哪些样本？模仿签字资料整理方法',url:'city/guangzhou/guangzhou-mofang-qianming-sample-guide.html',keywords:'广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定',description:'广州分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/business-signing.jpg'},
  {title:'深圳模仿笔迹资料如何线上提交？模仿签名文件整理指南',url:'city/shenzhen/shenzhen-mofang-biji-digital-files.html',keywords:'深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定',description:'深圳分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'杭州模仿笔迹与手写字体资料怎么准备？签名样本要点',url:'city/hangzhou/hangzhou-mofang-biji-font-samples.html',keywords:'杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定',description:'杭州分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/font-punctuation-sheet.jpg'},
  {title:'南京笔迹鉴定需要哪些对比样本？模仿笔迹观察要点',url:'city/nanjing/nanjing-biji-jianding-comparison-samples.html',keywords:'南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定',description:'南京分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/document-comparison-v2.jpg'},
  {title:'成都模仿笔迹怎样说明页面要求？模仿签字样本准备',url:'city/chengdu/chengdu-mofang-biji-page-layout.html',keywords:'成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定',description:'成都分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/handwritten-documents.jpg'},
  {title:'武汉模仿签名为什么要看自然书写？模仿签字观察说明',url:'city/wuhan/wuhan-mofang-qianming-writing-rhythm.html',keywords:'武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定',description:'武汉分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/signature-study-v2.jpg'},
  {title:'重庆模仿笔迹照片怎么拍清楚？签名与笔迹鉴定扫描建议',url:'city/chongqing/chongqing-mofang-biji-photo-scan.html',keywords:'重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定',description:'重庆分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/handwriting-note-v2.jpg'},
  {title:'苏州模仿签名商务文件如何整理？模仿签字资料清单',url:'city/suzhou/suzhou-mofang-qianming-business-files.html',keywords:'苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定',description:'苏州分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/business-signing.jpg'},
  {title:'天津模仿笔迹跨时期样本怎么选？签名与鉴定资料说明',url:'city/tianjin/tianjin-mofang-biji-multi-period-samples.html',keywords:'天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定',description:'天津分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/document-digital-archive.jpg'},
  {title:'西安笔迹鉴定原件与复印件怎么准备？模仿笔迹要点',url:'city/xian/xian-biji-jianding-original-copy.html',keywords:'西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定',description:'西安分站新文章，说明手写样本选择、文件整理与笔迹资料准备方法。',category:'城市服务',date:'2026-08-14',image:'assets/images/handwriting-detail.jpg'},
  {title:'模仿笔迹怎样选择自然手写样本？从整页文字到细节照片',url:'article/mofang-biji/natural-handwriting-sample-selection.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹',description:'模仿笔迹样本选择指南，介绍自然手写材料、整页照片、重复字、书写时间和目标文字的整理方法。',category:'模仿笔迹',date:'2026-08-14',image:'assets/images/article-natural-sample-selection-20260831.jpg'},
  {title:'模仿签名与模仿签字样本怎么分类？正式签名和快速签字的区别',url:'article/mofang-qianming/signature-versions-and-sample-sorting.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿签名',description:'说明模仿签名、模仿签字样本的分类方式，比较正式签名、快速签字、简写版本与多时期材料。',category:'模仿签名',date:'2026-08-14',image:'assets/images/article-signature-version-sorting-20260831.jpg'},
  {title:'笔迹鉴定对比材料怎么准备？原件、扫描件与自然样本说明',url:'article/biji-jianding/original-scan-comparison-materials.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 笔迹鉴定',description:'笔迹鉴定材料准备说明，介绍待分析文件、自然对比样本、原件、扫描件、相同字和形成时间的整理方法。',category:'笔迹鉴定',date:'2026-08-14',image:'assets/images/article-original-scan-materials-20260831.jpg'},
  {title:'长篇模仿笔迹怎样保持自然？字距、行距与书写节奏分析',url:'article/mofang-biji/long-text-style-consistency.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹',description:'长篇模仿笔迹怎样保持自然？字距、行距与书写节奏分析，围绕模仿笔迹、模仿签名、模仿签字与笔迹鉴定说明自然样本和文件整理方法。',category:'模仿笔迹',date:'2026-08-25',image:'assets/images/hero-handwriting.jpg'},
  {title:'模仿笔迹样本里没有相同字怎么办？偏旁与相近结构整理方法',url:'article/mofang-biji/missing-same-characters-sample.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹',description:'模仿笔迹样本里没有相同字怎么办？偏旁与相近结构整理方法，围绕模仿笔迹、模仿签名、模仿签字与笔迹鉴定说明自然样本和文件整理方法。',category:'模仿笔迹',date:'2026-08-25',image:'assets/images/article-similar-character-structures-20260831.jpg'},
  {title:'模仿签名怎样选择主要版本？正式签名、简写与快速签字比较',url:'article/mofang-qianming/formal-short-signature-versions.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿签名',description:'模仿签名怎样选择主要版本？正式签名、简写与快速签字比较，围绕模仿笔迹、模仿签名、模仿签字与笔迹鉴定说明自然样本和文件整理方法。',category:'模仿签名',date:'2026-08-25',image:'assets/images/signature-study-v2.jpg'},
  {title:'模仿签字照片怎么选？不同场景、书写工具与纸张的影响',url:'article/mofang-qianming/signature-photo-scene-differences.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿签名',description:'模仿签字照片怎么选？不同场景、书写工具与纸张的影响，围绕模仿笔迹、模仿签名、模仿签字与笔迹鉴定说明自然样本和文件整理方法。',category:'模仿签名',date:'2026-08-25',image:'assets/images/article-signature-scene-materials-20260831.jpg'},
  {title:'笔迹鉴定为什么重视同期样本？形成时间与自然变化说明',url:'article/biji-jianding/same-period-comparison-samples.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 笔迹鉴定',description:'笔迹鉴定为什么重视同期样本？形成时间与自然变化说明，围绕模仿笔迹、模仿签名、模仿签字与笔迹鉴定说明自然样本和文件整理方法。',category:'笔迹鉴定',date:'2026-08-25',image:'assets/images/article-same-period-samples-20260831.jpg'},
  {title:'上海商务签批与日常手写样本怎样分组？模仿笔迹整理方法',url:'city/shanghai/shanghai-business-handwriting-groups.html',keywords:'上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定',description:'上海商务签批与日常手写样本怎样分组？模仿笔迹整理方法，围绕上海模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/business-signing.jpg'},
  {title:'北京多页模仿笔迹资料怎样编号？签名与鉴定文件清单',url:'city/beijing/beijing-multipage-file-numbering.html',keywords:'北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定',description:'北京多页模仿笔迹资料怎样编号？签名与鉴定文件清单，围绕北京模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/document-digital-archive.jpg'},
  {title:'广州模仿签名样本怎样按场景选择？模仿签字版本说明',url:'city/guangzhou/guangzhou-signature-scene-selection.html',keywords:'广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定',description:'广州模仿签名样本怎样按场景选择？模仿签字版本说明，围绕广州模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/signature-sample-cards.jpg'},
  {title:'深圳模仿笔迹线上资料怎么保存？手机原图与PDF整理方法',url:'city/shenzhen/shenzhen-original-photo-pdf-sorting.html',keywords:'深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定',description:'深圳模仿笔迹线上资料怎么保存？手机原图与PDF整理方法，围绕深圳模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'杭州手写文案版式如何说明？模仿笔迹行数与落款整理',url:'city/hangzhou/hangzhou-handwritten-copy-layout.html',keywords:'杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定',description:'杭州手写文案版式如何说明？模仿笔迹行数与落款整理，围绕杭州模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/handwritten-documents.jpg'},
  {title:'南京笔迹鉴定同期样本怎么找？模仿笔迹对比资料说明',url:'city/nanjing/nanjing-same-period-identification.html',keywords:'南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定',description:'南京笔迹鉴定同期样本怎么找？模仿笔迹对比资料说明，围绕南京模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/document-comparison-v2.jpg'},
  {title:'成都长篇模仿笔迹怎样确定行距？整页手写内容准备',url:'city/chengdu/chengdu-long-handwriting-line-spacing.html',keywords:'成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定',description:'成都长篇模仿笔迹怎样确定行距？整页手写内容准备，围绕成都模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/hero-handwriting.jpg'},
  {title:'武汉模仿签字多个版本怎么选？正式签名与快速签写比较',url:'city/wuhan/wuhan-signature-version-comparison.html',keywords:'武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定',description:'武汉模仿签字多个版本怎么选？正式签名与快速签写比较，围绕武汉模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/signature-study-v2.jpg'},
  {title:'重庆弯曲纸张上的笔迹怎么拍？模仿签名与鉴定照片建议',url:'city/chongqing/chongqing-curved-paper-photo.html',keywords:'重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定',description:'重庆弯曲纸张上的笔迹怎么拍？模仿签名与鉴定照片建议，围绕重庆模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/handwriting-note-v2.jpg'},
  {title:'苏州商务签字中的日期和短句怎么整理？模仿签名资料说明',url:'city/suzhou/suzhou-signature-date-short-text.html',keywords:'苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定',description:'苏州商务签字中的日期和短句怎么整理？模仿签名资料说明，围绕苏州模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/business-signing.jpg'},
  {title:'天津模仿笔迹中的数字与日期怎么准备？签字样本要点',url:'city/tianjin/tianjin-numbers-dates-samples.html',keywords:'天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定',description:'天津模仿笔迹中的数字与日期怎么准备？签字样本要点，围绕天津模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/font-punctuation-sheet.jpg'},
  {title:'西安笔迹鉴定扫描用彩色还是灰度？模仿笔迹图片保存说明',url:'city/xian/xian-scan-color-mode.html',keywords:'西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定',description:'西安笔迹鉴定扫描用彩色还是灰度？模仿笔迹图片保存说明，围绕西安模仿笔迹、模仿签名、模仿签字和笔迹鉴定介绍资料准备方法。',category:'城市服务',date:'2026-08-25',image:'assets/images/handwriting-detail.jpg'},
  {title:'手写样本完整页与细节图提交方式更新',url:'article/news/full-page-detail-image-update.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 资讯',description:'手写样本完整页与细节图提交方式更新，围绕模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新资料整理说明。',category:'资料指南',date:'2026-08-25',image:'assets/images/article-full-page-detail-images-20260831.jpg'},
  {title:'多时期签名与笔迹对比专题内容上线',url:'article/news/multi-period-signature-comparison-topic.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 资讯',description:'多时期签名与笔迹对比专题内容上线，围绕模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新资料整理说明。',category:'专题内容',date:'2026-08-25',image:'assets/images/article-multi-period-signatures-20260831.jpg'},
  {title:'上海站手写样本清单新增页码与场景说明',url:'city/shanghai/shanghai-sample-list-update.html',keywords:'上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定',description:'上海站手写样本清单新增页码与场景说明，围绕上海模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/document-digital-archive.jpg'},
  {title:'北京站签名样本新增正式版与简写版分组',url:'city/beijing/beijing-signature-group-update.html',keywords:'北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定',description:'北京站签名样本新增正式版与简写版分组，围绕北京模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/signature-sample-cards.jpg'},
  {title:'广州站手机拍摄手写文件补充光线与角度说明',url:'city/guangzhou/guangzhou-mobile-photo-update.html',keywords:'广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定',description:'广州站手机拍摄手写文件补充光线与角度说明，围绕广州模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/mobile-document-scan-v2.jpg'},
  {title:'深圳站线上资料新增版本日期与原图标记',url:'city/shenzhen/shenzhen-file-version-update.html',keywords:'深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定',description:'深圳站线上资料新增版本日期与原图标记，围绕深圳模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/document-digital-archive.jpg'},
  {title:'杭州站手写文案新增版式确认清单',url:'city/hangzhou/hangzhou-layout-check-update.html',keywords:'杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定',description:'杭州站手写文案新增版式确认清单，围绕杭州模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/handwritten-documents.jpg'},
  {title:'南京站笔迹鉴定资料新增同期样本提示',url:'city/nanjing/nanjing-same-period-update.html',keywords:'南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定',description:'南京站笔迹鉴定资料新增同期样本提示，围绕南京模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/document-comparison-v2.jpg'},
  {title:'成都站长篇模仿笔迹新增整页检查步骤',url:'city/chengdu/chengdu-long-text-check-update.html',keywords:'成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定',description:'成都站长篇模仿笔迹新增整页检查步骤，围绕成都模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/hero-handwriting.jpg'},
  {title:'武汉站模仿签字新增主要版本确认项',url:'city/wuhan/wuhan-signature-version-update.html',keywords:'武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定',description:'武汉站模仿签字新增主要版本确认项，围绕武汉模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/signature-study-v2.jpg'},
  {title:'重庆站曲面文件拍摄新增原图保存说明',url:'city/chongqing/chongqing-original-photo-update.html',keywords:'重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定',description:'重庆站曲面文件拍摄新增原图保存说明，围绕重庆模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/handwriting-note-v2.jpg'},
  {title:'苏州站商务签字新增日期与短句分类',url:'city/suzhou/suzhou-business-signing-update.html',keywords:'苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定',description:'苏州站商务签字新增日期与短句分类，围绕苏州模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/business-signing.jpg'},
  {title:'天津站手写数字样本新增日期与编号清单',url:'city/tianjin/tianjin-number-sample-update.html',keywords:'天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定',description:'天津站手写数字样本新增日期与编号清单，围绕天津模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/font-punctuation-sheet.jpg'},
  {title:'西安站扫描资料新增彩色底稿保存提示',url:'city/xian/xian-color-scan-update.html',keywords:'西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定',description:'西安站扫描资料新增彩色底稿保存提示，围绕西安模仿笔迹、模仿签名、模仿签字和笔迹鉴定更新服务资料。',category:'城市资讯',date:'2026-08-25',image:'assets/images/handwriting-detail.jpg'},
  {title:'模仿笔迹短句与整页内容有什么区别？样本和版式准备方法',url:'article/mofang-biji/short-sentence-full-page-differences.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹',description:'模仿笔迹短句与整页内容有什么区别？样本和版式准备方法，围绕模仿笔迹、模仿签名、模仿签字和笔迹鉴定说明自然样本与文件整理方法。',category:'模仿笔迹',date:'2026-08-31',image:'assets/images/article-short-vs-full-page-20260831.png'},
  {title:'模仿签名为什么需要多次重复签写？稳定特征与自然变化',url:'article/mofang-qianming/repeated-signatures-stable-features.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿签名',description:'模仿签名为什么需要多次重复签写？稳定特征与自然变化，围绕模仿笔迹、模仿签名、模仿签字和笔迹鉴定说明自然样本与文件整理方法。',category:'模仿签名',date:'2026-08-31',image:'assets/images/article-repeated-signature-samples-20260831.png'},
  {title:'笔迹鉴定图片被压缩会丢失什么？原图、截图与扫描件比较',url:'article/biji-jianding/compressed-images-detail-loss.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 笔迹鉴定',description:'笔迹鉴定图片被压缩会丢失什么？原图、截图与扫描件比较，围绕模仿笔迹、模仿签名、模仿签字和笔迹鉴定说明自然样本与文件整理方法。',category:'笔迹鉴定',date:'2026-08-31',image:'assets/images/article-original-scan-compressed-20260831.png'},
  {title:'一页手写材料拍了三次，模仿笔迹参考图为什么仍要保留原件边缘',url:'article/mofang-biji/full-page-photo-keep-edges.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 模仿笔迹参考图 手写文件拍照 完整页面 原图保存 模仿笔迹能鉴定出来吗',description:'从一页手写材料的三种照片说起，说明模仿笔迹参考图为什么要保留页面边缘、原始比例和未经压缩的完整图。',category:'模仿笔迹',date:'2026-09-02',image:'assets/images/article-page-edge-reference-20260902.jpg'},
  {title:'同一个名字签了五遍都不完全相同：模仿签名要看的是稳定动作',url:'article/mofang-qianming/five-signatures-stable-motion.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 多次签名样本 签名稳定特征 签名自然变化 模仿签名能鉴定出来吗 模仿签名技巧',description:'同一个名字连续签五遍也会有自然差别。文章从真实书写变化入手，说明模仿签名样本中稳定动作与偶然差异怎么看。',category:'模仿签名',date:'2026-09-02',image:'assets/images/article-five-signature-variation-20260902.jpg'},
  {title:'合同末页空间变窄时，模仿签字的大小和收笔会跟着变',url:'article/mofang-qianming/contract-last-page-signing-space.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 合同末页签字 签字位置 快速签字 模仿签字能鉴别出来吗 签字样本',description:'合同末页签字区域变窄，签字大小、倾斜和收笔会自然调整。结合模仿签字场景说明为什么样本要保留页面位置。',category:'模仿签名',date:'2026-09-02',image:'assets/images/article-narrow-signing-space-20260902.jpg'},
  {title:'先别急着问准不准——笔迹鉴定结果取决于这些材料条件',url:'article/biji-jianding/accuracy-depends-on-materials.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 笔迹鉴定准确吗 笔迹鉴定流程 笔迹鉴定机构哪里有 同期样本 笔迹鉴定材料',description:'笔迹鉴定准确吗，不能脱离材料条件回答。原件、同期自然样本、图像质量和文件来源都会影响可比较范围。',category:'笔迹鉴定',date:'2026-09-02',image:'assets/images/article-identification-material-conditions-20260902.jpg'},
  {title:'笔迹鉴定收费标准背后：页数、样本时期与图像质量怎样影响工作量',url:'article/biji-jianding/pricing-workload-factors.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 笔迹鉴定收费标准 笔迹鉴定费用 笔迹鉴定一个字多少钱 笔迹鉴定机构 材料页数',description:'解读笔迹鉴定收费标准背后的实际工作量，说明文件页数、样本时期、图像质量和检材数量为何会影响费用沟通。',category:'笔迹鉴定',date:'2026-09-02',image:'assets/images/article-identification-workload-cost-20260902.jpg'},
  {title:'完整页面比局部近照多告诉我们什么：模仿笔迹样本整理实录',url:'article/mofang-biji/complete-page-vs-closeup.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 手写文件 自然样本 原图保存',description:'页面边缘、行距、留白和落款位置只有放回整页才能看清，局部近照更适合补充笔画细节。文章结合实际资料说明完整页面、文件版本和样本来源的整理方法。',category:'模仿笔迹',date:'2026-09-15',image:'assets/images/article-main-complete-page-20260915.jpg'},
  {title:'正式版、日常版、快速版放在一起，模仿签名的差别才看得清',url:'article/mofang-qianming/three-signature-versions.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 手写文件 自然样本 原图保存',description:'同一姓名在正式落款、日常签收和快速登记中会形成不同版本，比较前应按场景分开。文章结合实际资料说明完整页面、文件版本和样本来源的整理方法。',category:'模仿签名',date:'2026-09-15',image:'assets/images/article-main-signature-versions-20260915.jpg'},
  {title:'原件、扫描件和聊天截图排成一列，笔迹鉴定先从图像来源说起',url:'article/biji-jianding/original-scan-chat-image.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 手写文件 自然样本 原图保存',description:'原件、扫描件与聊天截图保留的信息不同，先标明来源和转发过程，后续查看才不会混淆。文章结合实际资料说明完整页面、文件版本和样本来源的整理方法。',category:'笔迹鉴定',date:'2026-09-15',image:'assets/images/article-main-original-scan-20260915.jpg'},
  {title:'北京会议记录页数较多时，模仿笔迹资料先按会议与年份拆开',url:'city/beijing/meeting-notes-by-year.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定 手写文件',description:'会议记录常有多页和多次批注，先按会议日期、页码和形成年份建立对应关系。本文从北京实际资料整理角度说明页面、版本与原图的保存方法。',category:'北京服务指南',date:'2026-09-15',image:'assets/images/article-beijing-01-20260915.jpg'},
  {title:'签字栏只有一行，北京模仿签名样本为什么还要保留整页',url:'city/beijing/narrow-signature-line-full-page.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定 手写文件',description:'一行签字栏会限制签字长度，整页图能说明栏位宽度、落款位置和周围表格。本文从北京实际资料整理角度说明页面、版本与原图的保存方法。',category:'北京服务指南',date:'2026-09-15',image:'assets/images/article-beijing-02-20260915.jpg'},
  {title:'北京笔迹鉴定材料跨了几年，先做一张时间清单再比较',url:'city/beijing/samples-across-years.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 北京模仿笔迹 北京模仿签名 北京模仿签字 北京笔迹鉴定 手写文件',description:'跨年份材料要区分早期、同期和近期样本，避免把自然变化误当成同一阶段的差异。本文从北京实际资料整理角度说明页面、版本与原图的保存方法。',category:'北京服务指南',date:'2026-09-15',image:'assets/images/article-beijing-03-20260915.jpg'},
  {title:'上海商务手写文件改了三版，模仿笔迹样本别只留最终稿',url:'city/shanghai/business-draft-three-versions.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定 手写文件',description:'初稿、修改稿和定稿各有书写状态，保留版本顺序更容易看出连续正文的变化。本文从上海实际资料整理角度说明页面、版本与原图的保存方法。',category:'上海服务指南',date:'2026-09-15',image:'assets/images/article-shanghai-01-20260915.jpg'},
  {title:'同一姓名有正式版和简写版，上海模仿签名资料这样分组更清楚',url:'city/shanghai/formal-and-short-signatures.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定 手写文件',description:'正式版与简写版的长度、连接和收笔不同，混在一组会削弱样本的可读性。本文从上海实际资料整理角度说明页面、版本与原图的保存方法。',category:'上海服务指南',date:'2026-09-15',image:'assets/images/article-shanghai-02-20260915.jpg'},
  {title:'从原件到扫描件：上海笔迹鉴定材料怎样保留对应关系',url:'city/shanghai/original-to-scan-links.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 上海模仿笔迹 上海模仿签名 上海模仿签字 上海笔迹鉴定 手写文件',description:'原件页码、扫描文件名和局部图片应使用同一编号，确保任何细节都能回到原始页面。本文从上海实际资料整理角度说明页面、版本与原图的保存方法。',category:'上海服务指南',date:'2026-09-15',image:'assets/images/article-shanghai-03-20260915.jpg'},
  {title:'广州签收单和手写备注放在一起，模仿笔迹样本应该怎样拆分',url:'city/guangzhou/receipts-and-notes.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定 手写文件',description:'签收单、备注和连续正文的书写速度不同，分组后再看相同字更符合实际场景。本文从广州实际资料整理角度说明页面、版本与原图的保存方法。',category:'广州服务指南',date:'2026-09-15',image:'assets/images/article-guangzhou-01-20260915.jpg'},
  {title:'笔尖粗细换了以后，广州模仿签名为什么看起来会变',url:'city/guangzhou/pen-tip-thickness.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定 手写文件',description:'粗细不同的笔尖会改变线条边缘和转折观感，纸张与工具信息应随样本一起保留。本文从广州实际资料整理角度说明页面、版本与原图的保存方法。',category:'广州服务指南',date:'2026-09-15',image:'assets/images/article-guangzhou-02-20260915.jpg'},
  {title:'手机拍广州手写文件，四个纸角留全比拍得很近更重要',url:'city/guangzhou/phone-photo-four-corners.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 广州模仿笔迹 广州模仿签名 广州模仿签字 广州笔迹鉴定 手写文件',description:'四个纸角能交代页面比例和拍摄方向，近照则作为补充，两种图片不能互相替代。本文从广州实际资料整理角度说明页面、版本与原图的保存方法。',category:'广州服务指南',date:'2026-09-15',image:'assets/images/article-guangzhou-03-20260915.jpg'},
  {title:'深圳手写文件进入电脑前，模仿笔迹图片命名先统一',url:'city/shenzhen/digital-file-naming.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定 手写文件',description:'多设备传图最容易产生重复文件，先约定日期、页码和版本，归档后才能快速定位。本文从深圳实际资料整理角度说明页面、版本与原图的保存方法。',category:'深圳服务指南',date:'2026-09-15',image:'assets/images/article-shenzhen-01-20260915.jpg'},
  {title:'手机、扫描仪与平板预览：深圳笔迹鉴定图片不要混成同一版本',url:'city/shenzhen/phone-scanner-tablet.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定 手写文件',description:'手机照片、扫描件和平板预览的尺寸与颜色不同，应在文件名中直接标明获取方式。本文从深圳实际资料整理角度说明页面、版本与原图的保存方法。',category:'深圳服务指南',date:'2026-09-15',image:'assets/images/article-shenzhen-02-20260915.jpg'},
  {title:'深圳模仿签字材料有三个版本，颜色标签比反复改文件名更省事',url:'city/shenzhen/three-versions-color-labels.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 深圳模仿笔迹 深圳模仿签名 深圳模仿签字 深圳笔迹鉴定 手写文件',description:'正式、日常和快速版本分别使用固定标签，既保留原文件名，也能看出使用场景。本文从深圳实际资料整理角度说明页面、版本与原图的保存方法。',category:'深圳服务指南',date:'2026-09-15',image:'assets/images/article-shenzhen-03-20260915.jpg'},
  {title:'行距和留白先定下来，杭州模仿笔迹长页才不会越写越挤',url:'city/hangzhou/line-spacing-and-margins.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定 手写文件',description:'长页书写到后半段容易压缩行距，先记录纸张规格和段落位置更便于还原版面。本文从杭州实际资料整理角度说明页面、版本与原图的保存方法。',category:'杭州服务指南',date:'2026-09-15',image:'assets/images/article-hangzhou-01-20260915.jpg'},
  {title:'纸张一换，杭州模仿签名的线条粗细为什么也会跟着变',url:'city/hangzhou/paper-and-pen-width.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定 手写文件',description:'光滑纸与吸墨纸会呈现不同线条，比较签名时要同时记录纸张和笔尖。本文从杭州实际资料整理角度说明页面、版本与原图的保存方法。',category:'杭州服务指南',date:'2026-09-15',image:'assets/images/article-hangzhou-02-20260915.jpg'},
  {title:'杭州手写页边批注较多，笔迹鉴定前先保留完整版面',url:'city/hangzhou/margin-notes-full-layout.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 杭州模仿笔迹 杭州模仿签名 杭州模仿签字 杭州笔迹鉴定 手写文件',description:'页边批注的方向和空间受页面限制，裁掉正文或纸边会失去重要的位置参照。本文从杭州实际资料整理角度说明页面、版本与原图的保存方法。',category:'杭州服务指南',date:'2026-09-15',image:'assets/images/article-hangzhou-03-20260915.jpg'},
  {title:'南京笔迹鉴定为什么重视同期样本：先把时间范围缩小',url:'city/nanjing/same-period-samples.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定 手写文件',description:'与待分析文件形成时间接近的自然样本，更能反映当时的书写状态和稳定习惯。本文从南京实际资料整理角度说明页面、版本与原图的保存方法。',category:'南京服务指南',date:'2026-09-15',image:'assets/images/article-nanjing-01-20260915.jpg'},
  {title:'原件、复印件、彩色扫描件，南京笔迹鉴定材料别放错顺序',url:'city/nanjing/original-copy-color-scan.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定 手写文件',description:'三种材料的信息层级不同，目录中应先写原件，再写复制方式和对应页码。本文从南京实际资料整理角度说明页面、版本与原图的保存方法。',category:'南京服务指南',date:'2026-09-15',image:'assets/images/article-nanjing-02-20260915.jpg'},
  {title:'南京模仿签名样本来自不同场景，比较前先认清签字版本',url:'city/nanjing/signature-scenes.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 南京模仿笔迹 南京模仿签名 南京模仿签字 南京笔迹鉴定 手写文件',description:'合同落款、快递签收和签到表属于不同场景，应先确定常用版本，再在组内比较。本文从南京实际资料整理角度说明页面、版本与原图的保存方法。',category:'南京服务指南',date:'2026-09-15',image:'assets/images/article-nanjing-03-20260915.jpg'},
  {title:'写到第二页后行距变松，成都模仿笔迹要看长文节奏',url:'city/chengdu/long-text-rhythm.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定 手写文件',description:'连续写到第二页后，速度、字距和段落节奏会自然变化，不能只用开头几行代表整篇。本文从成都实际资料整理角度说明页面、版本与原图的保存方法。',category:'成都服务指南',date:'2026-09-15',image:'assets/images/article-chengdu-01-20260915.jpg'},
  {title:'笔记本与散页尺寸不同，成都手写文件先记录页面规格',url:'city/chengdu/notebook-and-loose-pages.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定 手写文件',description:'装订本和散页的支撑、边距不同，整理时应保留页面尺寸与装订位置。本文从成都实际资料整理角度说明页面、版本与原图的保存方法。',category:'成都服务指南',date:'2026-09-15',image:'assets/images/article-chengdu-02-20260915.jpg'},
  {title:'成都模仿签字样本不必求多，来源清楚比重复截图更重要',url:'city/chengdu/clear-source-over-quantity.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 成都模仿笔迹 成都模仿签名 成都模仿签字 成都笔迹鉴定 手写文件',description:'重复转发的截图不等于新样本，来源、日期和场景明确的自然签字更便于整理。本文从成都实际资料整理角度说明页面、版本与原图的保存方法。',category:'成都服务指南',date:'2026-09-15',image:'assets/images/article-chengdu-03-20260915.jpg'},
  {title:'武汉模仿签名遇到三个常用版本，先找使用频率最高的一组',url:'city/wuhan/three-common-signatures.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定 手写文件',description:'常用版本应结合实际文件判断，不以最工整的一张作为唯一标准。本文从武汉实际资料整理角度说明页面、版本与原图的保存方法。',category:'武汉服务指南',date:'2026-09-15',image:'assets/images/article-wuhan-01-20260915.jpg'},
  {title:'日期、短句和落款连在一起，武汉模仿签字别只截姓名',url:'city/wuhan/date-note-and-signature.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定 手写文件',description:'日期与短句能说明签字当时的书写速度和页面位置，保留完整区域更有参照。本文从武汉实际资料整理角度说明页面、版本与原图的保存方法。',category:'武汉服务指南',date:'2026-09-15',image:'assets/images/article-wuhan-02-20260915.jpg'},
  {title:'武汉笔迹鉴定图片偏色时，彩色原图要单独保存',url:'city/wuhan/color-cast-original-image.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 武汉模仿笔迹 武汉模仿签名 武汉模仿签字 武汉笔迹鉴定 手写文件',description:'暖色、冷色和灰度版本可能改变墨迹观感，未经调整的原图应作为独立版本保存。本文从武汉实际资料整理角度说明页面、版本与原图的保存方法。',category:'武汉服务指南',date:'2026-09-15',image:'assets/images/article-wuhan-03-20260915.jpg'},
  {title:'纸张卷曲又有阴影，重庆模仿笔迹照片怎样保留真实比例',url:'city/chongqing/curled-paper-proportions.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定 手写文件',description:'卷曲页面先轻压四角并垂直拍摄，阴影严重时补拍，但不要覆盖第一张原图。本文从重庆实际资料整理角度说明页面、版本与原图的保存方法。',category:'重庆服务指南',date:'2026-09-15',image:'assets/images/article-chongqing-01-20260915.jpg'},
  {title:'装订线附近的字容易变形，重庆手写文件要连同书脊一起看',url:'city/chongqing/notebook-gutter-writing.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定 手写文件',description:'靠近书脊时手腕活动范围变小，字形与行向可能变化，页面结构必须一并保留。本文从重庆实际资料整理角度说明页面、版本与原图的保存方法。',category:'重庆服务指南',date:'2026-09-15',image:'assets/images/article-chongqing-02-20260915.jpg'},
  {title:'重庆笔迹鉴定收到多次转发图片，先追溯第一份原图',url:'city/chongqing/trace-first-original-photo.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 重庆模仿笔迹 重庆模仿签名 重庆模仿签字 重庆笔迹鉴定 手写文件',description:'转发、裁切和调色会逐步丢失细节，先找到最早文件，再记录后续版本。本文从重庆实际资料整理角度说明页面、版本与原图的保存方法。',category:'重庆服务指南',date:'2026-09-15',image:'assets/images/article-chongqing-03-20260915.jpg'},
  {title:'苏州商务文件上的模仿签名，正式落款与日常简写分开整理',url:'city/suzhou/business-formal-and-daily.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定 手写文件',description:'商务落款与日常简写用途不同，按场景分组能避免把版本差异当成随机变化。本文从苏州实际资料整理角度说明页面、版本与原图的保存方法。',category:'苏州服务指南',date:'2026-09-15',image:'assets/images/article-suzhou-01-20260915.jpg'},
  {title:'日期和短句紧挨签字，苏州模仿签字样本应保留多大范围',url:'city/suzhou/date-note-crop-range.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定 手写文件',description:'至少保留完整落款区、日期和相邻短句，同时另存整页照片作为位置参照。本文从苏州实际资料整理角度说明页面、版本与原图的保存方法。',category:'苏州服务指南',date:'2026-09-15',image:'assets/images/article-suzhou-02-20260915.jpg'},
  {title:'苏州模仿笔迹资料分成三组后，长文与便笺不再混在一起',url:'city/suzhou/three-sample-groups.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 苏州模仿笔迹 苏州模仿签名 苏州模仿签字 苏州笔迹鉴定 手写文件',description:'长文、便笺和正式文件分开后，行距、速度与用笔差异更容易理解。本文从苏州实际资料整理角度说明页面、版本与原图的保存方法。',category:'苏州服务指南',date:'2026-09-15',image:'assets/images/article-suzhou-03-20260915.jpg'},
  {title:'数字和日期反复出现，天津模仿笔迹样本可先做字符清单',url:'city/tianjin/numbers-and-dates.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定 手写文件',description:'数字、日期和金额写法出现频率高，可先做索引，再回到原页查看上下文。本文从天津实际资料整理角度说明页面、版本与原图的保存方法。',category:'天津服务指南',date:'2026-09-15',image:'assets/images/article-tianjin-01-20260915.jpg'},
  {title:'天津笔迹鉴定遇到跨时期材料，旧样本与近期样本分别说明',url:'city/tianjin/samples-from-different-periods.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定 手写文件',description:'纸张年代与书写时期应分别记录，旧样本不能与近期材料无标记地混排。本文从天津实际资料整理角度说明页面、版本与原图的保存方法。',category:'天津服务指南',date:'2026-09-15',image:'assets/images/article-tianjin-02-20260915.jpg'},
  {title:'天津多页表格手写内容，页码与局部照片要用同一编号',url:'city/tianjin/multipage-form-numbering.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 天津模仿笔迹 天津模仿签名 天津模仿签字 天津笔迹鉴定 手写文件',description:'整页、局部和补拍照片沿用同一页码，查看局部时能立即找到对应表格。本文从天津实际资料整理角度说明页面、版本与原图的保存方法。',category:'天津服务指南',date:'2026-09-15',image:'assets/images/article-tianjin-03-20260915.jpg'},
  {title:'西安笔迹鉴定看原件还是复印件，先说明材料从哪里来',url:'city/xian/original-or-photocopy.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定 手写文件',description:'原件与复印件可观察的信息不同，咨询前先说明持有形式和复制次数。本文从西安实际资料整理角度说明页面、版本与原图的保存方法。',category:'西安服务指南',date:'2026-09-15',image:'assets/images/article-xian-01-20260915.jpg'},
  {title:'彩色扫描与灰度扫描差别明显，西安手写文件不要只留一种',url:'city/xian/color-vs-grayscale-scan.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定 手写文件',description:'彩色扫描保留墨色与纸色，灰度版本便于阅读，两者应对应同一原页。本文从西安实际资料整理角度说明页面、版本与原图的保存方法。',category:'西安服务指南',date:'2026-09-15',image:'assets/images/article-xian-02-20260915.jpg'},
  {title:'西安模仿签名样本装进档案袋前，日期和场景先写清楚',url:'city/xian/archive-envelope-labels.html',keywords:'模仿笔迹 模仿签名 模仿签字 笔迹鉴定 西安模仿笔迹 西安模仿签名 西安模仿签字 西安笔迹鉴定 手写文件',description:'档案袋外先标明日期、场景与版本，取出后仍能知道每张签名从哪里来。本文从西安实际资料整理角度说明页面、版本与原图的保存方法。',category:'西安服务指南',date:'2026-09-15',image:'assets/images/article-xian-03-20260915.jpg'}
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
