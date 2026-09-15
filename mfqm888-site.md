# Codex 项目迁移说明

本文用于把 `www.mfqm888.com` 网站项目迁移到新电脑或新安装的 Codex，并继续进行网站维护、文章更新和 GitHub 部署。

## 一、当前项目资料

- 网站名称：模仿笔迹网
- 正式网址：<https://www.mfqm888.com>
- GitHub 账号：`ccok889`
- GitHub 仓库：`ccok889/mfqm888-site`
- 仓库地址：<https://github.com/ccok889/mfqm888-site>
- 生产分支：`main`
- 部署方式：GitHub + Cloudflare Pages
- Cloudflare Pages 项目：`mfqm888-site`
- Pages 临时域名：<https://mfqm888-site.pages.dev>

## 二、新电脑需要安装的软件

1. Codex 或 ChatGPT 桌面应用
2. Git
3. GitHub CLI，建议安装

安装完成后，使用现在相同的 ChatGPT 账号登录 Codex。

如果使用 GitHub CLI，在终端执行：

```bash
gh auth login
```

按照提示登录现在使用的 GitHub 账号 `ccok889`。

## 三、把网站下载到新电脑

打开新电脑终端，执行：

```bash
cd ~/Documents
git clone https://github.com/ccok889/mfqm888-site.git
cd mfqm888-site
git status -sb
git log -3 --oneline
```

正常情况下，Git 状态应显示：

```text
## main...origin/main
```

这表示新电脑中的网站代码已经和 GitHub 主分支同步。

## 四、在新 Codex 中打开项目

1. 打开 Codex。
2. 选择“添加项目”或“打开文件夹”。
3. 选择刚下载的 `mfqm888-site` 文件夹。
4. 将这个文件夹设为项目的主要文件夹。
5. 在该项目中创建一个新任务。

## 五、发给新 Codex 的第一条指令

复制下面整段内容，发送给新电脑上的 Codex：

> 请先完整阅读 `网站签名.md`、`DEPLOYMENT.md` 和 `mfqm888-site.md`，检查当前 Git 分支、最新提交、网站目录和线上状态。
>
> 这是 `www.mfqm888.com` 网站项目，GitHub 仓库为 `ccok889/mfqm888-site`，生产分支为 `main`，通过 Cloudflare Pages 自动部署。
>
> 核心关键词固定为：模仿笔迹、模仿签名、模仿签字、笔迹鉴定。不得擅自替换或改成“签名设计”。
>
> 继续维护时，文章必须使用自然语言，避免标题和正文出现明显的批量生成痕迹。每篇文章必须使用独立图片，不得重复引用其他文章的图片。
>
> 发布文章后同步更新首页、对应栏目、`search.json`、`assets/js/main.js` 和 `sitemap.xml`。修改完成后检查三次，再提交并推送到 `main` 分支。

## 六、网站固定内容要求

网站业务必须围绕以下四个核心关键词：

1. 模仿笔迹
2. 模仿签名
3. 模仿签字
4. 笔迹鉴定

不得擅自把“模仿签名”改成“签名设计”。文章可以根据搜索习惯扩展自然长尾词，但不能改变网站业务方向。

## 七、新文章发布要求

- 标题句式要有变化，避免所有文章都采用“关键词＋是什么、有哪些、如何选择”。
- 关键词可以自然出现在标题前部、中部或结尾。
- 正文应从真实场景、用户问题和具体材料出发，不写空泛套话。
- 不同文章不能重复使用相同段落或相同内容结构。
- 每篇文章必须使用一张独立的新图片。
- 不允许只修改旧图片文件名后重复使用。
- 图片应与文章主题对应，并设置准确的 `alt` 文本。
- 文章应包含独立的标题、描述、canonical、Open Graph 和必要的结构化数据。
- 发布后同步更新栏目页、首页、搜索索引和站点地图。

## 八、联系方式

- 微信图片显示内容：`pep950`
- 电话图片显示内容：`13725706247`

网站页面中应继续使用图片形式展示联系方式。

## 九、Cloudflare 部署说明

Cloudflare Pages 当前配置：

- GitHub 仓库：`ccok889/mfqm888-site`
- 生产分支：`main`
- 框架预设：无
- 构建命令：留空
- 构建输出目录：`/`

换电脑不会影响现有 Cloudflare Pages 项目，也不需要重新绑定域名。

网站修改完成后执行：

```bash
git add .
git commit -m "填写本次修改内容"
git push origin main
```

推送到 `main` 后，Cloudflare Pages 会自动构建和更新网站。

## 十、迁移前的检查

旧电脑停止使用前执行：

```bash
git status -sb
git log -1 --oneline
git push origin main
```

必须确认：

- 没有尚未提交的重要文件。
- 当前分支没有显示 `ahead`。
- GitHub 仓库中能看到最新提交。
- Cloudflare Pages 最新生产部署成功。
- 正式网站可以正常打开。

## 十一、不会自动迁移的内容

以下内容需要在新电脑重新设置或单独备份：

- GitHub 登录状态
- Cloudflare 后台登录状态
- Codex 的本机文件权限和自动操作权限
- 浏览器登录状态
- 没有提交到 GitHub 的本地文件
- 只保存在旧电脑 `~/.codex` 中的个人技能和配置

同一账号中的旧任务可能仍能在任务列表中找到，但不能把聊天记录作为项目的唯一备份。网站代码、部署资料和长期维护要求应以 GitHub 仓库内的文件为准。

## 十二、恢复工作的优先顺序

新 Codex 遇到资料不一致时，按照以下顺序判断：

1. 用户当前明确提出的要求
2. GitHub `main` 分支中的最新代码
3. `网站签名.md`
4. `DEPLOYMENT.md`
5. 本迁移说明
6. 旧任务或旧聊天记录

涉及删除文件、改变核心关键词、批量修改网址、重构城市分站或更换正式域名时，应先检查当前线上状态，不要仅凭旧聊天记录执行。
