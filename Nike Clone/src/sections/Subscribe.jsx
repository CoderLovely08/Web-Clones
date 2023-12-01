import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-center items-center max-lg::flex-col gap-10 flex-wrap"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md">
        Sign Up form <span className="text-coral-red">Updates</span> &
        Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex flex-1 max-sm:flex-col gap-5 p-2.5 rounded-full shadow-md border border-slate-gray max-sm:border-none max-sm:shadow-none">
        <input
          type={"text"}
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={"Subscribe"} fullWidth={true} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
