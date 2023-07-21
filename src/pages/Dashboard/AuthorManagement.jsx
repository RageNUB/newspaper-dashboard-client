import { FaPlusCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const AuthorManagement = () => {
  return (
    <div className="w-full">
      <div className="navbar px-8">
        <div className="flex gap-8 navbar-start">
          <p className="text-xl font-medium">
            <NavLink
              className={({ isActive }) => (isActive ? "" : "text-base-300")}
              to=""
            >
              Author Management
            </NavLink>
          </p>
        </div>
        <div className="navbar-end flex gap-5 text-primary">
          <button onClick={()=>window.my_modal_4.showModal()} className="btn btn-ghost btn-sm border-2 border-primary bg-primary bg-opacity-5">
            <FaPlusCircle></FaPlusCircle> Add Author
          </button>
        </div>
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthorManagement;