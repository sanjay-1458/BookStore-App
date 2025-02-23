import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-90 px-3 border py-1 rounded-md outline-none"
                {...register("email", { required: true })}
              ></input>
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
              ></input>
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
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
