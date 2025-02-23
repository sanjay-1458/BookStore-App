import React from "react";
import { useForm } from "react-hook-form";

function ContactBody() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-9 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 border border-gray-300 rounded-md ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>

          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                Please enter your name
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                Please enter your email
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              placeholder="Type your message"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">
                Please enter your message
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactBody;
