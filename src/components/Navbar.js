import React from 'react';

const Navbar = () => {
    const navItems = <>
        <li><a href='/'>Plan Your Trip</a></li>
        <li><a href='/'>Book Experiences</a></li>
        <li><a href='/'>Book Andaman Ferry</a></li>
        <li><a href='/'>Travel Blog</a></li>
        <li><a href='/'>Contact Us</a></li>
        <li><button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button></li>
    </>
    return (
        <div className="navbar bg-base-100 drop-shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img src="https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;