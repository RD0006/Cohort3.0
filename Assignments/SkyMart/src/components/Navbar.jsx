import React from "react";

const Navbar = () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(storedUser);

    const username = user.name;
  return (
    <nav className="fixed top-0 left-0 z-50 h-[70px] w-full border-y border-[#ffff] bg-[#0d0d0d]">
      <div className="flex h-full items-center justify-between px-[36px]">

        {/* LOGO */}
        <div className="flex items-center gap-[2%]">

          <div className="flex aspect-square w-[8%] items-center justify-center rounded-[30%] bg-[#c6ff00]">
            <svg
              width="55%"
              height="55%"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13 2L3 14H11L10 22L21 9H13L13 2Z"
                fill="black"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-[2vw] font-bold tracking-[-0.1vw] text-white">
            Sky<span className="text-[#c6ff00]">Mart</span>
          </div>

        </div>

        {/* NAVIGATION */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[38px]">
          <a
            href="#"
            className="text-[18px] font-semibold text-[#c6ff00]"
          >
            Home
          </a>

          <a
            href="#shop"
            className="text-[18px] font-semibold text-[#737373] hover:text-white"
          >
            Shop
          </a>

          <a
            href="#about"
            className="text-[18px] font-semibold text-[#737373] hover:text-white"
          >
            About
          </a>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <button className="flex h-[45px] items-center rounded-[18px] border border-[#292929] bg-[#151515] p-1">

            {/* First letter */}
            <span className="flex h-[35px] w-[35px] items-center justify-center rounded-[15px] bg-[#c6ff00] text-[18px] font-semibold uppercase text-black">
            {username.charAt(0)}
            </span>

            {/* Username */}
            <span className="flex h-[46px] items-center justify-center px-3 text-[18px] font-medium text-[#888]">
            {username}
            </span>

      </button>


          {/* CART */}
          <button className="flex h-[45px] w-[45px] items-center justify-center rounded-[18px] border border-[#292929] bg-[#111] text-white hover:bg-[#1b1b1b]">
            <span className="text-[22px] leading-none">
              🛒
            </span>
          </button>


          {/* LOGOUT */}
        <button className="flex h-[45px] w-[45px] items-center justify-center rounded-[18px] border border-[#292929] bg-[#111] text-white hover:bg-[#1b1b1b]">
        <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Door */}
            <path
            d="M17 4H7.5C6.67 4 6 4.67 6 5.5V21.5C6 22.33 6.67 23 7.5 23H17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            />

            {/* Arrow */}
            <path
            d="M12 13.5H22"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            />

            <path
            d="M18 9.5L22 13.5L18 17.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
        </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;