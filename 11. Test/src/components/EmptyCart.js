const EmptyCart = () => {
  return (
    <div className="m-4 p-4">
      <div className="text-2xl text-center font-bold">Cart</div>
      <div className="my-10 w-6/12 m-auto text-center">
        <div className="font-semibold">Your cart is empty</div>
        <div>You can go to home page to view more restaurants</div>
      </div>
    </div>
  );
};

export default EmptyCart;