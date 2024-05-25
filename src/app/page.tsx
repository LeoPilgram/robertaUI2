import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/turtlebot.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Turtlebot Bild"
          width={1000}
          height={1000}
        />
        <div>
          <h1 className="text-5xl font-bold">RobertaUI</h1>
          <p className="py-6">
            Mit dieser App lässt sich Roberta steuern. Roberta kann
            Dinge transportieren, Musik abspielen und tanzen!
          </p>
          <Link href="/delivery">
            <button className="btn btn-primary">Los Roberta!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
