import React from 'react';

const Input = ({
                   styleType = 'black',
                   placeholder,
                   onChange,
                   icon,
                   iconPosition = 'left',
                   disabled,
                   onFocus,
                   onBlur
               }) => {
    const baseStyles = 'rounded-lg font-medium py-2 px-4 m-2 transition-all flex items-center';

    const styleTypes = {
        black: 'bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500',
        gray600: 'bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500',
        white: 'bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300',
    };

    return (
        <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            {icon && (
                <span className={`absolute inset-y-0 ${iconPosition === 'left' ? 'left-2' : 'right-2'} flex items-center`}>
                    <span className={styleType === 'black' ? 'text-white' : 'text-black'}>
                        {icon}
                    </span>
                </span>
            )}
            <input
                type="text"
                className={`${baseStyles} ${styleTypes[styleType]} ${icon ? 'pl-10' : ''} ${iconPosition === 'right' ? 'pr-10' : ''}`}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
