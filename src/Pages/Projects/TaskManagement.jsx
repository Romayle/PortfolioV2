import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const TaskManagement = () => {
    const slides = [
        "/CarouselPics/TaskSystem/Home.png",
        "/CarouselPics/TaskSystem/Delete.png",
        "/CarouselPics/TaskSystem/Add.png"
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
                link={"/WebPics/Task.jpg"}
                skillSet={skills}
            />
        </div>
    );
};

export default TaskManagement;
