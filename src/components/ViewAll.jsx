import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewAll = () => {
  const data = useLoaderData();
  const [note, setNote] = useState(data);

  const handelDeleteItem = (id) => {
    fetch(`https://http://localhost:4000/add-node/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remining = note.filter((d) => d._id !== id);
          setNote(remining);
        }
      });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5 gap-5">
        {note.map((data) => (
          <div
            key={data._id}
            className="bg-[#f7efd2] p-5 space-y-3 rounded-xl shadow-md"
          >
            <h1 className="text-xl font-semibold">
              {data.topicTitle.charAt(0).toUpperCase() +
                data.topicTitle.slice(1)}
            </h1>
            <div className="badge badge-outline">{data.topicName}</div>
            {/* <h3 className='bg-[#FBDA5F] px-2 py-1'></h3> */}
            <p className="">{data.topicmessage}</p>
            <div>
              <Link
                to={`/view-all/edit/${data._id}`}
                className="bg-[#FBDA5F] px-4 py-[9px] text-black transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={() => handelDeleteItem(data._id)}
                className="bg-[#FF6B6B] px-4 py-2 text-white transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
