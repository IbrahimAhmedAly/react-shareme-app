import React from "react";
import * as Loader from "react-loader-spinner";

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Loader.MutatingDots
        color="#00BFFF"
        height="100"
        width="100"
        secondaryColor="#00BFFF"
        radius="12.5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;
