import React, { useEffect, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import "./popup.css"

function App() {
  const [autoComment, setAutoComment] = useStorage("autoComment", false)

  const handleAutoCommentChange = (event) => {
    const newAutoComment = event.target.checked
    setAutoComment(newAutoComment)
  }

  return (
    <div className="App">
      <div className="title-container">
        <h1>Emoji Review for GitHub</h1>
      </div>
      <p>
        <pre>
          了解 Emoji Review 约定，请访问{" "}
          <a
            href="https://github.com/Leizhenpeng/Emoji-Review/blob/undefined/popup.tsx#L28"
            target="_blank"
            rel="noopener noreferrer">
            Github
          </a>{" "}
        </pre>
      </p>
      <div className="setting">
        <span className="setting-label">点击表情即发送评论</span>
        <label className="switch">
          <input
            type="checkbox"
            id="autoComment"
            name="autoComment"
            checked={autoComment}
            onChange={handleAutoCommentChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default App
