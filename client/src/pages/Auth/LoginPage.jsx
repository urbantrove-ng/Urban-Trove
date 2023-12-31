import { useState } from "react";
import FormExtra from "../../components/Account/FormExtra";
import { loginFields } from "../../constant/formFields";
import FormAction from "../../components/Account/FormAction";
import Input from "../../components/Account/input";
import FormHeader from "../../components/Account/FormHeader";
import FormFooter from "../../components/Account/FormFooter";

import axios from "axios";
// import { useContext } from "react";
// import { RecoveryContext } from "../../App";
// import { RecoveryContext } from "../App";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  // const [loginState, setLoginState] = useState(fieldsState);
  // const { setPage, setOTP, setEmail } = useContext(RecoveryContext);
  const [userEmail, setUserEmail] = useState(fieldsState);

  function sendOtp() {
    if (userEmail) {
      axios
        .get(`http://localhost:5000/check_email?email=${userEmail}`)
        .then((response) => {
          if (response.status === 200) {
            const OTP = Math.floor(Math.random() * 9000 + 1000);
            console.log(OTP);
            setOTP(OTP);
            setEmail(userEmail);

            axios
              .post("http://localhost:5000/send_email", {
                OTP,
                recipient_email: userEmail,
              })
              .then(() => setPage("otp"))
              .catch(console.log);
          } else {
            alert("User with this email does not exist!");
            console.log(response.data.message);
          }
        })
        .catch(console.log);
    } else {
      alert("Please enter your email");
    }
  }

  const handleChange = (e) => {
    setUserEmail({ ...userEmail, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <FormHeader />
          <form onSubmit={handleSubmit}>
            <div>
              {fields.map((field) => (
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={userEmail[field.id]}
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
            <br />
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text="Login" />
            <FormFooter
              paragraph="Don't have an account? "
              linkName="Signup"
              linkUrl="/Signup"
            />
          </form>
        </div>
      </div>
    </>
  );
}
