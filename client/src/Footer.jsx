import { NavLink } from "react-router-dom";

export default function Footer() {
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
          <form action="" className=" relative">
            <textarea
              className="bg-transparent border-[1px] border-footer text-white p-5 rounded-[5px] focus:outline-none"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="I want ..."
            ></textarea>
            <button className="absolute lg:right-4 right-8 bottom-4 cursor-pointer hover:text-primaryTwo">
              Send &rarr;
            </button>
          </form>
        </div>
        <div className="relative">
          <h4 className="text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]">
            Get In Touch
          </h4>
          <h6 className="text-[0.95rem] mb-[0.7rem] text-footer">Phone: </h6>
          <h6 className="text-[0.95rem] mb-[0.7rem] text-footer">Email: </h6>
          <h6 className="text-[0.95rem] mb-[0.7rem] text-footer">
            Urban Trove
          </h6>
          <h6 className="text-[0.95rem] mb-[0.7rem] text-footer">
            Address Goes Here
          </h6>
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
