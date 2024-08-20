import { useRef, useState } from "react";
import axios from "../../Api/axios";
import { useUrban } from "../../context/UrbanContext";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [errMsg, SetErrMsg] = useState("");
  const [isVerified, setIsVerified] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);
  const { setAuth } = useUrban();
  const errRef = useRef();

  const navigate = useNavigate();
  const [logining, setLogining] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [sentVerified, isSentVerified] = useState(false);

  const LOGIN_URL = "/auth/signin";
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLogining(true);
    try {
      const response = await axios.post(
        LOGIN_URL,

        JSON.stringify({ email, password }),

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.code === 200 && response?.data?.data.role == "user") {
        setAuth({
          ...response.data.data,
          accessToken: response.data.data.accessToken,
        });

        navigate(-1);
      } else if (
        response?.data?.data.role === "admin" ||
        response?.data?.data.role === "merchant"
      ) {
        throw new Error("Unauthorized user.");
      }
    } catch (err) {
      if (err.response) {
        const status = err.response.status;
        if (status === 401 || status === 404) {
          SetErrMsg(err?.response?.data?.data?.msg || "An error occurred.");
        } else if (status === 400) {
          SetErrMsg(err?.response?.data?.data?.msg || "An error occurred.");
          setIsVerified(false);
        } else {
          SetErrMsg("An unexpected error occurred.");
        }
      } else {
        SetErrMsg(err.message || "An error occurred.");
      }
    } finally {
      setLogining(false);
    }
  };

  const sendverificationemail = async () => {
    setIsVerifying(true);
    try {
      const verification_URL = "auth/verify";
      const response = await axios.post(
        verification_URL,
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setIsVerifying(false);
        isSentVerified(true);
      }
    } catch (error) {
      setIsVerifying(false);
    }
  };

  return (
    <section className="bg-[#FEFAFA] h-[100vh]  shadow-md ">
      {isVerified && (
        <div className="flex justify-center  h-full text-black items-center w-full   bg-[#FEFAFA] ">
          <div className="flex flex-col items-center w-full max-w-md p-4 bg-[#FEFAFA]  rounded ">
            <h3 className="text-center text-[3.2rem] text-black font-bold mb-6">
              Sign In
            </h3>
            <form
              className="flex flex-col gap-4 items-center  bg-[#FEFAFA]   "
              onSubmit={onHandleSubmit}
            >
              <p
                ref={errRef}
                className={
                  errMsg ? "errmsg text-red-500 text-center" : "offscreen"
                }
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address..."
                  id="email"
                  type="email"
                  className="outline-none border-b-2 p-2 lg:w-[400px] w-[300px]"
                />
              </div>
              <div className="flex flex-col relative">
                <label htmlFor="password" className="mb-1">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="***********"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="outline-none border-b-2 p-2 lg:w-[400px] w-[300px]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 bottom-2"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="w-full flex justify-end">
                <p
                  className="underline cursor-pointer"
                  onClick={() => navigate("/forgotpassword")}
                >
                  Forgot password?
                </p>
              </div>{" "}
              <div className="flex gap-6 items-center mt-6">
                <button className=" bg-primaryOne lg:h-[40px] flex justify-center text-white items-center rounded-md lg:w-40 w-28 h-12 text-center  cursor-pointer drop-shadow-lg hover:scale-105 transition ease-in-out duration-200">
                  {!logining ? "Sign In" : <Spinner />}
                </button>
                <Link to="/Signup">
                  <button className=" text-black hover:underline lg:h-[40px] flex justify-center items-center">
                    Sign Up &rarr;
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
      {!isVerified && (
        <div
          className="
    flex  justify-center items-center pt-40
   py-4 px-2
  "
        >
          <div className="w-[620px] h-[400px]  p-8  bg-[#eff1e6] flex items-center gap-8 justify-center py-12 px-4 sm:px-6 lg:px-8">
            {!sentVerified && (
              <div className=" flex flex-col items-center gap-8">
                <p>
                  Your email address is not verified, Please click the button
                  below
                </p>
                <button
                  onClick={() => sendverificationemail()}
                  className=" w-[200px] h-[30px] bg-primaryOne rounded-sm text-white "
                >
                  {isVerifying ? "sending..." : "verify email address"}
                </button>
              </div>
            )}
            {sentVerified && (
              <p className="text-gray-900 xl:text-3xl text-center">
                Please check your email and follow the instructions
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Login;
