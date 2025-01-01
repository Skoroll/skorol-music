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
        <div className="home flex flex-col gap-2.5">
            {/* Titre principal */}
            <div className="main-title flex-col p-5">
                <h1 className="font-montserra  text-xl ">Skorol Music</h1>
                <h2 className="  text-lg">{fr.subTitle}</h2>
                <ul className="flex gap-5">
                    <li><a href="https://www.instagram.com/skoroll_/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-instagram"></i> Instagram</a></li>
                    <li><a href="https://discord.gg/ypsABckuDt" rel="noreferrer" target="_blank"><i className="fa-brands fa-discord"></i> Discord</a></li>
                </ul>
            </div>
            {/* Vidéos actuelles */}
            <div className="home-video flex flex-col">
                {Current.map((current) => (
                    <div key={current.id} className="home-song p-5 flex flex-col justify-center">
                        <Collapses
                            name={`${current.id}/ ${current.name}`}
                            band={current.band}
                            content={<SongIdentity lang={fr} origin={current} />}
                            
                            video={
                                <VideoEmbed 
                                    videoId={current.url} 
                                    height="100%" 
                                    width="100%" 
                                    className="video-embed flex justify-stretch w-full lg:w-9/12 mr-auto ml-auto h-96 max-w-screen-lg"
                                    />}
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
                        <div className="flex flex-row gap-5 p-5 overflow-scroll w-full overflow-y-auto">
                            {PrevSongs.map((prevSong) => (
                                <SliderSongs
                                    key={prevSong.id}
                                    content={
                                        <VideoEmbed 
                                            height="170px" 
                                            width="270px" 
                                            videoId={prevSong.url} 
                                            className=""
                                            />}
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
