import { useState } from "react";

const Section2BottomContent = () => {

  const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();

    };
  return (
    <div>
      <form className="p-5 m-10 bg-gray-600">
        <input
          className="p-5 m-3 text-sm border w-full"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

        <button
          type="submit"
          className="p-5 m-3 bg-cyan-500 text-white rounded-2xl"
          onClick={(e) =>{
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Section2BottomContent