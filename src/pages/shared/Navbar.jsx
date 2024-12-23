import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Mode from "./Mode";
const Navbar = () => {
     const {user, logOut}=useAuth();
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
          <ul className="p-2 bg-orange-400">
            <li><NavLink to="/addPost">Add Post</NavLink></li>
            <li><NavLink to={`/myPosts/${user?.email}`} >My Posts</NavLink ></li>
          </ul>
        </details>
      </li>
        
        </>
      );
    
    return (
        <div className="navbar bg-orange-400 text-white sm:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-orange-400 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost hidden sm:flex  text-xl font-bold">
           ServeTogether
        
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end gap-4">

          <div>
          <Mode></Mode>
          </div>
  
  
          <div>
            {user && user?.email ? (
               <div>
                <div className="tooltip tooltip-bottom hover:cursor-pointer" data-tip={user?.displayName}>
              <div className="avatar online">
               
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} />
                </div>
                </div>
                </div>
              </div>
            ) : ""}
          </div>
  
          <div>
            {user && user?.email ? (
              <Link
                to="/"
                onClick={logOut}
                className=" py-2 px-4 link-hover bg-orange-600 text-white font-bold hover:border-2 rounded-md"
              >
                LogOut
              </Link>
            ) : (
              <Link
              to="/login"
              className="py-2 px-4 link-hover bg-orange-600 text-white font-bold hover:border-2 rounded-md"
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