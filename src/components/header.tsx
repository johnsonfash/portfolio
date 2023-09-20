import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
  return <div className="bg-white flex-wrap z-10 border-b top-0 left-0 right-0 fixed flex w-full px-[2rem] lg:px-[12rem] py-3 justify-between items-center">
    <div className="w-full sm:w-auto text-center">
      <h1 className="text-[1.4rem] text-shadow-sm font-[800] tracking-widest pb-2">JOHNFASH</h1>
    </div>
    <div className="w-full sm:w-auto text-center">
      <Link href='/' className="pr-3 md:pr-6 sm:pl-3 md:pl-6 py-3">Home</Link>
      <Link href='#projects' className="px-3 md:px-6 py-3">Projects</Link>
      <Link href='#about' className="px-3 md:px-6 py-3">About</Link>
      <Link href='#team' className="px-3 md:px-6 py-3">Team</Link>
    </div>
    <div className="w-full sm:w-auto text-center mt-3 sm:mt-0">
      <Link href='https://linkedin.com/in/johnfash' className="pl-0 sm:pl-2 p-2 text-xl">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link href='https://github.com/johnsonfash' className="p-2 text-xl">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <a href="https://wa.me/+2349036723177?text=I'm%20interested%20in%building%a%new%20project" className="p-2 text-xl">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <Link href='https://instagram.com/john_fash' className="p-2 text-xl">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </div>
  </div>;
};

export default Header;
