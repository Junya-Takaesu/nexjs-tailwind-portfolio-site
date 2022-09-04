import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="duration-100 ease-in rounded-xl hover:scale-105"
                  src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                  alt=""
                />
                {/* <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src="https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                  // height="auto"
                  // width="auto"
                  layout="fill"
                  alt="/"
                /> */}
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-end developper</p>
                <p className="py-4">I am available for freelance or full-time positions. Contact me and let&apos;s talk</p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with me</p>
                <div className="flex items-center py-4 lg:justify-between justify-evenly">
                  <div className="w-16 h-16 p-6 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                    <FaLinkedin />
                  </div>
                  <div className="w-16 h-16 p-6 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <FaGithub />
                  </div>
                  <div className="w-16 h-16 p-6 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <AiOutlineMail />
                  </div>
                  <div className="w-16 h-16 p-6 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <lable className="py-2 text-sm uppercase">Name</lable>
                    <input className="flex p-3 border-2 rounded-lg" type="text" />
                  </div>
                  <div className="flex flex-col">
                    <lable className="py-2 text-sm uppercase">Phone Number</lable>
                    <input className="flex p-3 border-2 rounded-lg" type="text" />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <lable className="py-2 text-sm uppercase">Email</lable>
                  <input className="flex p-3 border-2 rounded-lg" type="email" />
                </div>
                <div className="flex flex-col py-2">
                  <lable className="py-2 text-sm uppercase">Subject</lable>
                  <input className="flex p-3 border-2 rounded-lg" type="text" />
                </div>
                <div className="flex flex-col py-2">
                  <lable className="py-2 text-sm uppercase">Message</lable>
                  <textarea className="p-3 border-2 border-gray-300 rounded-lg" rows="10"></textarea>
                </div>
                <button className="w-full p-4 text-gray-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="w-16 h-16 p-4 duration-100 ease-out rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 ">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
