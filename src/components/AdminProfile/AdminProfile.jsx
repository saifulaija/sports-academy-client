import { useContext } from "react";
import { FaEnvelope, FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const AdminProfile = () => {
  const { user, role } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className=" w-[700px] p-8 rounded border">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="md:w-1/3 text-center mb-4 md:mb-0">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-500">
              <img
                src={user.photoURL || "default-avatar.png"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              {user.displayName}
            </h1>
            <p className="text-gray-600 mb-4">
              <FaEnvelope className="inline-block text-gray-500 mr-2" />
              {user.email}
            </p>
            <div className=" inline-block">
              <FaUserTie className="inline-block text-xl align-middle mr-2" />
              {role || "Student"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
