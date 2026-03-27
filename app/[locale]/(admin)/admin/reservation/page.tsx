"use client"

import { getAll } from "@/service/page";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";

type TableType = {
  id: number;
  tableNumber: number;
  location: string;
};

type ReservationsType = {
  id: number;
  email: string;
  guestCount: number;
  reservationDate: string;
  reservationTime: string;
  table: TableType[];
};

const Reservation = () => {
  const [reservations, setReservations] = useState<ReservationsType[]>([]);

  useEffect(() => {
    getAll("reservations")
      .then(res => res.json())
      .then(data => {
        console.log(setCookie);
        
        const categoryList = data.data || [];
        
        setReservations(categoryList);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen admin-bg p-5">
      <h1 className="font-extrabold text-[35px] mb-10 text-white">Reservations</h1>
      
      <div className="overflow-x-auto rounded-xl duration-300 hover:shadow-[0_0_10px_3px] shadow-blue-200">

      <table className="w-full admin-bg text-white  duration-300 rounded-2xl backdrop-blur-md">
        <thead className="bg-gray-800">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Guest Count</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Tables</th>
          </tr>
        </thead>
        <tbody>
          {[...reservations].reverse().map(reservation => (
            <tr key={reservation.id} className="border-b text-white/70 hover:bg-gray-400 duration-300 transition">
              <td className="py-2 px-4">{reservation.id}</td>
              <td className="py-2 px-4">{reservation.email}</td>
              <td className="py-2 px-4">{reservation.guestCount}</td>
              <td className="py-2 px-4">{reservation.reservationDate}</td>
              <td className="py-2 px-4">{reservation.reservationTime}</td>
              <td className="py-2 px-4">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Reservation;