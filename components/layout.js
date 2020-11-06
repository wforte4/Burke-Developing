import Link from 'next/link'
import Head from 'next/head'
import theme from '../styles/theme'
import { useScroll, useWindowSize } from '../components/hooks'
import { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import { Logout } from '../services/apiservice'
import { Cookies } from 'react-cookie'
import { Row, Col } from '../components/elements'
import { isMobile } from 'react-device-detect';

const cookies = new Cookies();

export function LoadingScreen({loader}) {
    return (
        <div id="body">
            <style jsx global>{`
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
                    padding: 0;
                    margin: 0;
                }
                html {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

const Navigation = ({title, links, logo, currentpath, hideNav, user, permission}) => {
    const scroll = useScroll();
    const [mobileactive, setActive] = useState(false)
    const toggleActive = (e) => {
        e.persist();
        if(mobileactive == true) setActive(false)
        else setActive(true)
    }
    useEffect(() => {
        setActive(false)
    }, [currentpath])

    return (
        <div id='nav'>
            <img className='hamburg' src='/ham.png' onClick={toggleActive} />
            <Link href="/"><h1>{title}</h1></Link>
            <ul className='barlink'>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                })}
            </ul>
            <div className='right'>
                {user == null ? <>
                    <Link href='/login'><div className='login'>Login</div></Link>
                    <Link href='/createprofile'><div className='create'>CreateProfile</div></Link>
                </>:
                    <div className='username'>
                        <h2>Welcome, {user}</h2>
                        <div className='dropdown'>
                            <ul>
                                {permission > 5 ? <Link href="/backend_host_controller"><li>Admin</li></Link>: null}
                                <li onClick={Logout}>Logout</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <style jsx>{`
                #nav {
                    position: fixed;
                    left: 0;
                    width: 100%;
                    height: 80px;
                    z-index: 999;
                    transition: all .8s ease;
                    background: rgba(255,255,255, .85);
                    backdrop-filter: blur(8px);
                    opacity: ${hideNav == false ? '1': '0'};
                }
                .hamburg {
                    position: fixed;
                    top: 22px;
                    right: 20px;
                    width: 30px;
                    height: 30px;
                    display: ${isMobile == true ? 'block': 'none'};
                }
                .username {
                    float: right;
                    margin-right: 10px;
                    min-height: 78px;
                    min-width: 250px;
                    cursor: pointer;
                }
                .username h2 {
                    float: left;
                    font: 16px ${theme.fonts.subheader};
                    margin: 20px 0;
                    margin-top: 26px;
                    width: 100%;
                    text-align: center;
                    z-index: 2;
                }
                .dropdown {
                    float: left;
                    background: white;
                    z-index: 1;
                    height: .01px;
                    opacity: 0;
                    transition: height .4s ease, opacity 1s ease;
                    width: 100%;
                    overflow: hidden;
                    border-bottom: 2px solid ${theme.colors.coral};
                    border-radius: 8px;
                    box-shadow: ${theme.colors.shadowlight};
                }
                .dropdown ul li {
                    float: left;
                    width: 100%;
                    padding: 10px 0;
                    font: 14px ${theme.fonts.subheader};
                    text-align: center;
                    list-style: none;
                    transition: all .3s ease;
                }
                .dropdown ul li:hover {
                    background: ${theme.colors.platinum};
                }
                .dropdown ul {
                    float: left;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
                .username:hover .dropdown {
                    height: 100px;
                    opacity: 1;
                }
                .right {
                    float: right;
                    height: 80px;
                    margin-right: 10px;
                    position: relative;
                    display: ${isMobile == true ? 'none': 'block'}
                }
                .login {
                    float: left;
                    font: 15px ${theme.fonts.subheader};
                    padding: 30px 10px;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .8;
                    cursor: pointer;
                }
                .login:hover {
                    border-bottom: 2px solid ${theme.colors.coral};
                    opacity: 1;
                }
                .create {
                    float: left;
                    font: 15px ${theme.fonts.subheader};
                    padding: 30px 10px;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .8;
                    cursor: pointer;
                }
                .create:hover {
                    border-bottom: 2px solid ${theme.colors.coral};
                    opacity: 1;
                }
                h1 {
                    float: left;
                    font: 26px ${theme.fonts.title};
                    color: ${theme.colors.onxy};
                    margin: 0 10px;
                    cursor: pointer;
                    padding: 22px 10px;
                }
                .barlink {
                    float: left;
                    margin: ${isMobile == true ? '0': '10px'};
                    margin-top: ${isMobile == true ? '0': '15px'};
                    padding: ${isMobile == true ? '10px 5%': '10px'};
                    position: relative;
                    transition: transform .6s ease-in-out;
                    transform: translateX(${isMobile == true ? mobileactive ? '0': '100%': '0'});
                    background: ${isMobile == true ? 'white': 'none'};
                    width: ${isMobile == true ? '90%': 'auto'};
                }
                .barlink li {
                    float: left;
                    font: 16px ${theme.fonts.subheader};
                    padding: ${isMobile == true ? '10px 5%': '10px 10px'};
                    padding-top: 0;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .8;
                    line-height: 32px;
                    list-style: none;
                    cursor: pointer;
                    display: inline-block;
                    width: ${isMobile == true ? '90%': 'auto'};
                }
                .barlink li:after {
                  display:block;
                  content: '';
                  border-bottom: solid 2px ${theme.colors.coral};  
                  transform: scaleX(0);  
                  transition: transform 250ms ease-in-out;
                }
                .barlink li:after{ transform-origin: 100% 50%; }
                .barlink li:hover:after{ transform: scaleX(1); transform-origin: 0% 50%; }
                .barlink li:hover {
                    opacity: 1;
                }
                .barlink li[title="${currentpath}"] {
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}

const Header = ({title, currentpath}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel='icon' href='/icons/hardhat.png' type="image/gif" sizes="16x16"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
    )
}


function Layout({children, links, title, path}) {
    
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [permission, setPermission] = useState(null)
    const [userFullName, setFullName] = useState(null)
    const mobiletrue = useState(isMobile)

    const [hideNav, setNav] = useState(router.pathname === '/login' ? true: false)

    useEffect(() => {
        setNav(router.pathname === '/login'? true: false)
    }, [router.pathname])

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

    return (
        <div id='layout'>
            <Header title={title} currentpath={path}/>
            <Navigation permission={permission} user={userFullName} hideNav={hideNav} title={title} links={links} logo='/uplinkflat.png' currentpath={path}/>
            <div id="canvas">
                {children}
            </div>
            <div id="footer">
                <Row height={mobiletrue ? 'auto': '400px'} padding='4'>
                    <Col>
                        <ul className='footlink'>
                            <h2>Links</h2>
                            {links.map((link, i) => {
                                return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                            })}
                        </ul>
                    </Col>
                    <Col>
                        <ul className='footlink big'>
                            <h2>Quick Contact</h2>
                            <li><img src='/icons/icon_boss.png'/>Daniel Burke</li>
                            <li><img src='/icons/icon_phone.png'/>1-781-426-1894</li>
                            <li><img src='/icons/icon_email.png'/>dan@burkedeveloping.com</li>
                        </ul>
                    </Col>
                    <Col></Col>
                    <Col></Col>
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
                .footlink img {
                    float: left;
                    width: 25px;
                    height: 25px;
                    margin: 0 10px;
                }
                .footlink h2 {
                    float: left;
                    width: 100%;
                    color: white;
                    text-shadow: 0 0 2px black;
                    font: 20px 'Montserrat';
                }
                .footlink {
                    width: 50%;
                    position: absolute;
                    left: 50%;
                    top: 80px;
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
                 .big {
                    width: 85%;
                }
                
                #footer {
                    float: left;
                    width: 100%;
                    min-height: 500px;
                    height: ${mobiletrue ? 'auto': '500px'};
                    background: ${theme.colors.onxy};
                    position: relative;
                }
                #copyw {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    background: ${theme.colors.darkonxy};
                    min-height: 80px;
                }
                #copyw h2 {
                    float: left;
                    font: 18px 'Montserrat';
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
                    background: #ff8552 !important;
                }
                html {
                    float: left;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

// Layout is out containing shell
// -> Canvas is inner container shell

export default Layout