import React from 'react';

const Alert = ({
                   children,
                   type = 'info',
                   icon,
               }) => {
    const baseStyles = 'flex items-center w-[350px] p-4 m-2 rounded-lg';

    const typeStyles = {
        success: 'text-green-700 bg-green-100 border border-green-400',
        error: 'text-red-700 bg-red-100 border border-red-400',
        warning: 'text-yellow-700 bg-yellow-100 border border-yellow-400',
        info: 'text-blue-700 bg-blue-100 border border-blue-400',
    };

    const alertStyles = `${baseStyles} ${typeStyles[type]}`;

    return (
        <div className={alertStyles}>
            {icon && (
                <span className="mr-2 flex items-center">
                    {icon}
                </span>
            )}
            <span className="flex-1">{children}</span>
        </div>
    );
};

export default Alert;
