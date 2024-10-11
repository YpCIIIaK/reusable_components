import React, { useState } from 'react';
import Arrow from '../arrow/Arrow'

const Carousel = ({ items, itemsToShow = 1, showArrows = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

    return (
        <div className="relative m-2">
            {showArrows && (
                <Arrow direction="left" onClick={handlePrev} />
            )}
            <div className="flex overflow-hidden">
                {visibleItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        {item}
                    </div>
                ))}
            </div>
            {showArrows && (
                <Arrow direction="right" onClick={handleNext} />
            )}
        </div>
    );
};

export default Carousel;
