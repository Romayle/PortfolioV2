import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const Gallery = () => {
    const Slides = [
        "/CarouselPics/Gallery/Sitemap.png",
        "/CarouselPics/Gallery/GalleryLoading.png",
        "/CarouselPics/Gallery/GalleryP1.png",
        "/CarouselPics/Gallery/GalleryP2.png",
        "/CarouselPics/Gallery/GalleryP3.png",
        "/CarouselPics/Gallery/GalleryP4.png",
        "/CarouselPics/Gallery/GalleryP5.png",
        "/CarouselPics/Gallery/GalleryHover.png"
    ]

    const skills = [
        <IconSet Icon={<Icon icon="logos:html-5" width="48" height="48" />} Name={"HTML"}/>,
        <IconSet Icon={<Icon icon="logos:css-3" width="48" height="48" />} Name={"CSS"}/>,
        <IconSet Icon={<Icon icon="tabler:brand-javascript" width="48" height="48" />} Name="JavaScript" />
    ]

    return ( 
        <div className="w-full h-full gal">
            <ProjectLayout 
                title={"Gallery & SiteMap"} 
                slides={Slides} 
                description={"I developed a professional web portfolio using React and Tailwind CSS to showcase my skills, projects, and experiences. The portfolio features a clean, responsive design optimized for both desktop and mobile devices, ensuring an excellent user experience across various screen sizes."}
                link={"/WebPics/Gallery.jpg"}
                skillSet={skills}
            />
        </div>
     );
}
 
export default Gallery;