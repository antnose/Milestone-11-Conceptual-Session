import { useLoaderData } from "react-router-dom";
import Caurousel from "../components/Caurosel/Caurosel";
import TabCategories from "../components/TabCategories/TabCategories";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <>
      <Caurousel />
      <TabCategories jobs={jobs} />
    </>
  );
};

export default Home;
