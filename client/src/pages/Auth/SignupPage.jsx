import { useRef, useState } from "react";
import axios from "../../Api/axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
function SignupPage() {
  const [email, setEmail] = useState("");
  const [errMsg, SetErrMsg] = useState("");

  const errRef = useRef();
  const [logining, setLogining] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const LOGIN_URL = "/auth/signup";
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setLogining(true);
    try {
      const response = await axios.post(
        LOGIN_URL,

        JSON.stringify({ email, password, role: "user" }),

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.code === 200) {
        setIsSignedUp(true);
      }
    } catch (err) {
      setLogining(false);
      setIsSignedUp(false);
      if (err?.response?.status == 401) {
        SetErrMsg(err?.response?.data?.data?.msg);
      } else if (err?.response?.status == 404) {
        SetErrMsg(err?.response?.data?.data?.msg);
      } else if (err?.response?.status == 422) {
        SetErrMsg(err?.response?.data?.data?.msg);
      } else {
        SetErrMsg("Something went wrong");
      }
    }
  };

  return (
    <section className="bg-[#FEFAFA] h-[100vh]  shadow-md ">
      {!isSignedUp && (
        <div className="flex justify-center  h-full text-black items-center w-full   bg-[#FEFAFA] ">
          <div className="flex flex-col items-center w-full max-w-md p-4 bg-[#FEFAFA]  rounded ">
            <h3 className="text-center text-[3.2rem] font-bold mb-6">
              Sign Up
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

              <div className="flex gap-6 items-center mt-6">
                <button className=" bg-primaryOne lg:h-[40px] flex justify-center text-white items-center rounded-md lg:w-40 w-28 h-12 text-center  cursor-pointer drop-shadow-lg hover:scale-105 transition ease-in-out duration-200">
                  {!logining ? "Sign Up" : <Spinner />}
                </button>
                <Link to="/Login">
                  <button className=" text-black hover:underline lg:h-[40px] flex justify-center items-center">
                    Sign In &rarr;
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
      {isSignedUp && (
        <div className=" flex justify-center text-center items-center lg:pt-72 pt-72">
          <div className=" flex flex-col items-center"> 
            <h1 className=" text-3xl">🎉 Almost there!</h1>
            <p className=" text-2xl">We&apos;ve sent you an email at </p>
            <p className=" text-2xl">{email}</p>
            <p className=" text-2xl">
              Please follow the instructions in the email.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SignupPage;
