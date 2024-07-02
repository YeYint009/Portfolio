"use client";

import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* image container */}
      <div className="h-1/2 relative lg:h-full lg:w-1/2">
        <Image src="/hero.png" alt="" fill className=" object-contain" />
      </div>
      {/* text container */}
      <div className="h-1h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold md:text-4xl">Crafting Digital Experiences, Designing Tomorrow.</h1>
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        <div className="w-full flex gap-4">
          <button className="border bg-black text-white p-4 ring-1 ring-black rounded-lg">View My work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
