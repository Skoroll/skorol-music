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
        <div className="collapses">
            <div onClick={toggleCollapse} className="c-header cursor-pointerw">
               <p>
                    {name} {month} - {year} {band}
                </p>
            </div>
            <div className="c-content flex-col " style={{ display: isOpen ? "flex " : "none" }}>
                {content}
                {video}
            </div>
        </div>
    );
}

export default Collapses;
