import React from "react";
import Markdown from "marked-react";

import "../styles/Preview.css";

export default function Preview(props) {
  return (
    <div id="preview-container">
      <label for="preview-box">Preview:</label>
      <div id="preview-box">
        <Markdown>{props.currentMarkdown}</Markdown>
      </div>
    </div>
  );
}
