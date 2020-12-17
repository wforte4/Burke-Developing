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

const cookies = new Cookies();

const HamburgerButton = ({onClick, active, top, left, right, width, height}) => {
    return <div onClick={onClick} className='ham'>
        <div className='line top'></div>
        <div className='line middle'></div>
        <div className='line bottom'></div>
        <style jsx>{`
            .ham {
                position: absolute;
                cursor: pointer;
                top: ${top};
                right: ${right};
                width: ${width}px;
                height: ${height}px;
                display: none;
            }
            .line {
                position: absolute;
                left: 0;
                width: 100%;
                height: 1px;
                background: black;
                transition: all .3s ease;
            }
            .top {
                top: 0;
                transform: translateY(${active ? (height / 2) - 1: '0'}px) rotate(${active ? '45deg': '0'}) ;
            }
            .middle {
                top: 50%;
                transform: translateY(-50%);
                opacity: ${active ? 0: 1};
            }
            .bottom {
                bottom: 0;
                transform: translateY(-${active ? (height / 2): '0'}px) rotate(${active ? '-45deg': '0'});
            }
            @media screen and (max-width: 800px) {
                .ham {
                    display: block;
                }
            }
        `}</style>
    </div>
}

const Navigation = ({title, links, logo, currentpath, hideNav, user, permission, clearUserInfo}) => {

    const scroll = useScroll();
    const router = useRouter()
    const searchRef = useRef()
    const _element = useRef()
    const [searchFocused, setFocused] = useState(false)
    const [mobileactive, setActive] = useState(false)
    const toggleActive = (e) => {
        e.persist();
        if(mobileactive == true) setActive(false)
        else setActive(true)
    }
    const [inputs, setInputs] = useState({search: ''})

    useEffect(() => {
        setActive(false)
    }, [currentpath])

    const handleType = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSearch = async(e) => {
        e.preventDefault()
        const newsearch = `/projects?searchProjects=${inputs.search}`
        await router.push(newsearch)
    }

    return (
        <div id='nav'>
            <HamburgerButton active={mobileactive} onClick={toggleActive} top='30px' right='20px' width={30} height={15} />
            <Link href="/"><img className='burkeLogo' src='/icons/burkeLogo.png' /></Link>
            <ul ref={_element} className='barlink'>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                })}
                {user == null ? <>
                    <Link href='/login'><li>Login</li></Link>
                    <Link href='/createprofile'><li>CreateProfile</li></Link>
                </>:null}
            </ul>
            <form onSubmit={handleSearch} className='search'>
                <img onClick={(e) => {
                    e.persist()
                    searchRef.current.focus()
                }} src='/icons/icon_search.png'/>
                <input onFocus={(e)=> e.target.select()} ref={searchRef} autoComplete='off' value={inputs.search} name='search' onChange={handleType} />
            </form>
            <div className='right'>
                {user == null ? null:
                    <div className='username'>
                        <img className='flip' src='/logo_arrow_left.png'/>
                        <h2>Welcome, {user}</h2>
                        <img className='userImg' src='/icons/userIcon.png'/>
                        <div className='dropdown'>
                            <ul>
                                {permission > 2000 ? <>
                                    <Link href="/backend_host_controller"><li><img src="/icons/projects.png"/>Upload Project</li></Link>
                                    <Link href="/backend_host_controller/imageupload"><li><img src="/icons/uploadimg.png"/>Upload Images</li></Link>
                                    <Link href="/backend_host_controller/taskmanager"><li><img src="/icons/tasklist.png"/>View Tasks</li></Link>
                                    </>: null}
                                <li onClick={clearUserInfo}><img src="/icons/logout.png"/>Logout</li>
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
                    z-index: 1000;
                    display: flex;
                    transition: all .8s ease;
                    background: rgba(255,255,255, .85);
                    backdrop-filter: blur(12px);
                    box-shadow: ${theme.colors.shadowlight};
                    opacity: ${hideNav == false ? '1': '0'};
                }
                .search {
                    float: left;
                    margin: 22px 5px;
                }
                .search img {
                    width: 20px;
                    height: 20px;
                    margin: 5px 0;
                    cursor: pointer;
                    float: left;
                }
                .search input {
                    padding: 10px;
                    border: none;
                    font: 13px 'Open Sans';
                    border-radius: 8px;
                    width: .01px;
                    opacity: 0;
                    margin: 0 10px;
                    transition: all .4s ease-in-out;
                }
                .search input:focus {
                    background: rgba(244,244,244,.7);
                    outline: none;
                    opacity: 1;
                    width: 140px;
                    box-shadow: ${theme.colors.shadowlight};
                }
                .hamburg {
                    position: fixed;
                    top: 22px;
                    right: 20px;
                    width: 30px;
                    height: 30px;
                    display: none;
                }
                .username {
                    position: fixed;
                    right: 0;
                    top: 0;
                    min-height: 78px;
                    min-width: 200px;
                    position: relative;
                }
                .username .flip {
                    position: absolute;
                    left: 14px;
                    top: 30px;
                    width: 14px;
                    height: 14px;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: rotate(180deg);
                }
                .username:hover .flip {
                    transform: rotate(-90deg);
                }
                .username .userImg {
                    position: absolute;
                    right: 14px;
                    top: 26px;
                    width: 22px;
                    height: 22px;
                }
                .username h2 {
                    float: left;
                    font: 16px ${theme.fonts.subheader};
                    margin: 4px 0;
                    padding: 12px 0;
                    border-radius: 8px;
                    margin-top: 16px;
                    width: 100%;
                    transition: all .3s ease;
                    cursor: pointer;
                    text-align: center;
                    z-index: 2;
                }
                .username:hover h2 {
                    box-shadow: ${theme.colors.shadowlight};
                    background: white;
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
                    border-bottom: 2px solid ${theme.colors.gunmetal};
                    border-radius: 8px;
                    box-shadow: ${theme.colors.shadowlight};
                }
                .dropdown ul li img {
                    width: 20px;
                    height: 20px;
                    opacity: .7;
                    transition: all .4s ease;
                    margin-bottom: -5px;
                    margin-right: 7px;
                }
                .dropdown ul li {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    cursor: pointer;
                    font: 16px 'Roboto';
                    list-style: none;
                    transition: background .2s ease;
                }
                .dropdown ul li:hover {
                    background: ${theme.colors.platinum};
                }
                .dropdown ul li:hover img {
                    opacity: 1;
                }
                .dropdown ul {
                    float: left;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
                .username:hover .dropdown {
                    height: 170px;
                    opacity: 1;
                }
                .right {
                    position: fixed;
                    right: 0;
                    top: 0;
                    width: 270px;
                    min-height: 80px;
                    margin-right: 10px;
                }
                .burkeLogo {
                    float: left;
                    width: 160px;
                    margin: 5px 20px;
                    cursor: pointer;
                    padding: 0px 2px;
                }
                .barlink {
                    float: left;
                    margin: 10px;
                    margin-top: 15px;
                    padding: 10px;
                    position: relative;
                    transition: transform .6s ease-in-out;
                }
                .barlink li {
                    float: left;
                    font: 17px ${theme.fonts.subheader};
                    padding: 10px 10px;
                    padding-top: 0;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .7;
                    line-height: 32px;
                    list-style: none;
                    cursor: pointer;
                    display: inline-block;
                }
                .barlink li:after {
                  display:block;
                  content: '';
                  border-bottom: solid 2px ${theme.colors.charcoal};  
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
                @media screen and (max-width: 850px) {
                    .barlink {
                        width: 100%;
                        background: white;
                        position: absolute;
                        top: 130px;
                        left: 0;
                        margin: 0;
                        padding: 10px 0;
                        transform: translateX(${mobileactive ? 0: '-100%'});
                    }
                    .search {
                        width: 90%;
                        background: white;
                        position: absolute;
                        top: 80px;
                        left: 0;
                        margin: 0;
                        z-index: 99;
                        padding: 10px 5%;
                        transition: all .3s ease;
                        transform: translateX(${mobileactive ? 0: '-100%'});
                    }
                    .search input {
                        width: 80%;
                    }
                    .search input:focus {
                        width: 80%;
                    }
                    .barlink li {
                        width: 90%;
                        padding: 8px 5%;
                    }
                    .ham {
                        display: block;
                    }
                    .right {
                        width: 90%;
                        display: block;
                        background: white;
                        position: absolute;
                        top: ${_element.current ? 120 + _element.current.clientHeight: 0}px;
                        left: 0;
                        right: none;
                        margin: 0;
                        z-index: 99;
                        padding: 10px 5%;
                        transition: all .7s ease;
                        transform: translateX(${mobileactive ? 0: '-100%'});
                    }
                }
            `}</style>
        </div>
    )
}

const Header = ({title, currentpath}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel='icon' href='/icons/icon_bd.png' type="image/gif" sizes="16x16"/><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&family=Roboto&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@500&family=Big+Shoulders+Stencil+Display:wght@700&family=Playfair+Display:wght@500&display=swap" rel="stylesheet"/>
        </Head>
    )
}

const restrictedRoutes = [
    '/login',
    '/createprofile'
]

function hideNavigation(currentpath) {
    var decision = null
    restrictedRoutes.forEach(route => {
        if(route === currentpath) decision = true
    })
    if(decision == true) {
        return true
    }
    return false
}

function Layout({children, links, title, path}) {
    
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [permission, setPermission] = useState(null)
    const [userFullName, setFullName] = useState(null)
    const mobiletrue = useState(isMobile)
    const newscroll = useScroll()

    const [hideNav, setNav] = useState(hideNavigation(router.pathname) ? true: false)

    useEffect(() => {
        setNav(hideNavigation(router.pathname) ? true: false)
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

    const clearUser = async(e) => {
        e.persist()
        setUser(null)
        setFullName(null)
        setPermission(null)
        await Logout()
    }

    return (
        <div id='layout'>
            <Header title={title} currentpath={path}/>
            <Navigation permission={permission} user={userFullName} hideNav={hideNav} title={title} links={links} logo='/uplinkflat.png' currentpath={path} clearUserInfo={clearUser}/>
            <div id="canvas">
                {children}
            </div>
            <AnchorLink href='#layout'><img id='totop' src='/logo_arrow_left.png' /></AnchorLink>
            <div id="footer">
                <p>"The finest compliment I can receive is the referral of <br></br>your friends, family, and business associates.<br></br>Thank you for your trust"</p>
                <Row height={mobiletrue ? 'auto': '400px'} padding='4'>
                    <Col>
                        <ul className='footlink big'>
                            <h2>Links</h2>
                            {links.map((link, i) => {
                                return <Link key={i} href={link.url}><li title={link.url}><img className='flip' src='/logo_arrow_left_white.png'/>{link.name}</li></Link>
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
                    <Col>
                        <ul className='footlink big'>
                            <h2>Social Media</h2>
                            <Link href='http://www.facebook.com/BurkeDeveloping'><li><img src='/icons/facebook.png'/>Facebook</li></Link>
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