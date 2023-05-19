import React, { useEffect, useState } from "react";

const ToyDetails = ({ toyId }) => {
  const [toy, setToy] = useState({});
  const [id, setId] = useState(toyId);

  useEffect(() => {
    fetch(`http://localhost:4040/toy-details/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [id]);

  return <div>ToyDetails {toy.name}</div>;
};

export default ToyDetails;
