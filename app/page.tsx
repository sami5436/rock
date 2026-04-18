"use client";

import { useState } from "react";

export default function Home() {
  const [thrown, setThrown] = useState(false);
  const [done, setDone] = useState(false);

  function throwRock() {
    if (thrown) return;
    setThrown(true);
    setTimeout(() => setDone(true), 700);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-12">
      <style>{`
        @keyframes throw {
          0%   { transform: scale(1) rotate(0deg); opacity: 1; }
          70%  { transform: scale(5) rotate(180deg); opacity: 1; }
          100% { transform: scale(12) rotate(270deg); opacity: 0; }
        }
        .rock-throw {
          animation: throw 0.7s ease-in forwards;
        }
      `}</style>

      <div className={`text-[80px] md:text-[120px] ${thrown ? "rock-throw" : ""} ${done ? "invisible" : ""}`}>
        🪨
      </div>

      <a
        href={done ? "/" : undefined}
        onClick={!done ? throwRock : undefined}
        className="px-6 py-3 border border-gray-300 rounded-full text-gray-600 text-sm hover:border-gray-500 cursor-pointer hover:text-gray-800 transition-all active:scale-95"
      >
        {done ? "again" : "throw it"}
      </a>
    </div>
  );
}
