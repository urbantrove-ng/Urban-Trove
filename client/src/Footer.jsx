import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className='py-[4rem] px-[15rem] bg-[#09090b] text-white font-raleway'>
      <div className="flex justify-between mb-[4rem]">
        <div className="relative">
            <h4 className='text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]'>Quick Links</h4>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">About</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="/products">Products</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="/services">Services</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Cart</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Contact us</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Sell on urban trove</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Checkout</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Privacy policy</Link>
            <Link className="grid text-footer no-underline text-[0.8rem] font-[200] uppercase mb-[0.4rem] hover:text-white" to="">Report fraud</Link> 
        </div>
        <div className="relative">
            <h4 className='text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]'>Enquiries</h4>
            <p className='mb-[0.5rem] text-footer'>Ask us any question you might have</p>
            <form action="">
            <textarea className='bg-[#09090b] border-[1px] border-footer text-white p-5 rounded-[5px] focus:outline-none' name="" id="" cols="30" rows="5"placeholder='I want ...'></textarea>
            <button className='absolute right-[5%] bottom-[15%] border-0 bg-[#09090b] text-white p-[0.3rem] rounded-[5px] cursor-pointer hover:text-primaryTwo'>Send &rarr;</button>
            </form>
        </div>
        <div className="relative">
            <h4 className='text-[1.5rem] uppercase font-[500] border-b-[0.8px] border-footer mb-[0.8rem]'>Get In Touch</h4>
            <h6 className='text-[0.95rem] mb-[0.7rem] text-footer'>Phone: </h6>
            <h6 className='text-[0.95rem] mb-[0.7rem] text-footer'>Email: </h6>
            <h6 className='text-[0.95rem] mb-[0.7rem] text-footer'>Urban Trove</h6>
            <h6 className='text-[0.95rem] mb-[0.7rem] text-footer'>Address Goes Here</h6>
        </div>
      </div>
      <div className="text-center">
        <p>Copyright &copy; 2024 Urban Trove | All rights reserved.</p>
        <p>Designed by <span><Link className="no-underline bg-gradient-to-r from-primaryTwo to-primaryOne bg-clip-text text-transparent hover:text-white" to="/">Urban Trove</Link></span></p>
      </div>
    </div>
  )
}
