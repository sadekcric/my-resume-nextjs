import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div class="lg:flex lg:items-center">
      <Image src={"/logo/profileLogo.png"} alt="" width={200} height={100} />
    </div>
  );
};

export default Logo;
