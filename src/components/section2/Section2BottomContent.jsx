// import { useState } from "react";
const Section2BottomContent = () => {
  //  const [formData, setFormData] = useState({
  //    name: "",
  //    email: "",
  //    age: "",
  //  });

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prev) => ({
    //     ...prev,
    //     [name]: value,
    //   }));
    // };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("hello");
      // console.log("Submitted Data:", formData);
    };
  return (
    <div>
      <form className="p-5 m-10 bg-gray-600">
        <input
          className="p-5 m-3 text-sm border w-full"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          // value={formData.name}
          onChange={()=>{
            // handleChange();
          }}
          required
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