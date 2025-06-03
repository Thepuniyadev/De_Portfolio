
import React from "react";

const ContactLinks = () => {
  return (
   


    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 ">
      <h1 className="text-6xl font-bold mb-16 text-center text-cyan-700"> Let's get in touch</h1>
      <ul className="space-y-4 text-2xl text-gray-800">
        <li>
          <a href="mailto:devesh@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            📧 Gmail: Deveshpuniya.615@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/devesh-puniya-2a58a32a1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            💼 LinkedIn:in/devesh-puniya-2a58a32a1
          </a>
        </li>
        <li>
          <a href="https://github.com/deveshpuniyadev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            🧑‍💻Github: https://github.com/Thepuniyadev
          </a>
        </li>
        <li>
         <h1 className="hover:text-red-600 text-center"> Contact no: 9654213368
           


             </h1>

        </li>
      </ul>
    </div>
    
  );
};

export default ContactLinks;
