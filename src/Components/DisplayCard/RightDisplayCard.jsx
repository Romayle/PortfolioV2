const  RightDisplayCard = ({title, description, link, string}) => {
    return (
        <div className="w-full bg-white flex flex-col items-center my-6 sm:flex-row">
            <img src={link} className="w-full sm:w-1/2"></img>
            <div className="w-full sm:w-1/2 text-black flex flex-col justify-center items-start gap-2 p-20">
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{description}</p>
                <button className="border-2 py-4 px-8 px-8 mt-5"><a href={`/projects/${string}`}>View Project</a></button>
            </div>
        </div>
    );
}

export default RightDisplayCard