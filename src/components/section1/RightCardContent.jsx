import React from 'react'
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-9 text-2xl font-bold w-9 flex justify-center items-center">
       {props.id+1}
      </h2>
      <div className="text-white text-shadow-2xs text-sm mt-20">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          voluptate facere quos vero reprehenderit expedita.
        </p>
      </div>
      <div className=" flex justify-between w-full  ">
        <button className="bg-blue-600 text-white font-xs px-4 py-2 rounded-full text-sm">
          {props.tag}
        </button>
        <button className="bg-blue-600 text-white font-medium px-4 py-1 rounded-full text-sm">
          <MoveRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default RightCardContent