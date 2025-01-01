import React from "react";

interface SliderProps {
    content: React.ReactNode;
}

function SliderSongs({ content }: SliderProps){
    return (
        <div className="slider">
            <div className="s-header">
            </div>
            <div className="s-content flex ">
                {content}
            </div>
        </div>
    );
};

export default SliderSongs;
