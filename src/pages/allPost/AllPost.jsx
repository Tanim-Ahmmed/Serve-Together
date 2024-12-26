import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PostCard from "../shared/PostCard";
import { MdTableRows } from "react-icons/md";
import { LiaTableSolid } from "react-icons/lia";
const AllPost = () => {
  const initialPosts = useLoaderData();
  const [allPosts, setAllPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");
  const [table, setTable] = useState(false);
  useEffect(() => {
    fetch(
      `https://assignment-server-ochre-eight.vercel.app/posts?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllPosts(data);
      });
  }, [search]);

  return (
    <div className="sm:w-11/12 mx-auto my-8">
      <div className="flex items-center justify-between p-6 my-6 rounded-md">
        <div>
          <h2 className="text-lg font-semibold justify-center hidden sm:flex">
            All volunteer need posts
          </h2>
        </div>
      </div>
      <div className="flex m-6">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search volunteer post by title"
          className="input input-bordered w-full rounded-3xl "
        />
        <div className="flex text-3xl gap-3 p-2">
          <button onClick={() => setTable(false)}>
            <LiaTableSolid />
          </button>
          <button onClick={() => setTable(true)}>
            <MdTableRows />
          </button>
        </div>
      </div>

      {table ? (
        <div className="overflow-x-auto ">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th className="hidden sm:table-cell">Category</th>
                <th className="hidden md:table-cell">Deadline</th>
                <th className="">Action</th>
              </tr>
            </thead>

            {allPosts.map((post) => (
              <tbody key={post._id}>
                <tr>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={post.thumbnail}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </th>
                  <td className="">{post.postTitle}</td>
                  <td className="hidden sm:table-cell">{post.category}</td>
                  <td className="hidden md:table-cell">
                    {" "}
                    {post.deadline.split("T")[0]}
                  </td>
                  <td>
                    <div>
                      <Link
                        to={`/postDetails/${post._id}`}
                        className="btn btn-neutral"
                      >
                        View Details
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 m-6 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allPosts.map((post) => (
            <PostCard key={post._id} post={post}></PostCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPost;
