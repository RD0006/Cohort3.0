import React from "react";

const categories = [
  {
    name: "Electronics",
    count: 17,
    icon: "💻",
  },
  {
    name: "Clothing",
    count: 2,
    icon: "📦",
  },
  {
    name: "Furniture",
    count: 3,
    icon: "📦",
  },
  {
    name: "Home",
    count: 14,
    icon: "📦",
  },
  {
    name: "Sports",
    count: 8,
    icon: "📦",
  },
  {
    name: "Accessories",
    count: 6,
    icon: "📦",
  },
];

const Categories = () => {

  return (
    <section className="px-[2.5%] pt-[3.5%]">

      {/* Heading */}
      <div className="mb-[2%] flex items-center justify-between">

        <h2 className="text-[1.7vw] font-semibold text-white">
          Shop by Category
        </h2>

        <button
          onClick={() => navigate("/shop")}
          className="text-[1.05vw] font-medium text-[#c6ff00]"
        >
          View All →
        </button>

      </div>


      {/* Categories */}
      <div className="grid grid-cols-4 gap-[15px]">

        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => navigate(`/shop?category=${category.name}`)}
            className="
              flex
              h-[145px]
              flex-col
              items-center
              justify-center
              rounded-[25px]
              bg-white
              transition
              hover:scale-[1.01]
            "
          >

            <span className="text-[40px]">
              {category.icon}
            </span>

            <p className="mt-[4%] text-[1.15vw] font-semibold text-[#111111]">
              {category.name}
            </p>

            <p className="mt-[2%] text-[1vw] font-medium text-[#888888]">
              {category.count} items
            </p>

          </button>
        ))}

      </div>

    </section>
  );
};

export default Categories;