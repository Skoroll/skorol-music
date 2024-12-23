import React, { useState } from "react";

interface CollapsesProps {
    name?: string,
    band?: string
    month?: string;
    year?: string;
    content?: React.ReactNode;
    video?: React.ReactNode;
}

function Collapses({ month, year, content, name, band, video }: CollapsesProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapses bg-bgCard rounded-lg">
            <div onClick={toggleCollapse} className="c-header p-3 cursor-pointer rounded hover:bg-textBase hover:text-bgColor">
               <p>
                    {isOpen? <i className="fa-solid fa-arrow-up mr-6"></i> : <i className="fa-solid fa-arrow-down mr-6"></i>}
                    {name} {month} - {year} {band}
                </p>
            </div>
            <div className="c-content flex p-3   rounded-xl" 
            style={{ display: isOpen ? "flex " : "none" }}>
                <div className="flex">
                {content}
                {video}
                </div>
                <div className="flex">
                    {/*Liens des groupes*/}
                </div>
            </div>
        </div>
    );
}

export default Collapses;
