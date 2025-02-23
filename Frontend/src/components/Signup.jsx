import React from "react";
import Login from "./Login";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Signup Successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        // Redirect to home after successful signup
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Signup Error: " + err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px] border shadow-md p-6 rounded-md relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Signup</h3>

          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-90 px-3 border py-1 rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">
                Please enter your fullname
              </span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-90 px-3 border py-1 rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                Please enter your email
              </span>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-90 px-3 border py-1 rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                Please enter your password
              </span>
            )}
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 cursor-pointer hover:bg-pink-400 duration-200"
            >
              Signup
            </button>
            <div className="text-xl">
              Have an account?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
        {/* Render the Login modal outside the form */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;
