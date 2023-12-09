import { useState, useEffect } from "react";

export const Header = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="bg-VeryPaleBlue dark:bg-VeryDarkBlueTop h-[290px] rounded-b-[20px] py-8 px-6 mb-[1020px] md:mb-[465px] xl:mb-[200px]">
      <div className="flex justify-between mb-6">
        <h1 className="text-VeryDarkBlue dark:text-VeryPaleBlue font-bold text-2xl">
          WINCOME
        </h1>
        <div className="flex justify-between">
          <label
            htmlFor="darkmode"
            className=" w-12 mt-[3px] bg-Toggle h-6 rounded-full cursor-pointer p-[3px] relative overflow-hidden"
          >
            <input
              onClick={handleClick}
              id="darkmode"
              type="checkbox"
              className="peer sr-only"
            ></input>
            <div className="peer-checked:bg-ToggleGradient w-full h-full absolute top-0 left-0 "></div>
            <div className="w-[18px] h-[18px] rounded-full bg-LightGrayishBlue peer-checked:translate-x-[24px] transition-all"></div>
          </label>
          <a
            className="rounded-full pt-[2px] px-4 ml-4 text-center font-bold bg-VeryDarkBlue dark:bg-VeryPaleBlue text-VeryPaleBlue dark:text-VeryDarkBlue"
            href="../../index.html"
          >
            Cerrar Sesión
          </a>
        </div>
      </div>
      <hr className=" mb-6 " />
      <div className="text-center">
        <h1 className="mt-[75px] text-VeryDarkBlue dark:text-VeryPaleBlue font-semibold text-2xl">
          SALDO TOTAL
        </h1>
        <p className="text-VeryDarkBlue dark:text-VeryPaleBlue font-bold text-3xl">
          $ 100.0000.00 COP
        </p>
      </div>
    </header>
  );
};
