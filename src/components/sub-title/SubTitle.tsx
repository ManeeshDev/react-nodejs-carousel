import React, {useEffect, useState } from 'react';

interface SubTitleProps {
    text: string,
}

export const SubTitle: React.FC<SubTitleProps> = ({text}) => {
    return (
        <>
            <div className='sub-title'>{text}</div>
        </>
    );
}
