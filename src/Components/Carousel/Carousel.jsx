import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const Carousel = ({children: slides, mobile}) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1: curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        const moveToNext = setInterval(next, 3000);
        return () => clearInterval(moveToNext);
    }, [curr, 3000]);

    return (
        <div className="relative rounded-xl p-3">
            <div className={`overflow-hidden ${mobile ? "rounded-[26px]" : "rounded-xl"}`}>
                <div className={`flex transition-transform ease-out duration-500 images ${mobile ? "w-[200px]" : ""}`} style={{ transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
            </div>
            
            <div className='absolute -inset-10 flex items-center justify-between'>    
                <button onClick={prev} className='bg-white rounded-full p-1'>
                    <Icon icon="material-symbols:keyboard-arrow-left" width="16" height="16" color='black' />
                </button>

                <button onClick={next} className='bg-white rounded-full p-1'>
                    <Icon icon="material-symbols:keyboard-arrow-right" width="16" height="16" color='black' />
                </button>
            </div>
        </div>
     );
}
 
export default Carousel;