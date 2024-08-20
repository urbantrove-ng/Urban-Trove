import { NavLink } from "react-router-dom";

export default function FormFooter({ paragraph, linkName, linkUrl = "#" }) {
  return (
    <div className="mb-1">
      <p className=" text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <NavLink
          to={linkUrl}
          className="font-medium text-green-900 hover:text-yellow-900"
        >
          {linkName}
        </NavLink>
      </p>
    </div>
  );
}
