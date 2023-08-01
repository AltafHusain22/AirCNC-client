import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Shared/Loader/Loader";
import { AuthContext } from "../../Providers/AuthProvider";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
      });
  }, []);

  if (loading) { 
		return <Loader></Loader>
	}

  return (
 
      <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

        {
          rooms.map((room, index) =>
          
            <Card room={room} index ></Card>

           )
        }
      </div>
  
  );
};

export default Rooms;
