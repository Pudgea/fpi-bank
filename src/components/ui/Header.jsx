import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo-box-shadow"></div>
        <img
          src="https://holder.io/ru/wp-content/uploads/coins/4/fpibank-90024.webp"
          alt=""
        />
      </div>
      <nav>
        <ul>
          <li>Прямые эфиры</li>
          <li>Ассортимент</li>
          <li className="primary">Конкуренты</li>
          <li className="btn">Заказать отчет</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
