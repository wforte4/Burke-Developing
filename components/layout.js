import Link from 'next/link';
import Head from 'next/head';
import theme from '../styles/theme';
import {useScroll, useWindowSize} from '../components/hooks';
import { useEffect , useState} from 'react';
import {useRouter} from 'next/router';
import { Logout } from '../services/apiservice';

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

const Navigation = ({title, links, logo, currentpath, hideNav, user}) => {
    return (
        <div id='nav'>
            <Link href="/"><h1>{title}</h1></Link>
            <ul className='barlink'>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                })}
            </ul>
            <div className='right'>
                {user == null ? <>
                    <Link href='/login'><div className='login'>Login</div></Link>
                    <Link href='/login'><div className='create'>CreateProfile</div></Link>
                </>:
                    <div className='username'>
                        <h2>Welcome, {user}</h2>
                        <div className='dropdown'>
                            <ul>
                                <Link href="/backend_host_controller"><li>Admin</li></Link>
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
                    transition: all .3s ease;
                    background: rgba(255,255,255, .85);
                    backdrop-filter: blur(8px);
                    box-shadow: 0 0 2px rgba(23, 23, 23, .8);
                    display: ${hideNav == false ? 'block': 'none'};
                }
                .username {
                    float: right;
                    margin-right: 10px;
                    min-height: 78px;
                    min-width: 250px;
                    cursor: pointer;
                }
                .username:hover {
                    border-bottom: 2px solid ${theme.colors.coral};
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
                    transition: all .6s ease;
                    width: 100%;
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
                }
                .login {
                    float: left;
                    font: 14px ${theme.fonts.subheader};
                    padding: 25px 10px;
                    height: 28px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .6;
                    cursor: pointer;
                }
                .login:hover {
                    border-bottom: 2px solid ${theme.colors.coral};
                    opacity: 1;
                }
                .create {
                    float: left;
                    font: 14px ${theme.fonts.subheader};
                    padding: 25px 10px;
                    height: 28px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .6;
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
                    height: 90px;
                    position: relative;
                    margin: 0;
                }
                .barlink li {
                    float: left;
                    font: 15px ${theme.fonts.subheader};
                    padding: 30px 10px;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    opacity: .6;
                    list-style: none;
                    cursor: pointer;
                }
                .barlink li:hover {
                    border-bottom: 2px solid ${theme.colors.coral};
                    opacity: 1;
                }
                .barlink li[title="${currentpath}"] {
                    border-bottom: 2px solid ${theme.colors.coral};
                }
            `}</style>
        </div>
    )
}

const Header = ({title, currentpath}) => {
    return (
        <Head>
            <title>{title + ':' + currentpath}</title>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans&family=Raleway&family=Roboto&display=swap" rel="stylesheet"/>
        </Head>
    )
}


function Layout({children, links, title, path}) {
    
    const router = useRouter();
    const wzise = useWindowSize();
    const [user, setUser] = useState(null)
    const [userFullName, setFullName] = useState(null)

    const [hideNav, setNav] = useState(router.pathname === '/login' ? true: false)

    useEffect(() => {
        setNav(router.pathname === '/login'? true: false)
    }, [router.pathname])

    useEffect(() => {
        const user = localStorage.getItem('user')
        const fullname = localStorage.getItem('userFullName')
        if(user && fullname) {
            setUser(user)
            setFullName(fullname)
        }
    }, [])
    return (
        <div id='layout'>
            <Header title={title} currentpath={path}/>
            <Navigation user={userFullName} hideNav={hideNav} title={title} links={links} logo='/uplinkflat.png' currentpath={path}/>
            <div id="canvas">
                {children}
            </div>
            <div id="footer">
                <ul>

                </ul>
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
                #footer {
                    float: left;
                    width: 100%;
                    min-height: 500px;
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