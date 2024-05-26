/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/authContext/Index";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validasi password dan confirm password
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setIsRegistering(true);
    setErrorMessage("");

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      Swal.fire("Success", "Your account has been created!", "success");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setIsRegistering(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowPassword1 = (e) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <section className="flex justify-center items-center w-screen h-screen bg-[#F0F5F9]">
        <form className="flex flex-col gap-y-3 " onSubmit={onSubmit}>
          <h1 className="text-center text-3xl font-bold">Create an account</h1>
          {/* <label className='text-sm mt-2'>Full Name</label>
            <input
                placeholder='Type your name here...'
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none "
            /> */}
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="Type your email here..."
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none "
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
              placeholder="Type your password here..."
              disabled={isRegistering}
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            />
          </div>
          <div className="relative">
            <label className="text-sm">Confirm Password</label>
            <button
              onClick={handleShowPassword1}
              className="absolute right-0 mr-3 mt-8 text-gray-700"
            >
              {showPassword1 == false ? (
                <VisibilityOffIcon fontSize="medium" />
              ) : (
                <VisibilityIcon />
              )}
            </button>
            <input
              type={`${showPassword1 == false ? `password` : `text`}`}
              placeholder="Confirm your password here..."
              disabled={isRegistering}
              required
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              className="p-3 w-full h-10 rounded-md bg-white border border-[#1E2022] focus:outline-none"
            />
          </div>
          {errorMessage && (
            <span className="text-red-600 font-medium text-sm">
              {errorMessage}
            </span>
          )}
          <div className="h-10 mt-4">
            <button
              type="submit"
              disabled={isRegistering}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isRegistering
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#1E2022] hover:bg-gray-700 hover:shadow-xl transition duration-300"
              }`}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
          <p className="text-center">
            Already have an account?
            <span
              className="cursor-pointer hover:text-[#C9D6DF] text-[#52616B]"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Sign in
            </span>
          </p>
        </form>
      </section>
    </>
  );
}

export default Register;
