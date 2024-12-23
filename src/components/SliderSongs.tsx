import React from "react";

interface SliderProps {
    month: string;
    year: string;
    content: React.ReactNode;
}

function SliderSongs({ month, year, content }: SliderProps){
    return (
        <div className="slider">
            <div className="s-header">
                {month} - {year}
            </div>
            <div className="s-content flex ">
                {content}
            </div>
        </div>
    );
};

export default SliderSongs;
