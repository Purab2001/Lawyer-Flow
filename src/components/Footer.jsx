import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const SocialMediaLinks = () => (
    <div className="grid grid-flow-col gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-white hover:text-blue-400 transition-colors">
            <FaFacebook size={25} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-white hover:text-blue-400 transition-colors">
            <FaSquareXTwitter size={25} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-white hover:text-blue-400 transition-colors">
            <FaLinkedin size={25} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel" className="text-white hover:text-red-500 transition-colors">
            <FaSquareYoutube size={25} />
        </a>
    </div>
);

const Footer = () => {
    return (
        <footer className="footer bg-black flex flex-col items-center text-white rounded p-6 md:p-9">
            <NavLink to="/" className="text-3xl font-extrabold flex items-center gap-2 text-white">
                <img className="w-16 h-16" src="../../src/assets/logo-footer.png" alt="Law.Flow Logo" />
                Law.Flow
            </NavLink>
            <nav className="grid grid-flow-col gap-4">
                <ul className="menu menu-horizontal px-1 font-medium text-base">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 rounded-none opacity-100 text-white' : 'opacity-70 text-white hover:opacity-100'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookings" className={({ isActive }) => isActive ? 'border-b-2 rounded-none opacity-100 text-white' : 'opacity-70 text-white hover:opacity-100'}>
                            Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={({ isActive }) => isActive ? 'border-b-2 rounded-none opacity-100 text-white' : 'opacity-70 text-white hover:opacity-100'}>
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'border-b-2 rounded-none opacity-100 text-white' : 'opacity-70 text-white hover:opacity-100'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="w-full border-t-2 border-dashed border-gray-700 "></div>
            <SocialMediaLinks />
        </footer>
    );
};

export default Footer;