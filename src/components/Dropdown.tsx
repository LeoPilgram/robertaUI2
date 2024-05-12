'use client';
import React, { useState } from 'react';

function DropdownMenu() {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    null
  );

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedItem ? selectedItem : 'Click'}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a onClick={() => handleItemClick('Item 1')}>Item 1</a>
        </li>
        <li>
          <a onClick={() => handleItemClick('Item 2')}>Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
