import React from "react";
import VideoEmbed from "../components/VideoEmbed.tsx";
import SongIdentity from "../components/SongIdentity.tsx";
import Collapses from "../components/Collapses.tsx";
import SliderSongs from "../components/SliderSongs.tsx";
import Current from "../assets/lists/current.json";
import PrevSongs from "../assets/lists/previous.json";
import fr from "../assets/lang/fr.json";

interface PrevSong {
    id: number;
    name: string;
    band: string;
    album: string;
    release: string;
    genre: string;
    url: string;
    month: string;
    year: string;
    cover: string;
    links?: {
        spotify?: string;
        deezer?: string;
    };
}

// Assurez-vous que PrevSongs est chargé correctement
console.log(PrevSongs);  // Vérifiez ici ce qui est importé

function Home() {
    return (
        <div className="home flex flex-col gap-2.5">
            {/* Titre principal */}
            <div className="main-title 
                flex 
                bg-[url('./assets/drum-set-1839383_1280.jpg')] 
                bg-no-repeat 
                bg-cover ">
                <div className="mt-auto ml-0 bg-bgOpacity w-full h-full p-5 flex flex-col justify-between">
                    <div className=""> 
                        <h1 className="font-montserra text-6xl">Skorol Music</h1>
                        <h2 className="text-lg">{fr.subTitle}</h2>
                    </div>
                    <div className="flex flex-col">
                        <p className="m-0">Pour me suivre :</p>
                        <ul className="flex">
                            <li className="p-3 hover:bg-textBase hover:text-bgColor"><a href="https://www.instagram.com/skoroll_/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li className="p-3 hover:bg-textBase hover:text-bgColor"><a href="https://discord.gg/ypsABckuDt" rel="noreferrer" target="_blank"><i className="fa-brands fa-discord"></i> Discord</a></li>
                        </ul>   
                    </div>

                </div>
            </div>

            {/* Vidéos actuelles */}
            <div className="home-video flex flex-col">
                {Current.map((current) => (
                    <div key={current.id} className="home-song p-5 flex flex-col justify-center">
                        <Collapses
                            name={`${current.id}/ ${current.name}`}
                            divider="-"
                            band={current.band}
                            content={<SongIdentity lang={fr} origin={current} />}
                            video={
                                <VideoEmbed
                                    videoId={current.url}
                                    height="100%"
                                    width="100%"
                                    className="video-embed flex justify-stretch w-full lg:w-9/12 mr-auto ml-auto h-96 max-w-screen-lg"
                                />
                            }
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Home;
