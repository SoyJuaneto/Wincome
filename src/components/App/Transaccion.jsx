import { useState } from "react";
import { MovementList } from "./MovementList";
import { Movement } from "./Movement";

export const Transaccion = () => {
  //ESTE USE STATE ES UN ARREGLO PROVICIONAL CON DATOS QUEMADOS MIENTRAS CREAN LA BASE DE DATOS

  const [ingresos, setIngresos] = useState([
    {
      id: 1,
      title: "Salario",
      value: 150000,
    },
    {
      id: 2,
      title: "Regalo Navidad",
      value: 20000,
    },
    {
      id: 3,
      title: "Venta de algo",
      value: 15000,
    },
    {
      id: 4,
      title: "Prueba",
      value: 65000,
    },
  ]);

  const handleDelete = (id) => {
    const updateList = ingresos.filter((movement) => movement.id !== id);
    setIngresos(updateList);
  };

  const total = () => {
    var x = 0;
    ingresos.map((ingreso) => {
      x += ingreso.value;
    });
    return x.toLocaleString();
  };

  return (
    <div className="xl:flex">
      <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
        <div className="bg-LimeGreen h-1 mb-8"></div>
        <div className="flex justify-between px-6 mb-3">
          <div className="flex text-LimeGreen ">
            <div className="text-[20px]">
              <ion-icon name="caret-up-outline"></ion-icon>
            </div>
            <p className="ml-3 font-semibold">INGRESOS</p>
          </div>
          <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
            {"$ " + total() + " COP"}
          </p>
        </div>
        <hr className="mx-6 " />
        <MovementList movements={ingresos} handleDelete={handleDelete} />
      </article>

      <article className="mx-3 bg-LightGrayishBlue w-[300px] md:w-[450px] mb-7 rounded-[5px] overflow-hidden dark:bg-DarkDesaturatedBlue ">
        <div className="bg-BrightRed h-1 mb-8"></div>
        <div className="flex justify-between px-6 mb-3">
          <div className="flex text-BrightRed">
            <div className="text-[20px]">
              <ion-icon name="caret-up-outline"></ion-icon>
            </div>
            <p className="ml-3 font-semibold">EGRESOS</p>
          </div>
          <p className="font-semibold text-VeryDarkBlue dark:text-VeryPaleBlue">
            {"$ " + total() + " COP"}
          </p>
        </div>
        <hr className="mx-6" />
        <MovementList movements={ingresos} handleDelete={handleDelete} />
      </article>
    </div>
  );
};
