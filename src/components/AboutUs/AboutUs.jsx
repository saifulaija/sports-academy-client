import ceo from "../../../src/assets/director.jpg";
import sub from "../../../src/assets/sub.jpg";
import Heading from "../../Shared/Heading/Heading";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
  return (
    <div className="w-full p-16 bg-[#617453]">
      <div className="max-w-[1280px] mx-auto">
       <div className="flex justify-center items-center pb-10">
       <Heading
        
        heading={"About us"}
        text={
          "Our Academy is the number one Sumer Academy for students. Day by day the number of students is increasing"
        }
      ></Heading>

       </div>
        <div className="md:flex justify-between items-center gap-8 font-mono">
          <div className="relative">
           <Zoom>
           <img className="object-cover rounded-2xl" src={ceo} alt="" />
           </Zoom>
            <img
              className="absolute hidden md:block top-[230px] shadow-2xl rounded-xl "
              width={200}
              src={sub}
              alt=""
            />
          </div>
          <div className="flex-1 divide-y-8 divide-yellow-300">
           <Fade top>
           <div className="space-y-2">
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Mission</h3>
              <p className="text-justify">
                The Summer Academy mission typically refers to a program or
                educational initiative conducted during the summer months. While
                the specific mission can vary depending on the organization or
                institution hosting the Summer Academy, the general objective is
                to provide a unique learning experience for participants, often
                focusing on specific subjects or skill development.
              </p>
            </div>
           </Fade>
           <Fade bottom>
           <div>
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Mission</h3>
              <p className="text-justify" >
                The Summer Academy mission typically refers to a program or
                educational initiative conducted during the summer months. While
                the specific mission can vary depending on the organization or
                institution hosting the Summer Academy, the general objective is
                to provide a unique learning experience for participants, often
                focusing on specific subjects or skill development.
              </p>
            </div>
           </Fade>
            <Fade bottom>
            <div>
              <h3 className="text-2xl uppercase font-bold text-neutral-900">Our Mission</h3>
              <p className="text-justify">
                The Summer Academy mission typically refers to a program or
                educational initiative conducted during the summer months. While
                the specific mission can vary depending on the organization or
                institution hosting the Summer Academy, the general objective is
                to provide a unique learning experience for participants, often
                focusing on specific subjects or skill development.
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
