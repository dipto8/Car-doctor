import React from "react";

export default function BookingRow({ booking, handleDelete, handleConfirm }) {
  const { _id, title, img, customerName, email, price, date, service ,status} =
    booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
       { 
        status ==='confirm' ? <span className="font-bold text-purple-500">Confirmed</span> :
        <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please! Confirm</button>}
      </th>
    </tr>
  );
}
