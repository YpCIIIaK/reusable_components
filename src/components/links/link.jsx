import React from 'react';

const Link = ({
                  children,
                  styleType = 'black',
                  onClick,
                  icon,
                  iconPosition = 'left',
                  disabled
              }) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium py-2 px-4 m-2 transition-all';

    const styleTypes = {
        black: 'text-white bg-black hover:bg-gray-800 active:bg-gray-700',
        gray600: 'text-white bg-gray-600 hover:bg-gray-700 active:bg-black',
        white: 'text-black bg-white hover:bg-gray-200 active:bg-gray-300',
    };

    const linkStyles = `${baseStyles} ${styleTypes[styleType]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

    return (
        <a
            className={linkStyles}
            onClick={disabled ? null : onClick}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        >
            <span className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
                {icon && <span className={`mr-2 ${iconPosition === 'right' ? 'ml-2' : ''}`}>{icon}</span>}
                {children}
            </span>
        </a>
    );
};

export default Link;
