import React from 'react';

const Spinner = ({ size = 'md', color = 'blue' }) => {
    const sizeStyles = {
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
    };

    const colorStyles = {
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
        gray: 'text-gray-400',
    };

    return (
        <svg
            className={`animate-spin ${sizeStyles[size]} ${colorStyles[color]}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0115.1-4.9A3.5 3.5 0 0118 9.5 8 8 0 004 12z"
            />
        </svg>
    );
};

export default Spinner;
