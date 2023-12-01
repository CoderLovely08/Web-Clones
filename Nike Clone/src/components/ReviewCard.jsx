import React from "react";
import { star } from "../assets/icons";

export const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="customer" className="rounded-full w-28 h-auto" />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2 p-2">
        <img src={star} className="w-6 h-auto object-contain m-0" />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold ">
        {customerName}
      </h3>
    </div>
  );
};
