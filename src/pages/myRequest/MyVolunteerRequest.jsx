import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const MyVolunteerRequest = () => {
  const { user } = useAuth();
  const [myRequest, setMyRequest] = useState([]);
  const handleDeleteRequest = (id) => {

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
            fetch(`https://assignment-server-ochre-eight.vercel.app/post-volunteer-request/${id}`, {
              method: "DELETE",
            })
            .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Canceled!",
                    text: "Your request has been Canceled.",
                    icon: "success",
                  });
                  const remain = myRequest.filter((post) => post._id !== id);
                  setMyRequest(remain);
                }
              });
          }
        });
  };

  useEffect(() => {
    fetch(`https://assignment-server-ochre-eight.vercel.app/post-volunteer-request?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyRequest(data);
      });
  }, [user.email]);
  return (
    <div className="sm:w-11/12  mx-auto min-h-screen flex justify-center my-8">
    
        <div className="w-full sm:p-10 ">
          <h3 className="text-xl font-bold text-orange-400 text-center py-6">
            My Requests
          </h3>
          {myRequest?.length > 0 ? (
          <div className="overflow-x-auto ">
            <table className="table ">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th className="hidden sm:flex">Category</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>

              {myRequest.map((post) => (
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
                    <td className="hidden sm:flex mt-3">{post.category}</td>
                    <td>{post.deadline.split("T")[0]}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteRequest(post._id)}
                        className="text-lg text-red-600 btn"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
           ) : (
            <h2 className="text-lg font-bold text-center">No Request Data has been Added Yet</h2>
          )}
        </div>
     
    </div>
  );
};

export default MyVolunteerRequest;
