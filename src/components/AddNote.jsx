import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/UserContext";

const AllNote = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  console.log(user?.email)


  const addTopic = (e) => {
    e.preventDefault();
    const topicTitle = e.target.title.value;
    const topicName = e.target.topicName.value;
    const topicmessage = e.target.message.value;
    const topic = { topicName, topicmessage, topicTitle };

    fetch("https://http://localhost:4000//add-node", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Note has been Added!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/view-all");
        }
      });
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl underline">Add a note </h2>
      <form onSubmit={addTopic} className="max-w-3xl mx-auto mt-5 space-y-6">
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
          <label className="block font-medium" htmlFor="name">
            Topic Title
          </label>
          <input
            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
            id="name"
            placeholder="Your topic title here..."
            name="title"
            type="text"
            required
          />
        </div>
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
          <label className="block font-medium" htmlFor="_email">
            Topic Name (JS, REACT, ETC)
          </label>
          <input
            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
            id="_email"
            placeholder="Write your topic keyword"
            name="topicName"
            type="text"
            required
          />
        </div>
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
          <label className="block font-medium" htmlFor="_message">
            Describe Your Topic
          </label>
          <textarea
            className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
            id="_message"
            placeholder="what's in your mind"
            name="message"
            required
          />
        </div>
        <button className="rounded-md w-full bg-[#FBDA5F] px-4 py-2 text-black transition-colors">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AllNote;
