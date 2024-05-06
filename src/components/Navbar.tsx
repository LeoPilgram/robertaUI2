import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

// Source: https://github.com/adrianhajdin/travel_ui_ux/blob/main/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="bg-blue-70 p-4 flex flex-row justify-start">
      <div className="container mx-auto flex flex-row justify-between items-left w-full max-w-screen-lg">
        {NAV_LINKS.map((link) => (
          <Link className="text-white" href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
