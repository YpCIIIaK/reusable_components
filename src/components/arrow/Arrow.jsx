import React from 'react';

const Arrow = ({ direction, onClick }) => {
    const isLeft = direction === 'left';

    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded ${isLeft ? 'left-2' : 'right-2'}`}
        >
            {isLeft ? <span>&#8249;</span> : <span>&#8250;</span>}
        </button>
    );
};

export default Arrow;
