import React from "react";
import banner from '../../public/Banner.png'


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-3xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500"> new everyday!!!</span>
            </h1>
            <p className="text-xl text-left md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              ad sint tempore nobis quidem, est beatae velit voluptatem placeat
              cupiditate magnam asperiores. Quis quibusdam suscipit dicta
              asperiores molestias deleniti vel. Sapiente, incidunt et.
            </p>
            {/* mail */}
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden -mt-10">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary -mt-6">Secondary</button>
        </div>

        <div className="order-1 md:order-2 w-full md:w-1/2">
            <img src={banner} className=""></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
