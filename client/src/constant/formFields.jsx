const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "string",
    name: "email",
    type: "string",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "string",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

const signupFields = [
  {
    labelText: "Email address",
    labelFor: "emailid",
    id: "String",
    name: "email",
    type: "String",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "String",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  // {
  //   labelText: "Confirm Password",
  //   labelFor: "confirm-password",
  //   id: "confirm-password",
  //   name: "confirm-password",
  //   type: "string",
  //   autoComplete: "confirm-password",
  //   isRequired: true,
  //   placeholder: "Confirm Password",
  // },
];

const forgotFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "string",
    name: "email",
    type: "string",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
];

export { loginFields, signupFields, forgotFields };
