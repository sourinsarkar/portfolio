import { RiBrushLine, RiGithubLine, RiHome4Line, RiLightbulbFlashLine, RiMailLine, RiMoonLine, RiTwitterLine } from "@remixicon/react";
import Link from "next/link";

export function Navbar() {
    const iconSize = 20;
    return (
        <nav className="inline-block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="flex items-center NavList space-x-2">
                <li><Link href="/"><RiHome4Line size={iconSize} /></Link></li>
                <li><Link href="/"><RiBrushLine size={iconSize} /></Link></li>
                <li><Link href="/"><RiLightbulbFlashLine size={iconSize} /></Link></li>
                <li><a target="_blank" href="https://github.com/sourinsarkar"><RiGithubLine size={iconSize} /></a></li>
                <li><a target="_blank" href="https://x.com/sourin_inc"><RiTwitterLine size={iconSize} /></a></li>
                <li><a target="_blank" href="mailto:work@sourin.in"><RiMailLine size={iconSize} /></a></li>
                <li><RiMoonLine size={iconSize} /></li>
            </ul>
        </nav>
    );
}