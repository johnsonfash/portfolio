import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex items-center gap-[5rem] pt-16 px-[12rem]">
      <div className="w-1/2">
        <h1 className="text-[4rem] leading-[5rem] text-shadow-lg font-[800] tracking-widest py-2">
          Creating value <br />
          with <FontAwesomeIcon icon={faCode} /> <br />
        </h1>
        <p className="text-lg mt-4">Developing apps that are made to impress. We live and breathe software development by letting the inner creativity shine...</p>
        <a href='mailto:fashanutosin7@gmail.com' className="mt-5 text-white inline-block">
          <span className="px-6 py-4 bg-[#eb7bef] inline-block rounded-l-md">
            CONTACT
          </span>
          <span className="inline-block bg-[#b48edb] px-6 py-5 rounded-md">
            ME
          </span>
        </a>
      </div>
      <div className="w-1/2 relative">
        <Image src='/tosin-purple-whte-purple.png' alt='' width={1000} height={1000} />
      </div>
    </div>
  );
};

export default Intro;
