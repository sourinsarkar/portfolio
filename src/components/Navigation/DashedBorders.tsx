import { useEffect, useRef, useState, ReactNode } from "react"

interface DashedBoxProps {
    children: ReactNode;
    className?: string;
}

export const DashedBox = ({ children, className }: DashedBoxProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if(!contentRef.current) return;

        const currentContentRef = contentRef.current;

        const updateDimensions = () => {
            if(currentContentRef) {
                setDimensions({
                    width: currentContentRef.offsetWidth,
                    height: currentContentRef.offsetHeight,
                });
            };
        };

        // Just for intial dimensions
        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(currentContentRef);

        return () => {
            if(currentContentRef) {
                resizeObserver.unobserve(currentContentRef);
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
                    strokeWidth="1"
                    strokeDasharray="8 4"
                    rx="24" ry="24"
                />    
            </svg>
            <div className={`relative z-10 ${className}`}>
                {children}
            </div>
        </div>
    );
};

// Dashed Line code ------------------------------------------------------------------------

interface DashedLineProps {
    className?: string;
    orientation: "horizontal" | "vertical";
    length?: number;
}

export const DashedLine = ({ className, orientation = "horizontal", length }: DashedLineProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if(!contentRef.current) return;

        const currentContentRef = contentRef.current;

        const updateDimensions = () => {
            if(currentContentRef) {
                setDimensions ({
                    width: currentContentRef.offsetWidth,
                    height: currentContentRef.offsetHeight,
                });
            };
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(currentContentRef);

        return () => {
            if(currentContentRef) {
                resizeObserver.unobserve(currentContentRef);
            };
        };
    }, []);

    const lineLength = length || (orientation == "horizontal" ? dimensions.width : dimensions.height);

    return (
        <div className={`relative ${className}`} ref={contentRef}>
            <svg
                className="absolute left-0 top-0 pointer-events-none"
                width={orientation ==  "horizontal" ? lineLength : 2}
                height={orientation ==  "vertical" ? lineLength : 2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1 = { orientation == "horizontal" ? 0 : 1 }
                    y1 = { orientation == "horizontal" ? 1 : 0 }
                    x2 = { orientation == "horizontal" ? lineLength : 1 }
                    y2 = { orientation == "horizontal" ? 1 : lineLength }
                    stroke="#CED4DA"
                    strokeWidth="1"
                    strokeDasharray="8 4"
                />
            </svg>
        </div>
    );
};