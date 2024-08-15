import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const ShoppingCart = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/d/142rLLd8oJ6iT9C7P0zIQySk2tN-JqC-d",
        "https://lh3.googleusercontent.com/d/143Md4W0QIylTYDQxILOuCHg_vVNbjWg_",
        "https://lh3.googleusercontent.com/d/1rqACvxrA22QeM3fXlCHNqfzhRQzHigMZ",
        "https://lh3.googleusercontent.com/d/1-2IswruotNqpQKkcZ6T8uUZX2e-rXmeJ",
    ]

    const skills = [
        <IconSet Icon={<Icon icon="skill-icons:java-light" width="48" height="48" />} Name={"Java Swing"}/>
    ]

    return ( 
        <div className="w-full h-full">
            <ProjectLayout 
                title={"Shopping Cart System"} 
                slides={Slides} 
                description={"Created a Java Swing-based Shopping Cart Management System facilitating easy browsing, item selection. Features include inventory management, total calculation, and seamless user interface, demonstrating expertise in Java programming and user-centric design."}
                link={"https://lh3.googleusercontent.com/d/1_NGM4dqFlcdgeukBgda-QpVyx8G4T3vb"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/shopping-cart-system"}
            />
        </div>
     );
}
 
export default ShoppingCart;