import React from "react";
import Nav from "./Nav.tsx";
import Filters from "./Filters.tsx";

function Header() {
  return (
    <header className="bg-layoutColor flex-col p-3">
      <h1 className="font-montserra text-center">Skorol Music</h1>
    <Nav/>
    <Filters/>
    </header>
  );
}

export default Header;
