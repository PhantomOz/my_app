import React from "react";
import { Link } from "react-router-dom";

function Postcard({ id, title }) {
  const short = (str) => {
    return str.length > 15 ? `${str.substring(0, 15)}...` : str;
  };
  return (
    <div className="postcard-container">
      <h2>{id}</h2>
      <h3>{short(title)}</h3>
      <buton className="readmore">
        <Link to={`/post/${id}`}>Read More</Link>
      </buton>
    </div>
  );
}

export default Postcard;
