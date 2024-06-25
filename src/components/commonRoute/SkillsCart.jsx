import Image from "next/image";
import "../../style/headers.css";

const SkillsCart = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-md border-2 border-primary flex flex-col items-center justify-center px-3 py-5 bg-opacity-20 space-y-3 cart-hover hover:bg-primary hover:bg-opacity-40">
      <Image src={img} alt="" width={50} height={50} />
      <h3 className="text-center text-xl lg:text-2xl font-semibold text-primary">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  );
};

export default SkillsCart;
