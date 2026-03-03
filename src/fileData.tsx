import { FileNode } from "./types/fileTree";

export const fileData: FileNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.tsx", type: "file" },
      { name: "App.tsx", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "FileTree.tsx", type: "file" },
          { name: "TreeNode.tsx", type: "file" }
        ]
      }
    ]
  },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" }
];