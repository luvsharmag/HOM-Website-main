import React from "react";
const blogsData = [
  {
    hashtag: "Beauty & Personal Care",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Beauty & Personal Care"
  },
  {
    hashtag: "Beauty & Personal Care",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Beauty & Personal Care"
  },
  {
    hashtag: "Education & ed tech",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Education & ed tech"
  },
  {
    hashtag: "Entertainment",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Entertainment"
  },
  {
    hashtag: "fashion & accessories",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "fashion & accessories"
  },
  {
    hashtag: "Finance & banking",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Finance & banking"
  },
  {
    hashtag: "Health & fitness",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Health & fitness"
  },
  {
    hashtag: "Home & kitchen",
    title:
      "MyGlamm Made The Best Of Valentine’s Day With A Solid Amplification Campaign",
    imgUrl:
      "https://blog.goodcreator.co/wp-content/uploads/2024/02/banner.png",
    author: "By Kanchan Aswal",
    date: "Feb 14, 2024",
    link: "/blog-beauty",
    category: "Home & kitchen"
  },
];

const BlogsCard = ( {selectedCategory = 'All'} ) => {

    const filteredPosts = selectedCategory === 'All'
    ? blogsData 
    : blogsData.filter(data => data.category === selectedCategory)
  
  return (
    <div className="mt-36">
        <div className="grid grid-cols-3 gap-4">
            {filteredPosts.map((data) => (
                <div>
                <a href={data.link} className="flex flex-col rounded-lg shadow-2xl hover:shadow-[0px_0px_20px] hover:rotate-3 transition duration-300 ease-in-out">
                    <div>
                    <img className="w-[350px] rounded-t-lg" src={data.imgUrl} alt="" />
                    </div>
                    <div className="flex flex-col gap-2 mt-3 p-5">
                    <h4 className="text-sm bg-blue-300 w-[185px] text-center px-2 py-1 rounded-lg">{data.hashtag}</h4>
                    <h1 className="font-bold">{data.title}</h1>
                    <h3 className="text-lg">{data.author}</h3>
                    <p>{data.date}</p>
                    </div>
                </a>
                </div>
            ))}
        </div>
    </div>
  );
};

export default BlogsCard;
