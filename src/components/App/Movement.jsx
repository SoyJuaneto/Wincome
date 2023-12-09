export const Movement = ({ movement, handleDelete }) => {
  const { id, title, value } = movement;

  return (
    <div className="flex bg-LightGrayishBlue dark:bg-DarkDesaturatedBlue dark:text-VeryPaleBlue  items-center justify-between p-4 pl-7 hover:brightness-95 hover:dark:brightness-125">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex">
        <p>{"$ " + value.toLocaleString()}</p>
        <div
          onClick={() => handleDelete(id)}
          className="ml-3 text-[20px]  rounded-full cursor-pointer"
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};
