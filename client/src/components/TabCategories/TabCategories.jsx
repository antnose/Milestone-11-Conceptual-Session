import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "../JobCard/JobCard";

const TabCategories = ({ jobs }) => {
  const {
    _id,
    job_title,
    category,
    deadline,
    description,
    min_price,
    max_price,
    buyer_email,
  } = jobs;
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
            <Tab>Web</Tab>
            <Tab>AI</Tab>
            <Tab>Data Science</Tab>
          </TabList>
        </div>

        <TabPanel>
          {jobs.map((job) => (
            <JobCard job={job} />
          ))}
        </TabPanel>

        <TabPanel>
          <JobCard />
        </TabPanel>

        <TabPanel>
          <JobCard />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
