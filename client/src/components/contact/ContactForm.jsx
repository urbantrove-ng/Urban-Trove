import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  //AOS ANIMATION CODER
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name must be at least 4 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/84c1ead0-16ca-11ee-9e42-f75d394a54ad";

  const onSubmit = async (formData, { resetForm, setStatus }) => {
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
      });

      // Adding a popup notification upon form submittion
      // You can find more information on customization in the SweetAlert2 documentation: https://sweetalert2.github.io/
      if (response.status === 200) {
        setStatus("success");
        resetForm({ values: "" });
        // Display the success message only if there is an actual success.
        Swal.fire(
          "Success",
          "Submission was successful, expect our respond soon!",
          "success"
        );
      } else {
        Swal.fire(
          "Error",
          "Error submitting from. Please check your internet conection and try again.",
          "error"
        );
        // console.error("Submission failed");
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      // Display the error message only if there is an actual error.
      if (error) {
        Swal.fire("Error", "An error occurred. Please try again.", "error");
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* to use the status report add STATUS to isSubmitting */}
      {({ isSubmitting }) => (
        <Form data-aos="fade-up">
          {/*  Adding a status report on the form that displays report on the form */}

          {/* {status === "success" && (
            <div className="success-message">Submission successful!</div>
          )}
          {status === "error" && (
            <div className="error-message">
              Submission failed. Please try again.
            </div>
          )} */}
          <div>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Input your name"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Input a valid email"
            />
            <ErrorMessage name="email" component="div" className="error" />

            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Drop your message here"
            />
            <ErrorMessage name="message" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
