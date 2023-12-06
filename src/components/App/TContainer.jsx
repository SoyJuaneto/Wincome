import { Transaccion } from "./Transaccion";

export const TContainer = () => {
  return (
    <section className="absolute max-w-[1440px] flex flex-wrap gap-[30px] place-content-center top-[360px] left-0 right-0 mx-auto">
      <Transaccion />
    </section>
  );
};
