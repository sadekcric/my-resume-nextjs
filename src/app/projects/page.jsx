const ProjectPage = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <video autoPlay loop muted className="fixed h-full w-full object-cover top-0">
        <source src="/header1.mp4" />
      </video>

      <div className="absolute bg-[#071952] bg-opacity-75 top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default ProjectPage;
