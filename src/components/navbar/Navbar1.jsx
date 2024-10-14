import React from 'react';

const Navbar = ({ links, logo, styleType = 'black', onLinkClick }) => {
    const baseStyles = 'flex items-center justify-between p-4 shadow-md';

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const navbarStyles = `${baseStyles} ${styleTypes[styleType]}`;

    return (
        <nav className={navbarStyles}>
            {logo && <div className="text-xl font-bold">{logo}</div>}
            <div className="flex space-x-4">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className="hover:underline focus:outline-none"
                        onClick={() => onLinkClick(link)}
                    >
                        {link}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

