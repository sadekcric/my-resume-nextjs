"use client";

import Image from "next/image";
import React from "react";
import Typed from "typed.js";

const HeaderType = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Junior Web Developer,", " Frontend web Developer,", " React Developer."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <h3 className="text-[#3ABEF9] text-xl lg:text-3xl font-bold">
      <span className="text-white">And I'm a </span> <span ref={el}></span>
    </h3>
  );
};

export default HeaderType;
