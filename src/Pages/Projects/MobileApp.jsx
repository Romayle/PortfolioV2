import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const MobileApp = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/d/1KkCVuvyFgqPmPv51NHW73InNKpWexK2F",
        "https://lh3.googleusercontent.com/d/1HXhJTPkYHBoI5YtT2kUfDic_vX8RDUIU",
        "https://lh3.googleusercontent.com/d/1YHSfwL0q6Ev175TAplZGMvhCqm5ABK7k",
        "https://lh3.googleusercontent.com/d/1aSC6O5UcV7Ea7m0nAKvzmBNn7pnXrEOI",
        "https://lh3.googleusercontent.com/d/1yFeDcYym-SEf3ssNr5PT_Vn9tKzJNExP",
        "https://lh3.googleusercontent.com/d/13ht2LKFl8qa12YQHYDcyrwX8E4H2V9vA",
        "https://lh3.googleusercontent.com/d/1JsZgG7g8w1e3LPf0dqkPq9NhF796XJlO",
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
                link={"https://lh3.googleusercontent.com/d/1csRvRE1-nXe5N9qPrSs4ca0oql8W5Ouw"}
                skillSet={skills}
                mobile={true}
                gitLink={"https://github.com/Deshan0802/SDGP"}
            />
        </div>
     );
}
 
export default MobileApp;