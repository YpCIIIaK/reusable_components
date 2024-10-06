import React from 'react';

const Input = ({ styleType, placeholder, onChange }) => {
    const baseStyles = 'rounded-lg font-medium py-2 px-4 m-2 transition-all';

    const styleTypes = {
        black: 'bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500',
        gray600: 'bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500',
        white: 'bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300',
    };

    return (
        <input
            type="text"
            className={`${baseStyles} ${styleTypes[styleType]}`}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
