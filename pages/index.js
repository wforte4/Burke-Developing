import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import {Span, Row, Col} from '../components/elements';
import {isMobile} from 'react-device-detect';
import { useState } from 'react';

function Index() {
    return (
        <div id="mybody">
            <BannerSlider
                images={['/yellow_house.jpg', '/3foyer.jpg', '/4livingroom.jpg', '/9kitchen.jpg', '/kitchen_living.jpg']}
                height={isMobile == true ? 250:650}
            />
            <Span background={Theme.colors.platinum} padding={40}>
                <p className="quote">Burke Developing is a registered home improvement company located in Quincy Massachusetts</p>
            </Span>
            <Row
                padding='2.5'
                height={isMobile == true ? 'auto': '450px'}>
                <Col background={Theme.colors.white}>
                    <img className='icon' src='/icons/gear.png'/>
                    <div className='subtitle'>Building Services</div>
                    <div className='pg'>Our subcontractors are reliable and responsive. They are the collective workforce that make up the Burke Developing team.</div>
                </Col>
                <Col background={Theme.colors.white}>
                    <img className='icon' src='/icons/house.png'/>
                    <div className='subtitle'>Home Renovations</div>
                    <div className='pg'>Our specialty is complete home renovations. Through our primary business of buying and selling homes, one of our biggest assets has become our roladex of specialized subcontractors.</div>
                </Col>
                <Col background={Theme.colors.white}>
                    <img className='icon' src='/icons/hardhat.png'/>
                    <div className='subtitle'>On-Site Management</div>
                    <div className='pg'>This advantage, along with our experience of being on site providing direction toward each order of operations, necessary to complete a project, helps our clients projects run smoother and more cost effective, resulting in a professional project completed.</div>
                </Col>
            </Row>
            <Row
            height='400px'>
                <Col background={Theme.colors.white}>
                    <img className='icon' src='/icons/house.png'/>
                    <div className='subtitle'>Home Renovations</div>
                    <div className='pg'>Our specialty is complete home renovations. Through our primary business of buying and selling homes, one of our biggest assets has become our roladex of specialized subcontractors.</div>
                </Col>
                <Col background={Theme.colors.white}>
                    <img className='icon' src='/icons/hardhat.png'/>
                    <div className='subtitle'>On-Site Management</div>
                    <div className='pg'>This advantage, along with our experience of being on site providing direction toward each order of operations, necessary to complete a project, helps our clients projects run smoother and more cost effective, resulting in a professional project completed.</div>
                </Col>
            </Row>
            <style jsx>{`
                #mybody {
                    float: left;
                    width: 100%;
                    min-height: 1200px;
                }
                .icon {
                    float: left;
                    width: 40px;
                    height: 40px;
                    margin-left: 50%;
                    margin-top: 70px;
                    transform: translateX(-50%);
                }
                .subtitle {
                    float: left;
                    width: 50%;
                    margin-left: 50%;
                    padding: 20px 0;
                    transform: translateX(-50%);
                    font: 18px ${Theme.fonts.title};
                    text-align: center;
                }
                .pg {
                    float: left;
                    width: 50%;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    font: 14px ${Theme.fonts.paragraph};
                    text-align: center;
                }
                .quote {
                    float: left;
                    width: 100%;
                    text-align: center;
                    color: ${Theme.colors.onxy};
                    font: 16px ${Theme.fonts.paragraph};
                }
            `}</style>
        </div>
    )
}

export default Index