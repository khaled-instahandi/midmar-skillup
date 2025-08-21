import React from 'react';
import Node from './CustomNode';
import './Node.css'
const Tree = ({ data }) => {
  return (
    <div className="tree-container">
      <Node data={data} level={0} />
    </div>
  );
};

export default Tree;