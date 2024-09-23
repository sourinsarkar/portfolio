import { RiArrowRightUpLine, RiCodeSSlashFill, RiGithubLine } from "@remixicon/react";

interface ProjectItemProps {
    project_name: string;
    code_link?: string;
    code_status: boolean;
    link: string;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({ project_name, code_link, code_status, link }) => {
    const iconSize = 18;
    return (
        <li className="flex justify-between items-center py-2.5 group hover:text-[#0055FF] transition-colors duration-300">
            <div className="text-2xl font-semibold cursor-pointer">{project_name}</div>
            <div className="flex space-x-3.5">
                <a
                    href={code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-pri-50 group-hover:bg-[#dde9ff] rounded-full border-pri-50 p-2.5 transition-colors duration-300 ${code_status ? 'text-current group-hover:text-[#0055ff]' : "text-pri-400"}`}
                    >
                    <RiCodeSSlashFill size={iconSize} />
                </a>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-pri-50 group-hover:bg-[#dde9ff] rounded-full border-pri-50 p-2.5 transition-colors duration-300 ${code_status ? 'text-current group-hover:text-[#0055ff]' : "text-pri-400"}`}
                >
                    <RiArrowRightUpLine size={iconSize} />
                </a>
            </div>
        </li>
    );
}