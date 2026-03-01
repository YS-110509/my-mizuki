---
title: "Ren'Py引擎基础教程"
published: 2026-02-24
pinned: false
description: 基于《可塑性记忆》原作的Ren'Py教程，从零开始教你制作视觉小说。
tags: ["Ren'Py", "视觉小说", "教程", "可塑性记忆"]
category: "教程"
licenseName: "CC BY-NC-SA 4.0"
author: "さくらじま ろか"
sourceLink: "https://github.com/YS-110509/my-mizuki/tree/master/src/content/posts/pid002"
draft: false
date: 2026-02-24
image: "./images/cover.png"
pubDate: 2026-02-24
---
# Ren'Py 视觉小说引擎基础教程

欢迎来到 **芦花家 (roka.ink)**！  
这里是 **Roka** 为所有对视觉小说开发感兴趣的朋友准备的一份 Ren'Py 基础教程。为了确保内容不脱轨，本教程所有示例将统一采用《可塑性记忆》这部作品的角色和剧情进行**有改编的简单模拟**。所引用的情节、对话均可在原作动画中找到对应出处。

内容基于 **Ren'Py 8.x / 7.x** 版本，适用于 Windows、macOS 和 Linux。

> 📥 **获取 Ren'Py**  
> 访问 [Ren'Py 官网](https://www.renpy.org/) 下载对应操作系统的 SDK 版本。推荐下载包含 launcher 的完整包。

---

## 1. 安装与初识 Ren'Py

1. **解压**下载的压缩包到一个容易找到的文件夹（例如 `D:\RenPy` 或 `~/RenPy`）。
2. 运行 `renpy.exe` (Windows) 或 `renpy.sh` (Linux/macOS) 启动启动器。
3. 启动器界面主要分为三部分：
   - **左侧**：项目列表（默认包含教程项目 “Tutorial” 和演示项目 “The Question”）。
   - **中间**：项目操作按钮（启动项目、编辑脚本、管理文件等）。
   - **右侧**：Ren'Py 版本信息及设置。

![Ren'Py Launcher](https://www.renpy.org/static/renpy-launcher.jpg)  
*Ren'Py 启动器界面（图片仅作示意）*

---

## 2. 创建第一个项目

1. 在启动器中点击 **“创建新项目”**。
2. 选择项目存放目录（通常默认即可）。
3. 填写**项目名称**（例如 “PlasticMemories_Test”）。
4. 选择**界面颜色方案**（建议先选默认）。
5. 选择**游戏分辨率**（常见：1280x720 或 1920x1080）。
6. 等待 Ren'Py 生成基础文件结构。

生成后的项目文件夹结构如下：

```
MyFirstGame/
├── game/               # 游戏脚本、资源存放目录
│   ├── gui/            # 界面图片定义
│   ├── images/         # 存放所有图像
│   ├── audio/          # 存放音乐和音效
│   ├── script.rpy      # 默认主脚本文件
│   └── options.rpy     # 游戏选项配置
└── (其他工程文件)
```

---

## 3. Ren'Py 脚本基础

Ren'Py 脚本使用扩展名为 `.rpy` 的文件编写，本质是 Ren'Py 语法 + Python 表达式。所有脚本文件放在 `game/` 目录下。

### 3.1 文件结构与编码

- **UTF-8 编码**（强烈建议使用支持 UTF-8 的编辑器，如 VS Code、Sublime Text、Notepad++）。
- 注释使用 `#`。
- 缩进敏感：与 Python 一样，使用**空格缩进**表示代码块（通常为 4 空格）。

### 3.2 标签 (label) 与流程控制

游戏从标签 `start` 开始执行。每个 `label` 定义一个脚本节点。

```renpy
label start:
    "欢迎来到芦花家的 Ren'Py 教学游戏！"
    "今天我们将重温《可塑性记忆》中，水柿司与艾拉相遇的故事。"
    return   # 结束游戏或返回主菜单
```

- `return` 可以结束游戏（如果从 start 调用则返回主菜单）。
- 使用 `jump` 跳转到其他标签：
  ```renpy
  label start:
      "在购物中心的电梯里，透过窗户可以看到远处的摩天轮。"
      jump first_day_meet
  
  label first_day_meet:
      "从今天起要承蒙各位关照了。"
      return
  ```

### 3.3 对话语句

首先需要定义角色对象。我们模拟的主要角色如下：

```renpy
define tsukasa = Character("水柿司")
define aira = Character("艾拉")
define mitsuki = Character("绢岛满")
define zach = Character("扎克")
define yamazonobe = Character("山野边课长")
```

之后就可以用这些角色名显示对话：

```renpy
yamazonobe "对了！让艾拉酱和司君组队的话怎么样？"
aira "我知道了"
```

原作经典台词示例（出自第3话艾拉的内心独白）：

```renpy
aira "越是美好的回忆，有时可能会令人越痛苦。"
```

### 3.4 图像与场景

#### 声明图像
通常将图片放在 `game/images/` 文件夹中，Ren'Py 会自动根据文件名关联图像标签。例如：
- `bg office.jpg` → 背景标签 `bg office`（SAI公司终端服务部门办公室）
- `aira normal.png` → 角色标签 `aira`，表情 `normal`
- `tsukasa smile.png` → 角色标签 `tsukasa`，表情 `smile`

也可以手动声明（建议按照原作场景命名）：

```renpy
image bg office = "bg/sai_office.jpg"
image bg shopping_mall = "bg/mall.jpg"        # 第1话相遇的商场
image bg amusement_park = "bg/park_night.jpg" # 第3话约会的游乐园
image bg ferris_wheel = "bg/ferris_wheel.jpg" # 最终话摩天轮

image aira normal = "aira/ normal.png"
image aira sad = "aira/sad.png"
image aira smile = "aira/smile.png"
image tsukasa normal = "tsukasa/normal.png"
```

#### 显示图像
- `scene`：清除所有图像并显示新背景。
  ```renpy
  scene bg office  # 显示SAI公司办公室
  ```
- `show`：在现有图像上显示新图像（角色立绘）。
  ```renpy
  show aira normal at left   # 艾拉显示在左侧
  show tsukasa smile at right # 司显示在右侧
  ```
- `hide`：隐藏指定图像。
  ```renpy
  hide aira
  ```

#### 图像位置
常用位置预设：`left`, `right`, `center`, `truecenter`。也可以使用 `at` 自定义变换。

```renpy
show aira normal at left
show mitsuki angry at right  # 满对司的“流氓行为”发怒时
```

### 3.5 音乐与音效

将音频文件放在 `game/audio/` 中，通过以下语句控制。《可塑性记忆》的配乐非常出色，建议使用原声带。

- `play music`：播放背景音乐（自动循环）。
  ```renpy
  play music "audio/plastic_memories_ost.ogg"  # 播放原声带
  ```
- `play sound`：播放音效（只播放一次）。
  ```renpy
  play sound "audio/click.ogg"  # 点击音效
  ```
- `stop music`：停止音乐。
  ```renpy
  stop music fadeout 2.0   # 2秒淡出
  ```

支持格式：.ogg, .mp3, .wav 等。

### 3.6 转场效果

在 `scene`, `show`, `hide` 后添加 `with` 语句即可应用转场。

常用转场：
- `dissolve`：溶解
- `fade`：淡入淡出
- `move`：移动

示例——还原第1话艾拉与司在商场电梯初遇的场景：

```renpy
scene bg shopping_mall with dissolve
show aira normal at center with moveinright
tsukasa "（在电梯里，第一次见到了艾拉）"
```

### 3.7 菜单与分支

使用 `menu` 语句创建选项菜单，菜单选项可以带条件。例如，根据第3话司邀请艾拉约会的场景：

```renpy
label date_invitation:
    scene bg office
    show tsukasa normal at left
    show aira normal at right
    tsukasa "艾拉，明天休息……要不要一起去买东西？"
    menu:
        "艾拉的反应："
        "同意" if aira_affection > 50:
            aira "……嗯，可以。"
            jump shopping_date
        "拒绝":
            aira "我……还是算了。"
            tsukasa "这样啊……"
```

---

## 4. 进阶功能（以《可塑性记忆》剧情为例）

### 4.1 变量与条件判断

使用变量记录关键剧情选择。例如，记录艾拉对司的好感度。

```renpy
$ aira_affection = 30  # 初始好感度
$ aira_lifetime = 2000  # 艾拉剩余寿命（小时），出自第2话

label check_affection:
    if aira_affection >= 80:
        "艾拉开始对司敞开心扉。"
    elif aira_affection >= 50:
        "艾拉逐渐习惯了与司搭档。"
    else:
        "艾拉依然保持距离。"
```

### 4.2 使用Python块实现复杂逻辑

```renpy
python:
    # 计算艾拉剩余寿命（以天为单位）
    days_left = aira_lifetime // 24
    hours_remain = aira_lifetime % 24
    renpy.say(aira, "我的剩余寿命还有" + str(days_left) + "天" + str(hours_remain) + "小时。")
```

### 4.3 图像变换与动画

可以使用 `transform` 创建自定义动画。例如，还原第3话司在宿舍尝试各种“馊主意”试图拉近与艾拉关系的场景：

```renpy
transform exercise:
    yoffset 0
    linear 0.5 yoffset -20
    linear 0.5 yoffset 0
    repeat 3

label weird_attempts:
    scene bg dorm
    show tsukasa normal at exercise
    show aira normal at right
    "司在房间里做起了运动，试图吸引艾拉的注意。"
    aira "（斜睨了一眼，继续发呆）"  # 原作中艾拉不为所动
    "努力……白费了。"
```

### 4.4 自定义样式

可自定义文本样式以适配《可塑性记忆》的视觉风格。

```renpy
style plastic_window:
    background Solid("#88aaff")  # 浅蓝色调，对应作品清新中带着忧伤的风格
    xalign 0.5
    yalign 0.95
```

---

## 5. 《可塑性记忆》剧情示例合集

以下是根据原作剧情模拟的完整代码示例，可供参考学习。

### 示例1：第1话——第一次回收任务:妮娜与百花千寻

场景设定：艾拉曾尝试用下午茶的方式与百花千寻谈判，但屡次失败。后来两人误入院子见到了妮娜本人，在妮娜的恳求下，奶奶终于同意签字。

```renpy
label first_recovery:
    scene bg chihiro_house
    "司和艾拉的第一项任务：回收Giftia妮娜。"
    show chihiro sad at center
    tsukasa "百花女士，关于妮娜的回收……"
    chihiro "我拒绝签字。"
    show aira normal at right
    aira "请让我们进屋谈谈，我们可以一起喝下午茶……"
    chihiro "不用了。"
    
    "尝试多次后，艾拉和司误入院子，见到了妮娜本人。"
    hide chihiro
    show nina smile at center
    nina "你们是来回收我的吧？"
    show chihiro sad at left
    chihiro "妮娜……"
    nina "奶奶，如果一直待在奶奶身边的话，妮娜会坏掉，会给奶奶添麻烦。"
    nina "所以不能一直待在奶奶身边。如果奶奶伤心，妮娜也会伤心。"
    
    "听到妮娜的话，百花千寻终于改变主意。"
    chihiro "我明白了……我签字。"
    hide nina with dissolve
    "妮娜完成了最后的回收。"
    
    scene bg street
    show tsukasa normal at left
    show aira normal at right
    tsukasa "这就是我们的工作啊……"
    aira "嗯。我们所做的事情，就是摧毁别人留下的回忆，绝对不会得到什么回报。"[citation:1]
    
    "夕阳下，两人默默走在回去的路上。"
    return
```

### 示例2：第3话——香草店的选择

场景设定：司以“想感谢同事”为借口，邀请艾拉帮忙挑选香草。实际上描述的全是艾拉自己的特征。

```renpy
label herb_shop:
    scene bg herb_shop
    show aira normal at center
    show tsukasa smile at left
    tsukasa "我想买份香草送给要感谢的同事，你能帮我挑选最适合她的吗？"
    aira "可以。请描述一下她的性格。"
    tsukasa "嗯……不太爱说话，在家里面经常发呆，食量不大，比较执着于喜好。"
    aira "是一个比较麻烦的人呢。"
    tsukasa "没有啦！"  # 艾拉还没意识到描述的是她自己
    aira "（戴上眼镜，开始认真挑选）"
    return
```

### 示例3：最终话——摩天轮上的告别

场景设定：在艾拉被回收前的最后时刻，两人在摩天轮上度过最后的时光。

```renpy
label final_ferris_wheel:
    scene bg ferris_wheel at night
    show tsukasa normal at left
    show aira smile at right
    tsukasa "艾拉……"
    aira "司，谢谢你为我做的一切。"
    menu:
        "你想对艾拉说什么？"
        "告诉她最喜欢的地方":
            tsukasa "我喜欢你笨手笨脚的样子。"
        "告诉她最珍惜的回忆":
            tsukasa "和你一起在游乐园的那天，是我最珍贵的回忆。"
    aira "谢谢……"
    aira "谢谢你为我哭泣。"
    aira "梦幻的时间…差不多要结束了。"
    aira "最后的地方……在这里就好。"
    aira "在摩天轮转完一周之前。"
    aira "（将代表着结束自己一切的戒指托在手心）"
    tsukasa "…"
    tsukasa "……"
    aira "谢谢你，能够为我流泪"
    aira "……谢谢你…"
    tsukasa "………（为艾拉带上了戒指）"
    tsukasa "时光流转，愿你与真爱之人能够再度相逢。"
    aira "嗯…"
    return
```

---

## 6. 测试与发布

### 6.1 测试游戏

在启动器中选中项目，点击 **“启动项目”** 即可运行。建议经常测试，确保脚本无错。

### 6.2 检查脚本错误

点击 **“检查脚本”** (Check Scripts) 可以快速检测语法错误。

### 6.3 生成发行版

1. 在启动器中选择项目。
2. 点击 **“分发”** (Build Distributions)。
3. 选择要生成的目标平台（Windows、macOS、Linux 等），Ren'Py 会自动打包成可发布的压缩包。

生成的包位于项目目录下的 `dist/` 文件夹中。

---

## 7. 常见问题与技巧（基于《可塑性记忆》开发场景）

### Q: 脚本修改后不生效？
A: 在启动器中点击 **“刷新”** 或重新启动游戏。

### Q: 如何实现艾拉那样的角色表情变化？
A: 使用 `ConditionSwitch` 根据变量控制表情。

```renpy
image aira = ConditionSwitch(
    "aira_happy == True", "aira_smile.png",
    "aira_sad == True", "aira_sad.png",
    "True", "aira_normal.png"
)
```

### Q: 如何实现类似“艾拉剩余寿命”的倒计时系统？
A: 使用变量和 `renpy.pause` 模拟时间流逝。

```renpy
label time_pass:
    $ aira_lifetime -= 24  # 过去一天
    if aira_lifetime <= 0:
        jump recovery_scene
    else:
        "艾拉的剩余寿命还有 [aira_lifetime] 小时。"
        return
```

### Q: 如何设置多结局？
A: 根据关键选择点的变量跳转到不同结局标签。

```renpy
if aira_affection >= 80:
    jump good_ending
else:
    jump normal_ending
```

---

## 8. 学习资源

- **官方文档**：[https://www.renpy.org/doc/html/](https://www.renpy.org/doc/html/) （最权威）
- **官方中文文档**：[https://www.renpy.cn/doc/](https://www.renpy.cn/doc/)
- **Ren'Py 中文社区**：[https://www.renpy.cn/](https://www.renpy.cn/) （论坛、问答、资源）
- **《可塑性记忆》参考资料**：
  - 原作动画第1-13话
  - B站专栏分析
  - 经典台词合集

---

## 结语

各位来到 **芦花家 (roka.ink)** 的朋友们，通过本教程你们已经掌握了 Ren'Py 的基础用法。所有示例都严格遵循《可塑性记忆》的原作设定——从第1话艾拉与司在商场的初遇，到第3话的香草店挑选，再到最终话摩天轮上的告别，每一个场景都可在原作中找到对应。

希望这份教程，能帮助你们更好地理解 Ren'Py 的用法，也能让《可塑性记忆》的粉丝在学习过程中感受到亲切感。期待看到你们的作品！

> ✨ **小提示**：保持脚本整洁，多利用 `#` 注释，及时备份项目。遇到问题先查文档，再到社区提问。

**愿你能与重要的人，有一天能够再次相遇。** 

