export const Transaccion = () => {
  return (
    <div className="xl:flex">
      <article className="mr-3 bg-LightGrayishBlue w-[300px] md:w-[450px] h-[80px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div className="bg-LimeGreen h-1 mb-8"></div>
        <div className="flex justify-between px-6">
          <div className="flex text-LimeGreen">
            <div>
              <ion-icon name="caret-up-outline"></ion-icon>
            </div>
            <p className="ml-3 font-semibold">Ingresos</p>
          </div>
          <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
            $ 150.000
          </p>
        </div>
      </article>
      <article className="mr-3 bg-LightGrayishBlue w-[300px] md:w-[450px] h-[80px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div className="bg-BrightRed h-1 mb-8"></div>
        <div className="flex justify-between px-6">
          <div className="flex text-BrightRed">
            <div>
              <ion-icon name="caret-down-outline"></ion-icon>
            </div>
            <p className="ml-3 font-semibold">Egresos</p>
          </div>
          <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
            $ 50.000
          </p>
        </div>
      </article>
    </div>
  );
};
