import { useState } from "react";

const Section2BottomContent = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-5 m-10 bg-gray-600">
      <form className=" flex justify-between items-start  p-10">
        <div className="flex w-1/2  gap-4 items-start flex-col ">
          <input
            className="p-5 m-3 w-full text-sm border "
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input type="text" className="p-5 m-3 w-full text-sm border " />
          <button
            type="submit"
            className="p-5 m-3  bg-cyan-500 w-full text-white rounded-2xl"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </div>
        <div>
          <img
            className="h-80 rotate-y-180"
            src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
            alt="Notes"
          />
        </div>
      </form>
    </div>
  );
};

export default Section2BottomContent;
