import DropdownMenu from '@/components/Dropdown';
import React from 'react';

const EntertainmentPage = () => {
  const menuItemsMusik = [
    { text: 'Song 1' },
    { text: 'Song 2'},
    { text: 'Song 3'},
  ];
  const menuItemsTanz = [
    { text: 'Tanz 1' },
    { text: 'Tanz 2'},
    { text: 'Tanz 3'},
  ];

  return (
    <div>
      <h1 className="text-center text-xl p-4">Entertainment</h1>
      <p className="p-4">Lorem ipsum</p>
      <div className="text-left ml-5"> {/* Adjust margin here */}
        <DropdownMenu buttonText="Musik" menuItems={menuItemsMusik} />
      </div>
      <div className="text-left ml-5 mt-4"> {/* Adjust margin and add top margin */}
        <DropdownMenu buttonText="Tanz" menuItems={menuItemsTanz} />
      </div>
    </div>
  );
};

export default EntertainmentPage;
