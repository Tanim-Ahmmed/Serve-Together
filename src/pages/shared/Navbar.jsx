import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Mode from "./Mode";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allPosts">All Posts</NavLink>
      </li>
      <li>
        <details>
          <summary>My Profile</summary>
          <ul className="p-2 bg-[#1A1A2E]">
            <li>
              <NavLink to="/addPost">Add Post</NavLink>
            </li>
            <li>
              <NavLink to={`/myPosts/${user?.email}`}>My Posts</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="bg-[#1A1A2E] fixed top-0 left-0 right-0 z-50 shadow-lg text-orange-400">
      {/* Container for Navbar Content */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Navbar Start */}
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1A1A2E] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl font-bold hidden sm:flex"
          >
            ServeTogether
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-4">
          <Mode />
          {user?.email ? (
            <>
              <div
                className="tooltip tooltip-bottom hover:cursor-pointer"
                data-tip={user?.displayName}
              >
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
              </div>
              <Link
                to="/"
                onClick={logOut}
                className="py-2 px-4 link-hover bg-orange-400 rounded-3xl text-white font-bold hover:border-2"
              >
                LogOut
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="py-2 px-4 link-hover bg-orange-400 text-white font-bold hover:border-2 rounded-3xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
