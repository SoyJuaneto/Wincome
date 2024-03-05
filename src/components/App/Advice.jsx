import React from "react";

const Advice = () => {
  return (
    <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
      <div className="bg-purple-500 h-1 mb-4"></div>
      <div className="px-6 mb-4">
        <p className="text-center font-semibold text-[16px] text-purple-500 mb-3">
          CONSEJO
        </p>
        <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue mb-1">
          Gasta correctamente tu dinero:
        </p>
        <p className="text-VeryDarkBlue dark:text-VeryPaleBlue">
          Distribuye tu dinero correctamente, 50% en necesidades basicas, 30% en
          gustos o actividades de interes y el 20% restante ahorralo!
        </p>
      </div>
    </article>
  );
};

export default Advice;
