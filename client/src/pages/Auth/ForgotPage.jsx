import { useState } from "react";
import { forgotFields } from "../../constant/formFields";
import FormAction from "../../components/Account/FormAction";
import Input from "../../components/Account/input";
import FormHeader from "../../components/Account/FormHeader";
import FormFooter from "../../components/Account/FormFooter";
import axios from "../../Api/axios";
import Spinner from "../../components/Spinner";

const fields = forgotFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function ForgetPass() {
  const [forgetPassState, setForgetPassState] = useState(fieldsState);
  const [reseting, setReseting] = useState(false);
  const [isresetting, setIsresetting] = useState(false);

  const handleChange = (e) => {
    setForgetPassState({ ...forgetPassState, [e.target.id]: e.target.value });
  };
  const FORGOT_URL = "/auth/forgot_password";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsresetting(true);

    try {
      const response = await axios.post(
        FORGOT_URL,
        JSON.stringify({ email: forgetPassState.email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setReseting(true);
        setIsresetting(false);
      }
    } catch (error) {
      setReseting(false);
      setIsresetting(false);
    }
    console.log(forgetPassState.email);
  };

  return (
    <section
      className="
    flex  justify-center items-center pt-40
   py-4 px-2
  "
    >
      <div className="w-[620px] h-[400px]  p-8  bg-[#eff1e6] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {!reseting && (
          <div className="max-w-md w-full space-y-8">
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
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>

              <p className=" text-2xl font-bold">Forgot Password?</p>
              <p>No worries, we&apos;ll send you reset instructions</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="-space-y-px">
                {fields.map((field) => (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={forgetPassState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>
              {!isresetting && (
                <FormAction handleSubmit={handleSubmit} text="Reset Password" />
              )}
              {isresetting && (
                <div className=" flex justify-center items-center">
                  <Spinner />
                </div>
              )}
              <FormFooter
                paragraph="Back to"
                linkName="log in"
                linkUrl="/Login"
              />
            </form>
          </div>
        )}
        {reseting && (
          <div>
            <div className=" flex flex-col items-center gap-4">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>

              <p className=" text-2xl font-bold">Check your email</p>
              <p>We sent a password reset link to {forgetPassState.email}</p>
            </div>
            <p className=" text-center">
              Did&apos;t receive the email?{" "}
              <span className=" text-primaryOne hover:underline">
                Click to Resend
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
