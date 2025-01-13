import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrevSongs from "../assets/lists/previous.json";
import CurrentSongs from "../assets/lists/current.json";

function Filters() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Combine les deux tableaux en un seul et extrait les genres uniques
  const uniqueGenres = [
    ...new Set([
      ...PrevSongs.map((prevSong) => prevSong.genre),
      ...CurrentSongs.map((currentSong) => currentSong.genre),
    ]),
  ].sort();

  const handleGenreClick = (genre) => {
    navigate(`${genre.toLowerCase()}`);
    setIsMenuOpen(false); // Ferme le menu après un clic sur un genre
  };

  return (
    <div className="filters">
      {/* Bouton pour afficher/masquer les filtres */}
      <button
        className="cursor-pointer border-b-2 p-2 text-lg bg-primaryColor text-white rounded md:hidden"
        onClick={toggleMenu}
      >
        Filtres
      </button>

      {/* Liste des filtres */}
      <ul
        className={`filters-ul flex flex-col md:flex-row flex-wrap gap-2 p-3  bg-bgColor transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
        } overflow-hidden md:overflow-visible`}
      >
        {uniqueGenres.map((genre, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-textBase hover:text-bgColor rounded "
            onClick={() => handleGenreClick(genre)}
          >
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
