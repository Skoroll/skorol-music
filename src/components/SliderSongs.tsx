import React from "react";

interface SliderProps {
    content: React.ReactNode;
    musicName?: string;
    musicBand?: string;
    divider?: string;
}

function SliderSongs({ content, musicName, musicBand, divider }: SliderProps){
    return (
        <div className="slider-content p-3 w-full sm:w-1/2 xl:w-1/3">
            <div className="s-header">
                <p>{musicName} {divider} {musicBand}</p>
            </div>
            <div className="s-content flex ">
                {content}
            </div>
        </div>
    );
};

export default SliderSongs;
