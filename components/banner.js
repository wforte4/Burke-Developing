import { useWindowSize, useScroll } from './hooks';
import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring'

export function BannerSingle({defaultBackground, image, children, customHeight, fullsize, parallax}) {

    const getWindow = useWindowSize();
    const getScroll = useScroll();
    const defaultSize = 600;


    useEffect(() => {
        console.log('hit');
    }, []);

    return (
        <div id='banner'>
            <img alt={image} className='singleimage' src={image} style={{top: parallax == true && getScroll.scrollY >=0 ? (((fullsize == true ? getWindow.height: customHeight) / 2) - (getScroll.scrollY / 3)) || 0: '50%'}}/>
            <div className='content'>{children}</div>
            <style jsx>{`
                #banner {
                    float: left;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    background: ${defaultBackground};
                    height: ${customHeight ? customHeight: (fullsize == true ? getWindow.height: defaultSize)}px;
                }
                .singleimage {
                    position: absolute;
                    left: 50%;
                    width: 100%;
                    z-index: 10;
                    transition: all .2s ease;
                    transform: translate(-50%, -50%) scale(1.2, 1.2);
                }
                @media only screen and (max-width: 800px) {
                    #banner {
                        height: 320px;
                    }
                } 
                @media only screen and (max-width: 1100px) {
                }
            `}</style>
        </div>
    )
}

function Slide({index, image, currentSlide, onLoad}) {
    return (
        <div className='slide'>
            <img alt={image} onLoad={onLoad} src={image} />
            <style jsx>{`
                .slide {
                    position: absolute;
                    top: 0;
                    left: ${index * 100}%;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 10;
                }
                .slide img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transition: all 8s ease;
                    transform: translate(-50%,-50%) scale(${index == currentSlide ? '1.1, 1.1': '1.4, 1.4'}) translate3d(0, 0, 0);
                    width: 100%;
                    
                }
                @media only screen and (max-width: 1200px) {
                    .slide img {
                        width: auto;
                        height: 100%;
                    }
                } 
            `}</style>
        </div>
    )
}

export default function BannerSlider({hideMovement = false, cover, defaultBackground, images, children, height, shadow, backendImageRoute}) {
    
    const defaultSize = 600;
    const usePosition = useScroll()
    const [currentSlide, setCurrent] = useState(-1);
    const [isHovering, setHovering] = useState(false);
    const [doneAnimating, setDone] = useState(false)
    const [loading, setLoading] = useState(true)
    // Measured in Seconds
    const slideTimer = 7;
    const props = useSpring({
        config: config.slow,
        from: {opacity: 0, transform: 'translateX(200px)'}, to: {opacity: 1, transform: 'translateX(0)'}
    })

    // Slide timer for counting the amount of seconds before slide turns to next one
    useEffect(() => {
        setDone(false)
        const timer = !isHovering && setTimeout(() => {
                rightClick();
                setDone(true)
            }, slideTimer * 1000)
        if(isHovering) clearTimeout(timer);
        return () => clearTimeout(timer);
    }, [isHovering, doneAnimating, currentSlide])

    // Fix for first slide not animating
    useEffect(() => {
        setCurrent(0)
    }, [loading == false])

    const leftClick = () => {
        var nextSlide = currentSlide - 1;
        if(nextSlide < 0) {
            setCurrent(images.length - 1)
        } else {
            setCurrent(nextSlide)
        }
    }

    const rightClick = () => {
        var nextSlide = currentSlide + 1;
        if(nextSlide > images.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(nextSlide)
        }
    }

    return (
        <animated.div style={props}><div id='banner' onMouseEnter={(e)=> {
            e.persist()
            if(!hideMovement) {
                setHovering(true)
                console.log('hit')
            }
        }} onMouseLeave={()=> {
            if(!hideMovement) setHovering(false)
        }}>
            <div className='cover'></div>
            <div className='imgcont'>
                {images == null ? null: images.map((image, i) => {
                    if(i < images.length - 1) {
                        return (
                            <Slide key={i} image={backendImageRoute ? backendImageRoute + image: image} index={i} currentSlide={currentSlide} />
                        )
                    } else {
                        return (
                            <Slide onLoad={()=> setLoading(false)} key={i} image={backendImageRoute ? backendImageRoute + image: image} index={i} currentSlide={currentSlide} />
                        )
                    }
                })}
            </div>
            <div className='dots'>
                {images == null ? null: images.map((image, i) => {
                    return <div style={{background: currentSlide == i ? 'white': 'rgba(255, 255, 255, .2)'}} key={i} className='dot' onClick={() => {
                        setCurrent(i)
                    }}></div>
                })}
            </div>
            <img onClick={()=> {
                leftClick()
                }} className='arrow' style={{left: 40}} src={'/logo_arrow_left.png'} />
            <img onClick={()=> {
                rightClick()
                }}  className='arrow right' style={{right: 40}} src={'/logo_arrow_left.png'} />
            <div className='content'>{children}</div>
            <style jsx>{`
                #banner {
                    float: left;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                    background: ${defaultBackground};
                    height: ${height};
                }
                .content {
                    z-index: 20;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translate3d(0,0,0);
                    margin-top: ${usePosition.scrollY > 0 ? -usePosition.scrollY / 5: 0 || 0}px;
                    transition: top .3s ease;
                }
                .dots {
                    position: absolute;
                    min-width: 40px;
                    bottom: 14px;
                    left: 50%;
                    padding: 7px;
                    border-radius: 10px;
                    transform: translateX(-50%);
                    display: ${hideMovement == true ? 'none': 'block'};
                    z-index: 24;
                }
                .dot {
                    float: left;
                    width: 14px;
                    height: 14px;
                    box-shadow: 0 0 2px rgba(20, 20,20,.4);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .4s ease;
                    margin: 2px 4px;
                }
                .arrow {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 50%;
                    padding: 5px;
                    z-index: 22;
                    opacity: .4;
                    transition: all .3s ease;
                    backdrop-filter: blur(18px);
                    background: rgba(255, 255, 255, .6);
                    border-radius: 50%;
                    cursor: pointer;
                    display: ${hideMovement == true ? 'none': 'block'};
                    transform: translateY(-50%);
                }
                .arrow:hover {
                    opacity: 1;
                }
                .right {
                    transform: translateY(-50%) rotateY(180deg);
                }
                .imgcont {
                    float: left;
                    height: 100%;
                    width: 100%;
                    opacity: ${isHovering ? '.94': 1};
                    transition: all .6s ease;
                    transform: translateX(-${currentSlide * 100}%) translate3d(0,0,0);
                }
                .cover {
                    position: absolute;
                    top: 0;
                    left: 0;
                    transition: background .4s ease-in-out;
                    background: ${isHovering ? 'rgba(0,0,0,.15)': cover};
                    height: 100%;
                    width: 100%;
                    z-index: 10;
                }
                @media only screen and (max-width: 800px) {
                    #banner {
                        max-height: 450px;
                    }
                } 
                @media only screen and (max-width: 1100px) {
                }
            `}</style>
        </div></animated.div>
    )
}