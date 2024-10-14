import React from 'react';

const Footer = ({ links, text, styleType = 'black' }) => {
    const baseStyles = 'flex flex-col items-center justify-center p-4 rounded-lg shadow-md';

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const footerStyles = `${baseStyles} ${styleTypes[styleType]}`;

    return (
        <footer className={footerStyles}>
            {text && <div className="mb-2 text-center">{text}</div>}
            <div className="flex space-x-4">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className="hover:underline focus:outline-none"
                        onClick={() => link.onClick()}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
