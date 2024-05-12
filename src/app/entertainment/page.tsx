import Header from '@/components/Header';
import Paragraph from '@/components/Paragraph';

import Button from '@/components/Button';
import DropdownMenu from '@/components/Dropdown';
import Link from 'next/link';
import React from 'react';

const EntertainmentPage = () => {
  const menuItemsMusik = [
    { text: 'Song 1' },
    { text: 'Song 2' },
    { text: 'Song 3' },
  ];
  const menuItemsTanz = [
    { text: 'Tanz 1' },
    { text: 'Tanz 2' },
    { text: 'Tanz 3' },
  ];

  return (
    <div>
      <Header header="Entertainment" />
      <div>
        <div>
          <Paragraph paragraph="Hier kannst Du Entertainment-Optionen auswählen." />
        </div>
      </div>
      <div className="text-left ml-5">
        {' '}
        {/* Adjust margin here */}
        <DropdownMenu buttonText="Musik" menuItems={menuItemsMusik} />
      </div>
      <div className="text-left ml-5 mt-4">
        {' '}
        {/* Adjust margin and add top margin */}
        <DropdownMenu buttonText="Tanz" menuItems={menuItemsTanz} />
      </div>
      <div>
        <Link href="/process">
          <Button
            className="bg-pgreen-50 text-left ml-5 mt-4"
            type="button"
            title="Bestätigen"
          />
        </Link>
      </div>
    </div>
  );
};

export default EntertainmentPage;
