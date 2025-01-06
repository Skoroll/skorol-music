import React from "react";
import { useParams } from "react-router-dom";
import PrevSongs from "../assets/lists/previous.json";
import CurrentSongs from "../assets/lists/current.json";
import VideoEmbed from "../components/VideoEmbed.tsx";

function FilteredMusic() {
    const { genre } = useParams<{ genre: string }>();

    // Combine les morceaux des deux fichiers JSON
    const combinedSongs = [...PrevSongs, ...CurrentSongs];

    // Si `genre` est "all", affiche tous les morceaux
    const filteredSongs = genre === "all"
        ? combinedSongs
        : combinedSongs.filter(
              (song) =>
                  genre &&
                  song.genre.trim().toLowerCase() === genre.trim().toLowerCase()
          );

    return (
        <div key={genre}>
            <h2 className="font-bold border-b w-32 p-2">
                {genre
                    ? genre === "all"
                        ? "Tous les morceaux"
                        : genre.charAt(0).toUpperCase() + genre.slice(1)
                    : "Genre inconnu"}
            </h2>
            <div className="flex flex-wrap gap-0">
                {filteredSongs.map((song) => (
                    <div
                        key={song.id}
                        className=" flex flex-col song-item p-3 w-full h-[370px] justify-between md:w-1/3 xl:w-1/2 "
                    >
                        <p>
                            {song.name} - {song.band}
                        </p>
                        <VideoEmbed
                            videoId={song.url}
                            height="300"
                            width="300"
                            className="filtered-music-video w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilteredMusic;
