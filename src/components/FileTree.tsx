import TreeNode from "./TreeNode";
import { FileNode } from "../types/fileTree";

type Props = {
  data: FileNode[];
};

const FileTree = ({ data }: Props) => {
  return (
    <div>
      {data.map((node, idx) => (
        <TreeNode key={idx} node={node} />
      ))}
    </div>
  );
};

export default FileTree;