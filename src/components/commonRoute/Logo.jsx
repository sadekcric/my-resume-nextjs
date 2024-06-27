import Image from "next/image";
import React from "react";

const Logo = ({ width, height }) => {
  return (
    <div class="lg:flex lg:items-center">
      <Image src={"/logo/profileLogo.png"} alt="" width={width} height={height} />
    </div>
  );
};

export default Logo;
