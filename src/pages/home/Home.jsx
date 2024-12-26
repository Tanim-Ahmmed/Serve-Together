import img1 from "../../assets/v-10.jpg";
import img2 from "../../assets/v-9.webp";
import img3 from "../../assets/v-8.jpg";
import img4 from "../../assets/v-7.jpg";
import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";
import { useEffect, useState } from "react";

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
    <div className="sm:w-11/12 mx-auto">
      <div className="carousel  w-full mb-10 max-h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="md:text-4xl sm:text-xl text:lg font-bold mb-2">Welcome to Our Platform</h2>
            <p className="sm:text-lg text-sm mb-4">Discover the best Volunteer Opportunity and more!</p>
            <Link to="/allPosts" className="btn hidden sm:flex btn-neutral rounded-3xl px-8 py-2">
              View more
            </Link>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

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
