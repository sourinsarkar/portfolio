"use client";

import { RiArrowRightSLine, RiTimeFill } from "@remixicon/react";
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
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { DashedBox } from "@/components/Navigation/DashedBorders";
import { DashedLine } from "@/components/Navigation/DashedBorders";

export default function Home() {
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");
    const [period, setPeriod] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { timeZone: "Asia/Kolkata", hour12: true };
            const timeString = now.toLocaleTimeString("en-US", options);
            const [hour, minute, secondAndPeriod] = timeString.split(":");
            const [second, period] = secondAndPeriod.split(" ");

            setHour(hour.padStart(2, '0'));
            setMinute(minute.padStart(2, '0'));
            setSecond(second.padStart(2, '0'));
            setPeriod(period);
        };

        updateTime();

        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const iconWidth = 40;
    const iconHeight = 40;
    return (
        <DashedBox className="mt-12">
            <div>
                <section className="flex flex-col items-center text-center py-7">
                    <div className="font-semibold flex flex-col items-center space-y-4">
                        <p className="flex items-center text-sm leading-none"><RiTimeFill size={16} /> {hour}:{minute} {period}</p>
                        <h1 className="text-6xl tracking-tight">Sourin Sarkar</h1>
                    </div>
                    <p className="text-lg mt-5">Hi there, I’m a developer and designer based in Bengaluru, India.</p>
                    <p className="text-lg text-pri-400 mt-8 max-w-[600px]">Currently I’m building <span className="text-pri-700">software products</span>. Previously, I’ve worked in a startup as a <span className="text-pri-700">Frontend Developer</span>. Moreover, I <span className="text-pri-700">teach programming</span> and <span className="text-pri-700">design</span> on Discord groups and help people resolve their issues in code.</p>
                </section>

                <DashedLine orientation="horizontal" className="" />

                <section className="flex justify-center py-7">
                    <ul className="flex space-x-16">
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
                
                <DashedLine orientation="horizontal" className="" />
                
                <section className="flex justify-center py-7">
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
        </DashedBox>
    );
}