import React from "react";

function Card({children}) {
  return (
    <div className="card" style={{ backgroundColor: "#fff", color: "#000" }}>
      {children}
    </div>
  );
}

export default Card;
