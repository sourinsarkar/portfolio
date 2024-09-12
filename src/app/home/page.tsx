import { RiTimeFill } from "@remixicon/react";

export default function Home() {
    return (
        <div className="border border-pri-200 mt-12 rounded-3xl py-6">
            <section className="flex flex-col items-center">
                <div className="font-semibold flex flex-col items-center space-y-2">
                    <p className="flex items-center"><RiTimeFill size={16} /> 12:05 PM</p>
                    <h1 className="text-6xl tracking-tight">Sourin Sarkar</h1>
                </div>
                <p className="text-lg mt-5">Hi there, I’m a developer and designer based in Bengaluru, India.</p>
                <p className="text-lg text-center text-pri-400 mt-8 max-w-[600px]">Currently I’m building <span className="text-pri-700">software products</span>. Previously, I’ve worked in a startup as a <span className="text-pri-700">Frontend Developer</span>. Moreover, I <span className="text-pri-700">teach programming</span> and <span className="text-pri-700">design</span> on Discord groups and help people resolve their issues in code.</p>
            </section>
            <section></section>
            <section></section>
        </div>
    );
}