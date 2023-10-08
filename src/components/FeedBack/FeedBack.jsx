// import { toast } from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";

// const FeedBack = () => {
//   const { id } = useParams();
//   const navigate = useNavigate()

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const feedback = event.target.feedback.value;
//     const update = { feedback };
//     fetch(`https://assignment-server-12-saifulaija.vercel.app/updated/${id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(update),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//             toast.success('feedback send successful')
//             navigate('/dashboard/manage-classes')

//       });
//   };

//   return (
//     <div>
//       <h2 className=" text-xl md:text-3xl font-bold uppercase text-center text-gray-600">
//         Write Your Feedback To Instructor
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="space-y-1 text-sm">
//           <label htmlFor="description" className="block text-gray-600">
//             Feedback
//           </label>

//           <textarea
//           required
//             className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border focus:outline-[#0b2727] "
//             name="feedback"
//           ></textarea>
//         </div>
//         <button className="btn-third">Send to instructor</button>
//       </form>
//     </div>
//   );
// };

// export default FeedBack;


import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const FeedBack = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Show "Please Wait..." message

    const feedback = event.target.feedback.value;
    const update = { feedback };
    fetch(`https://assignment-server-12-saifulaija.vercel.app/updated/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        
        setTimeout(() => {
          setIsLoading(false); 
          toast.success("Feedback sent successfully");
          navigate("/dashboard/manage-classes");
        }, 1000); 
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div>
      <h2 className="text-xl md:text-3xl font-bold uppercase text-center text-gray-600">
        Write Your Feedback To Instructor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Feedback
          </label>
          <textarea
            required
            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border focus:outline-[#0b2727] "
            name="feedback"
          ></textarea>
        </div>
      <div className="flex justify-center items-center">
      <button
          type="submit"
          className="btn-third "
          disabled={isLoading} 
        >
          {isLoading ? "Please Wait......." : "Send to Instructor"}
        </button>
      </div>
      </form>
      </div>
    </div>
  );
};

export default FeedBack;

