import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-left">
      {" "}
      <h1 className="text-4xl font-bold mb-8">About Me</h1>{" "}
      <section className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi there! I'm currently a third-year B. Tech IT student at NSUT,
          pursuing my passion for technology, coding, and building innovative
          projects. Apart from academics, I'm an active member of the Canvas
          Society at my college, where I coordinate events and help mentor
          juniors.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tech Enthusiast and Developer
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I have a diverse skill set in full-stack web development, and I enjoy
          working with a variety of technologies. Some of my recent projects
          include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Sidcup Golf Academy:</strong> A frontend project featuring
            awesome animations and a well-crafted UI. While it's visually
            stunning, I’m currently working on making it fully responsive.
          </li>
          <li>
            <strong>Airbnb Clone:</strong> This project showcases my backend
            development skills. It has full CRUD operations for listings,
            reviews with star ratings, user authentication, geolocation, and
            image upload functionalities. The project is built with Node.js,
            Express, and MongoDB and follows the MVC architecture.
          </li>
          <li>
            <strong>Fiverr Clone:</strong> I'm currently working on a Fiverr
            clone using React and JavaScript, where users can hire freelancers
            for services like writing and video editing. I'm also exploring the
            idea of integrating crypto payments into the platform.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tech Stack and Interests
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm proficient in a variety of programming languages and tools,
          including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
          <li>
            JavaScript and React for building dynamic and interactive user
            interfaces.
          </li>
          <li>Node.js and Express for backend development.</li>
          <li>MongoDB for database management.</li>
          <li>Git for version control and collaboration.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          I'm also delving into C++, having strong expertise in Java already. My
          interests include solving coding challenges on platforms like
          Codeforces, where I enjoy working on problems related to arrays and
          operations.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Hobbies and Fitness
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Beyond my professional interests in technology, I am dedicated to
          maintaining an active lifestyle through a disciplined fitness routine.
          My current workout plan involves a diverse set of exercises aimed at
          enhancing overall physical health and strength. This regimen includes
          a mix of bodyweight exercises, strength training, and flexibility
          work, all of which contribute to my well-being and physical fitness.
        </p>
      </section>
    </div>
  );
};

export default About;
