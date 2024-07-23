/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";
import companyLogo from "/logos/companyLogo.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const LINKS = [
  {
    title: "Quick Links",
    items: [
      { text: "Home", showArrow: false },
      { text: "About Us", showArrow: false },
      { text: "Contact Us", showArrow: false },
      { text: "Structured Finance", showArrow: false },
      { text: "Asset Monetization", showArrow: false },
      { text: "Loans Secured by Listed Stocks", showArrow: false },
    ],
  },
  {
    title: "Useful Links",
    items: [
      { text: "Invest With Us", showArrow: false },
      { text: "Blogs", showArrow: false },
      { text: "Privacy Policy", showArrow: false },
      { text: "Terms Of Services", showArrow: false },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="relative w-full flex justify-center items-center text-white p-5"
      style={{
        background: "linear-gradient(262.98deg, #339FDE 0%, #1C5678 99.52%)",
      }}
    >
      <div className="w-full max-w-7xl mt-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:p-12">
          <div className="flex flex-col items-center md:items-start">
            <img alt="logo" src={companyLogo} className="mb-4" />
            <Typography className="text-center md:text-left text-lg">
              818, Park Lane Tower, <br />Business Bay, 415203, Dubai
            </Typography>
            <div className="flex items-center gap-2 mt-3 text-white">
              <FaEnvelope className="text-blue-gray-400 border-white rounded-full p-1" style={{ fontSize: "1.5rem" }} />
              <Typography className="text-base">info@epiidosisinvestments.com</Typography>
            </div>
            <div className="flex items-center gap-2 mt-1 text-white">
              <FaPhone className="text-blue-gray-400 border-white rounded-full p-1" style={{ fontSize: "1.5rem" }} />
              <Typography className="text-base">+971 (04) 884-8644</Typography>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            {LINKS.map(({ title, items }) => (
              <div key={title} className="flex flex-col items-center md:items-start">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-80 text-white text-center text-2xl"
                >
                  {title}
                </Typography>
                <ul className="space-y-2">
                  {items.map(({ text, showArrow }) => (
                    <li key={text}>
                      <Typography
                        as={Link}
                        to={`/${text.split(" ").join("").toLowerCase()}`}
                        color="gray"
                        className="flex items-center text-white gap-1 font-normal transition-colors hover:text-blue-gray-900 text-xl"
                      >
                        {showArrow && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                            />
                          </svg>
                        )}
                        {text}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Additional content */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
