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
                link={"https://lh3.googleusercontent.com/d/1B_fZIXmT8GzjvFOS7jNshNZWD-ZimpKE"}
                string={"mobileapp"}
            />
            <RightDisplayCard 
                title={"TASK MANAGEMENT SYSTEM"}
                description={"Developed a Task Management Application utilizing the MERN stack (MongoDB, Express, React, and Node.js). This project highlights my proficiency in modern web development technologies through the creation of a dynamic and responsive user interface, robust server-side logic, and efficient data management."}
                link={"https://lh3.googleusercontent.com/d/17bpUz7eBG6g-APX5X5VLjGQVTouguMW_"}
                string={"taskmanagement"}
            />
            <LeftDisplayCard 
                title={"GALLERY & SITEMAP"}
                description={"Explore a showcase of my creative skills in a dynamic online format. Navigate through a collection of my work, including website designs, coding projects and creative endeavors."}
                link={"https://lh3.googleusercontent.com/d/1_nLgc__XpmNVD22xt3ol130lkq7yubXF"}
                string={"gallery"}
            />
            <RightDisplayCard
                title={"PREVIOUS PORTFOLIO"}
                description={"My previously developed web portfolio using React and Tailwind CSS showcasing my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"https://lh3.googleusercontent.com/d/1fSg7VFsFsNKIv6vMS0PktJTZsnjNXUYs"}
                string={"previousportfolio"}
            />
            <LeftDisplayCard 
                title={"SHOPPING CART SYSTEM"}
                description={"Created a Java Swing-based Shopping Cart Management System facilitating easy browsing, item selection. Features include inventory management, total calculation, and seamless user interface, demonstrating expertise in Java programming and user-centric design."}
                link={"https://lh3.googleusercontent.com/d/1Mpf7P_Bfj1MeU2o1dNLut2PSv1o1CfRi"}
                string={"shoppingcart"}
            />
        </div>
    );
}

export default Home
