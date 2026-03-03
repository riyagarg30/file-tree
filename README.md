# 📁 React File Tree Renderer (TypeScript)

A simple and interactive File Tree component built with **React + TypeScript**.  
This project renders a hierarchical file/folder structure similar to VS Code's explorer panel using recursive components and strong typing.

---

## 🚀 Features

- 📂 Expand / Collapse folders
- 📄 File and Folder icons
- 🔁 Recursive rendering of nested structures
- ⚛️ Built with React Functional Components & Hooks
- 🧩 Fully typed with TypeScript
- 🎨 Clean and minimal UI

---

## 🛠 Tech Stack

- React
- TypeScript
- CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── FileTree.tsx
│   ├── TreeNode.tsx
│
├── types/
│   └── FileNode.ts
│
├── data/
│   └── fileData.ts
│
├── App.tsx
└── main.tsx
```

---

## 📦 Installation & Setup

1. Clone the repository:

```
git clone https://github.com/riyagarg30/react-file-tree.git
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
npm run dev
```

The app will typically run on:

```
http://localhost:5173
```

(If created with Vite. If using Create React App, use `npm start` instead.)

---

## 🧠 How It Works

The file tree is rendered recursively using a strongly typed data structure.

Each folder:

- Maintains its own `isOpen` state
- Toggles visibility of children on click

Files are rendered as leaf nodes.

### Example Type Definition

```ts
export interface FileNode {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
}
```

### Example Data Structure

```ts
const fileData: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "App.tsx", type: "file" },
      { name: "main.tsx", type: "file" }
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
- Unit testing with Jest + React Testing Library

---

## 📸 Preview

_Add a screenshot here (optional)_

---

## 🌐 Live Demo (Optional)

You can deploy easily using:
- Vercel
- Netlify
- GitHub Pages

---

## 📜 License

MIT License

---

## 👩‍💻 Author

Riya Garg  
GitHub: https://github.com/riyagarg30
