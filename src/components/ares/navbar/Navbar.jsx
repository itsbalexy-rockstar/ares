import React from "react";
import MenuInfo from "./MenuInfo";
import MenuUser from "./MenuUser";
import UserInfo from "./UserInfo";

const Navbar = () => {
  return (
    <aside className="ares__navbar">
      <UserInfo />
      <hr />
      <MenuUser />
      <hr />
      <MenuInfo />
      <div className="ares__contador">
        <h1>Platos seleccionados</h1>
        <h1>0/4</h1>
      </div>
    </aside>
  );
};

export default Navbar;
