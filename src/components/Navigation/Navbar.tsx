"use client";

import { RiArrowUpSLine, RiBrushLine, RiGithubLine, RiHome4Line, RiLightbulbFlashLine, RiMailLine, RiMoonLine, RiTwitterLine } from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const iconSize = 20;

    const [visibility, setVisibility] = useState(false);
    
    const submenu = () => {
        setVisibility((previousValue) => (!previousValue));
    };

    return (
        <nav className="inline-block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="relative flex items-center NavList space-x-2">
                <li><Link href="/home"><RiHome4Line size={iconSize} /></Link></li>
                <li><a target="_blank" href="https://dribbble.com/sourinsarkar"><RiBrushLine size={iconSize} /></a></li>
                <li><Link href="/projects"><RiLightbulbFlashLine size={iconSize} /></Link></li>
                <li><a target="_blank" href="https://github.com/sourinsarkar"><RiGithubLine size={iconSize} /></a></li>
                <li className="hidden min-[500px]:block"><a target="_blank" href="https://x.com/sourin_inc"><RiTwitterLine size={iconSize} /></a></li>
                <li className="hidden min-[500px]:block"><a target="_blank" href="mailto:work@sourin.in"><RiMailLine size={iconSize} /></a></li>
                <li className="hidden min-[500px]:block"><RiMoonLine size={iconSize} /></li>
                <li className="block min-[500px]:hidden" onClick={submenu}><RiArrowUpSLine size={iconSize} /></li>
                <ul className={`absolute right-0 bottom-16 rounded-full p-1 border-pri-50 ring-1 ring-pri-50 bg-white space-y-2 ${visibility ? "block" : "hidden" }`}>
                    <li><a target="_blank" href="https://x.com/sourin_inc"><RiTwitterLine size={iconSize} /></a></li>
                    <li><a target="_blank" href="mailto:work@sourin.in"><RiMailLine size={iconSize} /></a></li>
                    <li><RiMoonLine size={iconSize} /></li>
                </ul>
            </ul>
        </nav>
    );
}