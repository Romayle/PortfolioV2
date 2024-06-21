import ProjectLayout from "../../Components/ProjectLayout/ProjectLayout";
import IconSet from "../../Components/SkillList/IconSet";
import { Icon } from '@iconify/react';

const ShoppingCart = () => {
    const Slides = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihb6SAYX6TmnySpqI6wPH1TMge2EpxERywXhTPTjTyN4CT_fXCCwk79ZMnuOpvhRN4NBubE9q_u0CtbWV8Y9r88BtWyBJ0FqNpY=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZ407r8sDZv-mTJoURRRi2ZfhI5mgWCwajtOxooWXm_KOWa7jutU4zgw3_Cz5ewCXdMhzoYHu7PHDkUJFpt9zuZDgEJzB9dxLc=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbH1tYHLdNg7-EeXV4EN3QfB0-JndC2YnUBkyZnCa-DBTo9qQVFqzCgy3jV9MUniIVVWlcRdWdx5eHkaoQ6s_pAmHS6aQa7MNw=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaKRFAyKVCoDu0PhTzz6EFoz_fwGxlugRaSWnNBSFq_O1ompXdD0c9G-aNLH_hFXkS2emJVY76E2SRGKtf5SdUH9I3MEX_S_eQ=s1600-rw-v1"
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
                link={"https://images.unsplash.com/photo-1583077956273-7d4a69ab8e33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                skillSet={skills}
                gitLink={"https://github.com/Romayle/shopping-cart-system"}
            />
        </div>
     );
}
 
export default ShoppingCart;