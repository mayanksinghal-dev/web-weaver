import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="flex items-center justify-between py-5">
                <div className="flex flex-shrink-0 items-center text-[#16f2b3] text-3xl font-bold">
                    MAYANK SINGHAL
                </div>
                <div className="flex items-center gap-5">
                    <BsGithub size={30} />
                    <BsLinkedin size={30} />
                    <FaFacebook size={30} />
                    <SiLeetcode size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>
        </nav>
    )
}
