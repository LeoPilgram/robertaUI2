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
  <article className="prose text-left ml-5">
      <div>
      <h2>Entertainment</h2>
      <div>
        <div>
          <p>Hier kannst Du Entertainment-Optionen auswählen.</p>
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
          <button className="btn bg-pgreen-50 text-left ml-5 mt-4">Bestätigen</button>
        </Link>
      </div>
    </div>
    </article>

  );
};

export default EntertainmentPage;
