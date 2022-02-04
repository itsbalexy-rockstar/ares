import React from "react";

const MenuInfo = () => {
  return (
    <div className="ares__menu-info">
      <h3 className="ares__menu-title">Datos del menú seleccionado</h3>
      <p className="ares__menu-subtitle">
        Estos datos corresponden a un promedio entre los platos seleccionados
      </p>
      <div className="ares__menu-data">
        <div className="ares__menu-data-precio">
          <h4>Costo del menú</h4>
          <h5>0</h5>
        </div>
        <div className="ares__menu-data-promedio">
          <h4>Tiempo de preparación</h4>
          <h5>0 min</h5>
        </div>
        <div className="ares__menu-data-healtscore">
          <h4>Health Score</h4>
          <h5>0</h5>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
