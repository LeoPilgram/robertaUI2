// Quelle: https://daisyui.com/components/footer/
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer flex justify-around items-center bg-base-300">
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
          alt="Github Icon"
        />
      </a>
      <a
        target="_blank"
        href="https://www.hwr-berlin.de/"
        rel="noopener noreferrer"
        className="p-3"
      >
        <Image
          src="/HWR.png"
          alt="HWR Logo"
          width={200}
          height={200}
        />
      </a>
      <a
        target="_blank"
        href="http://wi-se.hwr-berlin.de/confluence/display/SES24/Software+Engineeering+-+Summer+2024+Home"
        rel="noopener noreferrer"
        className="p-3"
      >
        <Image
          src="/confluence.png"
          alt="Confluence Logo"
          width={160}
          height={160}
        />
      </a>
      <a
        target="_blank"
        href="http://wi-se.hwr-berlin.de/jira/secure/RapidBoard.jspa?rapidView=27&projectKey=SES24"
        rel="noopener noreferrer"
        className="p-3"
      >
        <Image
          src="/jira.png"
          alt="Jira Logo"
          width={70}
          height={70}
        />
      </a>
    </footer>
  );
};

export default Footer;
