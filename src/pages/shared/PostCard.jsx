import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PostCard = ({ post }) => {
  // eslint-disable-next-line react/prop-types
  const { postTitle, thumbnail, category, deadline,_id } = post;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={thumbnail} alt="Volunteer posts" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{postTitle}</h2>
        <p>{category}</p>
        <p>{deadline}</p>
        <div className="card-actions">
          <Link to={`/postDetails/${_id}`}
           className="btn btn-neutral">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
