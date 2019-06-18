import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <div>
      <p>Items: {totalCounters}</p>
    </div>
  );
};

export default Navbar;
