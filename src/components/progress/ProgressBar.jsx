import React from 'react';

const ProgressBar = ({
                         progress,
                         size = 'md',
                         color = 'blue'
                    }) => {
    const baseStyles = 'rounded-full overflow-hidden';
    const sizeStyles = {
        sm: 'h-2',
        md: 'h-4',
        lg: 'h-6',
    };
    const colorStyles = {
        blue: 'bg-blue-600',
        green: 'bg-green-600',
        red: 'bg-red-600',
        gray: 'bg-gray-400',
    };

    const progressStyles = `${colorStyles[color]} h-full transition-all duration-300`;

    return (
        <div className={`${baseStyles} ${sizeStyles[size]} bg-gray-300`}>
            <div className={progressStyles} style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ProgressBar;
