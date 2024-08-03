const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-duration="1000" // Animation duration
      data-aos-easing="ease-in-out" // Animation easing
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Replace with your projects */}
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Project Title
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Short description of the project.
          </p>
          <p style={{ display: 'block',color: 'red', backgroundColor: 'green' }}>hahahah</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            View Project
          </a>
        </div>
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Project Title
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Short description of the project.
          </p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            View Project
          </a>
        </div>
        <div className="border rounded-lg p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Project Title
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            Short description of the project.
          </p>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            View Project
          </a>
        </div>
        {/* Add more project items as needed */}
      </div>
    </section>
  );
};

export default ProjectsSection;
