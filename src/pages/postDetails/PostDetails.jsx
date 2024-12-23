import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PostDetails = () => {
  const post = useLoaderData();
  const { user } = useAuth;

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
          <button className="btn btn-primary">Be a Volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
