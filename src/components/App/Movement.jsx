export const Movement = ({ movement, handleDelete }) => {
  const { id, title, value } = movement;

  return (
    <div className="flex bg-LightGrayishBlue dark:bg-DarkDesaturatedBlue dark:text-VeryPaleBlue  items-center justify-between p-5 pl-7 hover:brightness-95 hover:dark:brightness-125">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex">
        <p>{"$ " + value.toLocaleString()}</p>
        <div
          onClick={() => handleDelete(id)}
          className="ml-2 flex text-[20px] justify-center hover:border hover:border-VeryDarkBlue dark:hover:border-VeryPaleBlue items-center rounded-full cursor-pointer"
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};
