import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PrevSongs from "../assets/lists/previous.json"


function Filters(){
    const navigate = useNavigate();
    const uniqueGenres = [...new Set(PrevSongs.map((prevSong) => prevSong.genre))].sort();

    const handleGenreClick = (genre) => {
        navigate(`${genre.toLowerCase()}`)
    }
    return(
        <div className="filters p-3">
            <p className="border-b-2">Filtres</p>
                <ul className="filters-ul flex flex-wrap gap-2 p-3">
                        {uniqueGenres.map((genre, index) => (
                            <li key={index}
                            className="cursor-pointer"
                            onClick={() => handleGenreClick(genre)}
                            >
                                {genre.charAt(0).toUpperCase() + genre.slice(1)}
                            </li>
                        ))}
                </ul>
        </div>
    )
}

export default Filters