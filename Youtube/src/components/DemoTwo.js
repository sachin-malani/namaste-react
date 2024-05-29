import { useRef, useState } from "react";

const DemoTwo = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const z = useRef(0);

  return (
    <div className="m-4 p-4 w-96 h-96 border border-black shadow-amber-100 shadow-lg">
      <div className="flex items-center">
        <p className="text-xl font-semibold">Let x= {x} </p>
        <button
          className="p-2 m-2 border border-green-50 bg-green-100 rounded-lg"
          onClick={() => x++}
        >
          Increase X
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-semibold">State y= {y} </p>
        <button
          className="p-2 m-2 border border-green-50 bg-green-100 rounded-lg"
          onClick={() => setY(y + 1)}
        >
          Increase Y
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-xl font-semibold">Ref z= {z.current} </p>
        <button
          className="p-2 m-2 border border-green-50 bg-green-100 rounded-lg"
          onClick={() => z.current++}
        >
          Increase Z
        </button>
      </div>
    </div>
  );
};

export default DemoTwo;
