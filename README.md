# 📁 React File Tree Renderer

A simple and interactive File Tree component built with React.  
This project renders a hierarchical file/folder structure similar to VS Code's explorer panel.

---

## 🚀 Features

- 📂 Expand / Collapse folders
- 📄 File and Folder icons
- 🔁 Recursive rendering of nested structures
- ⚛️ Built with React functional components & hooks
- 🎨 Clean and minimal UI

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── FileTree.js
│   ├── TreeNode.js
│
├── data/
│   └── fileData.js
│
├── App.js
└── index.js
```

---

## 📦 Installation & Setup

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/react-file-tree.git
```

2. Navigate to the project folder:

```
cd react-file-tree
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🧠 How It Works

The file tree is rendered recursively:

- Each folder maintains its own `isOpen` state.
- Clicking a folder toggles visibility of its children.
- Files are rendered as leaf nodes.

Example data structure:

```js
const fileData = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "App.js", type: "file" },
      { name: "index.js", type: "file" }
    ]
  }
];
```

---

## 🎯 Future Improvements

- Drag & Drop support
- File selection highlight
- Context menu (rename/delete)
- Lazy loading large trees
- TypeScript support

---

## 📸 Preview

_Add a screenshot here (optional)_

---

## 📜 License

MIT License

---

## 👩‍💻 Author

Your Name  
GitHub: https://github.com/riyagarg30
