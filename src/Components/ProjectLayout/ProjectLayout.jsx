import Carousel from "../Carousel/Carousel";

const ProjectLayout = ({title, slides, description, link, skillSet, mobile}) => {
    return ( 
        <div className="w-full h-full text-black flex flex-col">

            <div className="bg-cover flex justify-center p-3 sm:p-16" style={{backgroundImage: `url(${link})`, backgroundPosition: 'center bottom'}}>
                <div className={"sm:w-4/5 flex flex-col justify-between sm:justify-evenly items-center gap-12 h-full sm:flex-row"}>
                    <h1 className="text-3xl sm:text-4xl text-white font-semibold text-center">{title}</h1>
                    <Carousel mobile={mobile}>
                        {slides.map((p) => (
                            <img className={""} src={p} />
                        ))}
                    </Carousel>
                </div>
            </div>

            <div className="bg-white flex-grow sm:w-3/5 justify-center sm:mx-auto flex">
                <div className="w-full p-12 gap-10 flex flex-col">
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

                </div>
                
            </div>
        </div>
     );
}
 
export default ProjectLayout;