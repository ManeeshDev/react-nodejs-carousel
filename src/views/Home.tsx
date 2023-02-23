import React, {useState} from 'react';
import { Carousel } from '../components/carousel/Carousel';

export function Home(props: any) {

    return (
        <>
            <div className="container p-md-5">
                <Carousel slides={1} infinite={false} />
                <div className="d-flex justify-content-center">
                    <p>"Carousel slides=1 infinite=false"</p>
                </div>

                <Carousel slides={4} infinite={true} />
                <div className="d-flex justify-content-center">
                    <p>"Carousel slides=4 infinite=true"</p>
                </div>

                <Carousel slides={10} infinite={false} />
                <div className="d-flex justify-content-center">
                    <p>"Carousel slides=10 infinite=false"</p>
                </div>
            </div>
        </>
    )
}

export default Home;
