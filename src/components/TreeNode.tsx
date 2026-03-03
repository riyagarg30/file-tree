import { useState } from "react";
import { FileNode } from "../types/fileTree";

type Props = {
  node: FileNode;
  level?: number;
};

const TreeNode = ({ node, level = 0 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const hasChildren = node.type === "folder" && node.children?.length;

  return (
    <div>
      <div
        style={{ cursor: hasChildren ? "pointer" : "default" }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {node.type === "folder" ? (expanded ? "📂" : "📁") : "📄"} {node.name}
      </div>
      {expanded && (
        <div style={{ paddingLeft: 20 }}>
          {node.children?.map((child, idx) => (
            <TreeNode key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
