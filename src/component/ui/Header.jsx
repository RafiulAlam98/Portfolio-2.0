/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";


const Header = () => {
  return (
    <div classNameName="text-white">
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Hi, I’m <span className="custom-color"> M. RAFIUL ALAM a</span>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "JavaScript Developer",
                  "Typescript Developer",
                  "React Developer",
                  "Next Js Developer",
                  "Angular Developer",
                  "Node Js Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            As a software engineer intern, I have accumulated a wealth of
            experience and expertise in creating dynamic and responsive web
            applications using React and Angular.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              to="https://drive.google.com/file/d/1nW-s6mKYyJMpRy5KfZndXckB5LT9nJQd/view?usp=sharing"
              target="_blank"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 btn-sm"
            >
              Get Resume
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/in/rafiulalam07/"
              target="_blank"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 btn-sm"
            >
              Conncet LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
