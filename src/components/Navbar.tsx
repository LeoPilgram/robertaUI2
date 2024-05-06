import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

// Source: https://github.com/adrianhajdin/travel_ui_ux/blob/main/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="bg-rich-50 p-4 flex justify-start">
      <Image
        className="absolute left-5 top-1"
        src="/robertaLogo.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <div className="container mx-auto flex justify-between items-center w-3/4">
        {NAV_LINKS.map((link) => (
          <Link key={link.key} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
