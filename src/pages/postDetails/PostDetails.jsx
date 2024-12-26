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
    category,
    description,
    volunteersNeeded,
    deadline,
  } = post;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={thumbnail}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{postTitle}</h1>
          <p className="py-6">
           {description}
          </p>
          <Link to={`/beVolunteer/${_id}`} className={` ${volunteersNeeded > 0 ? "btn btn-primary" : "btn btn-disabled"}` }>Be a Volunteer</Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
