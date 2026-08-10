# mfqm888.com 部署资料

最后更新：2026-08-10

## 1. 网站与代码位置

- 网站类型：纯静态 HTML、CSS、JavaScript 网站
- 本地网站目录：`outputs/mobifont-seo-site`
- GitHub 账户：`ccok889`
- GitHub 仓库：`ccok889/mfqm888-site`
- GitHub 地址：<https://github.com/ccok889/mfqm888-site>
- 正式分支：`main`

## 2. Cloudflare Pages

- Cloudflare Pages 项目名：`mfqm888-site`
- Pages 临时域名：`https://mfqm888-site.pages.dev`
- 部署来源：GitHub 仓库 `ccok889/mfqm888-site`
- 生产分支：`main`
- 框架预设：无
- 构建命令：留空
- 构建输出目录：`/`（仓库根目录）
- 部署方式：代码推送到 GitHub 的 `main` 分支后，Cloudflare Pages 自动重新部署

Cloudflare 后台位置：

1. 登录 Cloudflare。
2. 进入“Workers 和 Pages”。
3. 打开项目 `mfqm888-site`。
4. 在“部署”中查看最新构建结果。
5. 在“自定义域”中检查正式域名。

## 3. 正式域名

- 网站主域名：`https://www.mfqm888.com`
- 裸域名：`https://mfqm888.com`
- 规范域名统一使用：`https://www.mfqm888.com`
- 网站页面中的 canonical、sitemap 和结构化数据均应继续使用带 `www` 的地址

## 4. 裸域名 301 跳转

已在 Cloudflare 配置单次重定向：

- 规则名称：`裸域名 301 跳转到 www`
- 匹配地址：`http*://mfqm888.com/*`
- 目标地址：`https://www.mfqm888.com/${2}`
- 状态码：`301`
- 保留查询参数：开启

预期结果：

- `http://mfqm888.com/` → `https://www.mfqm888.com/`
- `https://mfqm888.com/` → `https://www.mfqm888.com/`
- 裸域名的内页路径和查询参数会被保留

Cloudflare 后台位置：进入 `mfqm888.com` → “规则” → “重定向规则” → “单次重定向”。

## 5. HTTPS 证书

HTTPS 由 Cloudflare 自动签发并自动续期，不需要另外购买证书，也通常不需要在到期时手工重新申请。

检查位置：

1. 登录 Cloudflare。
2. 进入域名 `mfqm888.com`。
3. 打开“SSL/TLS” → “概述”，检查加密模式。
4. 打开“SSL/TLS” → “边缘证书”，检查证书状态和 Universal SSL。
5. 打开“Workers 和 Pages” → `mfqm888-site` → “自定义域”，检查 `www.mfqm888.com` 是否显示有效。

通常证书会覆盖：

- `mfqm888.com`
- `*.mfqm888.com`

以后建立 `beijing.mfqm888.com` 等城市二级域名时，一般可以使用通配符证书；仍需在 Pages 自定义域和 DNS 中分别完成绑定。

## 6. 日常更新与重新部署

网站内容修改完成后：

1. 先检查页面链接、图片、搜索索引和 `sitemap.xml`。
2. 将改动提交到 GitHub 仓库的 `main` 分支。
3. 推送成功后，Cloudflare Pages 会自动开始部署。
4. 在 Cloudflare 的项目“部署”页面确认生产部署成功。
5. 打开 `https://www.mfqm888.com` 检查首页和修改过的内页。
6. 再检查裸域名是否仍然 301 跳转到带 `www` 的地址。

## 7. 出现 HTTPS 或部署异常时

依次检查：

1. GitHub 仓库最新代码是否已进入 `main` 分支。
2. Cloudflare Pages 最新一次生产部署是否成功。
3. Pages 的“自定义域”中 `www.mfqm888.com` 是否有效。
4. Cloudflare DNS 中域名记录是否仍为代理状态。
5. “SSL/TLS” → “边缘证书”中的证书是否有效。
6. “重定向规则”中的裸域名 301 规则是否仍已启用。

如果只是证书临近到期，先不要删除证书或域名绑定。Cloudflare 正常情况下会自动续期；只有状态异常时再检查 DNS、自定义域和 Universal SSL。

## 8. 城市二级域名规划

目前城市内容使用目录形式，例如：

- `https://www.mfqm888.com/city/beijing/`
- `https://www.mfqm888.com/city/shanghai/`

如果以后改成二级域名，例如 `beijing.mfqm888.com`，需要同时处理：

1. Cloudflare DNS 记录。
2. Cloudflare Pages 自定义域绑定。
3. 对应城市页面的 canonical。
4. sitemap 中的网址。
5. 原目录网址到二级域名网址的 301 跳转。
6. 城市页面内容差异化，避免大量重复页面。

在正式决定使用二级域名前，不要提前修改现有城市目录网址。

## 9. 网站固定业务信息

网站核心关键词不得擅自替换：

- 模仿笔迹
- 模仿签名
- 模仿签字
- 笔迹鉴定

联系方式：

- 微信图片显示内容：`pep950`
- 电话图片显示内容：`13725706247`

## 10. 安全说明

本文件不保存以下敏感信息：

- GitHub 密码或访问令牌
- Cloudflare 密码或 API Token
- 登录验证码
- 恢复代码
- 私钥

以后继续部署时，可以让 Codex 先读取本文件，再检查 GitHub 和 Cloudflare 的实时状态。
