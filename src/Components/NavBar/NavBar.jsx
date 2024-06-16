import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using react-router for routing

const NavBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <div className="sticky top-0 w-full bg-white z-10 flex justify-center">
            <div className="w-full sm:w-3/5 flex justify-between p-4">
                <a className="pt-2 text-black font-bold text-xl" href={'/'}>ROMAYLE DHARMASENA</a>
                <nav className="-mb-px flex gap-6" aria-label="Tabs">
                    <a
                        href="/"
                        className={`shrink-0 border-t-4 pt-2 ${activeTab === '/' ? 'border-black text-black' : 'border-transparent text-gray-500'} text-base font-medium hover:border-black hover:text-black`}
                        aria-current={activeTab === '/' ? 'page' : undefined}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className={`shrink-0 border-t-4 pt-2 ${activeTab === '/about' ? 'border-black text-black' : 'border-transparent text-gray-500'} text-base font-medium hover:border-black hover:text-black`}
                    >
                        About
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
