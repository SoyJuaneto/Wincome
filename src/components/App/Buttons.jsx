export const Buttons = () => {
  return (
    <div className="absolute max-w-[1440px] flex flex-wrap gap-[30px] place-content-center top-[265px] left-0 right-0 mx-auto">
      <div className="w-[52px] h-[52px] bg-LimeGreen text-[40px] rounded-full cursor-pointer hover:scale-[1.03] text-white text-center">
        <ion-icon name="add-circle-outline"></ion-icon>
      </div>
      <div className="w-[52px] h-[52px] hover:scale-[1.03] bg-amber-400 text-[40px] rounded-full cursor-pointer  text-white text-center">
        <ion-icon name="sync-circle-outline"></ion-icon>
      </div>
      <div className="w-[52px] h-[52px] bg-BrightRed text-[40px] rounded-full cursor-pointer hover:scale-[1.03] text-white text-center">
        <ion-icon name="remove-circle-outline"></ion-icon>
      </div>
    </div>
  );
};
