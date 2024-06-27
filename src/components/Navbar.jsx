"use client";
import Link from "next/link";
import Logo from "./commonRoute/Logo";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const activeRoute = usePathname();
  const router = useRouter();
  console.log(router);

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
      <div className="flex shadow-md px-3 sm:px-10 absolute left-0 top-0 bg-[#071952] bg-opacity-75  min-h-[80px] tracking-wide relative ">
        <div className="flex lg:w-4/5 mx-auto justify-between items-center gap-5 w-full">
          <Link href={"/"}>
            <Logo />
          </Link>

          <div className="flex items-center gap-5 text-white  text-lg">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
