import React from "react";
import Navbar from "./Navbar";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Landing from "./Landing";

const Home = () => {
  return (
    <>
      <SignedOut>
        <Landing />
      </SignedOut>
      <SignedIn>
        <div className="w-screen flex flex-col justify-start items-center">
          <Navbar />
          <div className="pt-20 grid grid-cols-2 gap-4 w-[90%] h-screen overflow-scroll">
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
            <div className="rounded-xl h-36 bg-gray-300 shadow-md flex justify-center items-center text-2xl font-bold">Hello</div>
          </div>
          <div className="px-8 py-2 fixed text-xl bg-white/40 font-bold top-[90%] shadow-md rounded-lg backdrop-blur flex items-center justify-center hover:shadow-2xl hover:opacity-95 hover:cursor-pointer">
            <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">Add new note </span>
            <svg className="h-8 ml-2" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default Home;
