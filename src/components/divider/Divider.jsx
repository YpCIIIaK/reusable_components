import React from 'react';

const Divider = ({ orientation = 'horizontal', thickness = '1px', color = 'gray', height = '100%' }) => {
    const baseStyles = {
        backgroundColor: color,
        ...(orientation === 'horizontal'
            ? { height: thickness, width: '100%' }
            : { width: thickness, height: height }),
    };

    return <div style={baseStyles} />;
};

export default Divider;
