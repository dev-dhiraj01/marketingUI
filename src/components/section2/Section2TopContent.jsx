import React ,{useState} from 'react'

const Section2TopContent = () => {

    const [num, setNum] = useState(0);

    const changeNum = () => {
      setNum((prev) => prev + 1);
      console.log(num);
    };
    const reset = () => {
      setNum(0);
    };

    const [user, setUser] = useState({ name: "Dhiraj", age: 22 });
    const [flag, setFlag] = useState(true);

    const showUser = () => {
      if (flag) {
        setUser((prev) => ({ ...prev, name: "Aman" }));
      } else {
        setUser((prev) => ({ ...prev, name: "Dhiraj" }));
      }
      setFlag(!flag);
    };

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap ">
        <input
          className="h-10 border-2 w-full m-10"
          type="text"
          // onChange={(e) => console.log(e.target.value)}
          placeholder="Enter Data"
        />
        <h1 className="text-white h-30 w-30 bg-gray-700 rounded-2xl flex justify-center items-center p-5 m-10">
          The Value of Num is {num}
        </h1>
        <button
          onClick={changeNum}
          className=" h-10 w-30 m-10 rounded-full bg-cyan-400"
        >
          click me
        </button>
        <button
          onClick={reset}
          className=" h-10 w-30 m-10 rounded-full bg-cyan-400"
        >
          Reset
        </button>
        <h1>
          {user.name},{user.age}
        </h1>
        <button
          onClick={showUser}
          className=" h-10 w-30 m-10 rounded-full bg-cyan-400"
        >
          User Details
        </button>
      </div>
    </div>
  );
}

export default Section2TopContent