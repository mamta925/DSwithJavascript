// src/App.js
import React, { useEffect, useState } from 'react';
import FileExplorer from './components/FileExplorer';
import { fetchFileSystem } from './api/mockFileSystem';

export default function App(){
  const [tree, setTree] = useState(null);
  useEffect(()=>{ fetchFileSystem().then(data=> setTree(data)); },[]);
  const cloneTree = () => JSON.parse(JSON.stringify(tree));

  const handleAdd = (path,type) => {
    // eslint-disable-next-line no-restricted-globals
    const name = prompt(`Enter ${type} name:`);
    if(!name) return;
    const newTree = cloneTree();
    const addTo = findNode(newTree,path);
    if(!addTo.children) addTo.children = [];
    addTo.children.push({ name, type, ...(type==='directory'?{children:[]}:{} ) });
    setTree(newTree);
  };

  const handleRemove = (path) => {
    // eslint-disable-next-line no-restricted-globals
    if(path==='/'||!confirm('Delete this item?')) return;
    const newTree = cloneTree();
    const parentPath = path.substring(0, path.lastIndexOf('/')) || '/';
    const parent = findNode(newTree, parentPath);
    parent.children = parent.children.filter(child=>{
      const childPath = (parentPath==='/'? '': parentPath) + '/' + child.name;
      return childPath!==path;
    });
    setTree(newTree);
  };

  // helper to find node by path
  const findNode = (node, path) => {
    if(path==='/'|| node.name==='/' && path==='/') return node;
    const parts = path.split('/').filter(Boolean);
    let curr = node;
    for(const part of parts){ curr = curr.children.find(c=>c.name===part); }
    return curr;
  };

  if(!tree) return <div>Loading file system...</div>;

  return <div className="app">
    <h1>React File Explorer</h1>
    <FileExplorer node={tree} onAdd={handleAdd} onRemove={handleRemove} />
  </div>;
}