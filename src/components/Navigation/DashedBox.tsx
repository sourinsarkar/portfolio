import { useEffect, useRef, useState, ReactNode } from "react"

export const DashedBox = ({ children }: { children: ReactNode }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if(!contentRef.current) return;

        const updateDimensions = () => {
            if(contentRef.current) {
                setDimensions({
                    width: contentRef.current.offsetWidth,
                    height: contentRef.current.offsetHeight,
                });
            };
        };

        // Just for intial dimensions
        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(contentRef.current);

        return () => {
            if(contentRef.current) {
                resizeObserver.unobserve(contentRef.current);
            };
        };
    }, []);

    return (
        <div className="relative" ref={contentRef}>
            <svg
                className="absolute left-0 top-0 pointer-events-none"
                width={dimensions.width}
                height={dimensions.height}
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                    x="1" y="1"
                    width={dimensions.width - 2}
                    height={dimensions.height - 2}
                    fill="none"
                    stroke="#CED4DA"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    rx="24" ry="24"
                />    
            </svg>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};