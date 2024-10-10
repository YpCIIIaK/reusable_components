import React from 'react';

const Bage = ({
                   children,
                   styleType = 'black',
                   size = 'md'
}) => {
    const baseStyles = 'rounded-lg text-center font-medium py-2 px-4 my-2 transition-all flex items-center justify-center';

    const sizeStyles = {
        sm: 'w-[50px]',
        md: 'w-[70px]',
        lg: 'w-[90px]',
        xl: 'w-[100px]',
    };

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    const bageStyles = `${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]}`

    return <div className={bageStyles}>{children}</div>;
};

export default Bage;