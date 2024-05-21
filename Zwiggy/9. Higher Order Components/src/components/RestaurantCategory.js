import ItemList from "./ItemList";  

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  const { title } = data;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    // Accordion header
    <div>
      <div className=" mx-auto my-4 p-4 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
