// CustomNode.jsx
import React from 'react';
import Tag from '../../elements/Tag/Tag'; // Your Tag component
import { Handle } from 'react-flow-renderer';

const CustomNode = ({ data }) => {
  return (
    <div className='custom-node'>
      <Handle type="target" position="top" />
      <div>
        <Tag
          infoContent={data.label}
          infoAdditional={data.details}
          widthContent="auto" // Adjust based on your layout
          heightContent="auto" // Adjust based on your layout
          widthAdditional="auto" // Adjust based on your layout
          heightAdditional="auto" // Adjust based on your layout
          backgroundColorContent={data.backgroundColor}
          backGroundColorAdditional={data.detailBackgroundColor}
        >
          {data.children}
        </Tag>

      </div>
      <Handle type="source" position="bottom" />
    </div>
  );
};

export default CustomNode;
