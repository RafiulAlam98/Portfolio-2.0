import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F1729] my-16 border-2 rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline hover:text-white">
            RAT
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#about"
              className="mr-4 hover:underline md:mr-6 hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 hover:text-white"
            >
              Privacy Policy
            </a>
          </li>

          <li>
            <Link to="#" className="hover:underline hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
