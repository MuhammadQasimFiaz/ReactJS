import { NavLink, Outlet } from "react-router-dom";

function Courses() {
  return (
    <>
      <div className="flex text-center text-3xl text-white p-10 gap-8 justify-center uppercase">
        <NavLink
          to="/courses/undergraduate"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white border-2 border-white p-4 text-gray-800"
                : "bg-gray-800 p-4"
            }`
          }
        >
          undergraduate program
        </NavLink>
        <NavLink
          to="/courses/graduate"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white border-2 border-white p-4 text-gray-800"
                : "bg-gray-800 p-4"
            }`
          }
        >
          graduate program
        </NavLink>
        <NavLink
          to="/courses/phd"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white border-2 border-white p-4 text-gray-800"
                : "bg-gray-800 p-4"
            }`
          }
        >
          phd program
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Courses;
