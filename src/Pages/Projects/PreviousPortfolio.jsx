import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const PreviousPortfolio = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZbxcCy5O3gNpjVXCJ7zFnqE9zzO5HcRPiaVV9DDjW-AnEjM6hi3Kg3n4eKbr6HKU0GtIkkk5MwiVIY_HVt9ZGfvD1npJ744Q=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbr-Gm4moU_81ec2E-aNTDCJzVcgmx-uo2PR10Z4An1v-LbpfBxmealwoYFbyKeqfsgErfHnTcN-_ELV88zNPXoN4lkRPyi--8=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbHXuP2XwGrx478jb4x7Fo7_MUv9msSz4z5XqIelEGgYdHXMO9iP-3s4ecdoN6eu59GrtZW5Ug7IFWHi9fWNP012TxgHKiMRpM=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZRq_IJbf0FGBPcopc85r_B8RAqZ7qcohuA2h1XsVYyaDmS7hSEtr6oBBUp7_3i1rRnPmBSgJY5ZnARzQyhZcM8-qiuA8yMIOM=s1600-rw-v1"
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
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihbOwPU00WaMp0WsV9gsKl-Fn0fdlp2voiORleU5A_-qaWI1LvrjO5vOdBhpakyCEQppyH90_JMoDlp3w_xjVhgHMj_IaGgdcRg=s1600-rw-v1"}
                skillSet={skills}
            />
        </div>
     );
}
 
export default PreviousPortfolio;