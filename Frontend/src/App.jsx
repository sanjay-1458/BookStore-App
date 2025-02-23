import React from "react";
import Home from "./home/home";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      {/* <Home/>   
      <Course/>  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
