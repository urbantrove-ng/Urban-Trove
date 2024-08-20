import { useState } from "react";
import "./global.component.css";
import axios from "../../Api/axios";
import { Link, useParams } from "react-router-dom";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [successReset, setSuccessReset] = useState(false);
  const [isresetting, setIsresetting] = useState(false);

  const { token } = useParams();

  const RESET_URL = "/auth/forgot_password";
  async function changePassword() {
    setIsresetting(true);
    try {
      const response = await axios.patch(
        RESET_URL,
        JSON.stringify({ resetToken: token, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setSuccessReset(true);
        setIsresetting(false);
      }
    } catch (error) {
      setIsresetting(false);
    }
  }
  const onhandlesubmit = (e) => {
    e.preventDefault();
    changePassword();
  };
  return (
    <section
      className="
    flex  justify-center items-center pt-40
   py-4 px-2
  "
    >
      <div className="xl:w-[620px] h-[400px]  p-8  bg-[#eff1e6] flex items-center gap-8 justify-center py-12 px-4 sm:px-6 lg:px-8">
        {!successReset && (
          <div>
            <div className=" flex flex-col  items-center">
              <div className=" bg-primaryTwo p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className=" w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <div className=" xl:w-[400px] flex flex-col items-center">
                <p className=" text-2xl font-bold">Set new Password</p>
                <p className=" text-center">
                  Your new password must be different from the previously use
                  password
                </p>
              </div>
            </div>
            <form
              className=" flex flex-col items-center gap-4"
              onSubmit={onhandlesubmit}
            >
              <div className=" flex flex-col xl:w-[400px] gap-2">
                <label className=" xl:w-[400px]"> Password:</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required=""
                  className="xl:w-[400px] h-[30px] pl-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className=" text-red-600">
                  password must be at least 8 characters
                </p>
              </div>

              <button
                disabled={isresetting}
                type="submit"
                className=" w-[200px] h-[30px] bg-primaryOne rounded-sm text-white "
              >
                {isresetting ? "resetting..." : "Reset passwod"}
              </button>
            </form>
          </div>
        )}
        {successReset && (
          <div className=" flex flex-col items-center">
            <div className=" bg-primaryTwo p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>

            <p className=" text-2xl font-bold">Password Reset</p>
            <p>Your password has been successfully reset.</p>
            <Link to="/Login">Click to login</Link>
          </div>
        )}
      </div>
    </section>
  );
}
