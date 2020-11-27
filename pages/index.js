import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import {Span, Row, Col} from '../components/elements';
import {isMobile} from 'react-device-detect';
import { useState } from 'react';
import Link from 'next/link';
import { useScroll } from '../components/hooks';

function Index() {
    const newscroll = useScroll()
    return (
        <div id="mybody">
            <BannerSlider
                images={['/yellow_house.jpg', '/3foyer.jpg', '/4livingroom.jpg', '/9kitchen.jpg', '/kitchen_living.jpg']}
                height={isMobile == true ? 250:650}
                hideMovement={true}
                cover='rgba(0,0,0,.4)'
            >
                <img className='burketitle' src='/burke_wide_title.png' />
            </BannerSlider>
            <Span background={Theme.colors.lightplatinum} padding={40}>
                <p className="quote">Burke Developing is a registered home improvement company located in Quincy Massachusetts</p>
            </Span>
            <Row
                padding='2.5'
                height='550px'>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img className='icon' src='/icons/gear.png'/>
                        <div className='subtitle'>Building Services</div>
                        <div className='sep'></div>
                        <div className='pg'>Our subcontractors are reliable and responsive. They are the collective workforce that make up the Burke Developing team.</div>
                    </div>    
                </Col>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img className='icon' src='/icons/house.png'/>
                        <div className='subtitle'>Home Renovations</div>
                        <div className='sep'></div>
                        <div className='pg'>Our specialty is complete home renovations. Through our primary business of buying and selling homes, one of our biggest assets has become our roladex of specialized subcontractors.</div>
                    </div>
                </Col>
                <Col background={Theme.colors.white}>
                    <div className='center'>
                        <img className='icon' src='/icons/hardhat.png'/>
                        <div className='subtitle'>On-Site Management</div>
                        <div className='sep'></div>
                        <div className='pg'>This advantage, along with our experience of being on site providing direction toward each order of operations, necessary to complete a project, helps our clients projects run smoother and more cost effective, resulting in a professional project completed.</div>
                    </div>
                </Col>
            </Row>
            <Row
            height='580px' overflow='hidden'>
                <Col background={Theme.colors.lightplatinum}>
                    <div className='kitchenframe'>
                        <img src='/9kitchen.jpg' className='kitchen'/>
                    </div>
                </Col>
                <Col background='rgba(255,255,255,.94)'>
                    <div className='center'>
                        <img className='abimg' src='/icons/alliance.png'/>
                        <p className='abp'>Burke Developing's mission is to provide safe and stable structures for residential homes. We also turn old structures into new clean monuments. Click the link below to see our past work!</p>
                        <Link href='/projects'><div className='ablink'>View Projects</div></Link>
                    </div>
                </Col>
            </Row>
            <Row height='600px' overflow='hidden'>
                <Col>
                    <div className='center'>
                        <img className='abimg' src='/icons/task.png'/>
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
            <style jsx>{`
                .abimg {
                    float: left;
                    width: 150px;
                    height: 150px;
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
                    width: 100%;
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
                    width: 65%;
                    transform: translate(-50%,-50%);
                }
                .kitchen {
                    float: left;
                    width: 200%;
                    transform: scale(1.4,1.4) translate3d(0,0,0);
                    transition: all .3s ease;
                    margin-top: -${newscroll.scrollY > 800 ? ((newscroll.scrollY - 800) / 3): 0||0}px;
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
                    min-height: 1200px;
                    margin-top: 80px;
                }
                .center {
                    width: 50%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
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
            `}</style>
        </div>
    )
}

export default Index