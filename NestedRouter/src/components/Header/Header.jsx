import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isCoursesActive = location.pathname.startsWith("/courses");
  return (
    <nav>
      <ul className="flex gap-5 text-white p-10 justify-center bg-gray-500 font-mono border-b-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "underline font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${isActive ? "underline font-semibold" : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${isActive ? "underline font-semibold" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="relative group">
          <span
            className={`${isCoursesActive ? "underline font-semibold" : ""}`}
            role="button"
          >
            Courses
          </span>
          <ul className="absolute uppercase top-[100%] opacity-0 group-hover:visible invisible group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <NavLink
                to="/courses/undergraduate"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-white border-2 border-white text-gray-800"
                      : "bg-gray-800"
                  } p-1 inline-block w-[220px]`
                }
              >
                undergraduate program
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses/graduate"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-white border-2 border-white text-gray-800"
                      : "bg-gray-800"
                  } p-1 inline-block w-[220px]`
                }
              >
                graduate program
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses/phd"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-white border-2 border-white text-gray-800"
                      : "bg-gray-800"
                  } p-1 inline-block w-[220px]`
                }
              >
                phd program
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
