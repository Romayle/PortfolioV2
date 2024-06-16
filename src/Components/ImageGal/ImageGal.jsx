const ImageGal = () => {
    const Images = [
        "/Images/pic1.jpeg",
        "/Images/pic2.jpeg",
        "/Images/pic3.jpeg",
        "/Images/pic4.jpeg",
        "/Images/pic5.jpeg",
        "/Images/pic6.jpeg",
        "/Images/pic8.jpeg",
        "/Images/pic9.jpeg",
        "/Images/pic10.jpeg",
        "/Images/pic11.jpeg"
    ]

    return (
        <div className="w-full sm:w-3/5 text-black flex flex-col justify-center mt-7 sm:my-7">
            <div className="flex flex-col justify-center gap-6 items-center sm:flex-row">
                <h1 className="font-bold text-xl">My Leadership & Skills</h1>
                <p className="w-3/5">As a President of the User Experience Professional Association's Pratt Chapter, I am leading a team of five. In the year 2018-19, we host more than 30 UX events including professional talks, discussion panels, design competitions(Creative Jam with Adobe XD), and skill-building workshops in collaboration with industry experts from companies like Google, IBM, and Adobe.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
                {Images.map((i, index) => (
                    <img key={index} src={i} alt={`Community event ${index + 1}`} className="h-48 w-full object-cover" />
                ))}
            </div>
        </div>
    );
}
 
export default ImageGal;