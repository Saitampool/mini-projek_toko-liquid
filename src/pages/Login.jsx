/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        axios
        .post("https://reqres.in/api/login", {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
        })
        .then((response) => {
            if (response?.data?.token) {
            Swal.fire({
                icon: "success",
                title: "Login sukses!",
                confirmButtonText: "OK",
            }).then((res) => {
                if (res.isConfirmed) {
                Cookies.set("email", email);
                Cookies.set("token", response?.data?.token);
                navigate("/");
                }
            });
            }
            Cookies.set("email", email);
            Cookies.set("token", response?.data?.token);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <section className="flex justify-center items-center w-screen h-screen bg-[#F0F5F9]">
        <form onSubmit={handleLogin} className="flex flex-col gap-y-3">
            <h1 className='text-center text-3xl font-bold'>Sign In</h1>
            <label className='text-sm'>Email</label>
            <input
                placeholder='email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            required
            />
            <label className='text-sm'>Password</label>
            <input
            type='password'
            placeholder='password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            required
            />
            <div className="h-10 mt-5">
            <button
                type="submit"
                className="w-full h-full bg-[#1E2022] text-white border-none focus:outline-none rounded-sm flex items-center justify-center"
                >
                Login
            </button>
            </div>
            {/* <p>Don&#39;t have an account?
                <span
                className='cursor-pointer hover:text-[#C9D6DF] text-[#52616B]'
                onClick={() => {
                    navigate("/auth/register")
                }}>Sign up</span>
            </p> */}
        </form>
    </section>
    )
}

export default Login