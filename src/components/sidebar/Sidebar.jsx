import React from 'react';

const Sidebar = ({ items, onItemClick, activeItem }) => {
    const baseStyles = 'rounded-lg text-center font-medium py-2 my-2 transition-all flex items-center justify-start';
    const activeStyles = 'bg-gray-800 text-white';
    const inactiveStyles = 'bg-white text-black hover:bg-gray-200';

    return (
        <div className="mb-2 w-64 bg-gray-100 p-4 shadow-md">
            {items.map((item, index) => {
                const isActive = activeItem === item.label;
                const itemStyles = `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`;

                return (
                    <div
                        key={index}
                        className={itemStyles}
                        onClick={() => onItemClick(item.label)}
                    >
                        {item.icon && <span className="mx-2">{item.icon}</span>}
                        {item.label}
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
