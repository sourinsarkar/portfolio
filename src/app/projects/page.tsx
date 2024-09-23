import { ProjectItem } from "./components/ProjectItem";

export default function Projects() {
    const projects = [
        {project_name: "Fontground", code_link: "http://github.com/sourinsarkar/fontground", code_status: true, link: "https://fontground.sourin.in"},
        {project_name: "Safepass", code_link: "http://github.com/sourinsarkar/safepass", code_status: true, link: "https://safepass.sourin.in"},
        {project_name: "SPM", code_link: "http://github.com/sourinsarkar/spm", code_status: true, link: "https://spm.sourin.in"},
    ];

    return (
        <div>
            <ul className="max-w-sm mx-auto mt-4">
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </ul>        
        </div>
    );
}