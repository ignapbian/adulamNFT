import React from "react";
import { Link } from "react-router-dom";
import ethlogo from "../assets/ethlogo.png";
import { connectWallet } from "../Adulam";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          NFTBlockBrothers
        </Link>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about" className="mr-4">
            About Us
          </Link>
          {connectedAccount ? (
            <button
              className="shadow-xl shadow-black text-black 
              bg-[#ffffff] hover:bg-[#b8b8b8] md:text-xs p-2
              rounded-full cursor-pointer"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              className="shadow-xl shadow-black text-black 
              bg-[#ffffff] hover:bg-[#b0b0b0] md:text-xs p-2
              rounded-full cursor-pointer"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
