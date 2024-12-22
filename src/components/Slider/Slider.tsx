import React from "react";

interface SliderProps {
    month: string;
    year: string;
    content: React.ReactNode;
}

function Slider({ month, year, content }: SliderProps){
    return (
        <div className="slider">
            <div className="s-header">
                {month} - {year}
            </div>
            <div className="s-content">
                {content}
            </div>
        </div>
    );
};

export default Slider;
