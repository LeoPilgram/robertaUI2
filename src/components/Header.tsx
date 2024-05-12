// https://makeschool.org/mediabook/oa/tutorials/react-fundamentals-vm0/build-a-header-component/

import React from 'react';

function Header({ header = 'Default Header' }) {
  return (
    <div>
      <h1 className="text-4xl font-bold py-4"> {header}</h1>
    </div>
  );
}

export default Header;
