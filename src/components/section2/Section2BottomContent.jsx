import { useState } from "react";
const Section2BottomContent = () => {
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     age: "",
   });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
    };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5">
        <input
          className="p-5 m-3 text-sm border w-full"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="p-5 m-3 text-sm border w-full"
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="p-5 m-3 text-sm border w-full"
          type="number"
          name="age"
          placeholder="Enter Your Age"
          value={formData.age}
          onChange={handleChange}
          min="1"
        />

        <button
          type="submit"
          className="p-5 m-3 bg-cyan-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Section2BottomContent