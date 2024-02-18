import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(true);
  console.log(open)
  const items: string[] = [
    "Logo",
    "Taskbar",
    "Home",
    "Shop",
    "Setting",
    "About",
  ];

  return (
    <div className="w-full h-screen bg-slate-800 font-serif font-semi text-3xl">
      <nav className=" bg-white">
        <ul className="flex gap-8 justify-end p-4">
          {items.map((i) => {
            return (
              <li
                className="hidden first:mr-auto first:inline-block lg:inline-block hover:bg-slate-300"
                id={i}
              >
                <a
                  href="#"
                  className="font-serif text-1xl  no-underline"
                >
                  {i}
                </a>
              </li>
            );
          })}
          <li className="lg:hidden cursor-pointer hover:bg-slate-300 flex justify-center" onClick={()=>{
            setOpen(true)
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
        </ul>
        <ul className="flex flex-col fixed top-0 right-0 justify-start gap-4 bg-[rgba(255,255,255,0.2)]  h-[100vh] w-[250px] backdrop-blur-md lg:hidden"
          style={{
            display: open ? "flex" : "none"
          }}
        >
          <li className="p-2 cursor-pointer hover:bg-slate-300" onClick = {()=>{
            setOpen(false)
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </li>
          {items.map((i) => {
            return (
              <li className="p-2 hover:bg-slate-300" id={i}>
                <a
                  href="#"
                  className="font-serif text-1xl p-4  no-underline"
                >
                  {i}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
