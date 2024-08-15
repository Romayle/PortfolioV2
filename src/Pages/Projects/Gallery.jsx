import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const Gallery = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/d/1fdZUHCamAacgyXKoZbIGsBLMOPP3GeGR",
        "https://lh3.googleusercontent.com/d/1IQFHFktCuTpDQfekPCAizlPDizQukk3N",
        "https://lh3.googleusercontent.com/d/1WUYlFjWF1wDlWSvXUfDTephi_sq3OY9o",
        "https://lh3.googleusercontent.com/d/1s2N9RUsWce3xq5xFF32DcubcXQDGC2f-",
        "https://lh3.googleusercontent.com/d/1g6kDCNAgcGG5wsb8Xl4Q_7_-cZWUboKw",
        "https://lh3.googleusercontent.com/d/1EwiW6Eu5Y72Z78NVV4D3b5d5QQ6YwAzA",
        "https://lh3.googleusercontent.com/d/1NZRDFXZtByh3SQB5oZLoCwj24Uyfl_ku",
        "https://lh3.googleusercontent.com/d/1Pyum7mItq39IU4Zdp73Vxvar8NqBuwsn",
    ]

    const skills = [
        <IconSet Icon={<Icon icon="logos:html-5" width="48" height="48" />} Name={"HTML"}/>,
        <IconSet Icon={<Icon icon="logos:css-3" width="48" height="48" />} Name={"CSS"}/>,
        <IconSet Icon={<Icon icon="tabler:brand-javascript" width="48" height="48" />} Name="JavaScript" />
    ]

    return ( 
        <div className="w-full h-full gal">
            <ProjectLayout 
                title={"Gallery & SiteMap"} 
                slides={Slides} 
                description={"I developed a professional web portfolio using React and Tailwind CSS to showcase my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"https://lh3.googleusercontent.com/d/1FwJZmQIm0Ra1CyD49RlE5I3xuFSsj1s7"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/gallery-web-page"}
            />
        </div>
     );
}
 
export default Gallery;