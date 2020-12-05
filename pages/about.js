import Theme from '../styles/theme';
import build from '../components/pagebuild.json';
import {Row, Col} from '../components/elements';
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {

    return (
        <div className='body'>
            <div className='banner'>
                <img src='/display/blurabout.jpg' />
                <h1>About Burke Developing</h1>
            </div>
            <Row height='1000px' margin='60px' padding='5' >
                <Col>
                    <div className='center sty'>
                        <h2 className='servicetitle'>Services</h2>
                        <img className='serviceimg' src='/icons/task.png'/>
                        <ul className='services'>
                            {build.services.map((service, i) => {
                                return <li key={i}>{service}</li>
                            })}
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='center'>
                        <h2 className='servicetitle'>Let's Grow Together</h2>
                        <img className='serviceimg' src='/icons/stockmarket.png'/>
                        <p className='info'>The value of your house could greatly increase with a Re-design of the interior or exterior of the property. The Burke Team is ready to help you make this dream come true, click the link below to fill out our easy contact form so we can get started!</p>
                        <Link href='/contact'><div className='contactlink'>Get In Touch</div></Link>
                        <AnchorLink href='#spanner'><div className='simplelink'>See Images Below</div></AnchorLink>
                        <img className='arrowimg' src='/logo_arrow_left.png'/>
                    </div>
                </Col>
            </Row>
            <p id='spanner'>See below what we could help achieve for you!</p>
            <div className='imgcontainer'>
                {build.displayimages.map((image, i) => {
                    console.log(i % 2)
                    return (
                        <div className='frame'>
                            <img src={'/display' + image} />
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
                .banner {
                    float: left;
                    width: 100%;
                    height: 400px;
                    overflow: hidden;
                    position: relative;
                }
                .banner img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%,-50%) scale(1.1,1.1);
                }
                .banner h1 {
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    font: 60px ${Theme.fonts.title};
                    color: white;
                    width: 100%;
                    text-align: center;
                }
                #spanner {
                    float: left;
                    width: 100%;
                    text-align: center;
                    background: ${Theme.colors.lightplatinum};
                    font: 16px 'Roboto';
                    padding: 70px 0;
                }
                .simplelink {
                    float: left;
                    color: ${Theme.colors.gunmetal};
                    font: 16px 'Roboto';
                    text-decoration: none;
                    cursor: pointer;
                    padding: 5px;
                    margin: 10px 0;
                }
                a {
                    text-decoration: none;
                }
                .arrowimg {
                    width: 20px;
                    height: 20px;
                    margin: 10px 0;
                    transform: rotate(270deg);
                }
                .frame {
                    float: left;
                    width: 260px;
                    min-width: 200px;
                    margin: 1px;
                    position: relative;
                    over-flow: hidden;
                }
                .frame img {
                    float: left;
                    width: 100%;
                }
                .imgcontainer {
                    float: left;
                    width: 90%;
                    padding: 60px 5%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: stretch;
                }
                .contactlink {
                    float: left;
                    padding: 10px;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    font: 16px 'Roboto';
                    opacity: .8;
                    transition: all .3s ease;
                    cursor: pointer;
                    margin: 20px 0;
                    border-radius: 8px;
                }
                .contactlink:hover {
                    box-shadow: ${Theme.shadows.neo};
                    opacity: 1;
                }
                .info {
                    font: 16px 'Roboto';
                    margin: 10px 0;
                    text-align: center;
                }
                .center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    transform: translate(-50%,-50%);
                }
                .top {
                    top: 25%;
                }
                .sty {
                    box-shadow: ${Theme.shadows.mat};
                    width: 80%;
                    border-radius: 20px;
                    padding: 40px 20px;
                }
                .sep {
                    float: left;
                    width: 20px;
                    height: 3px;
                    background: ${Theme.colors.gunmetal};
                    margin: 10px 0;
                }
                .services {
                    float: left;
                    width: 80%;
                    padding: 0;
                }
                .services li {
                    float: left;
                    width: 100%;
                    margin: 3px 0;
                    text-align: center;
                    list-style: none;
                    font: 17px 'Roboto';
                }
                .serviceimg {
                    float: left;
                    width: 140px;
                    height: 140px;
                }
                .servicetitle {
                    float: left;
                    width: auto;
                    margin: 0;
                    padding: 0px 5%;
                    text-align: center;
                    font: 22px ${Theme.fonts.title};
                }
                .body {
                    float: left;
                    width: 100%;
                    margin-top: 80px;
                }
            `}</style>
        </div>
    )
}

export default About