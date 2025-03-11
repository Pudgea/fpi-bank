import React from "react";

const TariffBlock = ({ name, values, price }) => {
  return (
    <div className="tariff">
      <div className="tariff-name">
        <h2>{name}</h2>
        <div className="tn-line"></div>
        <h3 className="tn-price">{price}</h3>
      </div>
      <div className="tariff-values">
        {values.map(({ name, isIncluded }) => (
          <div className="tv-value">
            <p>{name}</p> <div className="tv-line"></div>
            <p className="tv-includes">{isIncluded ? "✓" : "⨉"}</p>
          </div>
        ))}
      </div>
      <button>Забрать с увоженьем</button>
    </div>
  );
};

export default TariffBlock;
