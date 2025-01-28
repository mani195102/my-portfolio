import { BrowserRouter, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { FaEye } from "react-icons/fa"; // Assuming you have this imported

const App = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef(null); // Reference for dropdown menu
  const buttonRef = useRef(null); // Reference for the dropdown button

  const handleResumeOpen = (e) => {
    e.preventDefault(); 
    const resumeUrl = 'https://drive.google.com/file/d/1Q27iGxwQkrFQr6NUR7zTCkhrVWuOUvui/view'; 
    window.open(resumeUrl, '_blank'); 
  };

  const handleLinkedInOpen = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/mani-muthu-403a47123';
    window.open(linkedInUrl, '_blank');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) && 
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

        {/* Dropdown Button */}
        <div className="fixed top-24 right-4">
          <div className="relative">
            <button
              ref={buttonRef} // Attach ref to button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#9660fc] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#7a48e3] transition transform animate-pulse"
            >
              <FaEye className="text-2xl" />
            </button>

            {/* Dropdown Menu with transition */}
            <div
              ref={dropdownRef} // Attach ref to dropdown
              className={`absolute bg-black text-white shadow-lg rounded-lg w-40 mt-2 right-0 
                          ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
                          transition-all duration-300 ease-out`}
            >
              <ul>
                <li
                  onClick={handleResumeOpen}
                  className="px-4 py-2 cursor-pointer hover:bg-[#7a48e3]"
                >
                  Resume
                </li>
                <li
                  onClick={handleLinkedInOpen}
                  className="px-4 py-2 cursor-pointer hover:bg-[#7a48e3]"
                >
                  LinkedIn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
