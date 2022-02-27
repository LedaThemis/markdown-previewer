import React from "react";
import "../styles/Editor.css";

export default function Editor(props) {
  return (
    <div id="editor-container">
      <label id="editor-label" for="editor">
        Editor:
      </label>

      <textarea
        id="editor"
        name="editor"
        value={props.editorValue}
        onChange={props.onEditorChange}
      />
    </div>
  );
}
