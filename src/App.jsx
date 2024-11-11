import React from "react";
import profileImage from "./assets/woman.jpg";

export default function App() {
  return (
    <div className="bg-[#111] h-screen ">
      <div className="grid md:grid-cols-3 gap-10 h-full">
        <div className="col-span-1 h-screen  py-7 ps-7 md:block hidden">
          <img
            src={profileImage}
            alt="Profile"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className="col-span-1 md:h-[50vh] h-fit text-white py-7 flex justify-center items-center">
          <div className="uppercase text-center space-y-4">
            <h2 className="md:text-3xl text-2xl">Hi There ! I'm</h2>
            <h1 className="md:text-6xl text-4xl font-bold ">Shinaf</h1>
            <h2 className="md:text-3xl text-2xl font-semibold ">Flutter Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
