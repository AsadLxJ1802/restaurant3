"use client";

import { getAll } from "@/service/page";
import { useEffect, useState } from "react";

type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
};

const Users = () => {
  const [user, setUser] = useState<UserType[]>([]);

  useEffect(() => {
    getAll("customer")
      .then((res) => res.json())
      .then((data) => {
        const usersList = data.data || [];
        setUser(usersList);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 admin-bg min-h-screen ">
      <div className="overflow-x-auto rounded-xl duration-300 hover:shadow-[0_0_10px_3px] shadow-blue-200">
        <table className="w-full admin-bg  duration-300 rounded-2xl backdrop-blur-md">
          <thead className="bg-gray-800  text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Full Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Username</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.id} className="border-b text-white/70 hover:bg-gray-400 duration-300 transition">
                <td className="p-3 font-semibold">#{item.id}</td>
                <td className="p-3">
                  {item.firstName} {item.lastName}
                </td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.username}</td>
                <td className="p-3">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;