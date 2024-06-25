const SectionTitle = ({video, title}) => {
  return <div className="relative">
  <video autoPlay muted loop className=" overflow-hidden w-full lg:h-[80px] h-[70px] object-cover">
    <source src={video} type="video/mp4" />
  </video>

  <div className="absolute bg-[#071952] top-0 left-0 w-full bg-opacity-70">
    <h2 className="uppercase text-center text-2xl lg:text-5xl font-bold py-5  text-primary  w-full  title-bg">{title}</h2>
  </div>
</div>;
};

export default SectionTitle;
