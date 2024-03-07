import { Formik, Form } from "formik";

export const ModalIngreso = ({ estado, cambiarEstado }) => {
  if (estado) {
    return (
      <div className="flex fixed w-full h-full top-0 left-0 bg-background items-center justify-center">
        <Formik
          initialValues={{
            titulo: "",
            monto: "",
            categoria: "",
            fecha: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            cambiarEstado(false);
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-between bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[335px] md:w-[600px] h-[500px] rounded-xl relative shadow-md p-10">
                <div className="flex justify-between border-b pb-1 text-LimeGreen border-b-LimeGreen">
                  <h1 className="font-semibold">INGRESO</h1>
                  <div
                    onClick={() => cambiarEstado(false)}
                    className="flex cursor-pointer rounded-md items-center text-[25px] justify-center bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[30px] h-[30px] hover:brightness-95"
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                      <ion-icon name="text-outline"></ion-icon>
                    </div>
                    <input
                      name="titulo"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="text"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                    <input
                      name="monto"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="number"
                      placeholder="Monto"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <input
                      name="categoria"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="text"
                      placeholder="categoria"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-LimeGreen w-[35px] flex justify-center items-center">
                      <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <input
                      name="fecha"
                      onChange={handleChange}
                      className="w-full focus:outline-none rounded-md dark:text-white p-4 mt-1 bg-transparent"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white font-medium mt-8 text-center cursor-pointer hover:scale-[1.03] bg-LimeGreen px-4 py-2 rounded-full"
                >
                  Guardar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  return null;
};

export const ModalEgreso = ({ estado, cambiarEstado }) => {
  if (estado) {
    return (
      <div className="flex fixed w-full h-full top-0 left-0 bg-background items-center justify-center">
        <Formik
          initialValues={{
            titulo: "",
            monto: "",
            categoria: "",
            fecha: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            cambiarEstado(false);
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-between bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[335px] md:w-[600px] h-[500px] rounded-xl relative shadow-md p-10">
                <div className="flex justify-between border-b pb-1 text-BrightRed border-b-BrightRed">
                  <h1 className="font-semibold">EGRESO</h1>
                  <div
                    onClick={() => cambiarEstado(false)}
                    className="flex cursor-pointer rounded-md items-center text-[25px] justify-center bg-VeryPaleBlue dark:bg-VeryDarkBlue w-[30px] h-[30px] hover:brightness-95"
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-BrightRed w-[35px] flex justify-center items-center">
                      <ion-icon name="text-outline"></ion-icon>
                    </div>
                    <input
                      name="titulo"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="text"
                      placeholder="Titulo"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-BrightRed w-[35px] flex justify-center items-center">
                      <ion-icon name="arrow-up-outline"></ion-icon>
                    </div>
                    <input
                      name="monto"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="number"
                      placeholder="Monto"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-BrightRed w-[35px] flex justify-center items-center">
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <input
                      name="categoria"
                      onChange={handleChange}
                      className="w-full focus:outline-none dark:text-white rounded-md p-4 mt-1 bg-transparent"
                      type="text"
                      placeholder="categoria"
                    />
                  </div>
                  <div className="flex border-b bg-VeryPaleBlue dark:bg-VeryDarkBlue hover:brightness-95">
                    <div className="text-BrightRed w-[35px] flex justify-center items-center">
                      <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <input
                      name="fecha"
                      onChange={handleChange}
                      className="w-full focus:outline-none rounded-md dark:text-white p-4 mt-1 bg-transparent"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white font-medium mt-8 text-center cursor-pointer hover:scale-[1.03] bg-BrightRed px-4 py-2 rounded-full"
                >
                  Guardar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
  return null;
};
