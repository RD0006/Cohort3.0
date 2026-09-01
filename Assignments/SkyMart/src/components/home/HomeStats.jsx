import React from "react";

const stats = [
  {
    icon: "▣",
    value: "0",
    title: "Cart Items",
    subtitle: "In your bag",
  },
  {
    icon: "↗",
    value: "$0.00",
    title: "Cart Value",
    subtitle: "Ready to checkout",
  },
  {
    icon: "☆",
    value: "5",
    title: "Top Products",
    subtitle: "Highly rated",
  },
  {
    icon: "◇",
    value: "6",
    title: "Categories",
    subtitle: "To explore",
  },
];

const HomeStats = () => {
  return (
    <section className="px-[2.5%] pt-[2%]">

      <div className="grid grid-cols-4 gap-[1.5%]">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              flex
              h-[120px]
              items-center
              gap-[6%]
              rounded-[28px]
              border
              border-[#d0d0d0]
              bg-[#111111]
              px-[5%]
            "
          >

            {/* Icon */}
            <div
              className="
                flex
                h-[60px]
                w-[60px]
                shrink-0
                items-center
                justify-center
                rounded-[22px]
                bg-[#202808]
                text-[32px]
                text-[#c6ff00]
              "
            >
              {stat.icon}
            </div>


            {/* Text */}
            <div>

              <p className="text-[1.7vw] font-semibold text-white">
                {stat.value}
              </p>

              <p className="mt-[3%] text-[1.05vw] font-medium text-[#777777]">
                {stat.title}
              </p>

              <p className="mt-[2%] text-[0.9vw] font-medium text-[#555555]">
                {stat.subtitle}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default HomeStats;