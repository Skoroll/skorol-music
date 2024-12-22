import React from "react";
import fr from "../../assets/lang/fr.json";
function Nav() {
  return (
    <nav className="">
      <ul>
        <li>{fr.navHome}</li>
        <li>{fr.navAbout}</li>
      </ul>
    </nav>
  );
}

export default Nav;
