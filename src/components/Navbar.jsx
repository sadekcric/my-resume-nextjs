"use client";
import Link from "next/link";
import Logo from "./commonRoute/Logo";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const activeRoute = usePathname();
  const [active, setActive] = useState(false);
  console.log(active);

  // List Items
  const navList = [
    {
      element: "Home",
      path: "/",
    },
    {
      element: "Projects",
      path: "/projects",
    },
    {
      element: "Blogs",
      path: "/blogs",
    },
    {
      element: "About",
      path: "/about",
    },
    {
      element: "Contact me",
      path: "/contact",
    },
  ];

  return (
    <div className="footer-bg relative min-h-[80px] sticky top-0 z-50">
      <div className="flex relative shadow-md px-3 sm:px-10 absolute left-0 top-0 bg-[#071952] bg-opacity-75  min-h-[80px] tracking-wide relative ">
        <div className="flex lg:w-4/5 mx-auto justify-between items-center gap-5 w-full">
          <Link href={"/"} className="hidden lg:block">
            <Logo width={200} height={200} />
          </Link>
          <Link href={"/"} className="lg:hidden">
            <Logo width={150} height={150} />
          </Link>

          {/* Computer Layout */}
          <div className="flex items-center gap-5 text-white hidden lg:flex text-lg">
            {navList.map(({ path, element }) => (
              <p
                key={path}
                className={`${activeRoute === path && "text-primary shadow-md border-t border-primary border-opacity-30 shadow-primary "}`}
              >
                <Link className={"px-3 py-1"} href={path}>
                  {element}
                </Link>
              </p>
            ))}
          </div>

          {/* small Device Layout */}
          <div className="lg:hidden">
            <div onClick={() => setActive(!active)} className="text-primary text-2xl cursor-pointer pr-3">
              <FiMenu />
            </div>

            <div
              className={`flex flex-col absolute top-[80px] right-3 items-start gap-2 bg-[#071952] duration-1000 px-4 py-3 bg-opacity-90 text-white ${
                active ? "translate-y-0 opacity-100 " : "-translate-y-96 opacity-0"
              } text-lg lg:hidden`}
            >
              {navList.map(({ path, element }) => (
                <p
                  onClick={() => setActive(false)}
                  key={path}
                  className={`${
                    activeRoute === path && "text-primary shadow-md border-t border-primary border-opacity-30 shadow-primary "
                  }`}
                >
                  <Link className={"px-3 py-1"} href={path}>
                    {element}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
