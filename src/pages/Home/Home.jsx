import React from "react";
import Categories from "../../components/Categories/Categories";
import Container from "../../components/Shared/Container/Container";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  return (
    <>
      <Container>
        <Categories></Categories>
        <Rooms></Rooms>
      </Container>
    </>
  );
};

export default Home;
