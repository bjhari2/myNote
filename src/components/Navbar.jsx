import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed bg-transparent backdrop-blur-md shadow">
        <div className="container-fluid flex justify-between px-4 w-full h-16 items-center">
          <span className="text-3xl bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent font-bold">MyNote</span>
          <span>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
