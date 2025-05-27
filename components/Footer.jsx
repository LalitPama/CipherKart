import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
      This is a modern, full-featured e-commerce web application focused on electronics and gadgets. It includes functionalities such as product browsing, detailed product views, advanced search with category filters, user authentication, and an integrated newsletter subscription system. Built with React and Next.js for the frontend and Node.js with MongoDB for the backend, this project demonstrates practical skills in full-stack web development, responsive design, and API integration. It aims to provide users with a seamless and engaging online shopping experience.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/privacy">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@CipherKart.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © CipherKart All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;