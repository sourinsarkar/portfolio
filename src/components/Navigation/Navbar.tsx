"use client";

import { RiArrowUpSLine, RiBrushLine, RiGithubLine, RiHome4Line, RiLightbulbFlashLine, RiMailLine, RiMoonLine, RiTwitterLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
    const iconSize = 20;

    const [visibility, setVisibility] = useState(false);
    
    const submenu = () => {
        setVisibility((previousValue) => (!previousValue));
    };

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="inline-block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="flex items-center NavList space-x-2">
                <li className={`${isActive('/home') ? 'shadow-is1' : ''}`} onClick={() => window.location.href = "/home"}>
                    <Link href="/home" onClick={(e) => e.stopPropagation()}><RiHome4Line size={iconSize} /></Link>
                </li>
                
                <li onClick={() => window.open("https://dribbble.com/sourinsarkar", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="https://dribbble.com/sourinsarkar" onClick={(e) => e.stopPropagation()}><RiBrushLine size={iconSize} /></a>
                </li>
                
                <li className={`${isActive('/projects') ? 'shadow-is1' : ''}`} onClick={() => window.location.href = "/projects"}>
                    <Link href="/projects" onClick={(e) => e.stopPropagation()}><RiLightbulbFlashLine size={iconSize} /></Link>
                </li>
                
                <li onClick={() => window.open("https://github.com/sourinsarkar", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="https://github.com/sourinsarkar" onClick={(e) => e.stopPropagation()}><RiGithubLine size={iconSize} /></a>
                </li>
                
                <li className="hidden min-[500px]:block" onClick={() => window.open("https://x.com/sourin_inc", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="https://x.com/sourin_inc" onClick={(e) => e.stopPropagation()}><RiTwitterLine size={iconSize} /></a>
                </li>
                
                <li className="hidden min-[500px]:block" onClick={() => window.open("mailto:work@sourin.in", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="mailto:work@sourin.in" onClick={(e) => e.stopPropagation()}><RiMailLine size={iconSize} /></a>
                </li>
                
                <li className="hidden min-[500px]:block"><RiMoonLine size={iconSize} /></li>
                <li className="block min-[500px]:hidden" onClick={submenu}><RiArrowUpSLine size={iconSize} /></li>
            </ul>

            <ul className={`NavList rounded-full p-1 border-pri-50 ring-1 ring-pri-50 bg-white space-y-2 absolute right-0 bottom-16 ${visibility ? "block" : "hidden" }`}>
                <li onClick={() => window.open("https://x.com/sourin_inc", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="https://x.com/sourin_inc" onClick={(e) => e.stopPropagation()}><RiTwitterLine size={iconSize} /></a>
                </li>
                
                <li onClick={() => window.open("mailto:work@sourin.in", "_blank", "noopener noreferrer")}>
                    <a target="_blank" href="mailto:work@sourin.in" onClick={(e) => e.stopPropagation()}><RiMailLine size={iconSize} /></a>
                </li>
                
                <li><RiMoonLine size={iconSize} /></li>
            </ul>
        </nav>
    );
}