import React from "react";

const Hero = () => {

  return (
    <section className="px-[3%] pt-[3%]">

      <div
        className="
          relative
          h-[350px]
          rounded-[35px]
          border
          border-[#d0d0d0]
          bg-[#111111]
        "
      >

        {/* Grid background */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.40]
          "
          style={{
            backgroundImage: `
              linear-gradient(#252525 1px, transparent 1px),
              linear-gradient(90deg, #252525 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />


        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-between px-[4%]">

          {/* LEFT */}
          <div className="w-[55%]">

            <p className="text-[1.1vw] font-medium tracking-[0.15vw] text-[#c6ff00]">
              GOOD AFTERNOON&nbsp; 👋
            </p>

            <h1 className="mt-[2%] text-[3vw] font-semibold leading-[0.95] tracking-[-0.15vw] text-white">
              Welcome back,
              <br />
              <span className="text-[#c6ff00]">rd!</span>
            </h1>

            <p className="mt-[4%] max-w-[85%] text-[1.2vw] font-medium leading-[1.5] text-[#777777]">
              Discover today's picks — hand-curated products across
              <br />
              electronics, fashion, and more.
            </p>


            {/* Buttons */}
            <div className="mt-[4%] flex items-center gap-[1%]">

              <button
                onClick={() => navigate("/shop")}
                className="
                  flex
                  h-[50px]
                  w-[200px]
                  items-center
                  justify-center
                  gap-[8%]
                  rounded-[12px]
                  bg-[#c6ff00]
                  text-[1.15vw]
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >
                <span>Shop Now</span>

                <span className="text-[25px]">
                  →
                </span>
              </button>


              <button
                onClick={() => navigate("/shop")}
                className="
                  h-[50px]
                  w-[200px]
                  rounded-[12px]
                  border
                  border-[#383838]
                  bg-transparent
                  text-[1.15vw]
                  font-medium
                  text-[#aaaaaa]
                  transition
                  hover:border-[#666666]
                  hover:text-white
                "
              >
                View All Products
              </button>

            </div>

          </div>


          {/* RIGHT */}
          <div className="flex w-[18%] flex-col gap-[18px]">

            {/* Products */}
            <div
              className="
                flex
                h-[140px]
                flex-col
                items-center
                justify-center
                rounded-[25px]
                border
                border-[#526000]
                bg-[#1d2608]
              "
            >
              <p className="text-[2.1vw] font-bold text-[#c6ff00]">
                20+
              </p>

              <p className="mt-[3%] text-[1vw] font-medium text-[#777777]">
                Products Available
              </p>
            </div>


            {/* Delivery */}
            <div
              className="
                flex
                h-[140px]
                flex-col
                items-center
                justify-center
                rounded-[25px]
                border
                border-[#d0d0d0]
                bg-[#111111]
              "
            >
              <p className="text-[2vw] font-semibold text-white">
                Free
              </p>

              <p className="mt-[3%] text-[1vw] font-medium text-[#777777]">
                Delivery on ₹999+
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;