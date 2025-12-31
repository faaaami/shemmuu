import React from "react";
import { useNavigate } from "react-router-dom";

const One = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-200 to-pink-300 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl text-center">

        <h1 className="text-xl sm:text-2xl font-bold text-pink-600 mb-6">
          Baby… ❤️
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          It’s been only <span className="font-semibold">7 months</span>, but this
          is our <span className="font-semibold">first New Year together</span> ✨
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          From the moment I saw you, I had a strange feeling 🫠  
          I fell for you right from the beginning.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          To be honest… I even started stalking you 😭  
          Sorry for coming a little late into your life 🥹🫂
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          Thank you for choosing me, for staying with me,  
          and for being you ❤️
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/")}
            className="w-1/2 py-3 rounded-lg border border-pink-400 text-pink-500 text-sm sm:text-base hover:bg-pink-50 transition"
          >
            ⬅ Back
          </button>

          <button
            onClick={() => navigate("/Two")}
            className="w-1/2 py-3 rounded-lg bg-pink-500 text-white text-sm sm:text-base hover:bg-pink-600 transition"
          >
            Next 💕
          </button>
        </div>

      </div>
    </div>
  );
};

export default One;
