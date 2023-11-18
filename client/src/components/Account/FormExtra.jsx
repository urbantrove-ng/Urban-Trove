import { Link } from "react-router-dom";

export default function FormExtra() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 "
        />
        <label
          htmlFor="remember-me"
          className="ml-2 block text-gray-600 text-sm "
        >
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <Link
          to="/forgotpass"
          className="font-medium text-gray-600 hover:text-yellow-900"
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
