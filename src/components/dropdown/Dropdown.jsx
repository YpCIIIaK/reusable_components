import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({
                      options = [],
                      placeholder = 'Select an option',
                      onChange,
                      disabled,
                      size,
                  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const sizeStyles = {
        sm: 'w-[200px]',
        md: 'w-[300px]',
        lg: 'w-[350px]'
    };

    const baseStyles = 'rounded-lg font-medium py-2 px-4 m-2 transition-all flex items-center border';

    return (
        <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} ref={dropdownRef}>
            <div
                className={`${baseStyles} ${sizeStyles[size]} bg-white text-black cursor-pointer`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
            >
                {selectedOption ? selectedOption.label : placeholder}
            </div>
            {isOpen && !disabled && (
                <div className={`${sizeStyles[size]} absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg`}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`${sizeStyles[size]} py-2 px-4 hover:bg-gray-100 cursor-pointer`}
                            onClick={() => {
                                setSelectedOption(option);
                                onChange(option);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
