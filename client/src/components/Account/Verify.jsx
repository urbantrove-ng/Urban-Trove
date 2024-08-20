import { useEffect, useState } from "react";
import axios from "../../Api/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUrban } from "../../context/UrbanContext";
import logo from "../../assets/image/logo.png";
function Verify() {
  const [isVerified, setIsVerified] = useState(false);

  const [isAlreadyVerified, setIsAlreadyVerified] = useState(false);

  const [verify, setverify] = useState(false);

  const { setAuth } = useUrban();

  const params = useParams();

  const id = params.id;

  const navigate = useNavigate();

  const [isLoading, setIssLoading] = useState("Verify email address");

  useEffect(() => {
    document.title = "Urban Trove | verify Email ";
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const FORGOT_URL = `/auth/verify/${id}`;

    setIssLoading("verifying email...");
    try {
      const response = await axios.patch(FORGOT_URL, JSON.stringify({ id }), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.status === 200) setIsVerified(true);

      setIsAlreadyVerified(false);
      setverify(true);

      setAuth({
        ...response.data.data,
        accessToken: response.data.data.accessToken,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setIssLoading("Verify email");

      if (error.response.status === 401) setIsAlreadyVerified(true);
    }
  };

  return (
    <div
      className="
    flex  justify-center items-center pt-40
   py-4 px-2
  "
    >
      <section className=" xl:w-[620px] h-[400px] flex justify-center items-center  p-8  bg-[#eff1e6] text-gray-900 ">
        {!isAlreadyVerified && !isVerified && (
          <div className="flex flex-col gap-4">
            <div className=" flex flex-col items-center">
              <img src={logo} className=" w-[100px] h-[50px]" />
            </div>
            <div>
              <h1 className=" text-[18px] ">Hi,</h1>
              <p className=" text-[18px] ">
                You are almost ready to start a new experience, Simply click the
                button below to activate your account
              </p>
            </div>

            <div className=" flex justify-center items-center">
              <button
                onClick={onHandleSubmit}
                className="border flex justify-center gap-2 rounded-md items-center border-transparent h-[49.5px]  text-[12px] font-medium bg-black hover:bg-primaryTwo xl:w-[400px] w-[200px] hover:text-gray-900 text-white "
              >
                {verify ? "verified sucessfully" : isLoading}
              </button>
            </div>
          </div>
        )}
        {isVerified && (
          <h1 className=" text-3xl text-center mt-20 ">
            Email successfully verified
          </h1>
        )}
        {isAlreadyVerified && (
          <h1 className=" text-2xl text-center mt-32 ">
            email is already verified
          </h1>
        )}
      </section>
    </div>
  );
}

export default Verify;
