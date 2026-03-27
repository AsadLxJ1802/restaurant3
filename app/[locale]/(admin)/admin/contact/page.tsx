"use client"

import { getAll } from "@/service/page";
import { useEffect, useState } from "react";

type ContactType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const [contact, setContact] = useState<ContactType[]>([]);

  useEffect(() => {
    getAll("contact")
      .then(res => res.json())
      .then(data => {
        const contactList = data.data || [];
        setContact(contactList);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 admin-bg min-h-screen">
      <h1 className="text-2xl text-white font-bold mb-4">Contacts</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Message</th>
          </tr>
        </thead>
        <tbody>
            {contact.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.phone}</td>
                <td className="border px-4 py-2">{item.message}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Contact;