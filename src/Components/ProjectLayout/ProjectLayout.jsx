import Carousel from "../Carousel/Carousel";

const ProjectLayout = ({title, slides, description, link, skillSet, mobile}) => {
    return ( 
        <div className="w-full h-full text-black flex flex-col">
            <div className="bg-cover flex justify-center p-16" style={{backgroundImage: `url(${link})`, backgroundPosition: 'center bottom'}}>
                <div className={"w-4/5 flex flex-col justify-evenly items-center gap-12 h-full sm:flex-row"}>
                    <h1 className="text-4xl text-white font-semibold">{title}</h1>
                    <Carousel mobile={mobile}>
                        {slides.map((p) => (
                            <img className={""} src={p} />
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="bg-white flex-grow">
                <div className="w-3/5 mx-auto p-12 gap-10 flex flex-col">
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
                        <div className="flex justify-evenly">
                            {skillSet.map((icon, index) => (
                                <div key={index}>{icon}</div>
                            ))}
                        </div>
                    </div>
                    
                    {/* <div className="flex items-center gap-2">
                        <Icon icon="mdi:github" width="48" height="48"  style={{color: "black"}} />
                        <a href={''}>Click to View</a>
                    </div> */}

                </div>
                
            </div>
        </div>
     );
}
 
export default ProjectLayout;