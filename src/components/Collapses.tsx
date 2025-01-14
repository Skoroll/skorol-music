import React, { useState, useRef } from "react";

interface CollapsesProps {
    name?: string;
    band?: string;
    month?: string;
    year?: string;
    content?: React.ReactNode;
    video?: React.ReactNode;
    divider?: string
}

function Collapses({ month, year, content, name, band, video, divider }: CollapsesProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null); // Pour accéder à la hauteur du contenu

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="collapses bg-bgCard rounded-lg overflow-hidden">
            <div
                onClick={toggleCollapse}
                className="c-header p-3 cursor-pointer rounded hover:bg-textBase hover:text-bgColor"
            >
                <p>
                    {isOpen ? (
                        <i className="fa-solid fa-arrow-up mr-6"></i>
                    ) : (
                        <i className="fa-solid fa-arrow-down mr-6"></i>
                    )}
                    {name} {month} {divider} {year} {band}
                </p>
            </div>
            <div
                className={`transition-all duration-500 ease-in-out`}
                style={{
                    maxHeight: isOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div
                    ref={contentRef}
                    className="c-content flex flex-col-reverse p-3 rounded-xl sm:flex-col"
                >
                    <div className="c-identity-content flex-row lg:flex-col">
                        {content}
                    </div>
                    <div className="c-video flex w-full lg:w-full" style={{ display: video ? "flex" : "none" }}>
    {video}
</div>
                    <div className="flex">{
                    /* Liens des groupes */}
                    </div>
                    <div className="c-prevSongs">


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collapses;
