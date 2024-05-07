import React from "react";
import Home from "./Home";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center gap-8 text-center h-screen">
        <div className="wrapper flex justify-center items-center relative">
          <div className="absolute top-32 rounded-full w-24 h-24 bg-gradient-to-r from-violet-600 to-rose-500 shadow-2xl"></div>
          </div>
        <div className="flex flex-col p-8 gap-8 justify-center items-center bg-white bg-opacity-20 backdrop-blur-md rounded-3xl shadow-xl">
          <div className="wrapper flex flex-col">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">Welcome to MyNote</div>
            <div className="my-2 text-lg text-secondary-foreground">
              Your Notes Store on the Cloud!
            </div>
          </div>
          <div>
            <SignedOut>
              <div>
                <SignInButton mode="modal">
                  <Button variant="outline"><span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">Get Started</span></Button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <Home />
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
