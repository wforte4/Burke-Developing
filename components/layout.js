import Link from 'next/link'
import Head from 'next/head'
import theme from '../styles/theme'
import { useScroll, useWindowSize } from '../components/hooks'
import { useEffect , useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { Logout } from '../services/apiservice'
import { Cookies } from 'react-cookie'
import { Row, Col } from '../components/elements'
import { isMobile } from 'react-device-detect';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Navigation from './Navigation';

const cookies = new Cookies();



function Layout({children, links, title, path}) {
    
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [permission, setPermission] = useState(null)
    const [userFullName, setFullName] = useState(null)
    const mobiletrue = useState(isMobile)
    const newscroll = useScroll()

    useEffect(() => {
        const updateUser = () => {
            const email = cookies.get('email')
            const fullname = cookies.get('name')
            const permissions = cookies.get('permission_level')
            if(email && fullname && permissions) {
                setUser(email)
                setFullName(fullname)
                setPermission(permissions)
            } else {
                setUser(null)
                setFullName(null)
                setPermission(null)
            }
        }
        updateUser();
    }, [router.pathname])

    const clearUser = async(e) => {
        e.persist()
        setUser(null)
        setFullName(null)
        setPermission(null)
        await Logout()
    }

    return (
        <div id='layout'>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel='icon' href='/icons/icon_bd.png' type="image/gif" sizes="16x16"/><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@500&family=Big+Shoulders+Stencil+Display:wght@700&family=Playfair+Display:wght@500&display=swap" rel="stylesheet"/>
            </Head>
            <Navigation 
                permission={permission} 
                user={userFullName} 
                title={title} 
                links={links} 
                logo='/uplinkflat.png' 
                currentpath={path} 
                clearUserInfo={clearUser}/>
            <div id="canvas">
                {children}
            </div>
            <AnchorLink href='#layout'><img alt='left' id='totop' src='/logo_arrow_left.png' /></AnchorLink>
            <div id="footer">
                <p>"The finest compliment I can receive is the referral of <br></br>your friends, family, and business associates.<br></br>Thank you for your trust"</p>
                <Row height={mobiletrue ? 'auto': '400px'} padding='4'>
                    <Col>
                        <ul className='footlink big'>
                            <h2>Links</h2>
                            {links.map((link, i) => {
                                return <Link key={i} href={link.url}><li title={link.url}><img alt='flip'  className='flip' src='/logo_arrow_left_white.png'/>{link.name}</li></Link>
                            })}
                        </ul>
                    </Col>
                    <Col>
                        <ul className='footlink big'>
                            <h2>Quick Contact</h2>
                            <li><img alt='manager' src='/icons/icon_boss.png'/>Daniel Burke</li>
                            <li><img alt='phone' src='/icons/icon_phone.png'/>1-781-426-1894</li>
                            <li><img alt='email' src='/icons/icon_email.png'/>dan@burkedeveloping.com</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className='footlink big'>
                            <h2>Social Media</h2>
                            <Link href='http://www.facebook.com/BurkeDeveloping'><li><img alt='facebook' src='/icons/facebook.png'/>Facebook</li></Link>
                        </ul>
                    </Col>
                </Row>
                <div id="copyw">
                    <h2>© CopyRight 2020 BurkeDeveloping</h2>
                    <h2>Designed By Uplink Work</h2>
                </div>
            </div>
            <style jsx global>{`
                #layout {
                    float: left;
                    width: 100%;
                    height: 100%;
                }
                .flip {
                    transform: rotate(180deg);
                }
                .footlink img {
                    float: left;
                    width: 25px;
                    height: 25px;
                    margin: 0 10px;
                    transition: all .3s ease;
                }
                .footlink h2 {
                    float: left;
                    width: 100%;
                    color: white;
                    text-align: center;
                    text-shadow: 0 0 2px black;
                    font: 20px 'Montserrat';
                }
                .footlink {
                    width: 50%;
                    position: absolute;
                    left: 50%;
                    top: 20%;
                    transform: translateX(-50%);
                    padding: 0;
                    margin: 0;
                }
                .footlink li {
                    list-style: none;
                    float: left;
                    width: auto;
                    color: white;
                    opacity: .8;
                    width: 90%;
                    padding: 5px 5%;
                    cursor: pointer;
                    font: 16px 'Open Sans';
                    transition: all .4s ease;
                }
                .footlink li:hover {
                    opacity: 1;
                }
                .footlink li:hover img {
                    transform: translate3D(0,0,8px);
                }
                .big {
                    width: 85%;
                }
                
                #footer {
                    float: left;
                    width: 100%;
                    min-height: 600px;
                    height: auto;
                    background: ${theme.colors.onxy};
                    position: relative;
                    z-index: 100;
                }
                #footer p {
                    float: left;
                    width: 90%;
                    padding: 15px 5%;
                    color: white;
                    opacity: .8;
                    font: 15px ${theme.fonts.fancy};
                    font-style: italic;
                }
                #copyw {
                    position: absolute;
                    width: 90%;
                    left: 0;
                    bottom: 0;
                    padding: 10px 5%;
                    background: ${theme.colors.darkonxy};
                    min-height: 80px;
                }
                #copyw h2 {
                    float: left;
                    font: 14px 'Montserrat';
                    color: white;
                    opacity: .8;
                    margin: 10px;
                    padding: 20px;
                }
                #canvas {
                    float: left;
                    width: 100%;
                    min-height: 100%;
                    height: auto;
                }
                #totop {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    width: 30px;
                    height: 30px;
                    transition: all .3s ease;
                    padding: 10px;
                    cursor: pointer;
                    background: white;
                    box-shadow: ${theme.shadows.mat};
                    opacity: ${newscroll.scrollY >= 850 ? '1': '0'};
                    transform: rotate(90deg);
                    z-index: 9999;
                }
                #__next {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    background: white;
                    padding: 0;
                    margin: 0;
                }
                #nprogress .bar {
                    height: 2px;
                    background: #6bba7a !important;
                }
                *:focus {
                    outline: none;
                    box-shadow: ${theme.shadows.highlight} !important;
                }
                textarea:focus {
                    outline: none;
                }
                html {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                select {
                    text-indent: 0;
                    padding: 10px 20px;
                    border-radius: 4px;
                   -webkit-appearance: none;
                   -moz-appearance: none;
                    appearance: none;
                }
                @media only screen and (max-width: 800px) {
                    #copyw {
                        float: left;
                        top: auto;
                        position: relative;
                    }
                }
            `}</style>
        </div>
    )
}

// Layout is out containing shell
// -> Canvas is inner container shell

export default Layout