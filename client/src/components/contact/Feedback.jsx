import  { useEffect } from "react";
import { Formik,  Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Feedback() {
  //AOS ANIMATION CODER
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const initialValues = {
    // const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    contactType: "Enquiring",
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

  //headling endpoint
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/84c1ead0-16ca-11ee-9e42-f75d394a54ad";

  //headling submit funtion

  const onSubmit = async (formData, { resetForm, setStatus }) => {
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("number", formData.number);
      form.append("contactType", formData.contactType);

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

        // Display the error message the it was unable to send.
        // if (response.status !== 200) {
        //   Swal.fire(
        //     "Error",
        //     "Error submitting from. Please try again.",
        //     "error"
        //   );
        // }
      }
    } catch (error) {
      setStatus("error");
      // Display the error message only if there is an actual error.
      if (error) {
        Swal.fire("Error", "An error occurred. Please try again.", "error");
      }
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  // };
  return (
    <div className="container mx-auto mt-10 flex">
      {/* Office Address Map (Placeholder) */}
      <div className="m-4 w-full md:w-1/2 md:ml-4 md:mt-0">
        {/* Insert your map component here */}
        <div className=" bg-white shadow-2xl" data-aos="fade-left">
          <h5 className="text-center mb-4 p-6 text-xl font-semibold text-blue-gray-900">
            Find us on Map
          </h5>
          <div className="rounded-lg">
            <iframe
              title="Office Map"
              className="w-full md:h-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-75.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzIzLjciTiA3NcKwMzEnMzIuOCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* Feedback Form */}
      <div className="m-4 w-full md:w-1/2 md:ml-4 md:mt-0" data-aos="fade-up">
        <div className="text-center">
          <div
            className="h-60 rounded-xl bg-white text-gray-700 shadow-2xl"
            data-aos="fade-up"
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {/* to use the status report add STATUS to isSubmitting */}
              {({ isSubmitting }) => (
                <form>
                  <p className="text-center p-6 mb-4 text-xl font-semibold ">
                    Feedback & Queries
                  </p>
                  <div className="mb-4" data-aos="fade-up">
                    <label className="text-sm">Select Issue*</label>
                    <br />
                    <select className="input-field">
                      <option value="Feedback">-- Select Your Query --</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Feedback">General Related Queries</option>
                      <option value="Feedback">Payment Related Issue</option>
                      <option value="Feedback">Hiring Related Queries</option>
                      <option value="Feedback">Advertise With Us</option>
                    </select>
                  </div>
                  <div className="mb-4" data-aos="fade-up">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="mb-4" data-aos="fade-up">
                    <Field
                      name="number"
                      type="number"
                      id="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="error"
                  />
                  <div className="mb-4" data-aos="fade-up">
                    <label className="text-sm"></label>

                    <Field
                      name="message"
                      as="textarea"
                      id="message"
                      maxLength="800"
                      placeholder="Max Allowed Characters: 800"
                    ></Field>
                  </div>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                  <button
                    className="bg-pink-600 px-2 py-3 text-xl rounded-lg text-white hover:bg-indigo-500 "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <br />
                  <br />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
