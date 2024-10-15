import React, { useState } from 'react';

const FileUploader = ({
                          styleType = 'black',
                          size = 'md',
                          icon,
                          iconPosition = 'left',
                          disabled,
                          onFileUpload,
                      }) => {
    const [fileName, setFileName] = useState('');

    const baseStyles =
        'rounded-lg text-center font-medium py-2 px-4 my-2 transition-all flex items-center justify-center border-2 border-dashed';

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

    const uploaderStyles = `${baseStyles} ${sizeStyles[size]} ${styleTypes[styleType]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            if (onFileUpload) {
                onFileUpload(file);
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
            if (onFileUpload) {
                onFileUpload(file);
            }
        }
    };

    return (
        <div
            className={uploaderStyles}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
      <span className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {icon && <span className={`mr-2 ${iconPosition === 'right' ? 'ml-2' : ''}`}>{icon}</span>}
          <label className="cursor-pointer">
          <input
              type="file"
              onChange={handleFileChange}
              disabled={disabled}
              className="hidden"
          />
              {fileName ? (
                  <span>{fileName}</span>
              ) : (
                  <span>Drag & Drop or Click to Upload</span>
              )}
        </label>
      </span>
        </div>
    );
};

export default FileUploader;
