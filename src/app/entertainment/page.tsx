import Header from '@/components/Header';
import Paragraph from '@/components/Paragraph';
import DropdownMenu from '@/components/Dropdown';
import Link from 'next/link';
import React from 'react';
import { DANCES, SONGS } from '@/constants';

const EntertainmentPage = () => {
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
        <DropdownMenu items={DANCES} type="Dancemoves" />
      </div>
      <div className="text-left ml-5 mt-4">
        {' '}
        {/* Adjust margin and add top margin */}
        <DropdownMenu items={SONGS} type="Songs" />
      </div>
      <div>
        <Link href="/process">
          <button className="btn bg-pgreen-50 text-left ml-5 mt-4">Bestätigen</button>
        </Link>
      </div>
    </div>
  );
};

export default EntertainmentPage;
