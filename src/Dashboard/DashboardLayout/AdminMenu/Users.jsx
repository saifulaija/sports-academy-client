

import { useContext, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineCrown } from 'react-icons/ai';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../components/Loader/Loader';

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const { user, role } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)

  const { data: users = [], refetch, isLoading } = useQuery(['users'], async () => {
    const res = await fetch('https://assignment-server-12-indol.vercel.app/users');
    return res.json();
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleMakeAdmin = (item) => {
    fetch(`https://assignment-server-12-indol.vercel.app/admin/${item._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${item.name} is admin now!`);
        }
      });
  };

  const handleMakeInstructor = (item) => {
 
    fetch(`https://assignment-server-12-indol.vercel.app/instructor/${item._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${item.name} is instructor now!`);
        }
      });
  };

  return (
    <div>
      {
        isLoading? <><Loader></Loader></>:<>
        
        {/* <table className="w-full  border border-gray-300 mt-10">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((item, index) => (
            <tr key={item._id} className="border-b border-gray-300">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.email}</td>
              <td className="py-2 px-4">{item.role ? item.role : 'student'}</td>
              <td className="py-2 px-4 flex gap-2 text-center">
                <button
                  onClick={() => handleMakeInstructor(item)}
                  disabled={item.role === 'instructor'}
                  className={`${
                    item.role === 'instructor'
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'btn-fourth'
                  } px-2 py-1 rounded text-white`}
                >
                  <AiOutlineUserAdd className="inline-block mr-1" />
                  Make Instructor
                </button>
                <button
                  onClick={() => handleMakeAdmin(item)}
                  disabled={item.role === 'admin'}
                  className={`${
                    item.role === 'admin'
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'btn-fourth'
                  } px-2 py-1 rounded text-white`}
                >
                  <AiOutlineCrown className="mr-1 inline-block" />
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

<div className="max-h-screen overflow-y-auto">
  <table className="w-full border border-gray-300 mt-10">
    <thead>
      <tr className="bg-gray-100">
        <th className="py-2 px-4 text-left">Name</th>
        <th className="py-2 px-4 text-left">Email</th>
        <th className="py-2 px-4 text-left">Role</th>
        <th className="py-2 px-4 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentUsers.map((item, index) => (
        <tr key={item._id} className="border-b border-gray-300">
          <td className="py-2 px-4">{item.name}</td>
          <td className="py-2 px-4">{item.email}</td>
          <td className="py-2 px-4">{item.role ? item.role : 'student'}</td>
          <td className="py-2 px-4 flex gap-2 text-center">
            <button
              onClick={() => handleMakeInstructor(item)}
              disabled={item.role === 'instructor'}
              className={`${
                item.role === 'instructor'
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'btn-fourth'
              } px-2 py-1 rounded`}
            >
              Make Instructor
            </button>
            <button
              onClick={() => handleMakeAdmin(item)}
              disabled={item.role === 'admin'}
              className={`${
                item.role === 'admin'
                  ? 'bg-gray-200 cursor-not-allowed'
                  : 'btn-fourth'
              } px-2 py-1 rounded`}
            >
              Make Admin
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>





      <div className="flex justify-center gap-1 mt-6">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-1 rounded-md cursor-pointer ${
              currentPage === pageNumber
                ? 'bg-black text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div></>
      }
    </div>
  );
};

export default Users;
