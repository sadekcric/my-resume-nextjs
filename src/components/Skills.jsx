import Image from "next/image";
import SectionTitle from "./commonRoute/SectionTitle";
import SkillsCart from "./commonRoute/SkillsCart";

const Skills = () => {
  return (
    <section>
      <SectionTitle video={"/header2.mp4"} title={"Skills"} />
      <div className="overflow-hidden w-full lg:h-screen object-cover   lg:relative">
        <video autoPlay muted loop className="h-full hidden lg:block w-full object-cover">
          <source src="/header3.mp4" type="video/mp4" />
        </video>

        <div className="bg-[#071952] lg:absolute top-0 left-0 w-full bg-opacity-75 lg:h-screen z-10 flex justify-center items-center ">
          <div className="lg:w-4/5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-lg px-5 py-10">
            <SkillsCart img={"/logo/html.png"} title={"HTML"} description={"Semantic markup for web pages."} />

            <SkillsCart img={"/logo/css.png"} title={"CSS"} description={"Styling for responsive design."} />

            <SkillsCart img={"/logo/js.png"} title={"JavaScript"} description={"Interactive web functionalities."} />

            <SkillsCart img={"/logo/react.png"} title={"React"} description={"Component-based UI development."} />

            <SkillsCart img={"/logo/tailwind.png"} title={"Tailwind CSS"} description={"Utility-first CSS framework."} />

            <SkillsCart img={"/logo/next.png"} title={"Next"} description={"React framework for SSR."} />

            <SkillsCart img={"/logo/firebase.png"} title={"Firebase Auth"} description={"Backend-as-a-service platform."} />

            <SkillsCart img={"/logo/mongo.png"} title={"Mongodb"} description={"NoSQL database for scalability."} />

            <SkillsCart img={"/logo/express.png"} title={"Express js"} description={"Web server framework for Node."} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
