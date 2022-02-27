import "./styles/App.css";
import Editor from "./components/Editor.js";
import Preview from "./components/Preview";

function App() {
  return (
    <main id="main">
      <Editor />
      <Preview />
    </main>
  );
}

export default App;
