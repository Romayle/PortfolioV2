const NavBar = () => {
    return (
        <div className="sticky top-0 w-screen bg-white z-10 flex justify-center">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full rounded-md border-gray-200">
                <option>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
                <option select>Notifications</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <div className="w-[60vw] flex justify-between p-4">
                    <a className="pt-2 text-black font-bold text-xl" href={'/'}>ROMAYLE DHARMASENA</a>
                    <nav className="-mb-px flex gap-6" aria-label="Tabs">
                        <a
                            href="/"
                            className="shrink-0 border-t-4 pt-2 border-black text-base font-medium text-black hover:border-black hover:text-black"
                            aria-current="page"
                        >
                            Home
                        </a>

                        <a
                            href="/about"
                            className="shrink-0 border-t-4 pt-2 border-transparent text-base font-medium text-gray-500 hover:border-black hover:text-black"
                        >
                            About
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar