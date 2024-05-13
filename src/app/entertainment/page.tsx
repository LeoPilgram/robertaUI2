import DropdownMenu from '@/components/Dropdown';
import Link from 'next/link';
import React from 'react';
import { DANCES, SONGS } from '@/constants';

const EntertainmentPage = () => {
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
          <DropdownMenu items={DANCES} type="Dancemoves" />
        </div>
        <div className="text-left ml-5 mt-4">
          {' '}
          {/* Adjust margin and add top margin */}
          <DropdownMenu items={SONGS} type="Songs" />
        </div>
        <div>
          <Link href="/process">
            <button className="btn text-left ml-5 mt-4 bg-secondary">
              Bestätigen
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EntertainmentPage;
