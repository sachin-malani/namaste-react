const Contact = () => {
  return (
    <div className="text-center">
      <h1>Contact</h1>
      <div>Contact Zwiggy: zwiggy@gmail.com</div><br/>
      <form className="flex flex-col w-96 mx-auto gap-4">
        <input
          type="text"
          className="border border-black p-2"
          placeholder="email"
        />
        <input
          type="text"
          className="border border-black p-2"
          placeholder="Message"
        />
        <button className="border bg-black text-white border-black p-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
