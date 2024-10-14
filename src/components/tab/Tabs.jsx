import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange, styleType = 'black' }) => {
    const baseStyles = 'flex mb-4';
    const tabStyles = `mr-1 py-2 px-4 transition-all flex items-center justify-center w-32 text-center`;

    const styleTypes = {
        black: 'bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-600',
        gray600: 'bg-gray-600 text-white hover:bg-gray-500 active:bg-gray-400',
        white: 'bg-white text-black hover:bg-gray-200 active:bg-gray-300',
    };

    return (
        <div>
            <div className={baseStyles}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => onTabChange(tab.name)}
                        className={`${tabStyles} ${styleTypes[styleType]} ${activeTab === tab.name ? 'font-bold' : 'text-gray-300'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
                {tabs.find(tab => tab.name === activeTab)?.content}
            </div>
        </div>
    );
};

export default Tabs;
