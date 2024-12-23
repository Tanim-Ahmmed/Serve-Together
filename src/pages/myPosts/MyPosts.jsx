import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user } = useAuth();
  const myAllPosts = useLoaderData();
  const [posts, setPosts] = useState(myAllPosts);
   
  console.log(posts);

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
        fetch(`http://localhost:5000/posts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remain = posts.filter((rev) => rev._id !== id);
              setPosts(remain);
            }
          });
      }
    });
  };

  return (
    <div className="sm:w-11/12 mx-auto min-h-screen flex justify-center my-8">
     {
    posts?.length > 0 ? 
    <div className="w-full sm:p-10 ">
        <h3 className="text-xl font-bold text-orange-400 text-center py-6">
           My posts
        </h3>

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

            {posts.map((post, i) => (
              <tbody key={post._id}>
                <tr>
                  <th>{i + 1}</th>
                  <td>{post.postTitle}</td>
                  <td className="hidden sm:flex">{post.category}</td>
                  <td>{post.deadline}</td>
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
      </div> :
       <h2 className="text-lg font-bold ">No Data has been Added Yet</h2>
}
    </div>
  );
};

export default MyPosts;
