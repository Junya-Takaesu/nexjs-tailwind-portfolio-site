import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600">なにか一緒につくろ〜</p>
          <h1 className="py-4 text-gray-700">
            Hi, I&lsquo;m <span className="text-[#5651e5]">順や</span>
          </h1>
          <h1 className="py-4 text-gray-700">よわよわデベロッパー</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            特に何かに長けたわけでもないしがないよわよわデベロッパー。バグの生産と風紀を乱すことが特技のジャーク。
            最近のところなにかしているわけでもなく、地球の酸素の割合をへらすことに尽力しているし、下水管に安定的に人糞を供給することに定評がある。
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
  );
}

export default Main;
