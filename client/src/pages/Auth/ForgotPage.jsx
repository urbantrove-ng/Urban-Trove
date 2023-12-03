import { useState } from "react";
import { forgotFields } from "../../constant/formFields";
import FormAction from "../../components/Account/FormAction";
import Input from "../../components/Account/input";
import FormHeader from "../../components/Account/FormHeader";
import FormFooter from "../../components/Account/FormFooter";

const fields = forgotFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function forgetPass() {
  const [forgetPassState, setForgetPassState] = useState(fieldsState);

  const handleChange = (e) => {
    setForgetPassState({ ...forgetPassState, [e.target.id]: e.target.value });
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
          <FormHeader heading=" Uncover Urban Gems with Urban Trove" />
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
            <FormAction handleSubmit={handleSubmit} text="Reset Password" />

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
