
import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const Home = () => {
  const [postCount, setPostCount] = useState(0);
  const posts = useLoaderData();

  useEffect(() => {
    fetch(`https://assignment-server-ochre-eight.vercel.app/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPostCount(data.length);
      });
  }, []);
  return (
    <div className="">
      <Slider></Slider>

      <div className="grid grid-cols-1  m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
      <div className="w-full mx-auto my-6 flex justify-center">
        <Link to="/allPosts" className="btn btn-neutral px-20 rounded-3xl">
          See All
        </Link>
      </div>

      <div className="bg-base-200 text-center py-16 px-6">
        <h2 className="text-2xl font-bold text-base-900 mb-8">The Numbers</h2>
        <div className="sm:flex sm:gap-6 items-center justify-center hover:cursor-pointer">
          <div className="bg-[#2f2f53] text-white rounded-full w-48 h-48 flex flex-col items-center justify-center mx-auto">
            <p className="text-4xl font-bold">{postCount}</p>
            <p className="text-lg font-semibold">Volunteer Opportunities</p>
          </div>
          <div className="sm:w-1/2 mt-6 sm:mt-0 text-left bg-base-100 p-6 rounded-3xl shadow-lg">
            <p className="text-lg">
              <span className="font-bold">ServeTogether </span> has connected volunteers with numerous causes,
              fostering a culture of kindness and community support. With{" "}
              {postCount} opportunities currently available, there’s always a
              chance to make a meaningful impact and contribute to a better
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
