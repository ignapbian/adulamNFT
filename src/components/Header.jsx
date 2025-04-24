import React from "react";
import { Link } from "react-router-dom";
import ethlogo from "../assets/ethlogo.png";
import { connectWallet } from "../BlockBrothers";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-4 sm:mb-0">
          NFTBlockBrothers
        </Link>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="sm:inline-block">
            Home
          </Link>
          <Link to="/about" className="sm:inline-block">
            About Us
          </Link>
          {connectedAccount ? (
            <button
              className="shadow-xl shadow-black text-white 
              bg-[#000000] hover:bg-[#fffefe] text-xs p-2
              rounded-full cursor-pointer"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              className="shadow-xl shadow-black text-black 
              bg-[#ffffff] hover:bg-[#000000] text-xs p-2
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
