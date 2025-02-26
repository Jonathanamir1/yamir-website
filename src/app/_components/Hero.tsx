import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 grid-rows-3 h-[80vh] w-full relative bg-hero">
      {/* Background covering full section (2 cols, 2 rows) */}
      <div className="absolute inset-0 bg-black [clip-path:polygon(50%_0,100%_0,100%_100%,40%_100%)] col-start-1 col-span-2 row-span-2"></div>

      {/* Navbar (Top Left) */}




      {/* Right Side - Portrait (Bottom-Left Aligned) */}
      <div className="flex items-end justify-center relative z-10 row-start-3 col-start-2">
        <Image
          src="/yamir-portrait.png"
          alt="Your Portrait"
          width={450}
          height={450}
          className="object-cover transition-transform duration-1000 ease-in-out hover:scale-105 origin-bottom"
        />
      </div>
      <div className="relative z-10 row-start-1 col-span-2">
        <Navbar />
      </div>

      <div className="flex flex-col justify-start ml-64 mt-20 relative z-10 row-start-2 col-start-1">
        <h2 className="text-2xl font-bold font-raleway">Hi, I am...</h2>
        <h1 className="text-6xl font-bold font-raleway pt-10">Yonatan Amir</h1>
        <h3 className="text-l font-extrabold text-gray font-raleway w-full pt-1">Full Stack Developer</h3>

        <div className="flex gap-4 mt-16"> {/* Reduced gap */}
          <Image 
            src='/email.svg' 
            alt='Email Icon' 
            width={48} 
            height={48} 
            className="bg-icon p-2 mx-4 my-1 shadow-" /> {/* Reduced size and padding */}

          <Image 
            src='/github.svg' 
            alt='GitHub Icon' 
            width={48} 
            height={48} 
            className="bg-icon p-2 mx-4 my-1 shadow-xl" /> {/* Reduced size and padding */}

          <Image 
            src='/linked-in.svg' 
            alt='LinkedIn Icon' 
            width={48} 
            height={48} 
            className="bg-icon p-2 mx-4 my-1 shadow-xl" /> {/* Reduced size and padding */}
        </div>
      </div>
        
        
    </section>
  );
}
