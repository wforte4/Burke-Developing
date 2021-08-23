import { useEffect , useState, useRef } from 'react'
import { useScroll } from '../components/hooks'
import { useRouter } from 'next/router'
import theme from '../styles/theme'
import { HamburgerButton } from './HamburgerButton'
import Link from 'next/link'

export default function Navigation({links, currentpath, user, permission, clearUserInfo}) {

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
            <Link href="/"><h1 className='title'>Burke Developing</h1></Link>
            <div ref={_element} className='linkholder'>
                {links.map((link, i) => {
                    return <Link key={i} href={link.url}><div className='navlink' title={link.url}>{link.name}</div></Link>
                })}
                <form onSubmit={handleSearch} className='search'>
                    <img alt='search' onClick={(e) => {
                        e.persist()
                        searchRef.current.focus()
                    }} src='/icons/icon_search.png'/>
                    <input onFocus={(e)=> e.target.select()} ref={searchRef} autoComplete='off' value={inputs.search} name='search' onChange={handleType} />
                </form>
            </div>
            <div className='right'>
                {user == null ? null:
                    <div className='username'>
                        <img alt='left' className='flip' src='/logo_arrow_left.png'/>
                        <h2>Welcome, {user}</h2>
                        <img alt='user_logo' className='userImg' src='/icons/userIcon.png'/>
                        <div className='dropdown'>
                            {permission > 2000 ? <>
                                <Link href="/burke-admin"><li><img alt='projects' src="/icons/projects.png"/>Upload New Project</li></Link>
                                <Link href="/burke-admin/imageupload"><li><img alt='images' src="/icons/uploadimg.png"/>Upload Images</li></Link>
                                <Link href="/burke-admin/taskmanager"><li><img alt='tasks' src="/icons/tasklist.png"/>Task Manager</li></Link>
                                </>: null}
                            <li onClick={clearUserInfo}><img alt='logout' src="/icons/logout.png"/>Logout</li>
                        </div>
                    </div>
                }
            </div>
            <style jsx>{`
                #nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 80px;
                    color: white;
                    z-index: 1000;
                    display: flex;
                    justify-content: space-evenly;
                    transition: all .8s ease;
                    background: rgba(32, 44, 57, .85);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: ${theme.colors.shadowlight};
                }
                .search {
                    float: left;
                    margin: 0px 5px;
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
                    margin-top: -5px;
                    transition: all .4s ease-in-out;
                }
                .search input:focus {
                    background: white;
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
                    left: 18px;
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
                    opacity: 0;
                    transition: all .2 ease;
                }
                .username:hover .userImg {
                    opacity: 1;
                }
                .username h2 {
                    float: left;
                    font: 16px ${theme.fonts.subheader};
                    margin: 4px 0;
                    padding: 12px 0;
                    border-radius: 3px;
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
                    color: black;
                }
                .dropdown {
                    float: left;
                    background: white;
                    z-index: 1;
                    height: .001px;
                    opacity: 0;
                    transition: all .3s ease;
                    width: 100%;
                    overflow: hidden;
                    border-bottom: 2px solid ${theme.colors.gunmetal};
                    border-radius: 3px;
                    box-shadow: ${theme.colors.shadowlight};
                }
                .username:hover .dropdown {
                    opacity: 1;
                    height: 200px;
                }
                .dropdown li img {
                    width: 14px;
                    height: 14px;
                    transition: all .4s ease;
                    margin-bottom: -2px;
                    margin-right: 7px;
                }
                .dropdown li {
                    float: left;
                    width: 90%;
                    padding: 12px 5%;
                    cursor: pointer;
                    color: black;
                    font: 16px 'Roboto';
                    list-style: none;
                    transition: all .2s ease;
                }
                .dropdown li:hover {
                    background: ${theme.colors.platinum};
                }
                .right {
                    position: fixed;
                    right: 0;
                    top: 0;
                    width: 270px;
                    min-height: 80px;
                    margin-right: 10px;
                }
                .title {
                    float: left;
                    margin: 8px 20px;
                    color: white;
                    font: 28px ${theme.fonts.title};
                    cursor: pointer;
                    padding: 12px 5px;
                }
                .linkholder {
                    float: left;
                    margin: 10px;
                    margin-top: 15px;
                    padding: 10px;
                    position: relative;
                    transition: transform .6s ease-in-out;
                }
                .linkholder .navlink {
                    float: left;
                    font: 17px ${theme.fonts.subheader};
                    padding: 10px 10px;
                    padding-top: 0;
                    height: 18px;
                    border-bottom: 2px solid ${theme.colors.opaq};
                    transition: all .3s ease;
                    line-height: 32px;
                    list-style: none;
                    cursor: pointer;
                    display: inline-block;
                }
                .linkholder .navlink:after {
                  display:block;
                  content: '';
                  border-bottom: solid 1px white;  
                  transform: scaleX(0);  
                  transition: transform 250ms ease-in-out;
                }
                .linkholder .navlink:after{ transform-origin: 100% 50%; }
                .linkholder .navlink:hover:after{ transform: scaleX(1); transform-origin: 0% 50%; }
                .linkholder .navlink[title="${currentpath}"] {
                    font-weight: bold;  
                }
                @media screen and (max-width: 850px) {
                    .barlink {
                        width: 100%;
                        position: absolute;
                        top: 139px;
                        left: 0;
                        margin: 0;
                        height: auto;
                        z-index: 1000;
                        padding: 20px 0;
                        background: rgba(32, 44, 57, .95);
                        backdrop-filter: blur(12px);
                        transform: translateX(${mobileactive ? 0: '-100%'});
                    }
                    .search {
                        width: 90%;
                        background: rgba(32, 44, 57, .95);
                        backdrop-filter: blur(12px);
                        position: absolute;
                        z-index: 1000;
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
                    .username h2 {
                        color: white;
                    }
                    .username:hover h2 {
                        color: black;
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
                        position: absolute;
                        top: ${_element.current ? 120 + _element.current.clientHeight + 20: 0}px;
                        left: 0;
                        right: none;
                        margin: 0;
                        z-index: 1000;
                        padding: 10px 5%;
                        transition: all .7s ease;
                        background: rgba(32, 44, 57, .95);
                        backdrop-filter: blur(12px);
                        transform: translateX(${mobileactive ? 0: '-100%'});
                    }
                }
            `}</style>
        </div>
    )
}