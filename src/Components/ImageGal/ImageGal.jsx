const ImageGal = () => {
    const Images = [
        "https://lh3.googleusercontent.com/d/17K94AtfSzwKNzBnmi_WA5MnOARE06AdS",
        "https://lh3.googleusercontent.com/d/1SPdWdSmKx0QDwWmKlQCsQmxJ7oI2tMHf",
        "https://lh3.googleusercontent.com/d/1ypc9808uZ0rD1QHTOxVfAbUu1-k-FTOQ",
        "https://lh3.googleusercontent.com/d/1WuOoo94OLwyGVxyo9wOIfcvbes4yodoL",
        "https://lh3.googleusercontent.com/d/1cmZJvtvJBweG6cpCdW8pURok0pvzmhCz",
        "https://lh3.googleusercontent.com/d/1mUdDvPssSd7N38k12_865cih5FX5IXZN",
        "https://lh3.googleusercontent.com/d/16xxYuon8oz3w2JreUtAZbErpk033oB6L",
        "https://lh3.googleusercontent.com/d/1ZOtxncr_-ghwF7ke7gTVAitRgvR0Aou7",
        "https://lh3.googleusercontent.com/d/148lvc70N5DkcxWhTpYn6BFo93HgWBEVy",
        "https://lh3.googleusercontent.com/d/1EaZMGRHri1_XvCs1SuW_Co5FDjAFeos4"
    ]

    return (
        <div className="w-full sm:w-3/5 text-black flex flex-col justify-center mt-7 sm:my-7">
            <div className="flex flex-col sm:justify-evenly gap-6 items-center sm:flex-row p-8">
                <h1 className="font-bold text-xl">My Leadership & Skills</h1>
                <div className="w-full sm:w-1/2">
                    <p className="mb-2">During my college days, I developed significant leadership skills. In 2020, I served as a College Prefect, where I led peers and coordinated events, enhancing my organizational and interpersonal abilities.</p>
                    <p>I also played a key role in organizing college events, which improved my attention to detail, teamwork, and communication. Additionally, as the Treasurer for the College's Aeronautical Society, I managed finances, budget planning, organizing various workshops and seminars. This role honed my financial management skills and emphasized responsibility and integrity.</p>
                </div>        
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
