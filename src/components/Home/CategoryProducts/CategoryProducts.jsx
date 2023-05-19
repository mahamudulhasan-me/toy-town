import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const CategoryProducts = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Classic");
  useEffect(() => {
    fetch(`http://localhost:4040/categories/${category}`)
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, [category]);
  return (
    <div className="">
      <SectionHeader name="Category" title="Choose Car By Category" />
      <div className="grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <Tabs>
            <TabList>
              <Tab onClick={() => setCategory("Classic")}>
                Classic Collectibles
              </Tab>
              <Tab onClick={() => setCategory("policePursuit")}>
                Police Pursuit
              </Tab>
              <Tab onClick={() => setCategory("Sports")}>Sports Speedsters</Tab>
            </TabList>

            <TabPanel>
              {toys.map((toy) => (
                <p key={toy._id}>
                  {toy.name}, {toy.category}{" "}
                </p>
              ))}
            </TabPanel>
            <TabPanel>
              {toys.map((toy) => (
                <p key={toy._id}>
                  {toy.name}, {toy.category}{" "}
                </p>
              ))}
            </TabPanel>
            <TabPanel>
              {toys.map((toy) => (
                <p key={toy._id}>
                  {toy.name}, {toy.category}{" "}
                </p>
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
