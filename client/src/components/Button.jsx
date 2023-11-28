import React from "react";

const Button = ({ iconURL, label }) => {
  return (
      <button className="flex items-center justify-center px-7 py-3 gap-2 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red shadow-xl rounded-full">
      {label}
      <img
        src={iconURL}
        alt="Arrour right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
