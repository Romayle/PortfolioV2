import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const TaskManagement = () => {
    const slides = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbEkx7xsXGBuo-2hj02Y8CVfaKLoHWN7moBa2Z9IcxOdPYhd2Lu3lar0EkLb0F0p3qKhmzOHQcOnssNR8UlscOqe2JhN8bd774=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaPtSPAQ6gPjLR10e95LEAqwP0so6Q6K38hvC6J8JmcWg1TRzjpPGywmCC7yOTPfNUFW28tLa6SQqbMWON9sXKyNH8qg_wkOzs=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZAo_kTiqQ_WcU6gnfFsLv_pmvR3wSzDRI74iOTv783uIh8lPhFp4vqtWqxV9VOvF8EMU-JTqv22OAeAiCyjqVu-4v4VXKwfQ=s1600-rw-v1"
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
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZL-pod4bsqHK2Ysu0CgaqQZehRV8-hG4I5mPTZSneLvGAOQFjo0mVyIPExluqMUoT9HP8qZ-Enby6m_pePNmHHvnj2ZCKmygM=s1600-rw-v1"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/Task-Management-System-MERN"}
            />
        </div>
    );
};

export default TaskManagement;
