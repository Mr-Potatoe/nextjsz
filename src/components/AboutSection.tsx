import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
      data-aos="fade-up"
      data-aos-duration="1000" // Animation duration
      data-aos-easing="ease-in-out" // Animation easing
    >
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">About Me</h2>
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/3 md:pr-6 mb-6 md:mb-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pRPDxa_NkeW6Bw9zFnJqNfIVKssOUMhyQw&s" // Replace with the path to your image
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
            I am a passionate and dedicated professional with a Bachelor of Science in Information Systems. I specialize in Frontend Development, and I am committed to being a responsible and innovative developer.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
            With extensive experience in Computer Hardware, I have developed strong skills in Troubleshooting and technical support. My educational background includes a degree in Information Systems, and I continuously seek opportunities to grow and learn in the field of web development and technology. I am excited about leveraging my skills and experiences to contribute to meaningful projects and advancements in technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
