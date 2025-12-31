import React from "react";
import { useNavigate } from "react-router-dom";

const Three = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-300 to-pink-400 px-4">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl text-center animate-fadeIn">

        {/* Love Emoji */}
        <div className="mb-6 animate-bounceSlow">
          <span className="text-6xl sm:text-7xl">💖</span>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4 animate-slideDown">
          Babyyy… ❤️
        </h1>

        {/* Message */}
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 animate-fadeUp delay-100">
          This year was very special to us 🌸  
          We created memories that I will carry forever.
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 animate-fadeUp delay-200">
          Sometimes I hurt you so badlyyy…  
          I’m reallyyyy sorryyy my wifeyy 😔  
          Please forgive me ❤️
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 animate-fadeUp delay-300">
          I love you more than myself.  
          Whatever happens, we will face it together 🤍
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 animate-fadeUp delay-400">
          Wallahiii, I will never leave your side 🌙  
          You are my forever.
        </p>

        <p className="text-base sm:text-lg font-semibold text-pink-600 mt-6 animate-pulseSlow">
          Happy New Year, my dear wifey 🎆  
          I love you sooo much 💞
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate("/Two")}
          className="mt-6 w-full py-3 rounded-lg border border-pink-400 text-pink-500 hover:bg-pink-50 transition"
        >
          ⬅ Back
        </button>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }

          .animate-slideDown {
            animation: slideDown 0.7s ease-out forwards;
          }

          .animate-fadeUp {
            animation: fadeUp 0.8s ease-out forwards;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }

          .animate-bounceSlow {
            animation: bounceSlow 2s infinite;
          }

          .animate-pulseSlow {
            animation: pulse 2.5s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Three;
