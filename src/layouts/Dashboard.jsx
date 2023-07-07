import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaNewspaper, FaRegEdit } from "react-icons/fa";
import logo from "../assets/tvLogo.png";
import AddUser from "../pages/Dashboard/AddUser";
import AddPost from "../pages/Dashboard/AddPost";
import AddAuthor from "../pages/Dashboard/AddAuthor"
import AddCategory from "../pages/Dashboard/AddCategory"
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>TV369 | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open bg-base-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col items-center justify-start">
          {/* Page content here */}
          <div className="w-full navbar justify-between bg-base-100 lg:hidden">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <img className="w-36 -mt-12 -mb-14" src={logo} alt="" />
            </div>
            <div className="navbar-end lg:hidden"></div>
          </div>
          <div className="bg-base-100 rounded-2xl pt-4 lg:w-[72rem] mt-6 h-full mb-6 shadow-xl">
            <Outlet></Outlet>
            <AddUser></AddUser>
            <AddPost></AddPost>
            <AddAuthor></AddAuthor>
            <AddCategory></AddCategory>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <div className="hidden lg:block">
              <div className="flex flex-col items-center space-y-3 ">
                <img className="w-28" src={logo} alt="" />
              </div>
            </div>
            <div className="text-base font-medium mt-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-bold text-white" : ""
                  }
                  to="home"
                >
                  <FaHome></FaHome> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-bold text-white" : ""
                  }
                  to="user-management"
                >
                  <FaRegEdit></FaRegEdit> User Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active font-bold text-white" : ""
                  }
                  to="post-management"
                >
                  <FaNewspaper></FaNewspaper> Post Management
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
