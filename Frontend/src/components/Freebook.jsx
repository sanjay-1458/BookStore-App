import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => {
    return data.category === "Free";
  });



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pd-2">Free Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit
            repellendus aliquid culpa veniam, quibusdam magnam rem aspernatur
            recusandae in fugiat odio, libero, consequatur minus.
          </p>
        </div>
        <div>
          <Slider {...settings}>
              {filterData.map((data)=>{
                return <Cards key={data.id} item={data}/>
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
