function Project({ project }) {
  return (
    <div className="w-2/5 m-5 mb-20">
      <div
        className={`flex justify-center items-center shadow-md ${project.background} mb-10 rounded-lg`}
      >
        <img className="w-96 h-80" src={project.projectImg} alt="pokemon" />
      </div>

      <diiv className="text-black font-sans">
        <h3 className="text-4xl font-semibold">{project.projectName}</h3>
        <p className="text-xl font-thin my-2 max-w-md">
          {project.projectDescription}
        </p>
        <a className="font-bold hover:underline">VIEW PROJECT</a>
      </diiv>
    </div>
  );
}

export default Project;