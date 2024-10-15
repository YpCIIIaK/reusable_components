import React from 'react';

const Table = ({ data, columns }) => {
    const baseStyles = 'min-w-full border border-gray-300';
    const headerStyles = 'bg-gray-200 text-left font-medium p-2 border-b border-gray-300';
    const rowStyles = 'p-2 border-b border-gray-200 hover:bg-gray-100';

    return (
        <table className={baseStyles}>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={headerStyles}>
                        {column}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowStyles}>
                    {columns.map((column, colIndex) => (
                        <td key={colIndex} className="p-2">
                            {row[column]}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
