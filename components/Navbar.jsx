import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const router = useRouter();
  const pagesForTransparentNavBar = ["/property", "/crypto", "/netflix", "/twitch"];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    pagesForTransparentNavBar.includes(router.pathname) ? setIsTransparent(true) : setIsTransparent(false);
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={`fixed w-full h-20  z-[100] ${shadow ? "shadow-xl" : ""} ${isTransparent ? "text-white" : "bg-[#ecf0f3]"}`}>
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/../public/assets/navLogo.png" alt="" width="125" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full ">
              <Image src="/../public/assets/navLogo.png" width="87" height="35" alt="/" />
              <div onClick={handleNav} className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400">
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">???????????????????????????????????????</p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">Let&rsquo;s connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedin />
                </div>
                <div className="p-3 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-3 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
