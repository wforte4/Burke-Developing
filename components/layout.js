import Link from 'next/link';
import Head from 'next/head';
import theme from '../styles/theme';
import {useScroll} from '../components/hooks';
import { useEffect , useState} from 'react';

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

const Navigation = ({title, links, logo, currentpath}) => {
    return (
        <div id='nav'>
            <h1>{title}</h1>
            <ul>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><li title={link.url}>{link.name}</li></Link>
                })}
            </ul>
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
                }
                h1 {
                    float: left;
                    font: 26px ${theme.fonts.title};
                    color: ${theme.colors.onxy};
                    margin: 0 10px;
                    padding: 22px 10px;
                }
                ul {
                    float: left;
                    height: 90px;
                    position: relative;

                }
                li {
                    float: left;
                    font: 16px ${theme.fonts.subheader};
                    list-style: none;
                    padding: 8px 12px;
                    margin: 4px 10px;
                    transition: all .3s ease;
                    color: ${theme.colors.onxy};
                    border-bottom: 2px solid rgba(0,0,0,0);
                    cursor: pointer;
                }
                li[title="${currentpath}"] {
                    border-bottom: 2px solid ${theme.colors.coral};
                }
                li:hover {
                    opacity: .9;
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

    return (
        <div id='layout'>
            <Header title={title}/>
            <Navigation title={title} links={links} logo='/uplinkflat.png' currentpath={path}/>
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