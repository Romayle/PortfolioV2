import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const Gallery = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihavyeWh4LKzndmZelBLMs05TCrM3nUx8DzW9MVBUnCIA54OnyDs-Lv7dH9AO3OJ651PHhGHiY9FKGX8Do7_7CM3pSFu56PhQco=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpiha-Gut89M_xvyFjb_9v3DbZmoLGxs_S0A-GLy95ZOZ_YlqN4tKzNPOrmrr7fbgciNFiFJVf4-N6511vR8EdW_JQvzQjYVHV09o=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbtkKJy-qn3MOR9P4_5ZTOHSVoTTLeE0aSxhvwGwb8iwvtuR_zbLv0vgCU74CDKRcEcNmLmKRgWbz2hlZ6g-_iBkKF7MmtfwiM=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaydSaM8jdbT5cg31WbNu4_JHaby4Nt8nqng_rapnCKRLqcJQ_hiFxOHqKVbLgD5cTpjnVewfuunJLz0zL-SFaAzDGfrC82RpU=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYQiM80vQ5TP8ZRT0ZbgIT8rCQINCBMu-XloWrQxagTkMTUL-dpJM6Jlx4PCHNcs8Uxmp2nQn5uFdc0DiIyqmszTg5So5A2hg=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbQ-xk1dBxTrQMbzJXK-60mBpxukQ5QebWmDxDzBrxXsjhdY706Yz96F0VIwz60p-__Zy6nto9tbCgmU4G9OgpihSb7oKl9qok=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbRWblwwTYWwxssHikYpb6eT1RItvHhdxp6GrqfiQ2TnUHWLQBkc4hZI5mT4fUIAOa8GkKjR7PnejXYO2bDXNRuUnypZow-6XU=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYlvow6EhgWoBHyV5EZyyMPA3FdNnEYMSNPVbRX9rz0EdOUCLrU8ROd0tRjO_KsIm2kzEmHeGP1-FWdOfQ-dHAsyAdWit9tmiE=s1600-rw-v1"
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
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihZea2-7sge-tCEzLSkdn6gY_k6EywEAx4sb6bb85ODxUqGtNBeCb0OqSYRE88SMqhRC0x-hhCDp8YKuLt1WemA3o1FWIh4Saw=s1600-rw-v1"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/gallery-web-page"}
            />
        </div>
     );
}
 
export default Gallery;