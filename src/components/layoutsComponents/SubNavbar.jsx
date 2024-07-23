import PropTypes from 'prop-types';
import { Typography } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from 'react-icons/md'; // Import both email and phone icons

const SubNavbar = ({ color }) => {
  const knowledgeColor = color ? 'bg-primary text-white' : null;
  const socialColorFill = knowledgeColor ? 'white' : '#339FDE'; // Assuming this is the color for icons

  return (
    <div className={`flex p-5 w-full md:w-full flex-col justify-center ${knowledgeColor} border-b border-blue-gray-50 py-2 md:flex-row md:justify-between`}>
      <div className="container mx-auto flex flex-col md:items-center justify-start md:flex-row md:justify-between">
        <Typography
          variant="small"
          className="mb-4 ml-7 text-center font-normal text-blue-gray-900 md:mb-0 flex items-center gap-1"
        >
          {/* Email icon and text */}
          <div className="relative">
            <MdEmail
              className={`w-6 h-6 text-${socialColorFill}`} // Adjust size and color dynamically
              style={{ marginLeft: '-2.9rem' }}
              color={socialColorFill} // Set the color dynamically
            />
          </div>
          <span className={`text-${socialColorFill} ml-0`}>info@epiidosisinvestments.com</span>
          
          {/* Phone icon and text */}
          <MdPhone
            className={`w-6 h-6 text-${socialColorFill}`} // Adjust size and color dynamically
            style={{ marginLeft: '2rem' }}
            color={socialColorFill}
          />
          <span className={`text-${socialColorFill}`}>+971 (04) 884-8644</span>
        </Typography>
        
        {/* Icons aligned to the right */}
        <div className="flex gap-4 text-blue-gray-900 sm:justify-end md:justify-start">
          <p
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            {/* Placeholder icon */}
            <svg
              className="h-5 w-5 "
              fill={socialColorFill}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          
          {/* Links */}
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            {/* Placeholder icon */}
            <svg
              className="h-5 w-5"
              fill={socialColorFill}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Typography>
          
          {/* LinkedIn icon */}
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100 flex items-center"
            style={{marginRight:"-2rem"}}
          >
            <FaLinkedin className="h-5 w-5" color={socialColorFill} />
          </Typography>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the color prop
SubNavbar.propTypes = {
  color: PropTypes.bool,
};

export default SubNavbar;