"use client";

import { RiArrowRightSLine, RiExternalLinkLine, RiTimeFill } from "@remixicon/react";
import NextIcon from "../../../public/icons/nexticon.svg";
import ReactIcon from "../../../public/icons/reacticon.svg";
import TailwindIcon from "../../../public/icons/tailwindicon.svg";
import NodeIcon from "../../../public/icons/nodeicon.svg";
import PGIcon from "../../../public/icons/pgicon.svg";
import GitIcon from "../../../public/icons/giticon.svg";
import GithubIcon from "../../../public/icons/githubicon.svg";
import CppIcon from "../../../public/icons/c++icon.svg";
import PythonIcon from "../../../public/icons/pythonicon.svg";
import FigmaIcon from "../../../public/icons/figmaicon.svg";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

export default function Home() {
    const iconWidth = 40;
    const iconHeight = 40;
    return (
        <div className="space-y-16">
            <section className="flex flex-col items-center mt-16">
                <div className="font-semibold flex flex-col items-center space-y-2">
                    <p className="flex items-center"><RiTimeFill size={16} /> 12:05 PM</p>
                    <h1 className="text-6xl tracking-tight">Sourin Sarkar</h1>
                </div>
                <p className="text-lg mt-5">Hi there, I’m a developer and designer based in Bengaluru, India.</p>
                <p className="text-lg text-center text-pri-400 mt-8 max-w-[600px]">Currently I’m building <span className="text-pri-700">software products</span>. Previously, I’ve worked in a startup as a <span className="text-pri-700">Frontend Developer</span>. Moreover, I <span className="text-pri-700">teach programming</span> and <span className="text-pri-700">design</span> on Discord groups and help people resolve their issues in code.</p>
            </section>

            <section className="flex justify-center">
                <ul className="flex space-x-14">
                    <li><Image src={NextIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={ReactIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={TailwindIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={NodeIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={PGIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={GitIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={GithubIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={CppIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={PythonIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                    <li><Image src={FigmaIcon} width={iconWidth} height={iconHeight} alt="Icon" /></li>
                </ul>
            </section>

            <section className="flex justify-center">
                <div className="flex items-center space-x-3">
                    <a href="https://google.com">
                        <button className="flex items-center rounded-full bg-pri-700 gap-0.5 text-white py-2 pl-5 pr-2.5 font-medium text-sm">
                            View Resume <span><RiArrowRightSLine size={20} /></span>
                        </button>
                    </a>
                    <div className="h-10 w-px bg-pri-50"></div>
                    <a target="_blank" href="mailto:work@sourin.in" className="text-[#00A12D] flex items-center gap-1.5">Open to opportnities <span><ArrowTopRightOnSquareIcon className="size-5"/> </span> </a>
                </div>
            </section>
        </div>
    );
}