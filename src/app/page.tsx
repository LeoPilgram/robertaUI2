import Image from 'next/image';
import Link from 'next/link';

const runTest = async () => {
  const res = await fetch('http://localhost:3000/test');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.text();
};

export default async function Home() {
  const data = await runTest();
  return (
    <div
      className="hero bg-base-200"
      style={{ minHeight: 'calc(100vh - 140px)' }}
    >
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
          <Link href="/services">
            <button className="btn btn-primary">Los Roberta!</button>
          </Link>
          <button className="btn btn-primary" onClick={runTest}>
            Run Backend Test
          </button>
        </div>
      </div>
    </div>
  );
}
