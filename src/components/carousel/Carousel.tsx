import React, {useEffect, useState } from 'react';
import { CarouselModel } from '../../models/CarouselModel';
import { CarouselService } from '../../services/CarouselService';
import { SlideImage } from '../slide-image/SlideImage';
import { SubTitle } from '../sub-title/SubTitle';
import { Title } from '../title/Title';

interface CarouselProps {
    slides: number,
    infinite: boolean,
}

export const Carousel: React.FC<CarouselProps> = ({slides, infinite}) => {

    const [currentIndex, setCurrentIndex] = useState<any>(0);
    const [carouselList, setCarouselList] = useState<any>([]);

    useEffect(() => {
        initCarousels().catch(console.error);
    }, []);

    const initCarousels = async () => {
        // const {data} = await CarouselService.getCarousels();
        var data = [
            {
                id: '1',
                image: 'https://images.unsplash.com/photo-1675191475318-d2bf6bad1200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
            {
                id: '2',
                image: 'https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
            {
                id: '3',
                image: 'https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
            {
                id: '4',
                image: 'https://images.unsplash.com/photo-1675104180563-5971716d71e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
            {
                id: '5',
                image: 'https://images.unsplash.com/photo-1676051009149-dbac00037e62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
            {
                id: '6',
                image: 'https://images.unsplash.com/photo-1675715194978-fb6fc22f49c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80',
                title: "- Carousel -",
                subTitle: "Slide Images"
            },
        ]
        await setCarouselList(data.slice(0, slides));
    }

    const handleNextBtn = () => {
        // setCurrentIndex((prevIndex: number) => (prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1));
        setCurrentIndex((currentIndex + 1) % carouselList.length);
    };

    const handlePreviousBtn = () => {
        // setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? carouselList.length - 1 : prevIndex - 1));
        setCurrentIndex((currentIndex - 1 + carouselList.length) % carouselList.length);
    };

    return (
        <>
            <div className='slider-container'>
                {carouselList.map((carousel: CarouselModel, index: any) => (
                    <div key={carousel.id}
                        className={carouselList[currentIndex].id === carousel.id ? 'fades' : 'slide fades'}>
                        <SlideImage url={carousel.image} altText={carousel.title}/>
                        <Title text={carousel.title} />
                        <SubTitle text={carousel.subTitle} />
                    </div>
                ))}
                {
                    slides > 1 || carouselList.length > 1 ?
                    <>
                        <button onClick={handlePreviousBtn} className='previous-btn'
                                disabled={!infinite && (currentIndex < 1)}>&lt;</button>
                        <button onClick={handleNextBtn} className='next-btn'
                                disabled={!infinite && ((currentIndex + 1) === carouselList.length)}>&gt;</button>
                    </>
                    : null
                }
            </div>
        </>
    );
}
