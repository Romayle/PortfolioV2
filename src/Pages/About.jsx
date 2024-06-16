import Details from "../Components/Details/Details";
import ImageGal from "../Components/ImageGal/ImageGal";
import SkillList from "../Components/SkillList/SkillList";

const About = () => {
    return (
        <div className="h-full w-full flex flex-col items-center">
            <Details />
            <SkillList />
            <ImageGal />
        </div>
    );
}

export default About