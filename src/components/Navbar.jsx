/* eslint-disable no-unused-vars */
import React, {useState, useRef } from 'react'
import {  useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Cookies from "js-cookie";
import Swal from "sweetalert2"
import { UserCircleIcon, ShoppingBagIcon} from "@heroicons/react/24/outline"
import logo from "../assets/logo.png"

function Navbar() {

    const navigate = useNavigate();
    const username = Cookies.get("email");
    const handleLogout = () => {
        Swal.fire({
          text: "Are you sure want to log out?",
          title: "Logout",
          confirmButtonText: "OK",
        }).then((res) => {
          if (res.isConfirmed) {
            Cookies.remove("email");
            Cookies.remove("token");
            navigate("/auth/login");
          }
        });
    };

    const handleLogin = () => {
        Swal.fire({
          text: "Are you sure want to log in?",
          title: "Login",
          confirmButtonText: "OK",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/auth/login");
          }
        });
    };

    let [isOpen,setIsOpen]=useState(false);
    const mobileMenuRef = useRef();
    
  return (
    <nav className={`bg-[#1E2022] sticky md:top-0 p-4 z-40`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center" id='container'>
          <a onClick={() => {navigate('/');window.scrollTo(0, 0);}} className="cursor-pointer text-white text-xl md:text-2xl font-bold"><img src={logo} alt="logo" className="float-left pr-3" width={40} /> Mas Liquid</a>
          <div className="space-x-5 hidden md:block md:w-auto">
              <a  className="cursor-pointer text-[#F0F5F9] hover:text-blue-500 p-1 rounded-lg"
                onClick={() => {navigate('/');window.scrollTo(0, 0);}}
              >Beranda</a>
              <a className="cursor-pointer text-[#F0F5F9] hover:text-blue-500 p-1 rounded-lg"
                onClick={() => {navigate('/produk');window.scrollTo(0, 0);}}
              >Produk</a>
              <a className="text-[#F0F5F9] cursor-pointer hover:text-blue-500 p-1 rounded-lg"
              onClick={() => {navigate('/about');window.scrollTo(0, 0);}}
              >Tentang Kami</a>
              <a className="text-[#F0F5F9] cursor-pointer hover:text-blue-500 p-1 rounded-lg"
                onClick={() => {navigate('/support');window.scrollTo(0, 0);}}
              >CS</a>
          </div>
          <div className="flex items-center">
            <a className="cursor-pointer text-[#F0F5F9] flex items-center mr-4 hover:text-blue-500"
              onClick={() => {
                navigate('/cart')
              }}
            >
              <ShoppingBagIcon width={25} height={25} />
            </a>
            {
              username ? (
                <a
                  className="text-[#F0F5F9] flex items-center cursor-pointer hover:text-blue-500 p-1"
                  onClick={() => handleLogout()}
                  >
                    <UserCircleIcon width={25} height={25}/>
                    <span className='hidden md:block'>{username}</span> 
                </a>
              ) : (
                <a
                  className="text-[#F0F5F9] px-3 flex items-center outline outline-1 rounded-md cursor-pointer hover:text-blue-500 p-1"
                  onClick={() => handleLogin()}
                >Login
                </a>
              )
            }
            <button onClick={()=>setIsOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex ml-2 items-center p-1 w-10 h-10 justify-center text-sm hover:text-blue-500 text-gray-500 rounded-lg md:hidden dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
          </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu"  ref={mobileMenuRef} >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  onClick={() => {navigate('/');window.scrollTo(0, 0);setIsOpen(!isOpen)}}
                  className="cursor-pointer hover:bg-gray-700 text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Beranda
                </a>
                <a
                  onClick={() => {navigate('/produk');window.scrollTo(0, 0);setIsOpen(!isOpen)}}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Produk
                </a>
                <a
                  onClick={() => {navigate('/about');window.scrollTo(0, 0);setIsOpen(!isOpen)}}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tentang Kami
                </a>
                <a
                  onClick={() => {navigate('/support');window.scrollTo(0, 0);setIsOpen(!isOpen)}}
                  className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CS
                </a>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  )
}

export default Navbar