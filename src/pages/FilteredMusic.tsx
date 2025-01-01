import React from "react";
import { useParams } from "react-router-dom";
import PrevSongs from "../assets/lists/previous.json";
import VideoEmbed from "../components/VideoEmbed.tsx";

function FilteredMusic() {
    const { genre } = useParams<{ genre: string }>();

    // Si `genre` est "all", affiche tous les morceaux
    const filteredSongs = genre === "all"
        ? PrevSongs
        : PrevSongs.filter(
              (song) => genre && song.genre.trim().toLowerCase() === genre.trim().toLowerCase()
          );

    return (
        <div>
            <h2>
                {genre
                    ? genre === "all"
                        ? "Tous les morceaux"
                        : genre.charAt(0).toUpperCase() + genre.slice(1)
                    : "Genre inconnu"}
            </h2>
            <div className="flex flex-wrap gap-4">
                {filteredSongs.map((song) => (
                    <VideoEmbed
                        key={song.id}
                        videoId={song.url}
                        height="300"
                        width="300"
                        className="filtered-music-video .sm:w-3/12"
                    />
                ))}
            </div>
        </div>
    );
}

export default FilteredMusic;
