import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import DashBoardHome from "../pages/Dashboard/DashBoardHome";
import UserManagement from "../pages/Dashboard/UserManagement";
import ManageUser from "../pages/Dashboard/ManageUser";
import PostManagement from "../pages/Dashboard/PostManagement";
import ManagePost from "../pages/Dashboard/ManagePost";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "user-management",
        element: <UserManagement></UserManagement>,
        children: [
          {
            path: "",
            element: <ManageUser></ManageUser>,
          }
        ],
      },
      {
        path: "post-management",
        element: <PostManagement></PostManagement>,
        children: [
          {
            path: "",
            element: <ManagePost></ManagePost>,
          },
        ],
      },
    ]
  }

  // {
  //   peth: "/login",
  //   element: <Login></Login>
  // },
  // {
  //   path: "/",
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <DashBoardHome></DashBoardHome>,
  //     },
  //     {
  //       path: "user-management",
  //       element: <UserManagement></UserManagement>,
  //       children: [
  //         {
  //           path: "",
  //           element: <ManageUser></ManageUser>,
  //         }
  //       ],
  //     },
  //     {
  //       path: "post-management",
  //       element: <PostManagement></PostManagement>,
  //       children: [
  //         {
  //           path: "",
  //           element: <ManagePost></ManagePost>,
  //         },
  //       ],
  //     },
  //   ],
  // },
]);

export default router;
