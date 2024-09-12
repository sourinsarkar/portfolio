import { RiBrushLine, RiGithubLine, RiHome4Line, RiLightbulbFlashLine, RiMailLine, RiMoonLine, RiTwitterLine } from "@remixicon/react";

export function Navbar() {
    const iconSize = 20;
    return (
        <nav className="inline-block fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <ul className="flex items-center NavList space-x-2">
                <li>    <RiHome4Line size={iconSize} /> </li>
                <li><RiBrushLine size={iconSize} /> </li>
                <li><RiLightbulbFlashLine size={iconSize} /> </li>
                <li><RiGithubLine size={iconSize} /> </li>
                <li><RiTwitterLine size={iconSize} /> </li>
                <li><RiMailLine size={iconSize} /> </li>
                <li><RiMoonLine size={iconSize} /> </li>
            </ul>
        </nav>
    );
}