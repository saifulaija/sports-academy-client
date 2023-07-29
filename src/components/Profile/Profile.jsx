// ProfilePage.js

import { useContext } from 'react';
import { FaUser, FaEnvelope, FaUserTag } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
  const {user, role} = useContext(AuthContext)

  return (
    <div className="bg-neutral-100 p-8 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <div className="flex items-center justify-center mb-6">
        <img src={user.photoURL}  alt="Profile" className="rounded-full h-20 w-20 border-4 border-[#ff6c2f]" />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
        <div className="flex items-center text-gray-500 mb-2">
          <FaEnvelope className="mr-2" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaUserTag className="mr-2" />
          <span>{role}</span>
        </div>
      </div>
      {/* Add other profile information here */}
    </div>
  );
};

export default Profile;
