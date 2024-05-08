// https://makeschool.org/mediabook/oa/tutorials/react-fundamentals-vm0/build-a-header-component/

import React from 'react';

function Paragraph({ paragraph = 'Default Paragraph' }) {
  return (
    <div>
      <p className="text-gray-700 text-lg font-normal leading-relaxed m-4">
        {paragraph}
      </p>
    </div>
  );
}

export default Paragraph;
