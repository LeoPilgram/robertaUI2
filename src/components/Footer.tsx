'use client';

// Quelle: https://daisyui.com/components/footer/
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import clsx from 'clsx';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="footer bg-rich-50 flex flex-row justify-between items-center">
      <div className="p-3">
        <Image
          src="/robertaLogo.png"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="p-4 flex">
        <a
          target="_blank"
          href="https://github.com/LeoPilgram/robertaUI2"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-mark.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </a>
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
