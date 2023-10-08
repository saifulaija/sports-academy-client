import { useEffect, useState } from "react";
import Heading from "../../Shared/Heading/Heading";
import Fade from "react-reveal/Fade";
import { FaEnvelope } from "react-icons/fa";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <Heading
         
        >
          Popular Instructors
        </Heading>
      </div>

      <div className="w-full p-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((item, index) => (
              <Fade key={item._id} delay={index * 100}>
                <div className="bg-neutral-50 rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#008080]">
                    <img
                      src={item.image}
                      alt="Avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-[#008080] mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    <FaEnvelope className="inline-block mr-2 text-[#008080]" />
                    {item.email}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
