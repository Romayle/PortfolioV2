import LeftDisplayCard from "../Components/DisplayCard/LeftDisplayCard";
import RightDisplayCard from "../Components/DisplayCard/RightDisplayCard";
import Description from "../Components/Description/Description";

const Home = () => {

    return (
        <div className="h-full w-full sm:w-3/5">
            <Description />
            <LeftDisplayCard 
                title={"SIGNWAVE"}
                description={"A Developed mobile application for assisting the deaf community, featuring text to ASL, audio to ASL and video to ASL translation functionalities. Additionally, implemented a floating doc feature for ASL output in YouTube videos. Collaborated on the project as part of a second-year group project."} 
                link={"https://static.wixstatic.com/media/3b2b7f_b57ecf60fa1b4158b878b32f0c5fb70b~mv2.png/v1/fill/w_446,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-1.png"}
                string={"mobileapp"}
            />
            <RightDisplayCard 
                title={"TASK MANAGEMENT SYSTEM"}
                description={"Developed a comprehensive task management application utilizing the MERN stack (MongoDB, Express, React, and Node.js). This project highlights my proficiency in modern web development technologies through the creation of a dynamic and responsive user interface, robust server-side logic, and efficient data management."}
                link={"https://static.wixstatic.com/media/3b2b7f_495f1bb0d62a45c4ae5c30bf5aa9bfd7~mv2.png/v1/crop/x_74,y_74,w_1124,h_902/fill/w_589,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3b2b7f_495f1bb0d62a45c4ae5c30bf5aa9bfd7~mv2.png"}
                string={"taskmanagement"}
            />
            <LeftDisplayCard 
                title={"Gallery & Sitemap"}
                description={"Explore a showcase of my skills, projects, and accomplishments in a dynamic online format. Navigate through a collection of my work, including website designs, coding projects and creative endeavors."}
                link={"https://static.wixstatic.com/media/3b2b7f_5c18f2bc463b4142b7350e36915f2a10~mv2.png/v1/crop/x_165,y_3,w_1040,h_973/fill/w_504,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gallery.png"}
                string={"gallery"}
            />
            <RightDisplayCard
                title={"PREVIOUS PORTFOLIO"}
                description={"I developed a professional web portfolio using React and Tailwind CSS to showcase my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"https://static.wixstatic.com/media/3b2b7f_41dfedb35d8a421a84edb5087ccdc21b~mv2.png/v1/crop/x_226,y_0,w_682,h_771/fill/w_378,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gallery%20Images3_0-Recovered-min.png"}
                string={"previousportfolio"}
            />
        </div>
    );
}

export default Home