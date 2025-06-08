# WhatsApp Link Rotator

本项目实现自动轮换 WhatsApp 跳转链接，使用 Netlify Functions 部署后端逻辑，结合 GitHub 自动部署。

## ✅ 使用说明

### 1. 克隆本项目并上传至你的 GitHub 仓库

```bash
git clone https://github.com/你的用户名/whatsapp-link-rotator.git
```

### 2. 连接 Netlify 部署

1. 登录 Netlify：https://app.netlify.com/
2. 点击 "Add new site" → "Import from GitHub"
3. 选择你的仓库
4. 配置如下：
   - Build Command：留空
   - Publish Directory：`./`
   - Functions Directory：`netlify/functions`
5. 点击部署

### 3. 修改 WhatsApp 链接

编辑 `netlify/functions/get-whatsapp-link.js` 文件中的 `links` 数组即可。

---

### 📌 示例站点地址

部署成功后访问：
```
https://your-site.netlify.app/
```

后端 API 地址：
```
https://your-site.netlify.app/.netlify/functions/get-whatsapp-link
```
