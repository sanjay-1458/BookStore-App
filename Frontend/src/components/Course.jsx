import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        // Update state correctly:
        setBook(res.data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-2xl font-semibold md:text-3xl mt-28 items-center justify-center text-center">
            We're delighted to have you <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate mollitia unde totam aut molestias ratione aliquid soluta ut est minima, ad ipsam ab, velit illo quo vitae harum. Nostrum consectetur numquam provident magnam nihil temporibus nemo laborum deleniti facere vitae, excepturi earum eos!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-400 duration-300 mt-6 block mx-auto">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 m-10 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item._id || item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
