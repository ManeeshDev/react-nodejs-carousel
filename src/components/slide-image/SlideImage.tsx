import React, {useEffect, useState } from 'react';

interface ImageProps {
    url: string,
    altText: string,
}

export const SlideImage: React.FC<ImageProps> = ({url, altText}) => {
    return (
        <>
            <img src={url} alt={altText} className='carousel-image' />
        </>
    );
}
