const Shimmer = () => {
  const divElements = [];

  for (let i = 0; i <= 15; i++) {
    divElements.push(
      <div key={i} className="shimmer-card">
        <div className="shimmer-img"></div>
      </div>
    );
  }
  return <div className="shimmer-container">{divElements}</div>;
};

export default Shimmer;