import MenuListLeft from "./MenuList";

export default function MenuBarLeft() {
  return (
    <div className="w-[24%] bg-gray-600 h-full p-4">
      <div className="h-full flex flex-col items-center bg-gray-800 shadow-lg shadow-indigo-500/40 w-16 relative z-10 rounded-3xl">
        <div>-</div>
        <div>
          <MenuListLeft></MenuListLeft>
        </div>
        <div>-</div>
      </div>
    </div>
  );
}
