import React, {useRef, useState} from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {FaPause, FaPlay} from "react-icons/fa";

const Carousel = () => {
    let sliderRef = useRef(null)
    const [isPlayed, setIsPlayed] = useState(true)

    const play = () => {
        sliderRef.slickPlay();
        setIsPlayed(true)
    };
    const pause = () => {
        sliderRef.slickPause();
        setIsPlayed(false)
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        // autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider ref={slider => (sliderRef = slider)} {...settings}>
                <div>
                    <div className="py-5" style={{
                        backgroundImage: `url('img/slider1.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <div style={{height: 20 + 'rem'}}></div>
                    </div>
                </div>
                <div>
                    <div className="py-5" style={{
                        backgroundImage: `url('img/slider2.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <div style={{height: 20 + 'rem'}}></div>
                    </div>
                </div>
                <div>
                    <div className="py-5" style={{
                        backgroundImage: `url('img/slider3.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <div style={{height: 20 + 'rem'}}></div>
                    </div>
                </div>
            </Slider>
            <div style={{textAlign: "center"}}>
                {isPlayed ?
                    <>
                        <FaPause role={"button"} onClick={pause}></FaPause>
                    </>
                    :
                    <>
                        <FaPlay role={"button"} onClick={play}></FaPlay>
                    </>
                }
            </div>
        </div>
    );
}

export default Carousel