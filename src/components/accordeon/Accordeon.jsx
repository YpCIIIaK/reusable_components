import React, { useState } from 'react';

const AccordionItem = ({
                           title,
                           children,
                           isOpen,
                           onToggle,
                    }) => {
    const baseTitleStyles = 'flex justify-between bg-gray-200 items-center w-full py-3 px-4 text-left font-semibold cursor-pointer transition-all transition-colors duration-200';
    const activeTitleStyles = isOpen ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100';

    return (
        <div>
            <div
                className={`${baseTitleStyles} ${activeTitleStyles}`}
                onClick={onToggle}
            >
                <span>{title}</span>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="py-2 px-4 text-gray-700">{children}</div>}
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="rounded-lg shadow-md overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
