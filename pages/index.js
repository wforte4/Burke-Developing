import Layout from '../components/layout';
import build from '../components/pagebuild.json';
import BannerSlider from '../components/banner';
import Theme from '../styles/theme';
import {Span, Row, Col} from '../components/elements';

function Index() {

    return (
        <div id="mybody">
            <BannerSlider
                defaultBackground={Theme.colors.platinum}
                images={['/yellow_house.jpg', '/3foyer.jpg', '/4livingroom.jpg', '/9kitchen.jpg', '/kitchen_living.jpg']}
                height={700}
                cover='rgba(72, 70, 93, .4)'
            />
            <Span background={Theme.colors.platinum} padding={40}>
                <p className="quote">Burke Developing is a registered home improvement company located in Quincy Massachusetts</p>
            </Span>
            <Row
            height='400px'>
                <Col background={Theme.colors.platinum}>
                    <div className='center'>Our subcontractors are reliable and responsive. They are the collective workforce that make up the Burke Developing team.</div>
                </Col>
                <Col background={Theme.colors.platinum}>
                    Data
                </Col>
                <Col background={Theme.colors.platinum}>
                    Data
                </Col>
            </Row>
            <Row
            height='400px'>
                <Col background={'blue'}>
                    Data
                </Col>
                <Col background={Theme.colors.platinum}>
                    Data
                </Col>
            </Row>
            <style jsx>{`
                #mybody {
                    float: left;
                    width: 100%;
                    min-height: 1200px;
                }
                .center {
                    position: absolute;
                    max-width: 60%;
                    top: 50%;
                    left: 50%;
                    font: 14px ${Theme.fonts.paragraph};
                    text-align: center;
                    transform: translate(-50%, -50%);
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