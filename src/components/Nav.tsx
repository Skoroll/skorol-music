import React from "react";
import fr from "../assets/lang/fr.json";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate("/"); 
  };

  const handleAboutBtn = () => {
    navigate("/a-propos")
  }
  return (
    <nav className="flex justify-center p-2">
      <ul className="flex gap-5">
        <li className="cursor-pointer p-2 hover:bg-textBase hover:text-bgColor" onClick={handleHomeBtn}>{fr.navHome}</li>
        <li className="cursor-pointer p-2 hover:bg-textBase hover:text-bgColor" onClick={handleAboutBtn}>{fr.navAbout}</li>
      </ul>
    </nav>
  );
}

export default Nav;
