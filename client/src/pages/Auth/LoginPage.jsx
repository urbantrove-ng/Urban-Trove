import { useState } from "react";
import Header from "../../components/Account/FormHeader";
import FormExtra from "../../components/Account/FormExtra";
import { loginFields } from "../../constant/formFields";
import FormAction from "../../components/Account/FormAction";
import Input from "../../components/Account/input";
import Footer from "../../components/Account/FormFooter";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {};

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
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
        <Footer
          paragraph="Don't have an account? "
          linkName="Signup"
          linkUrl="/Signup"
        />
      </form>
    </>
  );
}
