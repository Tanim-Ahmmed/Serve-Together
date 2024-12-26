import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PostDetails = () => {
  const post = useLoaderData();
  const { user } = useAuth;

  const {
    _id,
    organizerName,
    organizerEmail,
    postTitle,
    thumbnail,
    location,
    description,
    volunteersNeeded,
    deadline,
  } = post;
  return (
    <div className="pb-72 sm:pb-60 md:pb-32 lg:pb-0 ">
      <div className="relative  m-auto mb-96 bg-[#1A1A2E]  pb-36 sm:pb-40 md:pb-56 lg:pb-64">
        <div className="text-center text-white py-6">
          <h1 className="py-6 font-bold text-3xl ">Volunteer Post Details</h1>
          <div className="flex flex-col justify-start">
            
            <p> Organizer Name: {organizerName}</p>
            <p> Organizer Email: {organizerEmail}</p>
          </div>
        
        </div>
        <div className=" absolute  transform -translate-x-1/2 bg-white left-1/2  shadow-xl rounded-xl w-10/12 p-2">
          <div className="hero-content flex-col lg:flex-row  gap-10">
            <img
              src={thumbnail}
              className="max-w-sm rounded-lg w-full h-full object-cover shadow-2xl "
            />
            <div>
              <h1 className="text-xl font-bold">{postTitle}</h1>
              <p className="font-semibold pt-3 ">
                Deadline: {deadline.split("T")[0]}
              </p>
              <p className="font-semibold ">
                Location: {location}
              </p>
              <p className="py-3">{description}</p>

              <div className="py-3">
                <Link
                  to={`/beVolunteer/${_id}`}
                  className={` ${
                    volunteersNeeded > 0
                      ? "btn btn-neutral rounded-3xl"
                      : "btn btn-disabled"
                  }`}
                >
                  Be a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
