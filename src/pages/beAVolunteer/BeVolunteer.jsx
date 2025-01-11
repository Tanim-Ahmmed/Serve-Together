import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const BeVolunteer = () => {
  const { user, theme } = useAuth();
  const post = useLoaderData();
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
    _id,
  } = post;
  const handleBeVolunteerRequest = (e) => {
    e.preventDefault();

    const form = e.target;
    const status = form.status.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const suggestion = form.suggestion.value;

    if (!volunteersNeeded > 0) {
      navigate("/");
      toast.error("Vacancy is already full! try another opportunity", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const volunteerRequest = {
      postId: _id,
      volunteerEmail: volunteerEmail,
      volunteerName: volunteerName,
      status: status,
      suggestion: suggestion,
    };
    fetch(
      "https://assignment-server-ochre-eight.vercel.app/post-volunteer-request",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(volunteerRequest),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Volunteer request successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/myPosts/${user?.email}`);
        }
      });
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
            <h1 className="text-2xl font-bold ">Request to Be a Volunteer</h1>
          </div>
          <form onSubmit={handleBeVolunteerRequest} className="card-body">
            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Organizer Name</span>
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
                  <span className="label-text">Organizer Email</span>
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
                  value={postTitle}
                  placeholder="Post title"
                  className="input input-bordered input-warning rounded-none w-full border-2 "
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={thumbnail}
                  placeholder="Thumbnail"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  readOnly
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
                  value={location}
                  name="location"
                  placeholder="Location"
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">No. of volunteers Needed</span>
                </label>
                <input
                  type="number"
                  name="volunteersNeeded"
                  value={volunteersNeeded}
                  placeholder="No. of volunteers Needed"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  readOnly
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
                  value={description}
                  placeholder="Post Description"
                  className="textarea textarea-bordered textarea-warning rounded-none w-full border-2 md:h-36"
                  readOnly
                />
              </div>

              <div className="md:w-1/3">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <select
                    name="category"
                    value={category}
                    className="select select-bordered rounded-none w-full select-warning border-2"
                    readOnly
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
                    selected={deadline}
                    className="input input-bordered rounded-none w-full input-warning border-2"
                    readOnly
                  ></DatePicker>
                </div>
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Volunteer Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  name="volunteerName"
                  placeholder="volunteerName"
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Volunteer Email </span>
                </label>
                <input
                  type="text"
                  name="volunteerEmail"
                  value={user?.email}
                  placeholder="volunteerEmail"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  readOnly
                />
              </div>
            </div>

            <div className="md:flex md:space-x-2 w-full">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <input
                  type="text"
                  value={"requested"}
                  name="status"
                  placeholder="status"
                  className="input input-bordered input-warning rounded-none w-full border-2"
                  readOnly
                />
              </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Suggestion</span>
                </label>
                <input
                  type="text"
                  name="suggestion"
                  placeholder="Suggestion"
                  className="input input-bordered rounded-none w-full input-warning  border-2"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning hover:border-orange-400 rounded-none">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteer;
