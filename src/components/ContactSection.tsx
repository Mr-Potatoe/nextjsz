const ContactSection = () => {
    return (
      <section id="contact" className="w-full max-w-5xl mx-auto mt-12 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-duration="1000" // Animation duration
      data-aos-easing="ease-in-out" // Animation easing
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
          Feel free to reach out via the following methods:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Email: 
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
            >
              your-email@example.com
            </a>
          </li>
          <li>
            LinkedIn: 
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            GitHub: 
            <a
              href="https://github.com/your-username"
              className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </section>
    );
  };
  
  export default ContactSection;
  