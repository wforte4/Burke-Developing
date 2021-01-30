import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import {Span, Row, Col} from '../components/elements';
import {isMobile} from 'react-device-detect';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useScroll, useWindowSize } from '../components/hooks';

function Index() {
    const newscroll = useScroll()
    const window = useWindowSize()
    return (
        <div id="mybody">
            <Head>
                <title>Burke Developing</title>
                <meta name="Description" content="Home renovation company registered in Boston MA."/>
            </Head>
            <BannerSlider
                images={['/banner/overview_one.jpg', '/banner/exterior_front.jpg', '/banner/interior_kitchen.jpg', '/banner/interior_livingroom.jpg', '/banner/yellow_house.jpg']}
                height={window.height + 'px'}
                hideMovement={true}
                cover='rgba(0,0,0,.4)'
            >
                <img alt='burketitle' className='burketitle' src='/burke_wide_title.png' />
            </BannerSlider>
            <Span background={Theme.colors.lightplatinum} padding={40}>
                <p className="quote">Burke Developing is a registered home improvement company located in Quincy Massachusetts</p>
            </Span>
            <Row
                padding='2.5'
                height='650px'>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img alt='gear' className='icon' src='/icons/gear.png'/>
                        <div className='servicetitle'>Building Services</div>
                        <div className='sep'></div>
                        <div className='pg'>Our subcontractors are reliable and responsive. They are the collective workforce that make up the Burke Developing team.</div>
                    </div>    
                </Col>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img alt='house' className='icon' src='/icons/house.png'/>
                        <div className='servicetitle'>Home Renovations</div>
                        <div className='sep'></div>
                        <div className='pg'>Our specialty is complete home renovations. Through our primary business of buying and selling homes, one of our biggest assets has become our roladex of specialized subcontractors.</div>
                    </div>
                </Col>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img alt='hardhat' className='icon' src='/icons/hardhat.png'/>
                        <div className='servicetitle'>On-Site Management</div>
                        <div className='sep'></div>
                        <div className='pg'>This advantage, along with our experience of being on site providing direction toward each order of operations, necessary to complete a project, helps our clients projects run smoother and more cost effective, resulting in a professional project completed.</div>
                    </div>
                </Col>
            </Row>
            <Row
            height='650px' overflow='hidden'>
                <Col mobileDisplay={false} background={Theme.colors.lightplatinum}>
                    <div className='kitchenframe'>
                        <img alt='overview' src='/banner/overview_one.jpg' className='kitchen'/>
                    </div>
                </Col>
                <Col background='rgba(255,255,255,.88)'>
                    <div className='center'>
                        <img alt='building' className='abimg' src='/icons/alliance.png'/>
                        <p className='abp'>Burke Developing's mission is to provide safe and stable structures for residential homes. We also turn old structures into new clean monuments. Click the link below to see our past work!</p>
                        <Link href='/projects'><div className='ablink'>View Projects</div></Link>
                    </div>
                </Col>
            </Row>
            <Row height='650px' overflow='hidden'>
                <Col>
                    <div className='center'>
                        <img alt='services' className='abimg' src='/icons/task.png'/>
                        <p className='abp'>We offer a variety of services to satisfy all of your home improvement needs. We are the experienced professionals you need to repair, maintain, and increase the value of your home.<br></br> These are just some of the services we offer, click the link below to learn more about how we could service you!</p>
                        <Link href='/about'><div className='ablink'>Learn More</div></Link>
                    </div>
                </Col>
                <Col>
                    <div className='center'>
                        <h2 className='servicetitle'>Services</h2>
                        <div className='sep'></div>
                        <ul className='services'>
                            {build.services.map((service, i) => {
                                if(i < 10) return <li key={i}>{service}</li>
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row height='650px' overflow='hidden' background={Theme.colors.lightplatinum}>
                <Col>
                    <img alt='house front' src='/banner/exterior_front.jpg' className='bgimage'/>
                    <div className='center white'>
                        <img alt='group'  className='abimg' src='/icons/group.png'/>
                        <h2 className='servicetitle'>Contact Us Directly</h2>
                        <div className='sep'></div>
                        <p className='abp'>Contact us today! Want to find out how we could re-create your home, click the link below and we can start planning!</p>
                        <Link href='/contact'><div className='ablink'>Contact Us</div></Link>
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .bgimage {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                }
                .imgcollage {
                    width: 70%;
                    position: absolute;
                    padding: 40px 0;
                    border-radius: 6px;
                    top: 50%;
                    left: 50%;
                    background: white;
                    transform: translate(-50%,-50%);
                    box-shadow: ${Theme.shadows.mat};
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .imgcollage img {
                    width: 200px;
                    margin: 1px;
                }
                .abimg {
                    float: left;
                    width: 170px;
                    margin-left: 50%;
                    margin-top: -90px;
                    transform: translateX(-50%);
                }
                .abp {
                    float: left;
                    width: 100%;
                    font: 16px 'Open Sans';
                    margin: 40px 0;
                    margin-top: 10px;
                    text-align: center;
                }
                .ablink {
                    float: left;
                    width: 90%;
                    margin: 2px 5%;
                    text-align: center;
                    padding: 14px 0;
                    border-radius: 10px;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    opacity: .9;
                    transition: all .3s ease;
                    cursor: pointer;
                    font: 16px 'Roboto';
                }
                .ablink:hover {
                    transform: translateY(-2px) scale(1.03,1.03);
                    box-shadow: ${Theme.shadows.neo};
                    opacity: 1;
                }
                .servicetitle {
                    float: left;
                    font: 24px 'Montserrat';
                    margin: 10px 0;
                    width: 100%;
                    text-align: center;
                }
                .services {
                    float: left;
                    width: 100%;
                    padding: 0;
                }
                .services li {
                    float: left;
                    width: 100%;
                    font: 16px 'Open Sans';
                    margin: 5px 0;
                }
                .burketitle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 55%;
                    transform: translate(-50%,-50%);
                }
                .kitchen {
                    float: left;
                    width: 200%;
                    backface-visibility: false;
                    transform: scale(1.4,1.4) translate3d(0,0,0);
                    margin-top: -${newscroll.scrollY > 1200 && newscroll.scrollY < 1600 ? ((newscroll.scrollY - 1200) / 7): (1600-1200)/7||0}px;
                }
                .kitchenframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .building {
                    position: absolute;
                    top: 20%;
                    left: 40px;
                    width: 180px;
                    transform: translateY(-50%);
                }
                .buildingp {
                    max-width: 40%;
                    position: absolute;
                    right: 20%;
                    top: 40%;
                    text-align: center;
                    margin: 0;
                    padding: 0;
                    transform: translateY(-50%);
                    font: 16px ${Theme.fonts.subheader};
                }
                .button {
                    width: 40%;
                    position: absolute;
                    right: 20%;
                    bottom: 30%;
                    text-align: center;
                    margin: 0;
                    padding: 14px 0;
                    color: white;
                    background: ${Theme.colors.gunmetal};
                    cursor: pointer;
                    transition: all .3s ease;
                    border-radius: 6px;
                    box-shadow: ${Theme.colors.shadowlight};
                    font: 14px 'Roboto';
                }
                .button:hover {
                    box-shadow: ${Theme.colors.shadow};
                    opacity: .7;
                    transform: translateY(-2px) scale(1.01, 1.01);
                }
                #mybody {
                    float: left;
                    width: 100%;
                    min-height: 100%;
                    height: auto;
                }
                .center {
                    width: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
                .white { 
                    background: rgba(255,255,255,.8);
                    backdrop-filter: blur(6px);
                    padding: 30px;
                    border-radius: 30px;
                    width: 30%;
                }
                .icon {
                    float: left;
                    width: 40px;
                    height: 40px;
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                .subtitle {
                    float: left;
                    width: 100%;
                    padding: 10px 0;
                    font: 18px ${Theme.fonts.title};
                    color: ${Theme.colors.gunmetal};
                    text-align: center;
                }
                .sep {
                    float: left;
                    width: 25px;
                    height: 3px;
                    background: ${Theme.colors.lightgold};
                    margin: 10px 0;
                    margin-bottom: 20px;
                    margin-left: 50%;
                    transform: translateX(-50%);
                }
                .pg {
                    float: left;
                    width: 100%;
                    font: 16px 'Roboto';
                    text-align: center;
                }
                .quote {
                    float: left;
                    width: 100%;
                    text-align: center;
                    color: ${Theme.colors.onxy};
                    font: 18px 'Roboto';
                }
                @media only screen and (max-width: 800px) {
                    .burketitle {
                        width: 80%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Index