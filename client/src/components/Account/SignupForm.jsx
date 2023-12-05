import { useState } from "react";
import { signupFields } from "../../constant/formFields";
import FormAction from "./FormAction";
import Input from "./input";
import axios from "axios";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post("http://localhost:8080/api/v1/auth/signup", fields)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true);
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={signupState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormAction handleSubmit={handleSubmit} text="Signup" />
    </form>
  );
}
