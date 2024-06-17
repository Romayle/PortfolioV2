import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const MobileApp = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ5Gqi2duE5e_bKu7WqPHVA0NqvrftmsTw5iHwePJUi3hyd4BeULw_JUi7f1TiCK6ORFOpYm3HHH82SmOczekzJ_26ITRL40e0=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaZu6rWxLUA9dkeumkfBTYuCZJ7onF3qX1FEHvnw0iFNuWRWxFK2ePpPlLh0I0FtsVG3HtRh6dEuq63oomkHMrLPR660gQZ6w=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaeywfqMPj2jFWhG_6JAxCvcUUGjdbDgNfZpIWNnXI1omYwNIjvG45BQsivuIjL5aGI7uKkI33AVwODFtLIm85gU1l5Sp8VXw=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihamvnOJ08R1GSkDnrnrpnt2FciIDopNuxq1tdn5SQZBK4DE7ZwooQoZF4NrO5U9E-ul1guOh3xv0VaG0PJ5O8fFvTzzPXyD-Q=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbmo1sFEpGBnINi-S693UPbHAO4RigeC0razyYnBhj5fgI7tnXpQnQxMyjX5AabQ3Oln4rRDhDnS11Vr6ugrsaeediw1oEY2w=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbmo1sFEpGBnINi-S693UPbHAO4RigeC0razyYnBhj5fgI7tnXpQnQxMyjX5AabQ3Oln4rRDhDnS11Vr6ugrsaeediw1oEY2w=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaSTWYTQu7DeYAGFIf0-kIGIxRVNasyb_9DarKBLFTnqvYSuCBTn1tPaKgj1Jq4v2iYVmEPqhi8Iyq-e3JS_gRuhUF-TKbOcRw=s1600-rw-v1"
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
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihac2VjpJ6cYRKuVxpuppykL9FTGlPiO759Q1M0B4lVUqgBX8aY0edmh0NEZoCOrSXOrH2OnClN6Y3Zs-yJDqn0BiTvhjKByPg=s1600-rw-v1"}
                skillSet={skills}
                mobile={true}
            />
        </div>
     );
}
 
export default MobileApp;