import { useLoaderData } from "react-router-dom";
import Caurousel from "../components/Caurosel/Caurosel";
import TabCategories from "../components/TabCategories/TabCategories";

const Home = () => {
  return (
    <>
      <Caurousel />
      <TabCategories />
    </>
  );
};

export default Home;
