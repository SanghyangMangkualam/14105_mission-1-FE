import React from 'react';

const CardVertical = (props) => {
    const { num, category } = props;
    const posterPath = `/src/assets/images/posters/${category}/${category}-${num}.png`
    return (
        <div className="inline-flex justify-between items-center overflow-x-auto gap-6">
            <img src={posterPath} alt={`${category}-${num}`} className="w-[234px] h-[300px] lg:w-[234px] lg:h-[300px] rounded-lg object-cover" />
        </div>
    );
}

export default CardVertical;