import React, { useState } from 'react';
export default function TreeNode({node,path,onAdd,onRemove}){
  const [expanded,setExpanded] = useState(false);
  const hasChildren = node.type==='directory';
  const currentPath = path;
  return <div className="tree-node">
    <div className="node-label">
      {hasChildren && (<span onClick={()=>setExpanded(!expanded)} style={{cursor:'pointer'}}>{expanded?'📂':'📁'}</span>)}
      {!hasChildren && '📄'} {node.name}
      {hasChildren && <button onClick={()=>onAdd(currentPath,'file')} title="Add File">+F</button>}
      {hasChildren && <button onClick={()=>onAdd(currentPath,'directory')} title="Add Folder">+D</button>}
      {currentPath!=='/' && <button onClick={()=>onRemove(currentPath)} title="Remove">-</button>}
    </div>
    {expanded && hasChildren && <div className="children">
      {node.children.map((child,idx)=><TreeNode key={idx} node={child} path={(currentPath==='/'?'':'')+currentPath+'/'+child.name} onAdd={onAdd} onRemove={onRemove}/> )}
    </div>}
  </div>;
}