import React from 'react';

const Tooltip = ({ text, children }) => {
    const [visible, setVisible] = React.useState(false);

    return (
        <div className="relative inline-block">
            <div
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
            </div>
            {visible && (
                <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-1 px-2 rounded">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
