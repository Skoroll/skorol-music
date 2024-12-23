import React from "react";
import VideoEmbed from "../components/VideoEmbed.tsx";
import SongIdentity from "../components/SongIdentity.tsx";
import Collapses from "../components/Collapses.tsx";
import SliderSongs from "../components/SliderSongs.tsx";
import Current from "../assets/lists/current.json";
import PrevSongs from "../assets/lists/previous.json";
import fr from "../assets/lang/fr.json";

function Home() {
    return (
        <div className="home flex flex-col flex-1">
            {/* Titre principal */}
            <h1 className="font-montserra text-base">Skorol Music</h1>
            <h2>{fr.subTitle}</h2>

            {/* Vidéos actuelles */}
            <div className="home-video flex flex-col gap-10">
                {Current.map((current) => (
                    <div key={current.id} className="home-song p-5 flex flex-col justify-center">
                        <Collapses
                            name={current.name}
                            band={current.band}
                            content={<SongIdentity lang={fr} origin={current} />}
                            video={<VideoEmbed videoId={current.url} height="390" width="640" />}
                        />
                    </div>
                ))}
            </div>

            {/* Chansons des semaines précédentes */}
            <div>
                <h1>Chansons des semaines précédentes</h1>
                <Collapses
                    name={"Morceaux précédents"}
                    content={
                        <div className="flex flex-row gap-5">
                            {PrevSongs.map((prevSong) => (
                                <SliderSongs
                                    key={prevSong.id}
                                    month={prevSong.month}
                                    year={prevSong.year}
                                    content={<VideoEmbed videoId={prevSong.url} />}
                                />
                            ))}
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default Home;
