/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../firebase/auth";
import { useAuth } from "../contexts/authContext/Index";

function Login() {
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const handleLogin = (e) => {
  //     e.preventDefault();
  //     axios
  //     .post("https://reqres.in/api/login", {
  //         email: "eve.holt@reqres.in",
  //         password: "cityslicka",
  //     })
  //     .then((response) => {
  //         if (response?.data?.token) {
  //         Swal.fire({
  //             icon: "success",
  //             title: "Login sukses!",
  //             confirmButtonText: "OK",
  //         }).then((res) => {
  //             if (res.isConfirmed) {
  //             Cookies.set("email", email);
  //             Cookies.set("token", response?.data?.token);
  //             navigate("/");
  //             }
  //         });
  //         }
  //         Cookies.set("email", email);
  //         Cookies.set("token", response?.data?.token);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage("");
      try {
        await doSignInWithEmailAndPassword(email, password);
        Swal.fire("Success", "You have successfully signed in!", "success");
        navigate("/");
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
        console.log(errorMessage);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage("");
      try {
        await doSignInWithGoogle();
        Swal.fire(
          "Success",
          "You have successfully signed in with Google!",
          "success"
        );
        navigate("/");
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <section className="flex justify-center items-center w-screen h-screen bg-[#F0F5F9]">
        <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
          <h1 className="text-center text-3xl font-bold">Sign In</h1>
          <label className="text-sm">Email</label>
          <input
            placeholder="email..."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            required
          />
          <div className="relative">
            <label className="text-sm">Password</label>
            <button
              onClick={handleShowPassword}
              className="absolute right-0 mr-3 mt-8 text-gray-700"
            >
              {showPassword == false ? (
                <VisibilityOffIcon fontSize="medium" />
              ) : (
                <VisibilityIcon />
              )}
            </button>
            <input
              type={`${showPassword == false ? `password` : `text`}`}
              placeholder="password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
              required
            />
          </div>
          {errorMessage && (
            <span className="text-red-600 font-medium text-sm">
              {errorMessage}
            </span>
          )}
          <div className="h-10 mt-5">
            {/* <button
              type="submit"
              className="w-full h-full bg-[#1E2022] text-white border-none focus:outline-none rounded-sm flex items-center justify-center"
            >
              Login
            </button> */}
            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isSigningIn
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#1E2022] hover:bg-gray-700 hover:shadow-xl transition duration-300"
              }`}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </div>
          <p className="text-center">
            Don&#39;t have an account?
            <span
              className="cursor-pointer hover:text-[#C9D6DF] text-[#52616B]"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Sign up
            </span>
          </p>
          <div className="flex flex-row text-center w-full">
            <div className="border-b-2 mb-2.5 mr-2 w-full"></div>
            <div className="text-sm font-bold w-fit">OR</div>
            <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
          </div>
          <button
            disabled={isSigningIn}
            onClick={(e) => {
              onGoogleSignIn(e);
            }}
            className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
              isSigningIn
                ? "cursor-not-allowed"
                : "hover:bg-gray-100 transition duration-300 active:bg-gray-100"
            }`}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {isSigningIn ? "Signing In..." : "Continue with Google"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
