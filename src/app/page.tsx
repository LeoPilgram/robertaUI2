import Header from '@/components/Header';
import Paragraph from '@/components/Paragraph';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div>
        <Header header="Roberta UI" />
      </div>
      <div>
        <Paragraph paragraph="Willkommen!" />
      </div>
    </div>
  );
}
