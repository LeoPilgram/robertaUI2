'use client';

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Source: https://github.com/adrianhajdin/travel_ui_ux/blob/main/components/Navbar.tsx
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-rich-50 flex flex-row justify-between items-center">
      <div className="p-3">
        <Image
          src="/robertaLogo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="p-4 flex">
        <div className=" w-3/4 space-x-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={clsx(
                'rounded-md bg-rich-70 p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-600 md:flex-none',
                {
                  'text-blue-600': pathname === link.href,
                }
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className=" p-3">
        <Image
          src="/robertaLogo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </nav>
  );
};

export default Navbar;
