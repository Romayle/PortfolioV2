import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Assuming you're using react-router for routing

const NavBar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <div className="sticky top-0 w-full bg-white z-10 flex justify-center">
            <div className="w-full sm:w-3/5 flex justify-between p-4">
                <a className="pt-2 text-black font-bold text-xl" href={'/PortfolioV2/'}>ROMAYLE DHARMASENA</a>
                <nav className="-mb-px flex gap-6" aria-label="Tabs">
                    <a

                        className={`shrink-0 border-t-4 pt-2 ${activeTab === '/PortfolioV2/' ? 'border-black text-black' : 'border-transparent text-gray-500'} text-base font-medium hover:border-black hover:text-black`}
                        aria-current={activeTab === '/PortfolioV2/' ? 'page' : undefined}
                    >
                        <Link to={"/PortfolioV2/"}>Home</Link>
                    </a>
                    <a
                        // href="/PortfolioV2/about"
                        className={`shrink-0 border-t-4 pt-2 ${activeTab === '/PortfolioV2/about' ? 'border-black text-black' : 'border-transparent text-gray-500'} text-base font-medium hover:border-black hover:text-black`}
                    >
                        <Link to={"/PortfolioV2/about"}>About</Link> 
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
