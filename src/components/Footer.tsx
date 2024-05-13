// Quelle: https://daisyui.com/components/footer/
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer flex justify-center items-center bg-base-300">
      <a
        target="_blank"
        href="https://github.com/LeoPilgram/robertaUI2"
        rel="noopener noreferrer"
        className="p-3"
      >
        <Image
          src="/github-mark.svg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </a>
    </footer>
  );
};

export default Footer;
