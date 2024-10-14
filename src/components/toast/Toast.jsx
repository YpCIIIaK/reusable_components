import React from 'react';

const Toast = ({ message, onClose, styleType = 'black' }) => {
    const baseStyles = 'fixed bottom-4 right-4 rounded-lg p-4 transition-all flex items-center justify-between shadow-lg z-50';

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const toastStyles = `${baseStyles} ${styleTypes[styleType]}`;

    return (
        <div className={toastStyles}>
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-sm font-medium">
                Close
            </button>
        </div>
    );
};

export default Toast;
