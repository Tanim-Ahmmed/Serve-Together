import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PostCard = ({ post }) => {
  // eslint-disable-next-line react/prop-types
  const { postTitle, thumbnail, category, deadline, _id, volunteersNeeded } =
    post;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={thumbnail}
          alt="Volunteer posts"
          className="rounded-xl object-cover w-full aspect-[3/2]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{postTitle}</h2>
        <p className="text-base-900">
          Volunteer Needed:{" "}
          <span className="bg-green-200 py-1 px-5 border border-green-600 rounded-3xl font-bold">
            {" "}
            {volunteersNeeded}{" "}
          </span>{" "}
        </p>
        <div className="w-full flex justify-between py-3 border-b-2">
          <p className="font-bold"> {category}</p>
          <p className="font-bold"> {deadline.split("T")[0]}</p>
        </div>

        <div className="card-actions mt-4 ">
          <Link
            to={`/postDetails/${_id}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
