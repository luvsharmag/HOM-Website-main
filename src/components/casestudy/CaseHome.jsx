import React, { useState } from "react";
import BlogsCard from "./BlogsCard";
import Navbar from "../Navbar";
// import BlogsCard from "../components/BlogsCard";

const CaseHome = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Beauty & Personal Care",
    "Education & ed tech",
    "Entertainment",
    "fashion & accessories",
    "Finance & banking",
    "Health & fitness",
    "Home & kitchen",
  ];
  return (
    <>
    <Navbar/>
      <div className="flex mx-36 mt-32">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl font-extrabold">Case Studies</h1>
            <h2 className="text-lg">
              How brands are establishing a name in the market using influencer
              marketing. Read quick analysis of the complete campaigns.
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <h1 className="text-2xl font-bold">Topics</h1>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 w-[250px] text-left text-lg rounded-lg hover:text-white hover:bg-blue-700 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
        <BlogsCard selectedCategory={selectedCategory} />
        <div className="flex items-center my-8 bg-blue-100 p-5 justify-around">
          <img
            className="w-[250px]"
            src="https://goodcreator.co/icons/newsletter.svg"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl">Never Miss a Beat..!</h1>
            <h3 className="text-xl">
              Get the next blog post from Our Team in your inbox
            </h3>
            <button className="bg-blue-700 px-12 py-2 rounded-md font-semibold text-lg">
              Join Us
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CaseHome;
