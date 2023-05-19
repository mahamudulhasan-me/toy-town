import React, { useEffect, useState } from "react";

const ToyDetails = ({ toyId }) => {
  const [toy, setToy] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4040/toy-details/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [toyId]);

  return (
    <div>
      ToyDetails {toyId} {toy.name}
    </div>
  );
};

export default ToyDetails;
