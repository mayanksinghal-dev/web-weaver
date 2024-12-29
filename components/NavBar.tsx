'use client'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useState } from "react";
import Magnetic from './RoundedButton/Magnetic';
import { BugAntIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="flex items-center py-5">
        <div className="flex items-center gap-5 justify-between w-full">
          <div className="flex flex-shrink-0 items-center">
            <motion.div
              initial={{ y: -200, opacity: 1 }}
              animate={{ y: [0, 40, -20, 20, 0], opacity: 1 }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                times: [0, 0.3, 0.5, 0.7, 1],
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={{ color: isHovered ? '#4f3a87' : '#ffffff' }} // Change color on hover
                transition={{ duration: 0.3 }}
              >
                <Magnetic>
                  <BugAntIcon className="size-10 cursor-pointer" />
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>
          <div className="flex gap-5 items-center text-white">
            <Link target="_blank" href={personalData.github}>
              <BsGithub
                size={30}
                className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-125 text-white"
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
      </div>
    </nav>
  )
}
