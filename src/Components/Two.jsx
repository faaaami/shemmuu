import React from "react";
import { useNavigate } from "react-router-dom";

const Two = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl text-center">

        {/* Love Emoji Frame */}
        <div className="w-full aspect-square mb-6 rounded-xl border-4 border-pink-300 flex items-center justify-center bg-pink-50 shadow-md">
          <span className="text-6xl sm:text-7xl animate-pulse">❤️</span>
        </div>

        {/* Message */}
        <h1 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">
          Babyyy… ❤️
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          When I first saw you, I didn’t know what to doooo 😭  
          I was very nervous — and I know you were too.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
          From that moment… <br />
          we laughed together,  
          we cried together,  
          and we enjoyed every single moment ❤️
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
          That day will always stay special to me 🌙✨
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/One")}
            className="w-full py-3 rounded-lg border border-pink-400 text-pink-500 hover:bg-pink-50 transition"
          >
            ⬅ Back
          </button>

          <button
            onClick={() => navigate("/Three")}
            className="w-full py-3 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Next ➡
          </button>
        </div>

      </div>
    </div>
  );
};

export default Two;

