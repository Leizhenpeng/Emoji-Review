 # Emoji Code Review

## 简介

为什么程序员不喜欢写 code-review，宁可动手改也不愿意指出来自己的意见？

在代码审查中，一点点Emoji就能让过程变得更有趣，让给予和接受代码审查变得更加愉快😃。


Emoji Review 是一款浏览器插件，辅助用户在Github上简单有趣的表达对代码的意见，让代码审查变得像聊天一样有趣。

## Emoji Review Guide

> ~~一张图胜过千言万语。~~ _一个Emoji胜过20个字。_

## Emoji图鉴

| emoji |   `:code:`    | 意义                                                                                                                                                          |
| :---: | :-----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   👍   |  `:smiley:`   | 这个棒极了，赞一个！ <br /><br /> ...而且我想让作者知道！这是突出代码审查中积极部分的一种方式。                                                               |
|   🔧   |  `:wrench:`   | 这里得修修，需要改进哦！ <br /><br />这是我感觉到值得处理的关注点或建议的更改/重构。                                                                          |
|   ❓   | `:question:`  | 我有点迷糊，能解释一下吗？ <br /><br />这应该是一个充分形成的问题，带有足够信息和上下文，需要回应。                                                           |
|   🤔   | `:thinking:`  | 我在思考，或者有其他想法可以讨论。 <br /><br />我可能会表达关注，提出替代解决方案，或者用自己的话走过代码，确保我理解。                                       |
|   🌱   | `:seedling:`  | 这是个好主意，值得一试！ <br /><br />这不是一个更改请求，但可能对未来有更大的影响。一般来说，这是未来需要记住的事情。                                         |
|   📝   |   `:memo:`    | 这里需要个说明，别忘了哦！ <br /><br />这是一个解释性注释，有趣的事实，或相关评论，不需要任何行动。                                                           |
|   ⛏️   |   `:pick:`    | 细节很重要，这里可以做得更好！ <br /><br />这不需要任何更改，通常不说更好。这可能包括风格、格式化或组织建议，如果它们真的很重要，应该通过linting来防止/执行。 |
|   ♻️   |  `:recycle:`  | 重构一下，让代码更简洁高效！ <br /><br />应该包含足够的上下文，使其可操作，不被当作小问题。                                                                   |
|   🏕   |  `:camping:`  | 这里有个提升空间，可以做得更好！ <br /><br />与你的改变不直接相关，让我们把代码保持得比我们发现时更干净。                                                     |
|   📌   |  `:pushpin:`  | 这个点子不错，但可能不在我们的计划内。 <br /><br />这是一个《超出范围》的关注点，应该适当地安排后续跟进。                                                     |
|   💡   | `:lightbulb:` | 灵光一闪，有个新点子想分享！ <br /><br />你的代码让我想到了这个新想法。不需要行动，我想和你分享这个想法。                                                     |

#### 示例：
❓ 我不太明白这段代码的逻辑，能详细解释一下吗？

🔧 这里似乎有一个潜在的内存泄漏问题，我们可能需要添加一些清理代码。

🤔 我建议我们检查一下资源回收的逻辑

🌱 这可能需要一些额外的工作，但长远来看可能会带来性能上的提升

📌 我们可以在下个迭代中考虑这个点子。

## 安装指南
### Chrome商店
快来，点这个按钮，让Emoji表情派对在你的Chrome浏览器里开起来：

### 本地安装
1. 把我们的仓库克隆到你的电脑上。
2. 依次执行`pnpm install`、`pnpm build`。
3. 打开Chrome，找到`chrome://extensions/`。
4. 开启`开发者模式`，就像打开了新世界的大门。
5. 点击`加载未打包的扩展程序`，选择你的仓库文件夹。


## 特别感谢
这个项目受[Axolo.co](https://axolo.co)启发，更符合国内开发者需求。