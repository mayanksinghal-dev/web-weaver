import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="flex items-center justify-between py-5">
                <div className="flex flex-shrink-0 items-center text-[#ffe6e6] text-3xl font-bold font-alexBrush -rotate-12">
                    {personalData.name}
                </div>
                <div className="flex items-center gap-5">
                    <Link target="_blank" href={personalData.github}>
                        <BsGithub
                            size={30}
                            className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-125"
                        />
                    </Link>
                    <Link target="_blank" href={personalData.linkedIn}>
                        <BsLinkedin
                            size={30}
                            className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" />
                    </Link>
                    <Link target="_blank" href={personalData.leetcode}>
                        <SiLeetcode
                            size={30}
                            className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-125" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
