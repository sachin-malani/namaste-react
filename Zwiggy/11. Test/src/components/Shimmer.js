const Shimmer = () => {
  const divElements = [];

  for (let i = 0; i <= 15; i++) {
    divElements.push(
      <div key={i} className="w-[330px] h-80 p-1 bg-gray-200">
        <div className="w-full h-44 border-none rounded-lg bg-blue-50"></div>
      </div>
    );
  }
  return <div className="flex flex-wrap gap-4 m-2">{divElements}</div>;
};

export default Shimmer;