
import { data } from "../data";
import Card from "../components/Card";
import Travel from"../components/Travel";
import { DocumentTextIcon, HomeIcon, HomeIcon as OutlinedHomeIcon, MagnifyingGlassIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const [focused,setFocused]=useState(false);
  return (
    <div className="flex flex-col p-4 space-y-7 w-full h-full overflow-hidden ">
      <div className="flex items-center  w-full space-x-5">
        <img
          className="rounded-full h-20 w-20"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
        />
        <p>hello, khalil</p>
      </div>
      <div className=" flex ">
        <p className="text-4xl font-semibold">
          Let's Travel <br />
          Now
        </p>
      </div>
      <div className={`flex items-center w-full bg-gray-200 rounded-3xl relative px-4 ring-blue-400 ring-offset-2 ${focused&&"ring"} `} >
        <input
        onFocus={()=>setFocused(true)}
        onBlur={()=>setFocused(false)}
        id="search"
          type="text"
          placeholder="Search location"
          className="bg-gray-200 px-5  rounded-3xl flex-1 h-11 focus:outline-none"
        />
        <label htmlFor="search"><MagnifyingGlassIcon className="h-6 text-gray-400  " /></label>
      </div>



      
      <div className="flex">
        <p className="text-2xl font-semibold">Travel Plannings</p>
      </div>

      <div id="removed_scroll" className=' flex   gap-x-4 gap-y-4  overflow-auto'>
        {data.map((item) => (
          <Travel key={item.id+item.title} item={item} />
        ))}
      </div>








      <div className=" flex items-center justify-between w-full">
        <p className="text-2xl font-semibold   ">Popular Place</p>
        <Link 
        to="/surfing"
        className="border ">See more</Link>
      </div>
      <div id="removed_scroll" className="flex w-screen  space-x-4 overflow-auto">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="bg-black text-gray-600  h-20 w-full rounded-full flex items-center justify-evenly p-4 ">
        
        
      

        <button><HomeIcon className="h-6 w-6"/></button>
        <button><DocumentTextIcon className="h-6 w-6"/></button>
        <button><MapPinIcon className="h-6 w-6"/></button>
        <button><UserIcon className="h-6 w-6"/></button>
      </div>
    </div>
  )
}

export default Home