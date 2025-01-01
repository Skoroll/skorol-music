import React from "react";
import fr from "../assets/lang/fr.json";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate("/"); 
  };

  return (
    <nav className="flex justify-center p-2">
      <ul className="flex gap-5">
        <li className="cursor-pointer" onClick={handleHomeBtn}>{fr.navHome}</li>
        <li className="cursor-pointer">{fr.navAbout}</li>
      </ul>
    </nav>
  );
}

export default Nav;
