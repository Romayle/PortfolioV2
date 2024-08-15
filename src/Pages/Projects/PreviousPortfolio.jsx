import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const PreviousPortfolio = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/d/17g39Dk2LQODHYFDGMqrkRyJ5_7w5gF6v",
        "https://lh3.googleusercontent.com/d/1YlGTjACoJOsbO9RzFbCW17oCZZVaE5zW",
        "https://lh3.googleusercontent.com/d/1fPrEI1c7eehbrvp1KNdqAcUy2bbN1CKQ",
        "https://lh3.googleusercontent.com/d/11ryMMFONTb6Ort9B7-fFnuzJ6oBSYzsE",
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
                link={"https://lh3.googleusercontent.com/d/18yuVJiFhkoww7HNex-TkWX-aJRsvkndB"}
                skillSet={skills}
                gitLink={"https://romayle.github.io/web-portfolio/"}
            />
        </div>
     );
}
 
export default PreviousPortfolio;