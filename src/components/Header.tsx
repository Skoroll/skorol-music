import React from "react";
import Nav from "./Nav.tsx";

function Header() {
  return (
    <header className="bg-layoutColor flex-col">
      <h1 className="font-montserra text-center">Skorol Music</h1>
    <Nav/>

    </header>
  );
}

export default Header;
