import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className=" hidden md:block w-4 h-4 bg-red-500 rounded-full mr-2"></div>
      <div className="  hidden md:block w-4 h-4 bg-green-500 rounded-full mx-2"></div>
      <div className="  hidden md:block w-4 h-4 bg-blue-500 rounded-full mx-2"></div>
      <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
      <div className="  hidden md:block w-4 h-4 bg-blue-500 rounded-full mx-2"></div>
      <div className="  hidden md:block w-4 h-4 bg-green-500 rounded-full mx-2"></div>
      <div className=" hidden md:block w-4 h-4 bg-red-500 rounded-full ml-2"></div>
    </div>
  );
};

export default SectionHeading;
