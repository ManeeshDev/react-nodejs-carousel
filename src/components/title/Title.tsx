import React, {useEffect, useState } from 'react';

interface TitleProps {
    text: string,
}

export const Title: React.FC<TitleProps> = ({text}) => {
    return (
        <>
            <div className='title'>{text}</div>
        </>
    );
}
