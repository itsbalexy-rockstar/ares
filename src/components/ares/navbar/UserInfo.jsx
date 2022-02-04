import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../actions/auth";

const UserInfo = () => {

  const {name} = useSelector(state => state.auth)
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <div className="ares__navbar-user">
      <h3>
        <i className="fas fa-user"></i>
        <span> {capitalizedName}</span>
      </h3>
      <button 
      className="btn-secondary"
      onClick={handleLogout}
      >Salir</button>
    </div>
  );
};

export default UserInfo;
