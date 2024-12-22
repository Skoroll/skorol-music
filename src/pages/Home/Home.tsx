import React from "react";
import VideoEmbed from "../../components/VideoEmbed/VideoEmbed.tsx";
import Current from "../../assets/lists/current.json";
import fr from "../../assets/lang/fr.json"
import SongIdentity from "../../components/SongIdentity/SongIdentity.tsx";

function Home() {
    return (
        <div className="home flex-col">
            <h1>Skorol Music</h1>
            <h2>{fr.subTitle}</h2>

            <div className="home-video flex flex-col gap-10">
                {Current.map((current) => {
                    return (
                        <div key={current.id} className="home-song p-5 flex flex-col justify-center">
                    <SongIdentity lang={fr} origin={current}/>
                    <VideoEmbed videoId={current.url} />
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home