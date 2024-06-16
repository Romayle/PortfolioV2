const SkillLayout = ({IconList}) => {
    return (

        <div>
            
            <div className='flex items-center gap-2 mb-10'>
                <div className='bg-cyan-700 rounded-full p-2'>
                    <Icon icon="ph:stack-bold" width="48" height="48" color='white' />
                </div>
                <h1 className='font-medium text-xl'>Tech Stack</h1>
            </div>
            <div className='grid grid-cols-2 gap-10'>
                {IconList.map((I, index) => (
                    <div key={index}>{I}</div>
                ))}
            </div>

        </div>

        // <div className='flex flex-col items-center'>

        //     <div className='flex items-center gap-2 mb-10'>
        //         <div className='bg-cyan-700 rounded-full p-2'>
        //             <Icon icon="ph:stack-bold" width="48" height="48" color='white' />
        //         </div>
        //         <h1 className='font-medium text-xl'>Tech Stack</h1>
        //     </div>

        //     <div className='grid grid-cols-2 gap-10'>
        //         {IconList.map((I, index) => (
        //             <div key={index}>{I}</div>
        //         ))}
        //     </div>

        // </div>
     );
}
 
export default SkillLayout;