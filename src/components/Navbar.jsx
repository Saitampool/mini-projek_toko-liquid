/* eslint-disable no-unused-vars */
import React from 'react'
import {  useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2"
import { UserCircleIcon, ShoppingBagIcon} from "@heroicons/react/24/outline"
import logo from "../../public/logo.png"

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
    
  return (
    <nav className="bg-[#1E2022] sticky top-0 p-4 z-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center" id='container'>
          <a className="cursor-pointer text-white text-2xl font-bold"><img src={logo} alt="logo" className="float-left pr-3" width={40} /> Mas Liquid</a>
          <div className="space-x-5">
              <a className="cursor-pointer text-[#F0F5F9] hover:text-blue-500 p-1 rounded-lg"
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
                    <UserCircleIcon width={25} height={25} />
                    {username}
                </a>
              ) : (
                <a
                  className="text-[#F0F5F9] px-3 flex items-center outline outline-1 rounded-md cursor-pointer hover:text-blue-500 p-1"
                  onClick={() => handleLogin()}
                >Login
                </a>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar