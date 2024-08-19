import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProjectsRef = useRef(null);

  const scrollToFeaturedProjects = () => {
    if (featuredProjectsRef.current) {
      featuredProjectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">Hi, I'm Nikhil Kumar Shah</h1>
        <p className="text-xl text-gray-700 mb-6">
          A Full-Stack Developer and Tech Enthusiast, passionate about building
          innovative web applications.
        </p>

        <button
          onClick={scrollToFeaturedProjects}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          View My Projects
        </button>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          I'm a third-year B. Tech IT student at NSUT, actively involved in the
          Canvas Society at my college. I love coding, solving problems, and
          building full-stack applications.
        </p>
        <Link to="/about">
          <button className="text-blue-500 hover:underline">Read More</button>
        </Link>
      </section>

      <section ref={featuredProjectsRef} className="py-24">
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-bold mb-4">Sidcup Golf Academy</h3>
            <p className="text-gray-700 mb-4">
              A frontend project with stunning animations and a clean UI.
            </p>
            <Link to="https://nikhil-87.github.io/sidcup-family-golf/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Project
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-bold mb-4">Atmosfears</h3>
            <p className="text-gray-700 mb-4">A react Weather app</p>
            <Link to="https://nikhil-87.github.io/atmosfears/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Project
              </button>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-bold mb-4">Airbnb-clone</h3>
            <p className="text-gray-700 mb-4">
              Full stack clone of Airbnb website
            </p>
            <Link to="https://airbnb-clone-dxbd.onrender.com/listings">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex justify-between gap-12">
          <div className="text-center border-2 w-full p-2 rounded-lg">
            <img
              src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
              alt="mongoDB"
              className="w-12 h-12 mx-auto mb-2 rounded-lg"
            />
            <p className="text-gray-700">MongoDB</p>
          </div>
          <div className="text-center border-2 w-full p-2 rounded-lg">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*q6b32yNdlpyQjDZlAc1QEg.png"
              alt="expressjs"
              className="h-12 mx-auto mb-2 rounded-lg"
            />
            <p className="text-gray-700">Express JS</p>
          </div>
          <div className="text-center border-2 w-full p-2 rounded-lg">
            <img
              src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
              alt="React"
              className="w-12 h-12 mx-auto mb-2 rounded-lg"
            />
            <p className="text-gray-700">React JS</p>
          </div>

          <div className="text-center border-2 w-full p-2 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwzWqFVu66ck-2u_nDBgLTZbR3cNjpUCbWg&s"
              alt="nodejs"
              className="h-12 mx-auto mb-2 rounded-lg"
            />
            <p className="text-gray-700">Node JS</p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <Link
          className="text-lg font-semibold mb-4 hover:underline"
          to="/contact-us"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
