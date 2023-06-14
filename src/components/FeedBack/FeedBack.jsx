import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const FeedBack = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const feedback = event.target.feedback.value;
    const update = { feedback };
    fetch(`https://assignment-server-12-indol.vercel.app/updated/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
            toast.success('feedback send successful')
            navigate('/dashboard/manage-classes')

      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold uppercase text-center text-yellow-500">
        Write Your Feedback To Instructor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-1 text-sm">
          <label htmlFor="description" className="block text-gray-600">
            Feedback
          </label>

          <textarea
            className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-yellow-300 focus:outline-yellow-500 "
            name="feedback"
          ></textarea>
        </div>
        <button className="btn-third">Send to instructor</button>
      </form>
    </div>
  );
};

export default FeedBack;
