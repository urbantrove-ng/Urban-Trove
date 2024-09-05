import { useContext, useRef, useState } from "react";
import axios from "../../Api/axios";
import { UrbanContext} from "../../context/UrbanContext";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import FormHeader from "../../components/Account/FormHeader";
function SignupForm() {
  const [email, setEmail] = useState("");
  const [errMsg, SetErrMsg] = useState("");
 const {setAuth} = useContext(UrbanContext);
  const errRef = useRef();
  const navigate = useNavigate();
  const [logining, setLogining] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

      if (response.data.code === 200) {
        const result = response?.data?.data;
        const { accessToken, email } = result;
        navigate("/");

        setAuth({
          email,
          accessToken,
        });
      }
    } catch (err) {
      setLogining(false);
      if (err?.response?.status == 401) {
        SetErrMsg(err?.response?.data?.data?.msg);
      } else if (err?.response?.status == 404) {
        SetErrMsg(err?.response?.data?.data?.msg);
      } else {
        SetErrMsg("Something went wrong");
      }
    }
  };

  return (
    <section className="bg-[#FEFAFA]  shadow-md pt-40 font-ubuntu">
      <section className="flex justify-center  h-full text-black items-center w-full   bg-[#FEFAFA] ">
        <FormHeader />

        <div className="flex flex-col items-center w-full max-w-md p-4 bg-[#FEFAFA]  rounded ">
          <h3 className="text-center text-[3.2rem] font-bold mb-6">Sign In</h3>
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
                className="outline-none border-b-2 p-2 w-[400px]"
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
                className="outline-none border-b-2 p-2 w-[400px]"
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
                className="underline"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot password?
              </p>
            </div>{" "}
            <div className="flex gap-6 items-center mt-6">
              <button className=" bg-primaryOne lg:h-[40px] flex justify-center text-white items-center rounded-md lg:w-40 text-center  cursor-pointer drop-shadow-lg hover:scale-105 transition ease-in-out duration-200">
                {!logining ? "Sign In" : <Spinner />}
              </button>
              <Link href="/Auth">
                <button className=" text-black hover:underline lg:h-[40px] flex justify-center items-center">
                  Sign Up &rarr;
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
}

export default SignupForm;
