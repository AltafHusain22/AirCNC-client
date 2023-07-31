import React, { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import Card from "../Card/Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  return (
 
      <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

        {
          rooms.map((room, index) =>
          
           <Card></Card>

           )
        }
      </div>
  
  );
};

export default Rooms;
