import React from "react";
import FileTree from "./components/FileTree";
import { fileData } from "./fileData"; // import sample data
import "./styles/FileTree.css";

function App() {
  return (
    <div className="app-container">
      <h1>File Tree Explorer</h1>
      <FileTree data={fileData} />
    </div>
  );
}

export default App;