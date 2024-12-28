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
    <div className="song-identity flex justify-center p-5 lg:flex-row">
      <ul className="flex flex-col gap-5 ">
        <li className="flex flex-col">
          <span className="font-bold flex flex-col">{lang.songTitle}</span>  <span>{origin.name}</span>
        </li>
        <li>
          <span className="font-bold flex flex-col">{lang.songArtist}</span>  <span>{origin.band}</span>
        </li>
        <li>
          <span className="font-bold flex flex-col">{lang.songAlbum}</span>  <span>{origin.album}</span>
        </li>
        <li>
          <span className="font-bold flex flex-col">{lang.songRelease}</span>  <span>{origin.release}</span>
        </li>
        <li>
          <span className="font-bold flex flex-col">{lang.songGenre}</span>  <span>{origin.genre}</span>
        </li>
      </ul>
    </div>
  );
}

export default SongIdentity;
