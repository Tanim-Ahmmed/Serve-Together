import img1 from "../../assets/v-10.jpg";
import img2 from "../../assets/v-9.webp";
import img3 from "../../assets/v-8.jpg";
import img4 from "../../assets/v-7.jpg";
import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";
const Home = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="sm:w-11/12 mx-auto">
      <div className="carousel w-full mb-10 max-h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover" />
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
          <Link to="/allPosts" className="btn btn-neutral px-20">
          See All
          </Link>
        </div>
    </div>
  );
};

export default Home;
