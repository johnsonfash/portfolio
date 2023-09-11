import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
  return <div className="bg-white z-10 border-b top-0 left-0 right-0 fixed flex w-full px-20 py-3 justify-between items-center">
    <div>
      <h1 className="text-[1.4rem] text-shadow-sm font-[800] tracking-widest py-2">JOHNFASH</h1>
    </div>
    <div>
      <Link href='/' className="px-6 py-3">Home</Link>
      <Link href='#projects' className="px-6 py-3">Projects</Link>
      <Link href='#about' className="px-6 py-3">About</Link>
      <Link href='#team' className="px-6 py-3">Team</Link>
    </div>
    <div>
      <Link href='https://linkedin.com/in/johnfash' className="p-2 text-xl">
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