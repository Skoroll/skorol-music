import React from "react";

interface SongIdentityProps {
    lang: {
      songTitle: string;
      songArtist: string;
      songAlbum: string;
      songRelease: string;
      songGenre: string;
    };
    origin: {
      name: string;
      band: string;
      album: string;
      release: string;
      genre: string;
    };
  }
  

function SongIdentity({ lang, origin }: SongIdentityProps) {
  return (
    <div className="song-identity flex justify-center">
      <ul className="flex flex-row gap-5">
        <li>{lang.songTitle} : {origin.name}</li>
        <li>{lang.songArtist} : {origin.band}</li>
        <li>{lang.songAlbum} : {origin.album}</li>
        <li>{lang.songRelease} : {origin.release}</li>
        <li>{lang.songGenre} : {origin.genre}</li>
      </ul>
    </div>
  );
}

export default SongIdentity;
