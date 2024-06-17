const SkillLayout = ({IconList}) => {
    return (
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
     );
}
 
export default SkillLayout;