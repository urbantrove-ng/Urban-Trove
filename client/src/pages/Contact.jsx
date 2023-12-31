import React, { useEffect, useState } from "react";
import Icons from "../components/contact/Icons";
import Card from "../components/contact/Card";
import Feedback from "../components/contact/Feedback";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  //AOS ANIMATION CODER
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    message: "",
    contactType: "Enquiring",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <>
      <div className="relative block" style={{ height: "400px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          data-aos="fade-up"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
      </div>
      <section className="relative py-16 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <div className="mt-5 bg-gray-200">
                      <Card />
                      <Icons />
                      <Feedback />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
