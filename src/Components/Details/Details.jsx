import { Icon } from '@iconify/react';

const Details = () => {
    return ( 
        <div className="w-full text-black flex flex-col items-center p-8 gap-8 sm:flex-row sm:w-3/5">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaCEezIWO1UA_BErnk5bRJ_vn0N2gQe3qUOyi5ikNLXWNdmGsWOJk6eLrJIa4cHc6RtNBXCXphczm3EAk4XKzWt8JUfG4cY4vs=s1600-rw-v1" alt="Profile" />
                </div>
                <div className="flex justify-center gap-4">
                    <a href='https://www.linkedin.com/in/romayle-dharmasena-0ab19326a/'><Icon icon="ri:linkedin-fill" width="32" height="32" style={{color: "black"}} /></a>
                    <a href='https://github.com/Romayle'><Icon icon="mingcute:github-fill" width="32" height="32" style={{color: "black"}} /></a>
                </div>
                <button className="border-2 border-gray-500 py-2 px-4">My Resume</button>
            </div>
            <div className="w-full flex flex-col justify-center gap-4 sm:w-4/5">
                <p className='w-full'>I have a strong passion for technology in the field of Software Development. My future ambitions and career goals is to become a full-stack / application developer with a particular focus on utilizing Machine Learning technology.</p>
                <p>Currently, I'm a Software Engineering second year undergraduate at IIT Sri Lanka. I am confident that with the right opportunities, guidance and dedication that I can achieve my goals and make a meaningful impact in the industry.</p>
            </div>
        </div>
    );
}
 
export default Details;