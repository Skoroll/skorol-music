import React from "react";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed.tsx";
import SongIdentity from "../../components/SongIdentity/SongIdentity.tsx";
import Collapses from "../../components/Collapses/Collapses.tsx";
import Current from "../../assets/lists/current.json";
import fr from "../../assets/lang/fr.json"

function Home() {
    return (
        <div className="home flex flex-col flex-1 ">
            <h1 className="font-montserra">Skorol Music</h1>
            <h2>{fr.subTitle}</h2>

            <div className="home-video flex flex-col gap-10">
                {Current.map((current) => {
                    return (
                        <div key={current.id} className="home-song p-5 flex flex-col justify-center">
                            <Collapses name={current.name} band={current.band} content={<SongIdentity lang={fr} origin={current}/>} video={<VideoEmbed videoId={current.url}/>}/>

                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home