import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrevSongs from "../assets/lists/previous.json";
import CurrentSongs from "../assets/lists/current.json";

function Filters() {
    const navigate = useNavigate();

    // Combine les deux tableaux en un seul et extrait les genres uniques
    const uniqueGenres = [
        ...new Set([
            ...PrevSongs.map((prevSong) => prevSong.genre),
            ...CurrentSongs.map((currentSong) => currentSong.genre)
        ])
    ].sort();

    const handleGenreClick = (genre) => {
        navigate(`${genre.toLowerCase()}`);
    };

    return (
        <div className="filters">
            <p className="border-b-2">Filtres</p>
            <ul className="filters-ul flex flex-wrap gap-2 p-3">
                {uniqueGenres.map((genre, index) => (
                    <li
                        key={index}
                        className="cursor-pointer p-2 hover:bg-textBase hover:text-bgColor"
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
