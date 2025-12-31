import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (pass.toLowerCase().trim() === "faamika") {
      navigate("/One");
    } else {
      alert("Hmm 😅 try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl text-center">
        
        <h1 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">
          Answer The Question 💖
        </h1>

        <p className="text-sm sm:text-base text-gray-700 mb-6">
          What do you call me most of the time?
        </p>

        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Type your answer..."
          className="w-full px-4 py-3 text-sm sm:text-base border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 text-sm sm:text-base bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition duration-300"
        >
          Submit 💌
        </button>

      </div>
    </div>
  );
};

export default Home;
