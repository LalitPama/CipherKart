"use client";
import React, { useState } from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search?q=${searchTerm.trim()}`);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="relative group">
          <span className="hover:text-gray-900 transition">Home</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fe360f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/all-products" className="relative group">
          <span className="hover:text-gray-900 transition">Shop</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fe360f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/about" className="relative group">
          <span className="hover:text-gray-900 transition">About</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fe360f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="/contact" className="relative group">
          <span className="hover:text-gray-900 transition">Contact Us</span>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fe360f] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border border-transparent hover:border-[#fe360f] focus:border-[#fe360f] px-4 py-1.5 rounded-full transition-colors duration-300"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        {/* Search input and button */}
        <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 transition-colors duration-300 hover:border-[#fe360f] focus-within:border-[#fe360f]">
          <input
            type="text"
            placeholder="Search Products..."
            className="text-sm outline-none bg-transparent focus:ring-0"
            value={searchTerm} // Binds input value
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on input
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Search on Enter
          />
          <button
            onClick={handleSearch}
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image
              className="w-4 h-4"
              src={assets.search_icon}
              alt="search icon"
            />
          </button>
        </div>

        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 border border-[#fe360f] px-4 py-1.5 rounded-full hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Home"
                  labelIcon={<HomeIcon />}
                  onClick={() => router.push("/")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Products"
                  labelIcon={<BoxIcon />}
                  onClick={() => router.push("/all-products")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Cart"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Orders"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
