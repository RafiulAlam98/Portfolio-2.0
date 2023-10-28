const skills = [
  {
    id: 3,
    tech: "JavaScript",
    progress: "90%",
  },
  {
    id: 4,
    tech: "Typescript",
    progress: "75%",
  },
  {
    id: 5,
    tech: "React",
    progress: "85%",
  },
  {
    id: 6,
    tech: "Angular",
    progress: "70%",
  },
  {
    id: 7,
    tech: "Node Js",
    progress: "85%",
  },
  {
    id: 8,
    tech: "MongoDB",
    progress: "85%",
  },
  {
    id: 9,
    tech: "PostgreSQL",
    progress: "70%",
  },
  {
    id: 10,
    tech: "Prisma",
    progress: "70%",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="max-w-[1000px] mx-auto my-6">
      <h2 className="text-3xl border-b-2">Skills </h2>
      <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {skills.map((item) => (
          <div key={item.id}>
            <div className="mb-1 text-base font-medium dark:text-white">
              {item.tech} ({item.progress})
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
                style={{ width: `${item.progress}` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
