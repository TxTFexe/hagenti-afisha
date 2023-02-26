import React from "react";
import Search from "./Search";

function Header() {
    return(
        <>
        <header>
          <div className="logo">
            <a>Hagenti.Aфиша</a>
          </div>
          <Search />
          <div>
            <span>Иконки</span>
            <span>Иконки</span>
            <span>Иконки</span>
            <span>Иконки</span>
          </div>
        </header>
        </>
    );
}

export default Header;