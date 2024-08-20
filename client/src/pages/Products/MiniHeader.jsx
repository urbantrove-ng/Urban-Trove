import { HomeIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";

export default function MiniHeader() {
  const navigate = useNavigate();
  const location = useLocation();


  const name = location.pathname.split("/");
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex border-b border-gray-200 bg-white lg:pt-32 pt-24"
    >
      <ol
        role="list"
        className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
      >
        <li className="flex" onClick={() => navigate("/")}>
          <div className="flex items-center">
            <p
              href="/"
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </p>
          </div>
        </li>
        <li className="flex">
          <div className="flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="h-full w-6 flex-shrink-0 text-gray-200"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <a
              href={location.pathname}
              aria-current={location.pathname ? "page" : undefined}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 first-letter:uppercase"
            >
              {name[1]}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
