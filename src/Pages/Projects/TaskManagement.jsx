import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const TaskManagement = () => {
    const slides = [
        "https://lh3.googleusercontent.com/d/1k9FhkFOY8ua4Vd3nY7kAx8Gu2481nWfO",
        "https://lh3.googleusercontent.com/d/1p4Drn2V0sR7v3ydHOJ8l2ZPpsnmaX2zR",
        "https://lh3.googleusercontent.com/d/1zsBQi3U-NiT2WS3JctxYlgJwmKtuROnN",
    ];

    const skills = [
        <IconSet Icon={<Icon icon="logos:react" width="48" height="48" />} Name={"React"} />,
        <IconSet Icon={<Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" />} Name={"Tailwind"} />,
        <IconSet Icon={<Icon icon="logos:nodejs" width="48" height="48" />} Name={"NodeJs"} />,
        <IconSet Icon={<Icon icon="devicon:mongodb-wordmark" width="48" height="48" />} Name={"MongoDB"} />,
        <IconSet Icon={<Icon icon="skill-icons:expressjs-dark" width="48" height="48" />} Name={"ExpressJs"} />
    ]

    return (
        <div className="w-full h-full">
            <ProjectLayout 
                title={"TASK MANAGEMENT SYSTEM"} 
                slides={slides} 
                description={"Developed a comprehensive Task Management Application utilizing the MERN stack (MongoDB, Express, React, and Node.js). This project highlights my proficiency in modern web development technologies through the creation of a dynamic and responsive user interface, robust server-side logic, and efficient data management."}
                link={"https://lh3.googleusercontent.com/d/16vUxfuUry76xsPqiCcegelM5xGg-kTEX"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/Task-Management-System-MERN"}
            />
        </div>
    );
};

export default TaskManagement;
