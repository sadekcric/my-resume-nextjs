import Image from "next/image";
import HeaderType from "./HeaderType";
import "../style/headers.css";
import SocialMedia from "./commonRoute/SocialMedia";

const Headers = () => {
  return (
    <section className="overflow-hidden w-full h-screen object-cover   relative">
      <video autoPlay muted loop className="h-full w-full object-cover">
        <source src="/header2.mp4" type="video/mp4" />
      </video>

      <div className="bg-[#071952] absolute top-0 left-0 w-full bg-opacity-75 h-screen z-10">
        <div className="flex flex-col lg:flex-row p-3 lg:w-4/5 mx-auto items-center h-screen justify-center gap-8 lg:justify-between gap-5">
          <div className="space-y-3">
            <h3 className="text-primary text-xl lg:text-3xl font-bold">Hi! This is me,</h3>
            <h1 className=" text-3xl lg:text-6xl font-extrabold uppercase text-bg">Sadekur Rahman</h1>

            <HeaderType />

            <p className="text-gray-400 pt-5 hidden lg:block lg:max-w-[600px] text-lg">
              Passionate junior web developer dedicated to crafting seamless digital experiences through innovative coding and creative
              problem-solving. Explore my journey!...
            </p>

            {/* Social media */}
            <SocialMedia />

            <div className="pt-5">
              <button className="px-6 py-2 bg-primary bg-opacity-20 border-2 border-primary text-primary rounded-lg">My Resume</button>
            </div>
          </div>
          <div>
            <Image
              src="/image/me.png"
              alt="sadek"
              width={600}
              height={600}
              className="rounded-full border-4 shadow-xl profile-shadow  border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headers;
