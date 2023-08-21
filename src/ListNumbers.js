import React, { useState, useEffect } from "react";

const ListNumbers = ({ getNumbers }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers(15));
  }, [numbers]);

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default ListNumbers;
