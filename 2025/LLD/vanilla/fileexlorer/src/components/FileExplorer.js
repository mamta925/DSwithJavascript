import React from 'react';
import TreeNode from './TreeNode';
export default function FileExplorer({node,onAdd,onRemove}){
  return <div className="file-explorer"><TreeNode node={node} path="/" onAdd={onAdd} onRemove={onRemove}/></div>;
}
