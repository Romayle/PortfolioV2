import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { Icon } from '@iconify/react';

const ProjectLayout = ({title, slides, description, link, skillSet, mobile, gitLink}) => {
    return ( 
        <div className="w-full h-full text-black">

            <div className="bg-cover" style={{backgroundImage: `url(${link})`}}>
                <div className={`mx-auto pt-3 flex flex-col justify-center items-center sm:justify-evenly sm:flex-row ${!mobile ? "sm:w-9/10" : "w-3/5"}`}>
                    <h1 className="w-4/5 text-3xl text-white font-semibold text-center sm:w-1/4 sm:text-4xl">{title}</h1>
                    <Carousel mobile={mobile}>
                        {slides.map((p) => (
                            <img className={""} src={p} />
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="bg-white sm:w-3/5 sm:mx-auto">
                <div className="w-full gap-8 flex flex-col p-8 sm:p-12">
                    <div>
                        <h1 className="text-pink-600">Project Title</h1>
                        <p className="text-2xl">{title}</p>
                    </div>
                    
                    <div>
                        <h1 className="text-pink-600">Project Description</h1>
                        <p className="text-base">{description}</p>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        <h1 className="text-pink-600">Technologies Used</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skillSet.map((icon, index) => (
                                <div key={index}>{icon}</div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-pink-600 mb-2">Github Link</h1>
                        <div className="flex gap-2 items-center">
                            <Icon icon="hugeicons:github" width="32" height="32"  style={{color: "black"}} />
                            <p><Link to={gitLink}>Click Me</Link></p>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
     );
}
 
export default ProjectLayout;