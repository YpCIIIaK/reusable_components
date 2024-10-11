import React from 'react';

const Avatar = ({
                    src,
                    alt = 'User Avatar',
                    size = 'md',
                    border = false,
                    onClick,
                    styleType = 'default',
                }) => {
    const baseStyles = 'rounded-full transition-all m-2 flex items-center justify-center';

    const sizeStyles = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
    };

    const borderStyles = border ? 'border-2 border-gray-300' : '';

    const styleTypes = {
        default: '',
        rounded: 'shadow-md',
        squared: 'rounded-none',
    };

    const avatarStyles = `${baseStyles} ${sizeStyles[size]} ${borderStyles} ${styleTypes[styleType]}`;

    return (
        <div className={avatarStyles} onClick={onClick} role="button" tabIndex={0} onKeyPress={onClick}>
            {src ? (
                <img src={src} alt={alt} className="rounded-full object-cover w-full h-full" />
            ) : (
                <span className="text-gray-500">{alt.charAt(0)}</span>
            )}
        </div>
    );
};

export default Avatar;
