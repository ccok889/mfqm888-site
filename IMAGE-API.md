# 本地图片接口

当前网站为纯静态站，图片通过本机脚本生成后再用于文章，API 密钥不进入网页或 Git 仓库。

已验证配置：

- 地址：`https://apinebula.ai/v1`
- 模型：`gpt-image-2.5`
- 图片令牌分组：`gpt-image-2-1K`，这是分组而不是模型名称
- 提交：`POST /image-tasks/generations`
- 查询：`GET /image-tasks/{id}?detail=true`
- 成功结果：从 `detail.data[].download_url` 下载
- 密钥：`APINEBULA_IMAGE_API_KEY` 或用户目录下 `.codex/apinebula-image-key`
- 实际适配器：用户目录下 `Documents/Codex/apinebula-image/generate_image.py`

在项目根目录使用 PowerShell：

```powershell
.\scripts\generate-image.ps1 -Prompt '自然光下的手写文件与钢笔，真实摄影，无文字标识，无水印' -Output 'assets/images/new-handwriting-cover.png'
```

输出必须位于本项目内，且不能覆盖现有图片。每篇文章使用独立提示词与新文件，保存后检查主题、画质及图片重复情况，再添加网页引用。

如查询超时，应保留任务 ID 并继续查询原任务，不重新提交以避免重复计费。换电脑时需迁移本机适配器，并单独配置密钥；仓库不会包含密钥。
