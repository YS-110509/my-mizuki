---
title: "HTML+CSS+JS从0到入门教程"
published: 2026-02-28
pinned: false
description: 搭建“艾拉的记忆小屋”，从零开始教你学习HTML+CSS+JS。
tags: ["HTML", "CSS", "JavaScript" , "教程", "可塑性记忆"]
category: "教程"
licenseName: "CC BY-NC-SA 4.0"
author: "さくらじま ろか"
sourceLink: "https://roka.ink/posts/pid003/"
draft: false
date: 2026-02-28
image: "./images/cover.png"
pubDate: 2026-02-28
---
# HTML+CSS+JS从0到入门教程：”（超详细版）

> **作者：Roka**  
> **发布于：芦花家 (roka.ink)**  
> *愿你能与重要的人，有一天能够再次相遇。*

---

## 📖 教程简介

欢迎来到芦花家！本教程专为前端零基础的朋友准备，我们将以《可塑性记忆》的世界为素材，一步步搭建一个名为 **“艾拉的记忆小屋”** 的静态网站，并逐步添加样式和简单交互。通过这个项目，你将系统掌握**HTML、CSS、基础JavaScript**，最终发布一个属于自己的回忆网站。

[本篇教学演示](https://aira.roka.ink/)

> **📥 准备工作**
> - 一个文本编辑器（推荐 VS Code）—— 可以去官网免费下载。
> - 一个现代的浏览器（Chrome / Edge / Firefox）—— 用于预览页面。
> - 一颗愿意动手的心 —— 这最重要！

---

## 📑 目录

### **第一篇：HTML基础（静态页面骨架）**

1. [初见HTML：第一个页面与基本结构](#ch1)
2. [文本标签：标题、段落、强调与引用](#ch2)
3. [链接与导航：让页面互联](#ch3)
4. [图片与多媒体：插入图像和视频](#ch4)
5. [列表：无序、有序与自定义列表](#ch5)
6. [表格：用表格展示剧情时间线](#ch6)
7. [语义化标签：重构页面结构](#ch7)

### **第二篇：CSS入门（给页面穿上衣服）**

8. [CSS初探：样式怎么加？](#ch8)
9. [选择器与颜色：精准选中元素](#ch9)
10. [文本与字体：让文字更好看](#ch10)
11. [盒子模型：边距、边框与内边距](#ch11)
12. [背景与渐变：为页面增添氛围](#ch12)
13. [布局基础：浮动与Flexbox](#ch13)
14. [响应式设计：让网站在手机上也好看](#ch14)

### **第三篇：项目美化实战**

15. [美化首页：打造温馨的欢迎页](#ch15)
16. [美化角色页：卡片式设计](#ch16)
17. [美化时间线页：表格样式与斑马纹](#ch17)
18. [美化关于页：嵌入视频与布局](#ch18)

### **第四篇：JavaScript入门与弹幕留言墙**

19. [JavaScript初体验：变量、事件与DOM操作](#ch19)
20. [弹幕留言墙：让访客留下弹幕](#ch20)
21. [弹幕动起来：简单动画效果](#ch21)

### **第五篇：项目整合与发布**

22. [项目检查与优化](#ch22)
23. [部署到GitHub Pages](#ch23)
24. [继续前行：下一步学什么？](#ch24)

---

## 第一篇：HTML基础（静态页面骨架）

### <a id="ch1"></a>1. 初见HTML：第一个页面与基本结构

#### 1.1 HTML是什么？

HTML 的全称是 **HyperText Markup Language**（超文本标记语言）。它不是编程语言，而是一种**标记语言**，用来描述网页的结构和内容。你可以把HTML想象成房子的骨架：标签就是承重墙、梁和柱，浏览器（比如Chrome）会把HTML“翻译”成我们看到的漂亮页面。

#### 1.2 第一个HTML页面

**步骤1：创建项目文件夹**

在你的电脑上找一个合适的位置（比如桌面），新建一个文件夹，命名为 `aira-memory-house`（艾拉的记忆小屋）。这个文件夹将存放我们所有的网站文件。

**步骤2：创建首页文件**

打开 VS Code（或其他编辑器），点击“文件” → “新建文件”，然后输入以下代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>艾拉的记忆小屋</title>
  </head>
  <body>
    欢迎来到艾拉的记忆小屋。
  </body>
</html>
```

**步骤3：保存文件**

按 `Ctrl+S`（Windows）或 `Command+S`（Mac）保存文件。在弹出的对话框中，找到刚才创建的 `aira-memory-house` 文件夹，将文件命名为 `index.html`，点击保存。

**步骤4：用浏览器打开**

在文件夹中找到 `index.html`，双击它，就会用默认浏览器打开。你应该看到页面上显示“欢迎来到艾拉的记忆小屋。”。恭喜！你已经创建了人生第一个网页！

#### 1.3 详细解释每一行

让我们逐行理解刚才的代码：

- `<!DOCTYPE html>`：这是文档类型声明，它告诉浏览器“这个文件使用的是HTML5标准”。必须放在第一行。
- `<html>`：这是整个页面的根元素，所有其他元素都要放在它里面。
- `<head>`：这个标签里放的是页面的**元信息**（meta data），比如字符编码、页面标题、样式链接等。这些内容不会直接显示在页面上，但对浏览器很重要。
- `<meta charset="utf-8">`：设置字符编码为UTF-8，这样中文才不会乱码。
- `<title>`：这个标签里的文字会显示在浏览器的标签页上，也是搜索引擎结果中的标题。
- `<body>`：这个标签里的所有内容都会显示在浏览器窗口中，是用户能看到的部分。

> **小贴士**：HTML标签通常是成对出现的，比如 `<html>` 和 `</html>`，前者叫开始标签，后者叫结束标签。有些标签是自闭合的，比如 `<meta>`，不需要结束标签。

#### 1.4 小剧场：司的日记

现在我们来添加一点《可塑性记忆》的味道。修改 `<body>` 里的内容，像这样：

```html
<body>
  <!-- 司的日记：第一天上班 -->
  <h1>水柿司的日记</h1>
  <p>今天，我开始了在SAI终端服务部门的工作。</p>
  <p>虽然是被父母安排进来的，但遇见艾拉之后，我开始觉得这份工作有着特别的意义。</p>
</body>
```

保存后刷新浏览器，你会看到：

- 一个很大的标题“水柿司的日记”。
- 两个段落文字。

这里用到了两个新标签：
- `<h1>`：一级标题，通常用于页面主标题。
- `<p>`：段落，会自动在前后添加一些空白。
- `<!-- ... -->`：注释，不会显示在页面上，用来给代码做笔记。

#### 1.5 本章项目任务

1. 确保你已经创建了 `aira-memory-house` 文件夹和 `index.html`。
2. 把上面的代码完整复制进去，保存并预览。
3. **练习**：在页面中添加一句你最喜欢的《可塑性记忆》台词，并用 `<h2>` 作为小标题。例如：
   ```html
   <h2>经典台词</h2>
   <p>“越是美好的回忆，有时可能会令人越痛苦。”</p>
   ```

---

### <a id="ch2"></a>2. 文本标签：标题、段落、强调与引用

#### 2.1 标题系列 `<h1>`~`<h6>`

HTML提供了六级标题，从 `<h1>` 到 `<h6>`，重要性递减。通常一个页面只有一个 `<h1>`，用来放网站名称或文章主标题，下面的章节用 `<h2>`、`<h3>` 等。

**示例**：
```html
<h1>艾拉的记忆小屋</h1>
<h2>关于艾拉</h2>
<h3>基本资料</h3>
<h2>关于司</h2>
```

#### 2.2 段落与换行

- `<p>`：段落，会自动在前后添加外边距。
- `<br>`：换行（空标签，不需要结束标签）。如果你想在一段文字中强制换行，可以用它。
- `<hr>`：水平分割线，用于分隔内容。

**示例**：
```html
<p>这是第一段。<br>这是同一段中换行的部分。</p>
<hr>
<p>这是分割线下面的第二段。</p>
```

#### 2.3 强调与引用

- `<strong>`：表示强调，浏览器通常显示为**加粗**。
- `<em>`：表示语气加重，浏览器通常显示为*斜体*。
- `<blockquote>`：长引用（块级元素），浏览器通常会缩进显示。
- `<q>`：短引用（内联元素），浏览器会自动添加引号。

**示例**：
```html
<p>艾拉常说：<q>我知道了</q>，这是她的口头禅。</p>
<blockquote>
  “越是美好的回忆，有时可能会令人越痛苦。”<br>
  —— 艾拉（第3话）
</blockquote>
```

#### 2.4 字符实体

有些字符在HTML中有特殊含义（比如 `<` 用来开始标签），如果想在页面上显示它们，需要使用**字符实体**。常用实体：

| 显示结果 | 实体名称 | 实体编号 |
|----------|----------|----------|
| `<`      | `&lt;`   | `&#60;`  |
| `>`      | `&gt;`   | `&#62;`  |
| `&`      | `&amp;`  | `&#38;`  |
| `"`      | `&quot;` | `&#34;`  |
| `©`      | `&copy;` | `&#169;` |
| 空格     | `&nbsp;` | `&#160;` |

**示例**：
```html
<p>在HTML中，用 &lt;h1&gt; 表示一级标题。</p>
<p>&copy; 2026 芦花家</p>
```

#### 2.5 项目任务：丰富首页内容

现在我们来完善首页，让它更像一个真正的纪念网站。打开 `index.html`，把 `<body>` 里的内容替换成下面这段：

```html
<body>
  <h1>艾拉的记忆小屋</h1>
  <p>欢迎来到艾拉的记忆小屋。这里记录着<strong>水柿司</strong>与<strong>艾拉</strong>的点点滴滴。</p>
  
  <h2>关于这个小屋</h2>
  <p>这是一个用HTML搭建的粉丝网站，致敬《可塑性记忆》中那些温暖而感伤的瞬间。</p>
  
  <blockquote>
    “越是美好的回忆，有时可能会令人越痛苦。”<br>
    —— 艾拉（第3话）
  </blockquote>
  
  <p>但即使如此，我们仍要珍惜每一个瞬间。</p>
  <hr>
  <p>&copy; 2026 芦花家</p>
</body>
```

保存后刷新浏览器，看看效果。

**练习**：
- 用 `<em>` 强调“珍惜每一个瞬间”这几个字。
- 在底部版权信息后面添加一句“愿你能与重要的人重逢”，并用 `<br>` 换行。

---

### <a id="ch3"></a>3. 链接与导航：让页面互联

#### 3.1 超链接 `<a>`

超链接是Web的灵魂，它让我们可以在不同页面之间跳转。基本语法：

```html
<a href="目标地址">链接文字</a>
```

- `href` 是必须的属性，指定链接的目标。
- 如果想在新标签页打开链接，可以加上 `target="_blank"`。

**示例**：
```html
<a href="https://www.bilibili.com">去B站看《可塑性记忆》</a>
<a href="about.html" target="_blank">关于本站（新标签页打开）</a>
```

#### 3.2 相对路径与绝对路径

- **绝对路径**：完整的网址，比如 `https://example.com/page.html`。
- **相对路径**：相对于当前文件的位置。比如：
  - `page.html`：同一目录下的文件。
  - `folder/page.html`：下一级目录 `folder` 中的文件。
  - `../page.html`：上一级目录中的文件。

因为我们所有的页面都在同一个文件夹里，所以链接时直接写文件名即可，比如 `character.html`。

#### 3.3 页面内锚点链接

如果想跳转到同一个页面的某个位置，可以给目标元素设置一个 `id`，然后用 `#id` 作为链接地址。比如我们在目录中就用到了这种技巧。

**示例**：
```html
<h2 id="section1">第一章</h2>
...
<a href="#section1">回到第一章</a>
```

#### 3.4 项目任务：创建导航栏

现在我们要创建几个新的HTML文件，并在每个文件里加上导航栏，方便用户在各页面间跳转。

**步骤1：创建新文件**

在 `aira-memory-house` 文件夹中，新建以下文件（可以和 `index.html` 平级）：
- `character.html`（角色介绍）
- `timeline.html`（剧情时间线）
- `about.html`（关于本站）

**步骤2：在每个文件中添加基础结构**

每个文件都需要有和 `index.html` 类似的基础结构。为了节省时间，你可以复制 `index.html` 的内容，然后修改 `<title>` 和 `<body>` 里的内容。例如 `character.html` 可以这样开始：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>角色介绍 - 艾拉的记忆小屋</title>
</head>
<body>
  <!-- 稍后添加导航和内容 -->
</body>
</html>
```

**步骤3：在 `index.html` 中添加导航栏**

在 `index.html` 的 `<body>` 开头（`<h1>` 之前）添加以下代码：

```html
<nav>
  <strong>首页</strong> |
  <a href="character.html">角色</a> |
  <a href="timeline.html">时间线</a> |
  <a href="about.html">关于</a>
</nav>
```

这里我们用 `<nav>` 标签包裹导航链接，语义更清晰。用 `<strong>` 把“首页”加粗，表示当前页面是首页（后面会用CSS美化，暂时这样标记）。

**步骤4：在其他页面添加导航**

类似地，在 `character.html`、`timeline.html`、`about.html` 的 `<body>` 开头添加导航，并标记当前页。例如在 `character.html` 中：

```html
<nav>
  <a href="index.html">首页</a> |
  <strong>角色</strong> |
  <a href="timeline.html">时间线</a> |
  <a href="about.html">关于</a>
</nav>
```

**步骤5：测试链接**

保存所有文件，然后打开 `index.html`，点击导航中的“角色”，应该能跳转到 `character.html`。如果点击后出现404错误，请检查文件名是否一致，大小写也要注意（有些服务器区分大小写）。

#### 3.5 小剧场：链接的寓意

艾拉和司通过Giftia与人类之间的联系，就像超链接一样，将不同的世界连接起来。每一个链接都是一次相遇。

---

### <a id="ch4"></a>4. 图片与多媒体：插入图像和视频

#### 4.1 图像 `<img>`

`<img>` 标签用于在页面中插入图片。它是一个空标签，不需要结束标签。常用属性：

- `src`：图片的路径（相对或绝对）。
- `alt`：替代文本，当图片无法显示时显示，也对屏幕阅读器友好（非常重要！）。
- `width` / `height`：设置图片宽高（单位像素，建议只设置一个，另一个等比缩放）。

**示例**：
```html
<img src="images/aira.png" alt="艾拉微笑" width="200">
```

#### 4.2 准备图片

在项目文件夹中创建一个新的文件夹，命名为 `images`。然后准备两张角色图片（可以从网上找《可塑性记忆》的官方图片，注意版权，仅供学习使用），分别命名为 `aira.png` 和 `tsukasa.png`，放入 `images` 文件夹。如果没有真实图片，也可以用占位图代替（比如用 https://via.placeholder.com/200 的在线占位图，但后续无法离线预览）。

#### 4.3 项目任务：角色页插入图片

打开 `character.html`，在 `<nav>` 后面添加以下内容：

```html
<main>
  <h2>角色介绍</h2>
  
  <h3>艾拉</h3>
  <figure>
    <img src="images/aira.png" alt="艾拉" width="200">
    <figcaption>艾拉 - Giftia</figcaption>
  </figure>
  <p>终端服务部门的Giftia，搭档是水柿司。性格内向，不善表达，但内心温柔。</p>
  
  <h3>水柿司</h3>
  <figure>
    <img src="images/tsukasa.png" alt="水柿司" width="200">
    <figcaption>水柿司 - 人类</figcaption>
  </figure>
  <p>因考试失利被父母安排进入SAI公司，成为艾拉的搭档。逐渐走进艾拉的内心。</p>
</main>
```

这里我们用了 `<figure>` 和 `<figcaption>` 标签，它们是一对好搭档，用来把图片和标题关联起来，语义更好。

保存后预览 `character.html`，应该能看到图片和文字。如果图片没显示，检查路径是否正确，图片文件名是否一致。

#### 4.4 音频与视频（可选）

如果想插入音频或视频，可以用 `<audio>` 和 `<video>` 标签。例如：

```html
<audio controls src="audio/ost.mp3"></audio>

<video controls width="400">
  <source src="video/trailer.mp4" type="video/mp4">
  <source src="video/trailer.webm" type="video/webm">
  您的浏览器不支持 video 标签。
</video>
```

`controls` 属性会显示播放控件。我们暂时不在项目中使用，但你可以了解。

---

### <a id="ch5"></a>5. 列表：无序、有序与自定义列表

#### 5.1 无序列表 `<ul>`

无序列表用 `<ul>` 包裹，每个列表项用 `<li>`。通常用于并列的项目，比如角色的喜好。

**示例**：
```html
<ul>
  <li>甜食</li>
  <li>发呆</li>
  <li>口头禅：“我知道了”</li>
</ul>
```

#### 5.2 有序列表 `<ol>`

有序列表用 `<ol>` 包裹，每个列表项也用 `<li>`，会自动编号。适合有顺序的步骤。

**示例**：
```html
<ol>
  <li>相遇</li>
  <li>搭档磨合</li>
  <li>游乐园约会</li>
</ol>
```

#### 5.3 自定义列表 `<dl>`

自定义列表用于术语解释，包含 `<dt>`（术语）和 `<dd>`（描述）。

**示例**：
```html
<dl>
  <dt>Giftia</dt>
  <dd>拥有感情的机器人，寿命约为81920小时。</dd>
  <dt>终端服务部门</dt>
  <dd>负责回收寿命将尽的Giftia的部门。</dd>
</dl>
```

#### 5.4 项目任务：丰富角色页

在 `character.html` 中，为每个角色添加档案列表。修改艾拉的部分：

```html
<h3>艾拉</h3>
<figure>...</figure>
<p>终端服务部门的Giftia，搭档是水柿司。性格内向，不善表达，但内心温柔。</p>
<h4>艾拉档案</h4>
<ul>
  <li>喜欢：甜食、发呆</li>
  <li>讨厌：被当作小孩</li>
  <li>口头禅：“我知道了”</li>
</ul>
```

同样为司添加档案：

```html
<h4>司档案</h4>
<ul>
  <li>喜欢：照顾人、努力</li>
  <li>特长：做饭</li>
  <li>梦想：和艾拉一起工作到最后</li>
</ul>
```

再添加一个有序列表，列出主要剧情步骤：

```html
<h4>主要剧情步骤</h4>
<ol>
  <li>第1话：在商场电梯相遇</li>
  <li>第2话：第一次回收任务</li>
  <li>第3话：游乐园约会</li>
  <li>第13话：摩天轮上的告别</li>
</ol>
```

以及一个自定义列表，解释一些术语：

```html
<h4>术语解释</h4>
<dl>
  <dt>Giftia</dt>
  <dd>拥有感情的机器人，寿命约为81920小时。</dd>
  <dt>终端服务部门</dt>
  <dd>负责回收寿命将尽的Giftia的部门。</dd>
</dl>
```

保存后预览，看看列表的默认样式。

---

### <a id="ch6"></a>6. 表格：用表格展示剧情时间线

#### 6.1 表格基础

表格由 `<table>` 标签创建，里面包含行 `<tr>` 和单元格 `<td>`（或表头 `<th>`）。`<caption>` 可以添加表格标题。

**基本结构**：
```html
<table>
  <caption>表格标题</caption>
  <tr>
    <th>表头1</th>
    <th>表头2</th>
  </tr>
  <tr>
    <td>数据1</td>
    <td>数据2</td>
  </tr>
</table>
```

#### 6.2 合并单元格

- `colspan`：跨列合并。例如 `<td colspan="2">` 表示这个单元格占据两列。
- `rowspan`：跨行合并。例如 `<td rowspan="3">` 表示这个单元格占据三行。

#### 6.3 表格语义化

为了更好地结构和样式，可以使用 `<thead>`（表头）、`<tbody>`（表身）、`<tfoot>`（表尾）来分组。

#### 6.4 项目任务：创建时间线页

打开 `timeline.html`，在 `<nav>` 后面添加一个表格，展示《可塑性记忆》动画各话的信息。为了看得清楚，我们可以先给表格加一个简单的边框（用 `border="1"` 属性），后期会用CSS美化。

```html
<main>
  <h2>剧情时间线</h2>
  
  <table border="1" cellpadding="5" cellspacing="0">
    <caption>《可塑性记忆》动画剧情</caption>
    <thead>
      <tr>
        <th>话数</th>
        <th>标题</th>
        <th>关键事件</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>第1话</td><td>你与你的相遇</td><td>司与艾拉在商场电梯相遇，开始搭档。</td></tr>
      <tr><td>第2话</td><td>不想让你见到</td><td>第一次回收任务：妮娜与百花千寻。</td></tr>
      <tr><td>第3话</td><td>两人共度的时光</td><td>司约艾拉去游乐园，关系拉近。</td></tr>
      <tr><td>第4话</td><td>无法传达的话语</td><td>满对司产生误会。</td></tr>
      <tr><td>第5话</td><td>凝视着你的背影</td><td>扎克的过去揭晓。</td></tr>
      <tr><td>第6话</td><td>终于察觉的心意</td><td>司意识到自己对艾拉的感情。</td></tr>
      <tr><td>第7话</td><td>想要守护的人</td><td>艾拉的寿命问题浮出水面。</td></tr>
      <tr><td>第8话</td><td>理所当然的事情</td><td>司决定陪伴艾拉到最后。</td></tr>
      <tr><td>第9话</td><td>向星海许愿</td><td>两人看流星雨。</td></tr>
      <tr><td>第10话</td><td>再会</td><td>艾拉与过去的搭档重逢。</td></tr>
      <tr><td>第11话</td><td>约定的日子</td><td>艾拉向司坦白剩余时间不多。</td></tr>
      <tr><td>第12话</td><td>未能传递的话语</td><td>艾拉开始出现故障。</td></tr>
      <tr><td>第13话</td><td>愿你能与重要的人重逢</td><td>摩天轮上的告别，艾拉被回收。</td></tr>
    </tbody>
    <tfoot>
      <tr><td colspan="3">全13话 · 一段难忘的记忆</td></tr>
    </tfoot>
  </table>
</main>
```

保存后预览，你会看到一个带边框的表格。`border="1"` 只是临时查看，后面会用CSS彻底美化。

---

### <a id="ch7"></a>7. 语义化标签：重构页面结构

#### 7.1 为什么需要语义化？

之前我们用了 `<nav>`、`<main>`、`<figure>` 等标签，这些就是语义化标签。它们让代码更容易阅读，对搜索引擎优化（SEO）和屏幕阅读器也更友好。接下来我们将所有页面都用语义化标签重新整理。

#### 7.2 常用语义化标签

- `<header>`：页眉，通常包含网站标题、导航等。
- `<nav>`：导航区域。
- `<main>`：页面主要内容，每个页面只能有一个。
- `<article>`：独立的内容块，比如一篇博客文章。
- `<section>`：文档中的节，通常有标题。
- `<aside>`：侧边栏或补充内容。
- `<footer>`：页脚，包含版权、联系方式等。

#### 7.3 项目任务：重构所有页面

我们将以 `index.html` 为例，展示最终结构。其他页面仿照修改。

**index.html 最终版**：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>艾拉的记忆小屋 - 首页</title>
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <strong>首页</strong> |
      <a href="character.html">角色</a> |
      <a href="timeline.html">时间线</a> |
      <a href="about.html">关于</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>关于这个小屋</h2>
      <p>这是一个用HTML搭建的粉丝网站，致敬《可塑性记忆》中那些温暖而感伤的瞬间。</p>
    </article>
    
    <section>
      <h2>经典台词</h2>
      <blockquote>
        “越是美好的回忆，有时可能会令人越痛苦。”<br>
        —— 艾拉（第3话）
      </blockquote>
    </section>
    
    <section>
      <h2>最新动态</h2>
      <p>网站刚刚建立，后续会添加更多内容。</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>
</body>
</html>
```

**character.html** 的结构类似，把 `<main>` 里的内容用 `<section>` 划分。注意 `<main>` 内不要包含页眉和页脚。

**timeline.html** 和 **about.html** 同样重构。

完成这一步后，所有页面的骨架就搭建好了。下一阶段我们将用CSS为它们穿上漂亮的外衣。

---

## 第二篇：CSS入门（给页面穿上衣服）

### <a id="ch8"></a>8. CSS初探：样式怎么加？

#### 8.1 什么是CSS？

CSS（Cascading Style Sheets，层叠样式表）用来控制HTML元素的外观，比如颜色、字体、大小、间距、布局等。语法很简单：

```css
选择器 {
  属性: 值;
  属性: 值;
}
```

例如：
```css
p {
  color: red;
  font-size: 16px;
}
```

#### 8.2 三种添加方式

1. **内联样式**：直接在HTML标签中用 `style` 属性。**不推荐**，因为难以维护。
   ```html
   <p style="color: red;">这是一段红色文字。</p>
   ```

2. **内部样式表**：在HTML文件的 `<head>` 里用 `<style>` 标签。适合单个页面。
   ```html
   <style>
     p { color: red; }
   </style>
   ```

3. **外部样式表**：创建单独的 `.css` 文件，然后用 `<link>` 引入。**推荐**，因为多个页面可以共用同一份样式。

#### 8.3 项目任务：创建外部CSS文件

**步骤1：创建CSS文件夹和文件**

在 `aira-memory-house` 文件夹中新建一个文件夹，命名为 `css`。然后在 `css` 文件夹里新建一个文件，命名为 `style.css`。

**步骤2：在HTML中引入CSS**

打开每个HTML文件，在 `<head>` 中添加以下行（通常在 `<title>` 后面）：

```html
<link rel="stylesheet" href="css/style.css">
```

这样所有页面都会应用 `style.css` 中的样式。

**步骤3：写一条测试样式**

在 `style.css` 中输入：

```css
body {
  background-color: #f0f8ff;  /* 淡蓝色背景 */
}
```

保存后刷新任意页面，如果背景变成了淡蓝色，说明CSS引入成功。

---

### <a id="ch9"></a>9. 选择器与颜色：精准选中元素

#### 9.1 基础选择器

- **元素选择器**：直接写标签名，如 `p`、`h1`，会选中所有该标签。
- **类选择器**：以点开头，如 `.my-class`，选中所有具有该 `class` 属性的元素。
- **ID选择器**：以井号开头，如 `#my-id`，选中具有该 `id` 的元素（ID在页面中必须唯一）。

**示例**：
```css
p { color: blue; }               /* 所有段落文字变蓝 */
.highlight { background: yellow; } /* class="highlight" 的元素背景变黄 */
#main-title { font-size: 30px; }   /* id="main-title" 的元素字体变大 */
```

#### 9.2 组合选择器

- **后代选择器**：用空格分隔，如 `nav a` 选中 `<nav>` 内的所有 `<a>`。
- **子选择器**：用 `>` 分隔，如 `nav > a` 只选中 `<nav>` 的直接子元素 `<a>`。
- **相邻兄弟选择器**：用 `+` 分隔，如 `h2 + p` 选中紧接在 `<h2>` 后面的 `<p>`。

#### 9.3 颜色表示法

- **颜色名**：如 `red`、`blue`、`lightgray`。
- **十六进制**：如 `#ff0000`（红色），`#00ff00`（绿色），`#0000ff`（蓝色）。每两位表示红、绿、蓝的亮度（00~ff）。常用简写：`#f00` 等价于 `#ff0000`。
- **RGB**：`rgb(255,0,0)` 表示红色。
- **RGBA**：`rgba(255,0,0,0.5)` 表示半透明红色（最后一个参数是透明度，0~1）。

#### 9.4 项目任务：为页面添加基础配色

在 `style.css` 中，先设置全局样式：

```css
/* 全局样式 */
body {
  font-family: sans-serif;      /* 无衬线字体，更现代 */
  line-height: 1.6;             /* 行高，让文字更易读 */
  color: #333;                  /* 深灰色文字 */
  background-color: #f9f9f9;    /* 浅灰背景 */
  margin: 0;                    /* 去掉默认外边距 */
  padding: 0;
}

/* 导航样式 */
nav {
  background-color: #2c3e50;    /* 深蓝灰色 */
  padding: 10px;
  text-align: center;
}
nav a {
  color: white;
  text-decoration: none;        /* 去掉下划线 */
  margin: 0 10px;
}
nav a:hover {
  text-decoration: underline;   /* 鼠标悬停时出现下划线 */
}
nav strong {
  color: #ffcc00;               /* 当前页标记为金色 */
  margin: 0 10px;
}

/* 页脚样式 */
footer {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  margin-top: 40px;
}
```

保存后刷新页面，看看导航和页脚的变化。注意我们还没给 `<main>` 加样式，所以内容区还是默认样式。

---

### <a id="ch10"></a>10. 文本与字体：让文字更好看

#### 10.1 字体相关属性

- `font-family`：指定字体族，可以写多个备选，如 `"Helvetica", "Arial", sans-serif`。
- `font-size`：字体大小，常用单位 `px`（像素）、`em`（相对父元素）、`rem`（相对根元素）。
- `font-weight`：字重，`normal`（400）、`bold`（700）或数字（100~900）。
- `font-style`：`normal` 或 `italic`（斜体）。
- `text-align`：对齐方式，`left`、`center`、`right`。
- `text-decoration`：装饰，如下划线 `underline`、删除线 `line-through`。
- `line-height`：行高，可以设倍数如 `1.5`，或像素值。

#### 10.2 项目任务：美化文本

在 `style.css` 中添加以下规则：

```css
/* 主内容区域 */
main {
  max-width: 1000px;
  margin: 20px auto;   /* 上下20px，左右自动（水平居中） */
  padding: 0 20px;
}

/* 标题样式 */
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-top: 20px;
}
h2 {
  font-size: 2rem;
  color: #34495e;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}
h3 {
  font-size: 1.5rem;
  color: #2c3e50;
}
h4 {
  font-size: 1.2rem;
  color: #555;
}

/* 引用样式 */
blockquote {
  font-style: italic;
  background-color: #ecf0f1;
  padding: 15px 20px;
  border-left: 5px solid #3498db;
  margin: 20px 0;
}

/* 段落样式 */
p {
  margin-bottom: 15px;
}
```

保存后，观察首页和角色页的文字变化。

---

### <a id="ch11"></a>11. 盒子模型：边距、边框与内边距

#### 11.1 盒子模型概念

每个HTML元素都可以看作一个矩形盒子，从内到外包含：
- **内容（content）**：文本、图片等实际内容。
- **内边距（padding）**：内容与边框之间的空白。
- **边框（border）**：围绕内边距的线。
- **外边距（margin）**：盒子与其他元素之间的空白。

在浏览器开发者工具中，可以看到盒子的具体尺寸（按F12打开）。

#### 11.2 常用属性

- `width` / `height`：设置内容区域的宽高。
- `padding`：内边距，可以写1个值（四周相同）、2个值（上下、左右）、4个值（上、右、下、左）。
- `border`：边框，如 `border: 1px solid black;`（宽度、样式、颜色）。
- `margin`：外边距，写法同 `padding`。

#### 11.3 项目任务：为内容添加留白

我们已经为 `<main>` 设置了内边距和最大宽度，现在为角色卡片添加边框和内边距，让它们看起来更精致。

在 `style.css` 中添加：

```css
/* 角色卡片区域（假设我们给角色部分加了类，稍后修改HTML） */
.character-card {
  border: 1px solid #ddd;
  border-radius: 8px;          /* 圆角边框 */
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);  /* 轻微的阴影 */
  background-color: white;
}

.character-card img {
  max-width: 100%;             /* 确保图片不超过卡片宽度 */
  height: auto;
  display: block;              /* 去掉图片底部的间隙 */
  margin: 0 auto 10px;         /* 水平居中，下边距10px */
}

.character-card figcaption {
  text-align: center;
  font-style: italic;
  color: #666;
}
```

但我们的HTML中还没有给角色部分添加类，所以需要修改 `character.html`，为每个角色的外层包裹一个带类的 `div` 或 `section`。例如：

```html
<section class="character-card">
  <h3>艾拉</h3>
  <figure>...</figure>
  ...
</section>
```

同样为司也加上 `character-card` 类。这样样式才会生效。

---

### <a id="ch12"></a>12. 背景与渐变：为页面增添氛围

#### 12.1 背景属性

- `background-color`：背景色。
- `background-image`：背景图，如 `url('image.jpg')`。
- `background-repeat`：是否重复，`no-repeat`、`repeat-x` 等。
- `background-position`：背景图位置，如 `center center`。
- `background-size`：背景图大小，如 `cover`（覆盖整个区域）、`contain`（完整显示）。

#### 12.2 渐变

线性渐变：`linear-gradient(方向, 颜色1, 颜色2, ...)`。方向可以是 `to bottom`、`45deg` 等。

示例：
```css
background: linear-gradient(135deg, #a8ede0, #fed6e3);
```

#### 12.3 项目任务：给页眉添加渐变背景

修改 `style.css` 中的 `header` 样式：

```css
header {
  background: linear-gradient(135deg, #a8ede0, #fed6e3);
  padding: 20px;
  text-align: center;
}
header h1 {
  margin: 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);  /* 文字阴影 */
}
```

注意：之前我们在 `header` 里只放了 `<h1>` 和 `<nav>`，但导航现在是在 `<header>` 内部吗？是的，按照语义，导航应该放在 `<header>` 里。所以我们需要调整HTML：把 `<nav>` 移到 `<header>` 里面，并去掉 `nav` 之前的独立背景色，让导航继承 `header` 的背景。但导航背景色可能太深，需要调整。

为了保持导航清晰，我们可以给 `<nav>` 设置半透明背景，或者保留原有的深色背景。这里我们保留导航的深色背景，但让它和渐变头部区分开。

修改后的 `header` 部分HTML：

```html
<header>
  <h1>艾拉的记忆小屋</h1>
  <nav>
    <!-- 链接不变 -->
  </nav>
</header>
```

CSS调整：把原来对 `nav` 的背景色和 `header` 的背景色分开。导航的背景色保留深色，但改为半透明？或者不透明。为了美观，我们让导航背景色为深色半透明，文字白色。

```css
header {
  background: linear-gradient(135deg, #a8ede0, #fed6e3);
  padding: 20px;
  text-align: center;
}
header h1 {
  margin: 0 0 10px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}
nav {
  background-color: rgba(44, 62, 80, 0.8);  /* 半透明深色 */
  padding: 10px;
  border-radius: 30px;          /* 圆角 */
  display: inline-block;        /* 让导航宽度根据内容调整 */
}
```

保存后刷新，看看效果。

---

### <a id="ch13"></a>13. 布局基础：浮动与Flexbox

#### 13.1 浮动（float）

浮动常用于图文混排，比如让图片向左浮动，文字环绕。但复杂布局现在多用Flexbox。

**示例**：
```css
img {
  float: left;
  margin-right: 15px;
}
```

#### 13.2 Flexbox 布局

Flexbox（弹性盒）是一维布局模型，可以轻松实现水平或垂直排列、对齐、分布。常用属性：

- 在父容器设置 `display: flex;`
- `flex-direction`：主轴方向，`row`（水平）、`column`（垂直）。
- `justify-content`：主轴对齐方式，如 `center`、`space-between`。
- `align-items`：交叉轴对齐方式，如 `center`、`stretch`。
- `flex-wrap`：是否换行，`wrap` 允许换行。

#### 13.3 项目任务：用Flexbox排列角色卡片

我们希望角色页的卡片并排显示，而不是上下堆叠。修改 `character.html`，将两个角色卡片用一个容器包裹，并给容器添加类 `character-list`。

HTML修改：
```html
<div class="character-list">
  <section class="character-card">
    <!-- 艾拉内容 -->
  </section>
  <section class="character-card">
    <!-- 司内容 -->
  </section>
</div>
```

然后在CSS中添加：

```css
.character-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;          /* 卡片之间的间距，较新属性，简便 */
  margin-top: 20px;
}
.character-card {
  flex: 1 1 300px;    /* 每个卡片最小300px，允许放大 */
  /* 之前的卡片样式保持不变 */
}
```

现在刷新角色页，两个卡片应该并排显示，如果窗口变窄，卡片会自动换行。

---

### <a id="ch14"></a>14. 响应式设计：让网站在手机上也好看

#### 14.1 视口设置

在HTML的 `<head>` 中，必须添加视口元标签，告诉浏览器如何控制页面尺寸：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

我们已经在前面的章节中添加过了，检查一下每个页面的 `<head>` 中是否有这一行。

#### 14.2 媒体查询

媒体查询可以根据不同的屏幕尺寸应用不同的样式。语法：

```css
@media (max-width: 600px) {
  /* 当屏幕宽度小于等于600px时，这里的样式生效 */
  body {
    background-color: lightblue;
  }
}
```

#### 14.3 项目任务：添加响应式规则

为了让网站在手机上更友好，我们添加一些媒体查询：

```css
/* 小屏幕（手机） */
@media (max-width: 600px) {
  nav a, nav strong {
    display: block;       /* 导航链接堆叠显示 */
    margin: 5px 0;
  }
  .character-list {
    flex-direction: column;  /* 卡片堆叠 */
  }
  h1 {
    font-size: 2rem;      /* 标题小一点 */
  }
  h2 {
    font-size: 1.5rem;
  }
  main {
    padding: 10px;
  }
}
```

保存后，在浏览器中拖动窗口变小，观察导航和卡片的变化。也可以用手机模拟器测试（按F12，点击手机图标）。

---

## 第三篇：项目美化实战

### <a id="ch15"></a>15. 美化首页：打造温馨的欢迎页

首页已经有一些基本样式，我们可以进一步丰富。比如给首页的 `<article>` 添加一个特殊背景，让引用更突出。

在CSS中添加：

```css
/* 首页特色 */
.home-article {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 30px;
}
```

然后在 `index.html` 中，给 `<article>` 添加类 `home-article`。注意首页的 `<article>` 现在是“关于这个小屋”部分，加上类后样式生效。

我们还可以给首页的“最新动态”部分也加点样式，比如用虚线边框。

---

### <a id="ch16"></a>16. 美化角色页：卡片式设计

我们已经完成了卡片的基本样式，现在可以微调，比如让卡片悬停时有点效果：

```css
.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
}
```

这样鼠标悬停时卡片会微微上浮，增加互动感。

---

### <a id="ch17"></a>17. 美化时间线页：表格样式与斑马纹

去掉之前加的 `border="1"` 属性，完全用CSS控制表格样式。修改 `timeline.html`，去掉 `<table>` 标签里的 `border` 等属性，只保留结构和内容。

然后在CSS中添加表格样式：

```css
/* 表格样式 */
table {
  width: 100%;
  border-collapse: collapse;   /* 合并边框，避免双线 */
  margin: 20px 0;
  font-size: 1rem;
}
caption {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}
th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #2c3e50;
  color: white;
}
tr:nth-child(even) {
  background-color: #f2f2f2;   /* 偶数行浅灰 */
}
tr:hover {
  background-color: #e0e0e0;    /* 悬停高亮 */
}
tfoot td {
  text-align: center;
  font-weight: bold;
  background-color: #ecf0f1;
}
```

保存后，时间线页的表格会变得美观很多。

---

### <a id="ch18"></a>18. 美化关于页：嵌入视频与布局

关于页我们计划嵌入一段视频。如果没有真实的视频嵌入代码，可以使用 `<video>` 标签播放本地视频，或者用占位。我们先用一个示例的B站嵌入代码（需要替换为真实链接）。为了布局，我们给视频添加一些样式，使其居中并适应屏幕。

在 `about.html` 的 `<main>` 中添加：

```html
<h2>关于本站</h2>
<p>这是一个粉丝制作的《可塑性记忆》纪念网站...</p>

<h3>回忆放映室</h3>
<div class="video-wrapper">
  <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="示例视频 - 请替换为真实链接" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
  </iframe>
</div>
```

然后添加CSS：

```css
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 20px 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

这段CSS让视频容器保持16:9比例，并让 iframe 填满，实现响应式视频。

---

## 第四篇：JavaScript入门与弹幕留言墙

### <a id="ch19"></a>19. JavaScript初体验：变量、事件与DOM操作

#### 19.1 什么是JavaScript？

JavaScript（简称JS）是一种脚本语言，能让网页动态交互。它可以：
- 修改HTML和CSS（DOM操作）。
- 响应用户操作（点击、输入等）。
- 与服务器通信（Ajax）。

#### 19.2 引入JS

和CSS类似，JS可以写在HTML内部（`<script>` 标签），也可以外部文件引入。推荐外部文件。

**步骤1：创建JS文件夹和文件**

在项目文件夹中新建 `js` 文件夹，里面创建 `main.js`。

**步骤2：在HTML中引入**

在每个页面的 `</body>` 结束标签之前添加：

```html
<script src="js/main.js"></script>
```

这样确保JS在页面加载完后执行。

#### 19.3 基本语法

- **变量**：`let` 声明变量，`const` 声明常量。
- **函数**：`function 函数名() { ... }` 或箭头函数 `() => { ... }`。
- **事件监听**：用 `addEventListener` 给元素绑定事件。

#### 19.4 操作DOM

- `document.querySelector('选择器')`：获取第一个匹配的元素。
- `document.querySelectorAll('选择器')`：获取所有匹配的元素（类数组）。
- `element.textContent`：获取或设置文本内容。
- `element.innerHTML`：获取或设置HTML内容。
- `element.style.属性`：修改行内样式。

#### 19.5 项目任务：添加一个简单的问候弹窗

在首页添加一个按钮，点击后弹窗显示“欢迎来到艾拉的记忆小屋”。

首先在 `index.html` 的 `<main>` 内合适位置添加一个按钮：

```html
<button id="greet-btn">点击问候</button>
```

然后在 `main.js` 中写入：

```javascript
// 获取按钮元素
const btn = document.querySelector('#greet-btn');

// 添加点击事件监听
btn.addEventListener('click', function() {
  alert('欢迎来到艾拉的记忆小屋！');
});
```

保存后，打开首页点击按钮，应该能看到弹窗。

---

### <a id="ch20"></a>20. 弹幕留言墙：让访客留下弹幕

#### 20.1 设计思路

我们创建一个新页面 `danmu.html`（或者放在“关于”页里，但为了清晰，我们单独建一个页面）。页面上有一个输入框、一个“发射”按钮，以及一个容器用于显示弹幕。用户输入文字后，点击发射，会在容器右侧生成一条弹幕，向左移动，直到消失。

#### 20.2 步骤

**步骤1：创建 `danmu.html`**

复制其他页面的基础结构，修改导航，添加“弹幕墙”链接。主体内容如下：

```html
<main>
  <h2>弹幕留言墙</h2>
  <p>写下你想对艾拉或司说的话，让它像弹幕一样飘过吧！</p>
  
  <div id="danmu-container" style="position: relative; height: 400px; border: 2px dashed #ccc; overflow: hidden; background: #f0f0f0; margin-bottom: 20px;"></div>
  
  <input type="text" id="danmu-input" placeholder="输入你的弹幕" style="width: 300px; padding: 8px;">
  <button id="send-danmu">发射</button>
</main>
```

**步骤2：在 `main.js` 中添加弹幕逻辑**

```javascript
// 获取元素
const container = document.getElementById('danmu-container');
const input = document.getElementById('danmu-input');
const sendBtn = document.getElementById('send-danmu');

// 发射弹幕函数
function sendDanmu() {
  const text = input.value.trim();
  if (text === '') return;  // 如果输入为空，不操作

  // 创建弹幕元素
  const danmu = document.createElement('div');
  danmu.textContent = text;
  danmu.style.position = 'absolute';
  danmu.style.right = '0';   // 初始位置在容器最右边（我们将用left动画，所以先设left为容器宽度）
  danmu.style.top = Math.random() * (container.clientHeight - 30) + 'px'; // 随机高度，30是估计的弹幕高度
  danmu.style.color = '#' + Math.floor(Math.random()*16777215).toString(16); // 随机颜色
  danmu.style.whiteSpace = 'nowrap';  // 不换行
  danmu.style.fontSize = '20px';
  danmu.style.fontWeight = 'bold';
  danmu.style.textShadow = '1px 1px 2px rgba(0,0,0,0.3)';
  danmu.style.zIndex = '100';
  
  // 将弹幕添加到容器
  container.appendChild(danmu);
  
  // 获取容器宽度
  const containerWidth = container.clientWidth;
  // 设置初始left为容器宽度（从右边开始）
  danmu.style.left = containerWidth + 'px';
  
  // 动画：每隔20ms向左移动2px
  let left = containerWidth;
  const interval = setInterval(() => {
    left -= 2;
    danmu.style.left = left + 'px';
    // 如果弹幕完全移出左侧，清除定时器并移除元素
    if (left < -danmu.clientWidth) {
      clearInterval(interval);
      danmu.remove();
    }
  }, 20);
  
  // 清空输入框
  input.value = '';
}

// 给按钮绑定事件
sendBtn.addEventListener('click', sendDanmu);

// 可选：按回车也发射
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendDanmu();
  }
});
```

**步骤3：测试**

打开 `danmu.html`，输入文字，点击发射，应该能看到彩色弹幕从右向左移动。

---

### <a id="ch21"></a>21. 弹幕动起来：简单动画效果

上面的实现是用 `setInterval` 手动控制位置，但现代CSS动画更流畅。我们可以用CSS动画替代JS动画。

修改JS，不再用 `setInterval`，而是添加一个CSS类，让弹幕通过 `animation` 移动。

**步骤1：定义CSS动画**

在 `style.css` 中添加：

```css
@keyframes danmuMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);  /* 向左移动一个屏幕宽度 */
  }
}
.danmu {
  position: absolute;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  animation: danmuMove 8s linear forwards;  /* 8秒匀速，结束后保持最后一帧 */
  z-index: 100;
}
```

注意：`-100vw` 是基于视口的，但我们的容器是固定宽度的，所以需要用容器宽度。为了精确，我们可以用JS计算容器宽度并设置动画时移出距离。但简单起见，我们可以让弹幕从右边界移动到左边界，用 `right` 和 `left` 属性。更简单：用 `transform: translateX(-100%)` 移动自身宽度，但这只能移出自身，不能移出容器。所以这里我们用JS计算距离会更准确。

实际上，我们可以用 `transform: translateX(-容器宽度)`，但容器宽度需在JS中设置。我们可以用CSS变量传递。

一种简单方案：继续用JS动画，但改用 `requestAnimationFrame` 以获得更好的性能。但为了教学，我们保留 `setInterval` 版本，因为它直观易懂。

或者，我们介绍另一种方法：使用 `Web Animations API`，但可能超出入门范围。所以我们就保留 `setInterval` 版本，并说明这是基础实现，后续可以优化。

---

## 第五篇：项目整合与发布

### <a id="ch22"></a>22. 项目检查与优化

1. **检查所有链接**：确保每个页面导航都能正确跳转。
2. **验证HTML和CSS**：可以用W3C验证工具（https://validator.w3.org/）检查是否有语法错误。
3. **检查图片路径**：确保所有图片都能显示。
4. **代码注释**：适当添加注释，方便以后修改。
5. **文件整理**：确保所有文件都在正确的位置，没有多余文件。

### <a id="ch23"></a>23. 部署到GitHub Pages

1. **注册/登录GitHub**（如果没有账号）。
2. **创建新仓库**：点击右上角加号，选择“New repository”，仓库名可以叫 `aira-memory-house`，选择公开（Public），其他默认。
3. **上传文件**：进入仓库，点击“Add file” → “Upload files”，将项目文件夹中的所有文件和文件夹拖进去，然后提交。
4. **开启GitHub Pages**：进入仓库“Settings”，找到左侧“Pages”，在“Branch”下拉选择 `main` 或 `master`，文件夹选 `/ (root)`，然后点击“Save”。稍等几分钟，页面会显示你的网站地址，例如 `https://你的用户名.github.io/aira-memory-house/`。
5. **访问测试**：用浏览器打开该地址，确认网站运行正常。

### <a id="ch24"></a>24. 继续前行：下一步学什么？

恭喜！你已经完成了从零到入门的HTML/CSS/JS学习，并拥有了一个属于自己的回忆网站。接下来你可以：

- **深入学习CSS**：Grid布局、动画、过渡、预处理器（Sass）。
- **深入学习JavaScript**：ES6+特性、异步编程、Fetch API、DOM高级操作。
- **学习前端框架**：React、Vue，提高开发效率。
- **学习版本控制**：Git和GitHub的基本使用。
- **探索后端**：学习Node.js，让你的留言板真正能存储数据。

推荐资源：
- [MDN Web Docs](https://developer.mozilla.org/zh-CN/)（最权威的Web技术文档）
- [W3School](https://www.w3school.com.cn/)（中文入门教程）
- [《可塑性记忆》官方设定集](https://example.com)（假设）

---

## 🎁 完整项目代码

为了方便你直接使用，下面附上所有文件的最终代码。请按照以下结构创建文件。

### 文件结构

```
aira-memory-house/
├── index.html
├── character.html
├── timeline.html
├── about.html
├── danmu.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── aira.png
    └── tsukasa.png
```

---

### 📄 index.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="一个纪念《可塑性记忆》的粉丝网站，记录艾拉与司的故事。">
  <meta name="author" content="Roka">
  <title>艾拉的记忆小屋 - 首页</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <strong>首页</strong>
      <a href="character.html">角色</a>
      <a href="timeline.html">时间线</a>
      <a href="about.html">关于</a>
      <a href="danmu.html">弹幕墙</a>
    </nav>
  </header>
  
  <main>
    <article class="home-article">
      <h2>关于这个小屋</h2>
      <p>这是一个用HTML、CSS和JavaScript搭建的粉丝网站，致敬《可塑性记忆》中那些温暖而感伤的瞬间。</p>
      <p>在这里，你可以了解<strong>水柿司</strong>与<strong>艾拉</strong>的故事，回顾动画中的经典场景，也可以留下你的弹幕，与同好分享感动。</p>
    </article>
    
    <section class="quote-section">
      <h2>经典台词</h2>
      <blockquote>
        “越是美好的回忆，有时可能会令人越痛苦。”<br>
        —— 艾拉（第3话）
      </blockquote>
      <blockquote>
        “谢谢你，能够为我流泪。”<br>
        —— 艾拉（第13话）
      </blockquote>
    </section>
    
    <section class="welcome-section">
      <h2>欢迎留言</h2>
      <p>点击下面的按钮，或者去<a href="danmu.html">弹幕墙</a>留下你想说的话。</p>
      <button id="greet-btn" class="btn">点击问候</button>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

### 📄 character.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="一个纪念《可塑性记忆》的粉丝网站，记录艾拉与司的故事。">
  <meta name="author" content="Roka">
  <title>艾拉的记忆小屋 - 角色介绍</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <a href="index.html">首页</a>
      <strong>角色</strong>
      <a href="timeline.html">时间线</a>
      <a href="about.html">关于</a>
      <a href="danmu.html">弹幕墙</a>
    </nav>
  </header>
  
  <main>
    <h2>角色介绍</h2>
    
    <div class="character-list">
      <section class="character-card">
        <h3>艾拉</h3>
        <figure>
          <img src="images/aira.png" alt="艾拉" width="200">
          <figcaption>艾拉 - Giftia</figcaption>
        </figure>
        <p>终端服务部门的Giftia，搭档是水柿司。性格内向，不善表达，但内心温柔。</p>
        <h4>艾拉档案</h4>
        <ul>
          <li>喜欢：甜食、发呆</li>
          <li>讨厌：被当作小孩</li>
          <li>口头禅：“我知道了”</li>
        </ul>
      </section>
      
      <section class="character-card">
        <h3>水柿司</h3>
        <figure>
          <img src="images/tsukasa.png" alt="水柿司" width="200">
          <figcaption>水柿司 - 人类</figcaption>
        </figure>
        <p>因考试失利被父母安排进入SAI公司，成为艾拉的搭档。逐渐走进艾拉的内心。</p>
        <h4>司档案</h4>
        <ul>
          <li>喜欢：照顾人、努力</li>
          <li>特长：做饭</li>
          <li>梦想：和艾拉一起工作到最后</li>
        </ul>
      </section>
    </div>
    
    <section class="story-steps">
      <h3>主要剧情步骤</h3>
      <ol>
        <li>第1话：在商场电梯相遇</li>
        <li>第2话：第一次回收任务</li>
        <li>第3话：游乐园约会</li>
        <li>第13话：摩天轮上的告别</li>
      </ol>
    </section>
    
    <section class="terms">
      <h3>术语解释</h3>
      <dl>
        <dt>Giftia</dt>
        <dd>拥有感情的机器人，寿命约为81920小时。</dd>
        <dt>终端服务部门</dt>
        <dd>负责回收寿命将尽的Giftia的部门。</dd>
      </dl>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

### 📄 timeline.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="一个纪念《可塑性记忆》的粉丝网站，记录艾拉与司的故事。">
  <meta name="author" content="Roka">
  <title>艾拉的记忆小屋 - 剧情时间线</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <a href="index.html">首页</a>
      <a href="character.html">角色</a>
      <strong>时间线</strong>
      <a href="about.html">关于</a>
      <a href="danmu.html">弹幕墙</a>
    </nav>
  </header>
  
  <main>
    <h2>剧情时间线</h2>
    
    <table class="timeline-table">
      <caption>《可塑性记忆》动画剧情</caption>
      <thead>
        <tr>
          <th>话数</th>
          <th>标题</th>
          <th>关键事件</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>第1话</td><td>你与你的相遇</td><td>司与艾拉在商场电梯相遇，开始搭档。</td></tr>
        <tr><td>第2话</td><td>不想让你见到</td><td>第一次回收任务：妮娜与百花千寻。</td></tr>
        <tr><td>第3话</td><td>两人共度的时光</td><td>司约艾拉去游乐园，关系拉近。</td></tr>
        <tr><td>第4话</td><td>无法传达的话语</td><td>满对司产生误会。</td></tr>
        <tr><td>第5话</td><td>凝视着你的背影</td><td>扎克的过去揭晓。</td></tr>
        <tr><td>第6话</td><td>终于察觉的心意</td><td>司意识到自己对艾拉的感情。</td></tr>
        <tr><td>第7话</td><td>想要守护的人</td><td>艾拉的寿命问题浮出水面。</td></tr>
        <tr><td>第8话</td><td>理所当然的事情</td><td>司决定陪伴艾拉到最后。</td></tr>
        <tr><td>第9话</td><td>向星海许愿</td><td>两人看流星雨。</td></tr>
        <tr><td>第10话</td><td>再会</td><td>艾拉与过去的搭档重逢。</td></tr>
        <tr><td>第11话</td><td>约定的日子</td><td>艾拉向司坦白剩余时间不多。</td></tr>
        <tr><td>第12话</td><td>未能传递的话语</td><td>艾拉开始出现故障。</td></tr>
        <tr><td>第13话</td><td>愿你能与重要的人重逢</td><td>摩天轮上的告别，艾拉被回收。</td></tr>
      </tbody>
      <tfoot>
        <tr><td colspan="3">全13话 · 一段难忘的记忆</td></tr>
      </tfoot>
    </table>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

### 📄 about.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="一个纪念《可塑性记忆》的粉丝网站，记录艾拉与司的故事。">
  <meta name="author" content="Roka">
  <title>艾拉的记忆小屋 - 关于本站</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <a href="index.html">首页</a>
      <a href="character.html">角色</a>
      <a href="timeline.html">时间线</a>
      <strong>关于</strong>
      <a href="danmu.html">弹幕墙</a>
    </nav>
  </header>
  
  <main>
    <article class="about-article">
      <h2>关于本站</h2>
      <p>这是一个粉丝制作的《可塑性记忆》纪念网站，旨在通过HTML、CSS和JavaScript的学习，重温动画中的感动。</p>
      <p>所有素材版权归原制作方所有，本站仅供学习交流使用。</p>
      <p>作者：<strong>Roka</strong> · 芦花家 (roka.ink)</p>
    </article>
    
    <section class="video-section">
      <h3>回忆放映室</h3>
      <p>下面嵌入的是《可塑性记忆》的OP《朝霞与星空》的MV（示例，请替换为真实视频）：</p>
      <div class="video-wrapper">
        <!-- 请替换为真实的嵌入代码，这里仅作示例 -->
        <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="示例视频 - 请替换为真实链接" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
      </div>
      <p class="video-note">※ 此处为示例视频，实际可替换为《可塑性记忆》相关视频</p>
    </section>
    
    <section class="contact-section">
      <h3>联系我</h3>
      <p>如果你有任何问题或建议，欢迎通过以下方式联系我：</p>
      <ul>
        <li>GitHub: <a href="https://github.com/YS-110509" target="_blank">YS-110509</a></li>
        <li>博客: <a href="https://roka.ink" target="_blank">芦花家</a></li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

### 📄 danmu.html

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="一个纪念《可塑性记忆》的粉丝网站，记录艾拉与司的故事。">
  <meta name="author" content="Roka">
  <title>艾拉的记忆小屋 - 弹幕留言墙</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <h1>艾拉的记忆小屋</h1>
    <nav>
      <a href="index.html">首页</a>
      <a href="character.html">角色</a>
      <a href="timeline.html">时间线</a>
      <a href="about.html">关于</a>
      <strong>弹幕墙</strong>
    </nav>
  </header>
  
  <main>
    <h2>弹幕留言墙</h2>
    <p>写下你想对艾拉或司说的话，让它像弹幕一样飘过吧！</p>
    
    <div id="danmu-container" class="danmu-container"></div>
    
    <div class="danmu-controls">
      <input type="text" id="danmu-input" placeholder="输入你的弹幕" class="danmu-input">
      <button id="send-danmu" class="btn">发射</button>
      <button id="clear-danmu" class="btn btn-secondary">清空</button>
    </div>
    
    <div class="danmu-tips">
      <p>💡 小贴士：弹幕会从右向左移动，随机颜色，试试看！</p>
    </div>
  </main>
  
  <footer>
    <p>&copy; 2026 芦花家 · 愿你能与重要的人重逢</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

### 🎨 css/style.css

```css
/* ===== 全局样式 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ===== 头部与导航 ===== */
header {
  background: linear-gradient(135deg, #a8ede0, #fed6e3);
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0 0 15px 0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 2.5rem;
}

nav {
  background-color: rgba(44, 62, 80, 0.85);
  padding: 12px;
  border-radius: 40px;
  display: inline-block;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

nav a, nav strong {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  padding: 5px 10px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

nav strong {
  background-color: #ffcc00;
  color: #2c3e50;
  font-weight: bold;
}

/* ===== 主内容区域 ===== */
main {
  flex: 1;
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 20px;
  width: 100%;
}

/* ===== 标题样式 ===== */
h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

h2 {
  font-size: 2rem;
  color: #34495e;
  border-bottom: 3px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 20px 0 10px;
}

h4 {
  font-size: 1.2rem;
  color: #555;
  margin: 15px 0 5px;
}

/* ===== 段落与引用 ===== */
p {
  margin-bottom: 15px;
}

blockquote {
  font-style: italic;
  background-color: #ecf0f1;
  padding: 15px 20px;
  border-left: 5px solid #3498db;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
}

/* ===== 列表样式 ===== */
ul, ol, dl {
  margin: 10px 0 20px 20px;
}

li, dd {
  margin-bottom: 5px;
}

dt {
  font-weight: bold;
  color: #2c3e50;
  margin-top: 10px;
}

/* ===== 链接样式 ===== */
a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* ===== 按钮样式 ===== */
.btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
  border: none;
}

.btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #95a5a6;
}

.btn-secondary:hover {
  background-color: #7f8c8d;
}

/* ===== 页脚样式 ===== */
footer {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  margin-top: 40px;
}

/* ===== 首页特有样式 ===== */
.home-article {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.quote-section {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.welcome-section {
  text-align: center;
  padding: 20px;
}

/* ===== 角色页样式 ===== */
.character-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px 0;
}

.character-card {
  flex: 1 1 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.character-card img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 15px;
  border-radius: 10px;
}

.character-card figcaption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-bottom: 15px;
}

.character-card ul {
  margin-left: 0;
  list-style-position: inside;
}

.story-steps, .terms {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
}

/* ===== 时间线页表格样式 ===== */
.timeline-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.timeline-table caption {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2c3e50;
}

.timeline-table th,
.timeline-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.timeline-table th {
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
}

.timeline-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.timeline-table tr:hover {
  background-color: #e0e0e0;
}

.timeline-table tfoot td {
  text-align: center;
  font-weight: bold;
  background-color: #ecf0f1;
}

/* ===== 关于页样式 ===== */
.about-article {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.video-section {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 比例 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 20px 0;
  border-radius: 10px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-note {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  text-align: center;
}

.contact-section {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
}

/* ===== 弹幕墙样式 ===== */
.danmu-container {
  position: relative;
  height: 400px;
  border: 2px dashed #ccc;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.danmu-controls {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.danmu-input {
  flex: 1;
  min-width: 250px;
  padding: 12px 15px;
  border: 2px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.danmu-input:focus {
  outline: none;
  border-color: #3498db;
}

.danmu-tips {
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  color: #2c3e50;
}

/* ===== 弹幕元素样式（JS动态创建） ===== */
.danmu-item {
  position: absolute;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 100;
  pointer-events: none; /* 让弹幕不阻挡点击 */
  user-select: none;    /* 防止选中 */
  animation: danmuMove 8s linear forwards;
}

@keyframes danmuMove {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

/* ===== 响应式设计 ===== */
@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }
  
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 20px;
  }
  
  nav a, nav strong {
    margin: 5px 10px;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .character-list {
    flex-direction: column;
  }
  
  .character-card {
    flex: 1 1 auto;
  }
  
  .timeline-table {
    font-size: 0.9rem;
  }
  
  .timeline-table th,
  .timeline-table td {
    padding: 8px 10px;
  }
  
  .danmu-controls {
    flex-direction: column;
  }
  
  .danmu-input {
    width: 100%;
  }
}

@media (max-width: 480px) {
  main {
    padding: 0 10px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  nav a, nav strong {
    margin: 3px 5px;
    font-size: 0.9rem;
  }
  
  blockquote {
    padding: 10px 15px;
    font-size: 0.95rem;
  }
  
  .timeline-table {
    font-size: 0.8rem;
  }
  
  .timeline-table th,
  .timeline-table td {
    padding: 6px 8px;
  }
}
```

---

### 📄 js/main.js

```javascript
// ===== 页面加载完成后执行 =====
document.addEventListener('DOMContentLoaded', function() {
  
  // ===== 首页问候按钮 =====
  const greetBtn = document.getElementById('greet-btn');
  if (greetBtn) {
    greetBtn.addEventListener('click', function() {
      alert('欢迎来到艾拉的记忆小屋！愿你能与重要的人重逢。');
    });
  }
  
  // ===== 弹幕功能 =====
  const danmuContainer = document.getElementById('danmu-container');
  const danmuInput = document.getElementById('danmu-input');
  const sendBtn = document.getElementById('send-danmu');
  const clearBtn = document.getElementById('clear-danmu');
  
  if (danmuContainer && danmuInput && sendBtn) {
    
    // 发射弹幕函数
    function sendDanmu() {
      const text = danmuInput.value.trim();
      if (text === '') {
        alert('请输入弹幕内容！');
        return;
      }
      
      // 创建弹幕元素
      const danmu = document.createElement('div');
      danmu.className = 'danmu-item';
      danmu.textContent = text;
      
      // 随机颜色（生成鲜艳的颜色）
      const hue = Math.floor(Math.random() * 360);
      danmu.style.color = `hsl(${hue}, 100%, 70%)`;
      
      // 随机大小 (18-28px)
      const size = Math.floor(Math.random() * 10) + 18;
      danmu.style.fontSize = size + 'px';
      
      // 随机垂直位置 (10% - 90%)
      const topPercent = Math.floor(Math.random() * 80) + 10;
      danmu.style.top = topPercent + '%';
      
      // 随机动画时长 (6-12秒)
      const duration = (Math.floor(Math.random() * 6) + 6).toFixed(1);
      danmu.style.animation = `danmuMove ${duration}s linear forwards`;
      
      // 添加到容器
      danmuContainer.appendChild(danmu);
      
      // 动画结束后移除元素
      danmu.addEventListener('animationend', function() {
        danmu.remove();
      });
      
      // 清空输入框
      danmuInput.value = '';
    }
    
    // 点击发射按钮
    sendBtn.addEventListener('click', sendDanmu);
    
    // 按回车键发射
    danmuInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendDanmu();
      }
    });
    
    // 清空所有弹幕
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        while (danmuContainer.firstChild) {
          danmuContainer.removeChild(danmuContainer.firstChild);
        }
      });
    }
  }
  
  // ===== 为当前页面的导航链接添加高亮 =====
  // 这个功能已经在HTML中用<strong>手动实现了，但也可以用JS自动处理
  // 以下是可选的自动高亮代码（注释掉，因为我们已经手动标记）
  /*
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      const strong = document.createElement('strong');
      strong.textContent = link.textContent;
      link.parentNode.replaceChild(strong, link);
    }
  });
  */
  
  // ===== 为所有外部链接添加新标签打开 =====
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
  
  // ===== 图片加载失败时的备用提示 =====
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // 如果图片加载失败，显示一个简单的替代文本
      this.style.display = 'none';
      const errorMsg = document.createElement('p');
      errorMsg.textContent = `[图片加载失败: ${this.alt}]`;
      errorMsg.style.color = '#999';
      errorMsg.style.fontStyle = 'italic';
      this.parentNode.insertBefore(errorMsg, this.nextSibling);
    });
  });
  
  console.log('艾拉的记忆小屋 - 欢迎你！');
});
```

---

### 🖼️ 图片文件说明

请准备两张角色图片，命名为：
- `aira.png` - 艾拉的图片
- `tsukasa.png` - 水柿司的图片

放入 `images/` 文件夹中。如果没有合适的图片，可以使用以下在线占位图临时替代（但需要联网）：

在 `character.html` 中临时修改图片路径为在线占位图：
```html
<img src="https://via.placeholder.com/200x200?text=艾拉" alt="艾拉" width="200">
<img src="https://via.placeholder.com/200x200?text=水柿司" alt="水柿司" width="200">
```

---

## 💌 结语

感谢你跟随Roka完成这段从零到入门的HTML旅程。希望这个以《可塑性记忆》为背景的项目，能让你在学习技术的同时，也重温那份感动。如果你有任何问题或作品展示，欢迎在评论区留言。

**愿你能与重要的人，有一天能够再次相遇。**