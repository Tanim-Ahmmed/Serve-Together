import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdatePost = () => {
  const { theme , user} = useAuth();

  const VolunteerNeedPost = useLoaderData();
  const navigate = useNavigate();
  const {
    organizerName,
    organizerEmail,
    postTitle,
    thumbnail,
    location,
    category,
    description,
    volunteersNeeded,
    deadline,
    _id
  } = VolunteerNeedPost;

  const [startDate, setStartDate] = useState(deadline);
  const handleUpdateVolunteerPost = (e) => {
    e.preventDefault();
    const form = e.target;

    const organizerName = form.name.value;
    const organizerEmail = form.email.value;
    const postTitle = form.title.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const deadline = startDate;

    const updatedPost = {
        organizerName,
        organizerEmail,
        postTitle,
        thumbnail,
        location,
        category,
        description,
        volunteersNeeded,
        deadline
    }
     
    fetch(`https://assignment-server-ochre-eight.vercel.app/posts/${_id}`, {
        method: "PUT",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(updatedPost)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            // console.log(data);
            Swal.fire({
                title: "Congrats!",
                text: "Your Volunteer Need Post Updated Successfully!",
                icon: "success"
              });
              navigate(`/myPosts/${user?.email}`);
        }
    })


  };
  return (
    <div className="min-h-screen flex justify-center items-center sm:w-11/12 mx-auto">
      <div className="hero bg-base-100 min-h-screen ">
        <div
          className={`card w-full shrink-0 rounded-none p-10 md:max-w-[800px] ${
            theme === "dark" ? "bg-gray-700" : "bg-base-200 shadow-lg"
          }`}
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold ">
              Update Your Volunteer Need Post
            </h1>
          </div>
          <form onSubmit={handleUpdateVolunteerPost} className="card-body">
            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={organizerName}
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={organizerEmail}
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  readOnly
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Post Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={postTitle}
                  placeholder="Post title"
                  className="input input-bordered input-warning rounded-none w-full border-2 "
                  required
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  defaultValue={thumbnail}
                  placeholder="Thumbnail"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  defaultValue={location}
                  name="location"
                  placeholder="Location"
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  required
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">No. of volunteers Needed</span>
                </label>
                <input
                  type="number"
                  name="volunteersNeeded"
                  defaultValue={volunteersNeeded}
                  placeholder="No. of volunteers Needed"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  required
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control md:w-2/3">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  placeholder="Post Description"
                  className="textarea textarea-bordered textarea-warning rounded-none w-full border-2 md:h-36"
                  required
                />
              </div>

              <div className="md:w-1/3">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    name="category"
                    className="select select-bordered rounded-none w-full select-warning border-2"
                    required
                    defaultValue={category}
                  >
                    <option value="" disabled>
                      Category
                    </option>
                    <option value="healthcare">Healthcare</option>
                    <option value="socialService">Social service</option>
                    <option value="education">Education</option>
                    <option value="animalWelfare">Animal welfare</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700">Deadline</label>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                  ></DatePicker>
                </div>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning hover:border-orange-400 rounded-none">
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
