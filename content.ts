// @ts-ignore
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"

import { Storage } from "@plasmohq/storage"

const storage = new Storage()

export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*"],
  css: ["style.css"]
}

const emojis = [
  { emoji: "👍", tooltip: "这个棒极了，赞一个！" },
  { emoji: "🔧", tooltip: "这里得修修，需要改进哦！" },
  { emoji: "❓", tooltip: "我有点迷糊，能解释一下吗？" },
  { emoji: "🤔", tooltip: "我在思考，或者有其他想法可以讨论。" },
  { emoji: "🌱", tooltip: "这是个好主意，值得一试！" }, // 这里我们用“好主意”来代替“播种”，更直观一些
  { emoji: "📝", tooltip: "这里需要个说明，别忘了哦！" },
  { emoji: "⛏️", tooltip: "细节很重要，这里可以做得更好！" },
  { emoji: "♻️", tooltip: "重构一下，让代码更简洁高效！" },
  { emoji: "🏕", tooltip: "这里有个提升空间，可以做得更好！" }, // 使用“提升空间”来代替“露营”，更符合代码改进的语境
  { emoji: "📌", tooltip: "这个点子不错，但可能不在我们的计划内。" },
  { emoji: "💡", tooltip: "灵光一闪，有个新点子想分享！" }
]

function addEmojisToCodeLines() {
  const codeLines = document.querySelectorAll(
    ".blob-code.blob-code-context.js-file-line, .blob-code.blob-code-addition, .blob-code.blob-code-deletion"
  )

  codeLines.forEach((line) => {
    if (!line.dataset.emojiAdded) {
      line.dataset.emojiAdded = "true" // Mark the line so we don't add emojis multiple times

      line.addEventListener("mouseenter", handleMouseEnter)
      line.addEventListener("mouseleave", handleMouseLeave)
    }
  })
}

let timer = null

// Function to handle mouse enter event
function handleMouseEnter() {
  const line = this

  timer = setTimeout(() => {
    const emojiContainer = createEmojiContainer()
    emojis.forEach(({ emoji, tooltip }, index) => {
      const emojiButton = createEmojiButton(emoji, tooltip, index, line)
      emojiContainer.appendChild(emojiButton)
    })

    line.appendChild(emojiContainer)
  }, 800) // Delay of 800ms
}

// Function to handle mouse leave event
function handleMouseLeave() {
  const line = this
  const emojiContainer = line.querySelector(".emoji-container")
  if (emojiContainer) {
    emojiContainer.remove()
  }

  // Clear the timer when mouse leaves the line
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}
// Function to create emoji container
function createEmojiContainer() {
  const emojiContainer = document.createElement("div")
  emojiContainer.classList.add("emoji-container")
  return emojiContainer
}

// Function to create emoji button
function createEmojiButton(emoji, tooltip, index, line) {
  const emojiButton = document.createElement("button")
  emojiButton.classList.add("emoji-button")
  emojiButton.innerText = emoji
  emojiButton.title = tooltip

  emojiButton.addEventListener("click", () => {
    postCommentWithEmoji(emoji, line)
  })

  return emojiButton
}

function addEmojisToCodeLine2() {
  const codeLines = document.querySelectorAll(
    ".blob-code.blob-code-context.js-file-line, .blob-code.blob-code-addition, .blob-code.blob-code-deletion"
  )

  codeLines.forEach((line) => {
    if (!line.dataset.emojiAdded) {
      line.dataset.emojiAdded = "true" // Mark the line so we don't add emojis multiple times

      // When mouse over we show the emoji picker
      line.addEventListener("mouseenter", () => {
        const emojiContainer = document.createElement("div")
        // Add styles to emojiContainer for positioning and styling
        emojiContainer.classList.add("emoji-container")

        emojis.forEach(({ emoji, tooltip }, index) => {
          const emojiButton = document.createElement("button")
          emojiButton.classList.add("emoji-button")
          emojiButton.innerText = emoji
          emojiButton.title = tooltip // Set the tooltip text

          // Add styles to emojiButton
          emojiButton.addEventListener("click", () => {
            postCommentWithEmoji(emoji, line)
          })

          emojiContainer.appendChild(emojiButton)
        })

        line.appendChild(emojiContainer)
      })

      // When mouse leave we kill the emoji picker
      line.addEventListener("mouseleave", () => {
        const emojiContainer = line.querySelector(".emoji-container")
        if (emojiContainer) {
          emojiContainer.remove() // This will remove the emoji picker from the DOM
        }
      })
    }
  })
}

function triggerInputEvent(element) {
  const event = new Event("input", { bubbles: true })
  element.dispatchEvent(event)
}

function postCommentWithEmoji(emoji, lineElement) {
  // Step 1: Click the '+' button
  const addButton = lineElement.querySelector(".js-add-line-comment")
  if (!addButton) {
    console.error("Add button not found")
    return
  }
  addButton.click()

  // find the textarea and add the emoji
  const dataAnchor = addButton.getAttribute("data-anchor") // diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5
  const dataPosition = addButton.getAttribute("data-position") // 3
  const idTaget = `${dataAnchor}_${dataPosition}`

  // Function to proceed with comment posting
  function proceedWithComment(indexInput) {
    const commentBox = document.querySelectorAll(
      ".inline-comment-form-container textarea"
    )
    if (!commentBox) {
      console.error("Comment box not found")
      return
    }
    //emoji+tooltip
    const tooltip = emojis.find((e) => e.emoji === emoji).tooltip
    commentBox[indexInput].value = (emoji + " " + tooltip) as any
    triggerInputEvent(commentBox[indexInput])

    const commentButton = document.querySelectorAll(
      ".review-simple-reply-button"
    )

    storage
      .get("autoComment")
      .then((data) => {
        if (data) {
          if (!commentButton[indexInput]) {
            console.error("Comment button not found")
            return
          }
          commentButton[indexInput].click()
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const checkExist = setInterval(() => {
    const inlineCommentFormContainerTextAreas = Array.from(
      document.querySelectorAll(".inline-comment-form-container textarea")
    )

    let indexInput = -1
    for (let i = 0; i < inlineCommentFormContainerTextAreas.length; i++) {
      const element = inlineCommentFormContainerTextAreas[i]
      const id = element.getAttribute("id")
      if (id && id.includes(idTaget) && !id.startsWith("new_inline")) {
        indexInput = i
        break
      }
    }

    if (indexInput !== -1) {
      clearInterval(checkExist)
      proceedWithComment(indexInput)
    }
  }, 100)
}

// Observer for dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      addEmojisToCodeLines()
    }
  })
})

// Start observing the document body
observer.observe(document.body, { childList: true, subtree: true })

// Initial run in case the content is already there
addEmojisToCodeLines()
