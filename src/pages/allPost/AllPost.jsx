import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";

const AllPost = () => {
    const initialPosts = useLoaderData();
    const [allPosts, setAllPosts] = useState(initialPosts);
  return (
    <div className="sm:w-11/12 mx-auto my-8">
      <div className="flex items-center justify-center p-6 my-6 rounded-md">
        <h2 className="text-lg font-semibold justify-center hidden sm:flex">All voluteer need posts </h2>
      </div>

      <div className="grid grid-cols-1 m-6 sm:m-0  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
