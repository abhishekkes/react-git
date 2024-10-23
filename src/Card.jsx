import React, { useState } from "react";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        <div id={index}>
          <h2>{item.name}</h2>
          <p>{item.age}</p>
        </div>;
      })}
    </div>
  );
};

export default Card;
