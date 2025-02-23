import React from "react";

function Cards(props) {
  return (
    <>
      <div className="mt-2 my-3 p-2">
        <div className="card bg-base-100 w-full shadow-xl hover:scale-105 p-6 duration-200">
          <figure>
            <img src={props.item.image} alt="FreeBooks" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.item.name}
              <div className="badge badge-secondary">{props.item.category}</div>
            </h2>
            <p>{props.item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${props.item.price}</div>
              <div className="badge  p-3 badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
