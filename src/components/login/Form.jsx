export const Form = () => {
  return (
    <div className="bg-white xl:w-1/2 px-10 py-20 rounded-3xl border-2 border-VeryPaleBlue shadow-lg">
      <h1 className="text-5xl font-semibold">Bienvenido!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Por favor, ingresa tus datos.
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Correo</label>
          <input
            className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
            type="text"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Contraseña</label>
          <input
            className="w-full border-2 border-VeryPaleBlue rounded-xl p-4 mt-1 bg-transparent"
            type="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div className="mt-8 text-center">
          <button className=" font-medium text-base text-LimeGreen">
            ¿Olvidaste la contraseña?
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-LimeGreen text-white text-lg font-bold">
            <a href="../../app.html">Ingresar</a>
          </button>
        </div>
        <div className="mt-8 justify-center items-center flex">
          <p className="font-medium text-base">¿No tienes cuenta?</p>
          <button className="text-LimeGreen text-base font-medium ml-4">
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
};
