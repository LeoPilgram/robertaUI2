import Image from 'next/image';
const Map = () => {
  return (
    <div className="flex grow ml-5 mr-5 items-center justify-center">
      <Image
        src="/map.jpg"
        width={1500}
        height={1500}
        alt="Map"
      ></Image>
    </div>
  );
};

export default Map;
