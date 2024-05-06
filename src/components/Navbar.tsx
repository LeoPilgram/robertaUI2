import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-green-300 p-4 flex justify-center">
      <div className="container mx-auto flex justify-between items-center w-full max-w-screen-lg">
        {NAV_LINKS.map((link) => (
          <Link href={link.href}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
