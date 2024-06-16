import { Icon } from '@iconify/react';
import IconSet from './IconSet';

const SkillList = () => {
    return ( 
        <div className="bg-white w-full text-black flex justify-center py-10">
            <div className="w-3/5 flex flex-col justify-center gap-5">
                
                <div className='flex flex-col justify-around sm:flex-row'>

                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-2 mb-10'>
                            <div className='bg-cyan-700 rounded-full p-2'>
                                <Icon icon="ph:stack-bold" width="48" height="48" color='white' />
                            </div>
                            <h1 className='font-medium text-xl'>Tech Stack</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <IconSet Icon={<Icon icon="logos:react" width="48" height="48" />} Name={"React"}/>
                            <IconSet Icon={<Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" />} Name={"Tailwind"}/>
                            <IconSet Icon={<Icon icon="logos:nodejs" width="48" height="48" />} Name={"Node"}/>
                            <IconSet Icon={<Icon icon="logos:flutter" width="48" height="48" />} Name={"Flutter"}/>
                            <IconSet Icon={<Icon icon="bxl:flask" width="48" height="48" />} Name={"Flask"}/>
                            <IconSet Icon={<Icon icon="skill-icons:java-light" width="48" height="48" />} Name={"Java Swing"}/>
                            <IconSet Icon={<Icon icon="devicon:mongodb-wordmark" width="48" height="48" />} Name={"MongoDB"} />
                            <IconSet Icon={<Icon icon="skill-icons:expressjs-dark" width="48" height="48" />} Name={"Express"} />
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-2 mb-10'>
                            <div className='bg-cyan-700 rounded-full p-2'>
                                <Icon icon="hugeicons:computer-programming-01" width="48" height="48" color='white'/>
                            </div>
                            <h1 className='font-medium text-lg'>Languages</h1>
                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <IconSet Icon={<Icon icon="skill-icons:java-dark" width="48" height="48" />} Name={"Java"}/>
                            <IconSet Icon={<Icon icon="logos:python" width="48" height="48" />} Name={"Python"}/>
                            <IconSet Icon={<Icon icon="logos:html-5" width="48" height="48" />} Name={"HTML"}/>
                            <IconSet Icon={<Icon icon="logos:css-3" width="48" height="48" />} Name={"CSS"}/>
                            <IconSet Icon={<Icon icon="tabler:brand-javascript" width="48" height="48" />} Name="JavaScript" />
                            <IconSet Icon={<Icon icon="mdi:language-r" width="48" height="48" />} Name={"R"}/>
                            <IconSet Icon={<Icon icon="logos:dart" width="48" height="48" />} Name={"Dart"}/>
                            <IconSet Icon={<Icon icon="arcticons:sqlite-editor" width="48" height="48" color='blue' />} Name={'SQL'}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

    // {
    //     const languagesArray = [
    //         <IconSet Icon={<Icon icon="logos:react" width="48" height="48" />} Name={"React"}/>,
    //         <IconSet Icon={<Icon icon="vscode-icons:file-type-tailwind" width="48" height="48" />} Name={"Tailwind"}/>,
    //         <IconSet Icon={<Icon icon="logos:nodejs" width="48" height="48" />} Name={"Node"}/>,
    //         <IconSet Icon={<Icon icon="logos:flutter" width="48" height="48" />} Name={"Flutter"}/>,
    //         <IconSet Icon={<Icon icon="bxl:flask" width="48" height="48" />} Name={"Flask"}/>,
    //         <IconSet Icon={<Icon icon="skill-icons:java-light" width="48" height="48" />} Name={"Java Swing"}/>,
    //         <IconSet Icon={<Icon icon="devicon:mongodb-wordmark" width="48" height="48" />} Name={"MongoDB"} />,
    //         <IconSet Icon={<Icon icon="skill-icons:expressjs-dark" width="48" height="48" />} Name={"Express"} />
    //     ]
    
    //     const technologyArray = [
    //         <IconSet Icon={<Icon icon="skill-icons:java-dark" width="48" height="48" />} Name={"Java"}/>,
    //         <IconSet Icon={<Icon icon="logos:python" width="48" height="48" />} Name={"Python"}/>,
    //         <IconSet Icon={<Icon icon="logos:html-5" width="48" height="48" />} Name={"HTML"}/>,
    //         <IconSet Icon={<Icon icon="logos:css-3" width="48" height="48" />} Name={"CSS"}/>,
    //         <IconSet Icon={<Icon icon="tabler:brand-javascript" width="48" height="48" />} Name="JavaScript" />,
    //         <IconSet Icon={<Icon icon="mdi:language-r" width="48" height="48" />} Name={"R"}/>,
    //         <IconSet Icon={<Icon icon="logos:dart" width="48" height="48" />} Name={"Dart"}/>,
    //         <IconSet Icon={<Icon icon="arcticons:sqlite-editor" width="48" height="48" color='blue' />} Name={'SQL'}/>
    //     ]
    
    //     return ( 
    //         <div className="bg-white w-full text-black flex justify-center py-10">
    //             <div className="w-3/5 flex flex-col justify-center gap-5">
                    
    //                 <div className='flex justify-around'>
    
    //                 <SkillLayout IconList={skills.languages.map((skill, index) => (
    //                         <IconSet key={index} Icon={<Icon icon={skill.icon} width="48" height="48" />} Name={skill.name} />
    //                     ))} />
                        
    //                     <SkillLayout IconList={skills.technologies.map((tech, index) => (
    //                         <IconSet key={index} Icon={<Icon icon={tech.icon} width="48" height="48" color={tech.color || "black"} />} Name={tech.name} />
    //                     ))} />
    
    //                 </div>
    
    //             </div>
    //         </div>
    //     );
    // }
}
 
export default SkillList;