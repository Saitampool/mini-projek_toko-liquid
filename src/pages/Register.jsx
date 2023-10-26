/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();


  return (
    <section className="flex justify-center items-center w-screen h-screen bg-[#F0F5F9]">
        <form  className="flex flex-col gap-y-3 ">
            <h1 className='text-center text-3xl font-bold'>Create an account</h1>
            <label className='text-sm mt-2'>Full Name</label>
            <input
                placeholder='Type your name here...'
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none "
            />
            <label className='text-sm'>Email</label>
            <input
                placeholder='Type your email here...'
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none "
            />
            <label className='text-sm'>Password</label>
            <input
                placeholder='Type your password here...'
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            />
            <div className="h-10 mt-4">
            <button
                type="submit"
                className="w-full h-full bg-[#1E2022] text-white border-none focus:outline-none rounded-sm flex items-center justify-center"
                >
                Login
            </button>
            </div>
            <p>Already have an account?
                <span
                className='cursor-pointer hover:text-[#C9D6DF] text-[#52616B]'
                onClick={() => {
                    navigate("/auth/login")
                }}>Sign in</span>
            </p>
        </form>
    </section>
  )
}

export default Register