import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 px-4 md:px-16 my-10">
        <div className="card-one shadow-lg w-full h-[550px] bg-gray-100 rounded-lg"></div>
        <div className="card-two shadow-lg w-full h-[550px] bg-gray-100 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-16 my-10">
        <Image
          className="shadow-2xl rounded-lg w-full h-full"
          src={'/img/imageWebsite.5c6ae62f.jpg'}
          alt="Image 1"
          width={500}
          height={300}
        />
        <Image
          className="shadow-2xl rounded-lg w-full h-full"
          src={'/img/imageWebsite2.a102c7b5.jpg'}
          alt="Image 2"
          width={500}
          height={300}
        />
        <Image
          className="shadow-2xl rounded-lg w-full h-full"
          src={'/img/imageWebsite3.b845fe78.jpg'}
          alt="Image 3"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}