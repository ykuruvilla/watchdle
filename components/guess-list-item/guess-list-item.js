import React from "react";

const GuessListItem = ({ guess }) => {
  return (
    <li>
      <p>{guess.name}</p>
    </li>
  );
};

export default GuessListItem;
