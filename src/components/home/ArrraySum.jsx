import React from "react";

const ArrraySum = () => {
  const ARRAY = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < ARRAY.length; i++) {
    sum += ARRAY[i];
  }
  console.log(sum); 
  return <div></div>;
};

export default ArrraySum;
