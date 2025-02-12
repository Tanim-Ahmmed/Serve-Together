import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import MyVolunteerRequest from "../myRequest/MyVolunteerRequest";

const MyPosts = () => {
  const myAllPosts = useLoaderData();
  const [posts, setPosts] = useState(myAllPosts);


  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-server-ochre-eight.vercel.app/posts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remain = posts.filter((post) => post._id !== id);
              setPosts(remain);
            }
          });
      }
    });
  };

  return (
    <div className="sm:w-11/12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center my-8">
   
        <div className="w-full sm:p-10 ">
          <h3 className="text-xl font-bold text-orange-400 text-center py-6">
            My posts
          </h3>
          {posts?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th className="hidden sm:flex">Category</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>

              {posts.map((post) => (
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
                    <td>{post.postTitle}</td>
                    <td className="hidden sm:flex">{post.category}</td>
                    <td>{post.deadline.split("T")[0]}</td>
                    <td>
                      <Link to={`/updatePost/${post._id}`}>
                        <button className="text-lg text-orange-400 pr-6">
                          <FaRegEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeletePost(post._id)}
                        className="text-lg text-red-600"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

        ) : (
        <h2 className="text-lg font-bold min-h-44 text-center">No Post has been Added Yet</h2>
      )}
        </div>
    
      <MyVolunteerRequest></MyVolunteerRequest>
    </div>
  );
};

export default MyPosts;
