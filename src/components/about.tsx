import { faChevronRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-wrap pt-16 items-center pb-20 px-[2rem] lg:px-[12rem]" id='about'>
      <div className="md:w-[60%] m-auto mt-20 lg:mt-0 lg:w-1/2  relative md:pr-10">
        <Image src='/workspace.jpg' alt='' width={1000} className="rounded-3xl" height={1000} />
      </div>
      <div className="w-full lg:w-1/2 mt-20 lg:mt-0 md:pl-10">
        <h1 className="text-[3rem] leading-[4rem] text-shadow-sm font-[800] tracking-widest py-2">
          About Me
        </h1>
        <p className="text-lg mt-4 mb-6">I&lsquo;m a  fullstack developer with over 5+ years of experience building various applications for client.</p>
        <p className="text-lg mt-4 mb-6">I also have a team of amazing engineers who ensures deliverables are met with client expectations.</p>
        <p className="text-lg mt-4 mb-6">I build web, desktop and hybrid mobile applications, ranging from logistics, e-commerce, social media and more.</p>
        <p className="text-lg mt-4 mb-6">I&lsquo;m always available for new requests. Click the link below to get started.</p>
        <a href='mailto:fashanutosin7@gmail.com' className="mt-5 text-white">
          <span className="px-6 py-4 bg-[#eb7bef] inline-block rounded-l-md">
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </span>
          <span className="inline-block bg-[#b48edb] px-6 py-5 rounded-md">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
