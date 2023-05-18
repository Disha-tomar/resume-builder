import MenuItem from "./MenuItem";

import menuLeftData from "@/data/menuLeft";

export default function MenuListLeft() {
  console.log(menuLeftData);

  return (
    <>
      <ul className="flex flex-col gap-5 text-cyan-50 ">
        {menuLeftData.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer text-[10px]">
              <MenuItem title={item.title}>
                <item.icon />
              </MenuItem>
            </li>
          );
        })}
      </ul>
    </>
  );
}
