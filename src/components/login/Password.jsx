import { Link } from "react-router-dom";

export const Password = () => {
  return (
    <div className="bg-white dark:bg-VeryDarkBlueTop xl:w-1/2 px-10 py-20 rounded-3xl border-2 dark:border-VeryDarkBlueTop border-VeryPaleBlue shadow-lg">
      <h1 className="text-5xl font-semibold dark:text-white">
        Cambia tu contraseña
      </h1>
      <p className="font-medium text-lg text-gray-500 dark:text-gray-400 mt-4">
        ¡Vamos a crear tu cuenta!
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium dark:text-white">Correo</label>
          <input
            className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
            type="text"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label className="text-lg font-medium dark:text-white">
            Contraseña anterior
          </label>
          <input
            className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
            type="text"
            placeholder="Ingresa tu contraseña anterior"
          />
        </div>
        <div>
          <label className="text-lg font-medium dark:text-white">
            Contraseña nueva
          </label>
          <input
            className="w-full border-2 border-VeryPaleBlue dark:border-VeryDarkBlueTop rounded-xl p-4 mt-1 bg-transparent"
            type="password"
            placeholder="Ingresa tu contraseña nueva"
          />
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <Link
            to="/"
            className="text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-LimeGreen text-white text-lg font-bold"
          >
            Cambiar contraseña
          </Link>
        </div>
        <div className="mt-8 justify-center items-center flex">
          <p className="font-medium text-base dark:text-white">
            ¿Quieres volverlo a intentar?
          </p>
          <Link to="/" className="text-LimeGreen text-base font-medium ml-4">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
