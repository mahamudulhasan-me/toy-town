import React, { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4040/toys`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div>
      {toys.map((toy) => (
        <div key={toy._id} className="group">
          <img src={toy.image1}></img>
        </div>
      ))}
    </div>
  );
};

export default AllToys;
