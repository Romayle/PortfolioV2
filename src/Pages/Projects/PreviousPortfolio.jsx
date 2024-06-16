import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const PreviousPortfolio = () => {
    const Slides = [
        "/CarouselPics/PreviousPortfolio/Home.png",
        "/CarouselPics/PreviousPortfolio/About.png",
        "/CarouselPics/PreviousPortfolio/Projects.png",
        "/CarouselPics/PreviousPortfolio/Contact.png"
    ]

    const skills = [
        <IconSet Icon={<Icon icon="logos:react" width="48" height="48" />} Name={"React"} />,
        <IconSet Icon={<Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" />} Name={"Tailwind"} />
    ]

    return ( 
        <div className="w-full h-full">
            <ProjectLayout 
                title={"PREVIOUS PORTFOLIO"} 
                slides={Slides} 
                description={"I developed a professional web portfolio using React and Tailwind CSS to showcase my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"/WebPics/Portfolio.jpg"}
                skillSet={skills}
            />
        </div>
     );
}
 
export default PreviousPortfolio;