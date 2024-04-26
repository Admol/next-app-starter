// components/Hero.js

const Header = () => {

    return (
        <>
            <div className="navbar  z-20 mt-2 mb-2 mx-auto flex h-14 w-full max-w-5xl flex-row flex-nowrap items-stretch justify-between bg-white py-3 duration-1000 ease-in-out animate-in fade-in slide-in-from-top-4 px-4 sm:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="text-lg">FAQ </a>
                            </li>
                            <li>
                                <a>Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <div className="relative inline-block">
                            <img className="inline-block size-8 rounded"
                                 src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                 alt="Image Description">
                            </img>
                        </div>
                        <h1>App Star</h1>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li>
                            <a href="/faq">FAQ </a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-neutral-100">LOG IN</a>
                </div>
            </div>
        </>
    );
};

export default Header;