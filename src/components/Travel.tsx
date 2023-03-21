import React from "react";
import { dataI } from "../Interfaces";

const Card = ({ item }: { item: dataI;}) => {
  return <div  >
    <div className=" w-56 bg-gray-200  rounded-lg  flex  space-x-2 relative">
      <img className="rounded-2xl h-32  w-full " src="https://images.pexels.com/photos/4328739/pexels-photo-4328739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <div className="absolute text-white font-semibold mt-24">{item.title}</div>
      
      </div>
    
  </div>;
};

export default Card;