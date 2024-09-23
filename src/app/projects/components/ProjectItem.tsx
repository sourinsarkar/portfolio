import { RiArrowRightUpLine, RiCodeSSlashFill, RiGithubLine } from "@remixicon/react";

interface ProjectItemProps {
    project_name: string;
    codelink?: string;
    code_status: boolean;
    link: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project_name, codelink, code_status, link }) => {
    const iconSize = 20;
    return (
        <li className="flex justify-between items-center group hover:text-[#0055FF] transition-colors duration-300">
            <div className="text-lg font-semibold">{project_name}</div>
            <div className="flex space-x-4">
                <a
                    href={codelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${code_status ? 'text-current group-hover:text-[#0055ff]' : "text-pri-400"}`}
                    >
                    <RiCodeSSlashFill size={iconSize} />
                </a>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${code_status ? 'text-current group-hover:text-[#0055ff]' : "text-pri-400"}`}
                >
                    <RiArrowRightUpLine size={iconSize} />
                </a>
            </div>
        </li>
    );
}