const projects = [
  {
    id: 1,
    img: [],
    description: "",
    technology: [],
  },
  {
    id: 2,
    img: [],
    description: "",
    technology: [],
  },
  {
    id: 3,
    img: [],
    description: "",
    technology: [],
  },
  {
    id: 4,
    img: [],
    description: "",
    technology: [],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1000px] mx-auto my-6">
      <h2 className="text-3xl border-b-2">Projects </h2>
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {projects.map((item) => (
          <div key={item.id}></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
