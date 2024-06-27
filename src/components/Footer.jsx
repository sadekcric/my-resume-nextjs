import React from "react";
import SocialMedia from "./commonRoute/SocialMedia";
import Logo from "./commonRoute/Logo";

const Footer = () => {
  return (
    <footer className="footer-bg lg:h-[300px] ">
      <div class="flex flex-col items-center justify-center tracking-wide relative text-primary border-t-4 border-primary absolute top-0 flex items-center justify-center left-0 h-full w-full bg-[#071952] bg-opacity-75 p-5">
        <div className=" lg:w-4/5 mx-auto ">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-8 ">
            {/* Logo */}
            <div className="lg:pt-16">
              <Logo width={200} height={200} />
            </div>

            <div class="lg:flex lg:items-center">
              <SocialMedia />
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-6 ">Contact Us</h4>
              <div class="space-y-4 text-white">
                <p>
                  <span className="text-primary font-semibold">Email:</span> sadekcric4@gmail.com
                </p>
                <p>
                  {" "}
                  <span className="text-primary font-semibold">Phone:</span> +8801600009331
                </p>
                <p>
                  {" "}
                  <span className="text-primary font-semibold">Address:</span> Jessore, Bangladesh
                </p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-6">Information</h4>
              <div class="space-y-4">
                <p>
                  <a href="javascript:void(0)" class="text-white  text-sm">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="javascript:void(0)" class="text-white  text-sm">
                    Terms &amp; Conditions
                  </a>
                </p>
                <p>
                  <a href="javascript:void(0)" class="text-white  text-sm">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <p class="text-center font-semibold text-[#ff0000] text-sm mt-10">
            © 2024
            <a href="https://readymadeui.com/" target="_blank" class="hover:underline mx-1">
              sadek
            </a>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
