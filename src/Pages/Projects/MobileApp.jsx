import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const MobileApp = () => {
    const Slides = [
        "/CarouselPics/SignWaveApp/Welcome.png",
        "/CarouselPics/SignWaveApp/Login.png",
        "/CarouselPics/SignWaveApp/Dashboard.png",
        "/CarouselPics/SignWaveApp/TextToASL.png",
        "/CarouselPics/SignWaveApp/AudioToASL.png"
    ]

    const skills = [
        <IconSet Icon={<Icon icon="logos:flutter" width="48" height="48" />} Name={"Flutter"}/>,
        <IconSet Icon={<Icon icon="bxl:flask" width="48" height="48" />} Name={"Flask"}/>
    ]

    return ( 
        <div className="w-full h-full">
            <ProjectLayout 
                title={"SignWave"} 
                slides={Slides} 
                description={"A Developed mobile application for assisting the deaf community, featuring text to ASL, audio to ASL and video to ASL translation functionalities. Additionally, implemented a floating doc feature for ASL output in YouTube videos. Collaborated on the project as part of a second-year group project."}
                link={"/WebPics/App.jpg"}
                skillSet={skills}
                mobile={true}
            />
        </div>
     );
}
 
export default MobileApp;