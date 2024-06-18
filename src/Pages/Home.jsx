import LeftDisplayCard from "../Components/DisplayCard/LeftDisplayCard";
import RightDisplayCard from "../Components/DisplayCard/RightDisplayCard";
import Description from "../Components/Description/Description";

const Home = () => {

    return (
        <div className="h-full w-full sm:w-3/5">
            <Description />
            <LeftDisplayCard 
                title={"SIGNWAVE"}
                description={"Collaborated on the project as part of a second-year group project in developing a mobile application for the deaf community, featuring text to ASL, audio to ASL and video to ASL translation functionalities."} 
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihbiJOGsCYD_zWRlIQavzLLB7rD6dZgPEK5M8tp_exp9iMDUIS7As4iOykQmbgN131yVIWxIbrmCcj-b2MgVkQNQpQOTtTMWPQ=s1600-rw-v1"}
                string={"mobileapp"}
            />
            <RightDisplayCard 
                title={"TASK MANAGEMENT SYSTEM"}
                description={"Developed a Task Management Application utilizing the MERN stack (MongoDB, Express, React, and Node.js). This project highlights my proficiency in modern web development technologies through the creation of a dynamic and responsive user interface, robust server-side logic, and efficient data management."}
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpiha4njX66Sa0ThYovOxseGr609lbHGLrYX_DKVHK9MhPxV8wECzGqQWUkI4C8C72jkCh_qxOb6wMOBdesid-ZV5rKh8foNstwrk=s2560"}
                string={"taskmanagement"}
            />
            <LeftDisplayCard 
                title={"Gallery & Sitemap"}
                description={"Explore a showcase of my creative skills in a dynamic online format. Navigate through a collection of my work, including website designs, coding projects and creative endeavors."}
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihYoXz9JK6pKsgvHSzumfNJ6d67b2mpLdujWp-wE01g38-LQEadjb6q2gv_hB72afm4A0jIocsMJq5Q2Kg1hPxWdgZrXYLSmNA=s2560"}
                string={"gallery"}
            />
            <RightDisplayCard
                title={"PREVIOUS PORTFOLIO"}
                description={"My previously developed web portfolio using React and Tailwind CSS showcasing my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"https://lh3.googleusercontent.com/drive-viewer/AKGpihYqBDgeRHJnb4wAdbrYUfgN9Pj6plfngAo1KaAM5OjyMt0hN12wQ4_Pl_C4GPB2fIsvr7VYsjCmgVIstYShy_1eeG9PVxWKDw=s2560"}
                string={"previousportfolio"}
            />
        </div>
    );
}

export default Home