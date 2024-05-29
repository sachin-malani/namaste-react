import { useState, useMemo } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);


  const prime = useMemo(() => findNthPrime(text),[text]);

  return (
    <div
      className={
        "p-4 m-4 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="p-2 m-2 border border-green-50 bg-green-100 rounded-lg"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          value={text}
          className="border border-black p-2 my-2"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>nth Prime: {prime}</div>
    </div>
  );
};

export default Demo;
