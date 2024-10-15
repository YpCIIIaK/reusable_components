import React, { useState } from 'react';

const DatePicker = ({
                        styleType = 'black',
                        size = 'md',
                        icon,
                        iconPosition = 'left',
                        disabled,
                        onDateChange,
                    }) => {
    const [selectedDate, setSelectedDate] = useState('');

    const baseStyles =
        'rounded-lg text-center font-medium py-2 px-4 my-2 transition-all flex items-center justify-center';

    const sizeStyles = {
        sm: 'w-[100px]',
        md: 'w-[200px]',
        lg: 'w-[300px]',
        xl1: 'w-[400px]',
    };

    const styleTypes = {
        black: 'bg-black text-white hover:bg-gray-800 active:bg-gray-700',
        gray600: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-black',
        white: 'bg-white text-black hover:bg-gray-200 active:bg-gray-300',
    };

    const pickerStyles = `${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        if (onDateChange) {
            onDateChange(date);
        }
    };

    return (
        <div className={pickerStyles}>
      <span className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {icon && <span className={`mr-2 ${iconPosition === 'right' ? 'ml-2' : ''}`}>{icon}</span>}
          <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              disabled={disabled}
              className="bg-transparent border-none outline-none text-center"
          />
      </span>
        </div>
    );
};

export default DatePicker;
