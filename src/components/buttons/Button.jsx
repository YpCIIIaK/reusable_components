import React from 'react';

const Button = ({ children, styleType }) => {
    const baseStyles = 'rounded-lg text-center font-medium py-2 px-4 m-2 transition-all';

    const styleTypes = {
        black: 'bg-black text-white hover:bg-gray-800 active:bg-gray-700',
        gray600: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-black',
        white: 'bg-white text-black hover:bg-gray-200 active:bg-gray-300',
    };

    return (
        <button className={`${baseStyles} ${styleTypes[styleType]}`}>
            {children}
        </button>
    );
};

export default Button;
