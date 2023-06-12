import img1 from "../../../src/assets/banner3.jpg";
import img2 from "../../../src/assets/banner1.jpg";
import img3 from "../../../src/assets/bannern3.jpg";
import img4 from "../../../src/assets/bannern4.jpg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const NewBanner = () => {
  return (
    <div className="max-w-[1240px]  mx-auto p-8">
      <div className="carousel">
        <div id="slide1" className="carousel-item relative h-[90vh] w-full">
          <img src={img1} className="w-full object-cover rounded-xl" />

          <div className="absolute top-32 bottom-32 ml-10 flex items-center justify-center max-w-[700px] font-mono ">
            <div>
              <Fade top>
                <h1 className="text-xl md:text-3xl font-bold font-mono text-yellow-500 ">
                  Well Come To Sports Academy
                </h1>
              </Fade>
              <Zoom>
                <p className="text-neutral-200 my-4">
                  A sports academy is an institution or facility that provides
                  specialized training and coaching in various sports
                  disciplines. These academies are designed to help athletes
                  develop their skills, enhance their performance, and achieve
                  their full potential in their chosen sport.
                </p>
                <button className="btn-third">
                  {" "}
                  <AiOutlineArrowLeft className="inline-block"></AiOutlineArrowLeft>{" "}
                  Explore More
                </button>
              </Zoom>
            </div>
          </div>

          <div className="absolute flex gap-2 bottom-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 2 */}
        <div id="slide2" className="carousel-item relative h-[90vh] w-full">
          <img src={img2} className="w-full object-cover rounded-xl" />
          <div className="absolute top-32 bottom-32 ml-10 flex items-center justify-center max-w-[700px] font-mono ">
            <div>
              <Fade top>
                <h1 className="text-xl md:text-3xl font-bold font-mono text-yellow-500 ">
                  Authentic Information Provided
                </h1>
              </Fade>
              <Zoom>
                <p className="text-neutral-200 my-4">
                  A sports academy is an institution or facility that provides
                  specialized training and coaching in various sports
                  disciplines. These academies are designed to help athletes
                  develop their skills, enhance their performance, and achieve
                  their full potential in their chosen sport.
                </p>
                <button className="btn-third">
                  {" "}
                  <AiOutlineArrowLeft className="inline-block"></AiOutlineArrowLeft>{" "}
                  Explore More
                </button>
              </Zoom>
            </div>
          </div>
          <div className="absolute flex gap-2 bottom-5">
            <a href="#slide1" className="btn btn-circle text-neutral-800">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide 3 */}
        <div id="slide3" className="carousel-item relative h-[90vh] w-full">
          <img src={img3} className="w-full object-cover rounded-xl" />
         <div className="absolute top-32 bottom-32 ml-10 flex items-center justify-center max-w-[700px] font-mono ">
            <div>
              <Fade top>
                <h1 className="text-xl md:text-3xl font-bold font-mono text-yellow-500 ">
                 Reliable For Sports
                </h1>
              </Fade>
              <Zoom>
                <p className="text-neutral-200 my-4">
                  A sports academy is an institution or facility that provides
                  specialized training and coaching in various sports
                  disciplines. These academies are designed to help athletes
                  develop their skills, enhance their performance, and achieve
                  their full potential in their chosen sport.
                </p>
                <button className="btn-third">
                  {" "}
                  <AiOutlineArrowLeft className="inline-block"></AiOutlineArrowLeft>{" "}
                  Explore More
                </button>
              </Zoom>
            </div>
          </div> 
          <div className="absolute flex gap-2 bottom-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* slide four */}
        <div id="slide4"  className="carousel-item relative h-[90vh] w-full">
          <img src={img4} className="w-full object-cover rounded-xl" />
          <div className="absolute top-32 bottom-32 ml-10 flex items-center justify-center max-w-[700px] font-mono ">
            <div>
              <Fade top>
                <h1 className="text-xl md:text-3xl font-bold font-mono text-yellow-500 ">
                  Background More Increasing
                </h1>
              </Fade>
              <Zoom>
                <p className="text-neutral-200 my-4">
                  A sports academy is an institution or facility that provides
                  specialized training and coaching in various sports
                  disciplines. These academies are designed to help athletes
                  develop their skills, enhance their performance, and achieve
                  their full potential in their chosen sport.
                </p>
                <button className="btn-third">
                  {" "}
                  <AiOutlineArrowLeft className="inline-block"></AiOutlineArrowLeft>{" "}
                  Explore More
                </button>
              </Zoom>
            </div>
          </div> 
          <div className="absolute flex gap-2 bottom-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
