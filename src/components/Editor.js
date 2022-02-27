import React from "react";
import "../styles/Editor.css";

export default function Editor() {
  return (
    <div id="editor-container">
      <label for="editor">Editor:</label>

      <textarea
        id="editor"
        name="editor"
        value="It was a dark and stormy night..."
      />
    </div>
  );
}
