import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_28hsdth", "template_wnrzz5f", form.current, {
        publicKey: "vN_GM10Rtb028YaZn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const handleButtonClick = () => {
    window.location.href = "mailto:admin@urbantrov.com.ng";
  };
  return (
    <div className=" p-10 bg-[#09090b] text-white font-raleway">
      <div className="lg:flex lg:justify-around grid grid-cols-1 gap-16">
        <div className="relative">
          <h4 className="text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]">
            Quick Links
          </h4>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to=""
          >
            About
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to="/products"
          >
            FAQS
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to="/services"
          >
            Refund policy
          </NavLink>

          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to="/contact"
          >
            Contact us
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to=""
          >
            Sell on urban trove
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to=""
          >
            terms and conditions
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to=""
          >
            Privacy policy
          </NavLink>
          <NavLink
            className="grid text-footer no-underline text-[0.8rem] font-[400] uppercase mb-[0.4rem] hover:text-white"
            to=""
          >
            Report fraud
          </NavLink>
        </div>
        <div className="relative">
          <h4 className="text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]">
            Enquiries
          </h4>
          <p className="mb-[0.5rem] text-footer">
            Ask us any question you might have
          </p>
          <form
            action=""
            className=" flex flex-col gap-2  relative"
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Email</label>
            <input
              type="email"
              name="to_email"
              className="bg-transparent rounded-[5px] pl-4"
            />
            <textarea
              className="bg-transparent border-[1px] border-footer text-white p-5 rounded-[5px] focus:outline-none"
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="I want ..."
            ></textarea>
            <button
              type="submit"
              className="absolute lg:right-4 right-8 bottom-4 cursor-pointer hover:text-primaryTwo"
            >
              Send &rarr;
            </button>
          </form>
          {messageSent && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
        </div>
        <div className="relative">
          <h4 className="text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]">
            Get In Touch
          </h4>
          <div className=" flex flex-col gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="  w-[24px] h-[24px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <svg
              onClick={handleButtonClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="  w-[24px] h-[24px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/urbantrov.ng?igsh=MW4wanFvaHRxODk0aQ=="
              className="text-[0.95rem] mb-[0.7rem] text-footer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className=" text-white fill-white w-[24px] h-[24px]"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>{" "}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className=" text-white fill-white w-[24px] h-[24px]"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright &copy; 2024 Urban Trove | All rights reserved.</p>
        <p>
          Designed by{" "}
          <span>
            <NavLink
              className="no-underline bg-gradient-to-r from-primaryTwo to-primaryOne bg-clip-text text-transparent hover:text-white"
              to="/"
            >
              Urban Trove
            </NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}
