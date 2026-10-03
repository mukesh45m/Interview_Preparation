import { createBrowserRouter } from "react-router-dom";
import Login from "../feature/auth/pages/Login.jsx";
import Register from "../feature/auth/pages/Register.jsx";
import Dashboard from "../feature/auth/pages/Dashboard.jsx";
import Home from "../feature/interview/pages/Home.jsx";
import Protect from "../feature/auth/protected/protect.jsx";
import Interview from "../feature/interview/pages/Interview.jsx";
import AllInterviewReport from "../feature/interview/pages/AllInterviewReport.jsx";
import Index from "../feature/auth/pages/Index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <Protect>
        <Dashboard />
      </Protect>
    ),
  },
  {
    path: "/home",
    element: (
      <Protect>
        <Home />
      </Protect>
    ),
  },
  {
    path: "/interview",
    element: (
      <Protect>
        <AllInterviewReport />
      </Protect>
    ),
  },

  {
    path: "/interview/:interviewId",
    element: (
      <Protect>
        <Interview />,
      </Protect>
    ),
  },
]);
