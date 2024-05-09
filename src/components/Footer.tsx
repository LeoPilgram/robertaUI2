'use client';

import { NAV_LINKS } from '@/constants';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-rich-50 mx-auto flex justify-around items-center">
      <div className=" p-3">
        <Image
          src="/robertaLogo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="bg-rich-50 p-4 flex">
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
    </footer>
  );
};

export default Footer;
