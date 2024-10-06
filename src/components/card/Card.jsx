import React from 'react';

const Card = ({ title, content, styleType, size, onClick }) => {
    const baseStyles = 'rounded-lg p-4 m-2 transition-all';

    const sizeStyles = {
        sm: 'w-[200px]',
        md: 'w-[300px]',
        lg: 'w-[400px]',
    };

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    return (
        <div
            className={`${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]}`}
            onClick={onClick}
        >
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {content && <p className="mt-2">{content}</p>}
        </div>
    );
};

export default Card;
