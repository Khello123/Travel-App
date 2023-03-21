import React from "react";
import { dataI } from "../Interfaces";

const Card = ({ item }: { item: dataI;}) => {
  return <div  >
    <div className=" w-56 bg-gray-200  rounded-lg  flex p-2 space-x-2">
      <img className="rounded-2xl h-32 w-24 " src={item.imageUri}/>
      <div>{item.title}</div>
      </div>
    
  </div>;
};

export default Card;
