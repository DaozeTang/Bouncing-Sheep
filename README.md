# Bouncing Sheep Widget (网页跟随小羊特效)

这是一个纯前端实现（HTML + CSS + 原生 JS）、极其轻量、支持**暗色模式**、无任何第三方库依赖的“网页小羊跟随鼠标蹦跳”特效组件。这只小羊会在你的网页底层欢快地追逐用户的鼠标指针，停下时还会低头“吃草”和眨眼。

本仓库提供了这只小羊的“原始依赖”与“即插即用示例”。

## ✨ 特性 (Features)
- **极简体积**：纯手写 SVG 图形和 CSS Keyframes 动画，完全没有外部图片和复杂的引擎包。
- **无感介入**：层级默认置于底层 (`z-index: -1`)，并配备 `pointer-events: none` 穿透效果，绝不遮挡网页文字或干扰用户的正常点击交互。
- **暗黑模式 (Dark Mode)**：提供内置的 CSS 变量支持，可通过 `data-theme="dark"` 属性让小羊自动切换深色皮肤。
- **原生性能**：依靠浏览器原生 `requestAnimationFrame` 和 Lerp 缓动算法计算，非常平滑流畅。
- **兼容移动端**：监听了 Touch 事件，在移动端同样会追随用户的触碰位置。

## 📦 目录结构
```text
bouncing-sheep/
├── README.md           # 说明文档
├── example.html        # 即插即用示例演示页
└── src/                # 原始依赖目录
    ├── sheep.css       # 小羊动画与样式文件
    ├── sheep.html      # 小羊核心 SVG DOM 结构
    └── sheep.js        # 小羊跟随缓动 JS 逻辑
```

## 🚀 如何即插即用 (Usage)

要在你的网站中加入这只小羊，只需简单的三步：

1. **引入 CSS**：在你的 HTML `<head>` 中引入 `sheep.css`：
   ```html
   <link rel="stylesheet" href="path/to/src/sheep.css">
   ```

2. **植入 HTML**：将 `sheep.html` 里面的 `div#sheep-tracker` 这一大段代码，复制粘贴到你的页面 `<body>` 标签里的任意位置（推荐放在 `</body>` 之前）。

3. **引入 JS**：在引入 HTML 结构之后，或在 `<body>` 底部加载 `sheep.js`：
   ```html
   <script src="path/to/src/sheep.js"></script>
   ```

大功告成！现在你可以刷新网页，看看这只可爱的小羊了。

*(如果你使用的是 React / Vue 等现代框架，你也可以极其轻易地将 `sheep.html` 转换为一个无状态组件，然后在 `useEffect` / `onMounted` 钩子中执行 `sheep.js` 中的逻辑。)*

## 🌙 关于暗黑模式
组件原生支持通过 CSS 变量切换皮肤。
默认状态下，小羊为“浅色”（白毛）。当你的 `<html>` 或 `<body>` 标签加上了 `data-theme="dark"` 属性时：
```html
<html data-theme="dark">
```
小羊会自动应用 `sheep.css` 里为暗黑模式配置的色调，变为酷酷的夜间羊。如果你项目的暗色模式标志是其他属性（如 `class="dark"`），你只需要进入 `sheep.css` 将 `[data-theme="dark"]` 选择器修改成你需要的对应选择器即可。

---

祝你有一只开心的博客看门羊！🐏