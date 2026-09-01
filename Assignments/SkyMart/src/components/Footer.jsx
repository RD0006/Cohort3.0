import React from "react";

const Footer = () => {
  return (
    <footer className="h-[100px] w-full border-t border-[#ffff] bg-[#0d0d0d]">
      
      <div className="flex h-full flex-col items-center justify-center">

        {/* Logo */}
        <p className="text-[20px] font-medium tracking-[-0.05vw] text-[#c6ff00]">
          SkyMart
        </p>

        {/* Copyright */}
        <p className="mt-[8px] text-[15px] font-medium text-[#666666]">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>

      </div>

    </footer>
  );
};

export default Footer;