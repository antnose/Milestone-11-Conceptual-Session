import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <Tabs>
      <h1 className="text-2xl font-semibold text-center text-gray-300 capitalize lg:text-3xl ">
        Browse Jobs By Categories
      </h1>
      <p className="max-w-2xl mx-auto my-6 text-center text-gray-400 ">
        Discover opportunities tailored to your interests. Explore the latest
        jobs in Web Development, Artificial Intelligence, and Data Science—all
        in one place.
      </p>
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {jobs
              .filter((j) => j.category === "Web Development")
              .map((job, idx) => (
                <JobCard job={job} key={idx} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {jobs
              .filter((j) => j.category === "Graphics Design")
              .map((job, idx) => (
                <JobCard job={job} key={idx} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {jobs
              .filter((j) => j.category === "Digital Marketing")
              .map((job, idx) => (
                <JobCard job={job} key={idx} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
