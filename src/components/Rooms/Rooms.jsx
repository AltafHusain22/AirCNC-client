import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Shared/Loader/Loader";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const { loading } = useContext(AuthContext);
  const [params, setParams] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filtered = data.filter(room => room.category === category); 
          setRooms(filtered);
        } else {
          setRooms(data)
        }
        
      });
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      {
        rooms && rooms.length > 0 ?  <div className=" mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {rooms.map((room, index) => (
          <Card room={room} index></Card>
        ))}
        </div> : <div className="mt-12">
            
            <Heading
              title="No rooms available in this category !"
              subtitle="Please Select other category !"
              center={true}
            
            ></Heading>

      </div>
      }
   </div>
  );
};

export default Rooms;
