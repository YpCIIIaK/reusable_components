import React from 'react';

const Card = ({
                  title,
                  content,
                  styleType,
                  size,
                  onClick,
                  imageSrc,
                  buttonLabel,
                  onButtonClick
              }) => {
    const baseStyles = 'rounded-lg p-4 m-2 transition-all shadow-md hover:shadow-lg cursor-pointer';

    const sizeStyles = {
        sm: 'w-[200px]',
        md: 'w-[300px]',
        lg: 'w-[400px]',
    };

    const styleTypes = {
        black: 'bg-black text-white',
        gray600: 'bg-gray-600 text-white',
        white: 'bg-white text-black',
    };

    return (
        <div
            className={`${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]}`}
            onClick={onClick}
        >
            {imageSrc && <img src={imageSrc} alt={title} className="w-full h-auto rounded-t-lg mb-2" />}
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {content && <p className="mt-2">{content}</p>}
            {buttonLabel && (
                <button
                    onClick={onButtonClick}
                    className={`mt-4 py-2 px-4 rounded-lg ${styleType === 'black' ? 'bg-white text-black' : 'bg-black text-white'} transition-all`}
                >
                    {buttonLabel}
                </button>
            )}
        </div>
    );
};

export default Card;
