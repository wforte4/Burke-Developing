import Theme from '../styles/theme';
import { getProjects } from '../services/projectservice';
import Link from 'next/link';
import { baseConfig } from '../services/restservice'
import { useEffect, useState } from 'react';
import { searchProjects } from '../services/apiservice';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { getDate } from '../components/elements';
import Head from 'next/head'
import { useSpring, animated , config} from 'react-spring'
import { FadeIn } from '../components/springs'

function getCategories(projects) {
    if(projects == null) return null
    const cats = []
    projects.map((project, i) => {
        project.tags.map((tag, k) => {
            if(!cats.some(cat => cat === tag)) {
                cats.push(tag)
            }
        })
    })
    return cats
}

function sortByDate(a, b) {
    let dateone = getDate(a.created_at)
    let datetwo = getDate(b.created_at)
    if(dateone.date < datetwo.date) return 1
    if(dateone.date > datetwo.date) return -1
    return 0
}

function Portfolio({load, searchQuery, results}) {

    const [categories, setCategories] = useState(getCategories(load))
    const [selectedCategory, setCategory] = useState(null)
    const [projects, setProjects] = useState(load.sort(sortByDate))
    const [painted, setPainted] = useState([])
    const [inputs, setInputs] = useState({filter: ''})
    const props = useSpring({
        config: config.gentle,
        from: {opacity: 0, transform: 'translateX(-400px)'}, to: {opacity: 1, transform: 'translateX(0)'}
    })

    const handleTyping = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return (
        <div className='body'>
            <Head>
                <title>Projects</title>
                <meta name="Description" content="Projects page displaying burke devloping portfolio of beautiful interior and exterior design."/>
            </Head>
            <img id='body_bg' src='/bg_login.png'/>
            <div className='searchQuery'>
                <h1>Search Result:</h1>
                <h2>{searchQuery ? searchQuery: null}</h2>
            </div>
            <animated.div style={props}><div className='categories'>
                <h1 id='title'>Home Improvement Projects</h1>
                <div className='subtitle'>Categories</div>
                <h4 style={{background: selectedCategory == null ? Theme.colors.royalblue: null, color: selectedCategory == null ? 'white': 'black', opacity: selectedCategory == null ? 1: '.6'}} onClick={()=> setCategory(null)} >All</h4>
                {categories ? categories.map((cat, i) => {
                    return <h4 style={{background: cat == selectedCategory ? Theme.colors.royalblue: null, color: cat == selectedCategory ? 'white': 'black', opacity: cat == selectedCategory ? 1: '.9'}} onClick={()=> setCategory(cat)} key={i}>{cat}</h4>
                }): null}
                <form>
                    <div className='label'>Search Projects</div>
                    <input className='filter' name='filter' value={inputs.filter} onChange={handleTyping} placeholder='Filter Projects' />
                </form>
            </div></animated.div>
            <div className='searching'>
                <p>Sorry, no results </p>
            </div>
            <FadeIn>
            <div id='projectcontainer'>
                <TransitionGroup id="outter" style={{display: 'flex',justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {projects == null ? null: projects.map((project, i) => {  
                        const {date, time} = getDate(project.created_at)
                        var render = true;
                        if(selectedCategory) {
                            render = false;
                            project.tags.map((tag, i) => {
                                console.log(selectedCategory.toUpperCase().indexOf(tag.toUpperCase()))
                                if(selectedCategory.toUpperCase().indexOf(tag.toUpperCase()) != -1) {
                                    render = true
                                }
                            }) 
                        }
                        if(inputs.filter.length !== 0) {
                            render = false
                            if(project.title.toUpperCase().indexOf(inputs.filter.toUpperCase()) != -1) {
                                render = true
                            }
                        }
                        if(!render) return null;
                        return (
                            <CSSTransition
                                key={i}
                                timeout={500}
                                classNames="item"
                            >
                                <div className='project' key={i}>
                                    <Link href={`/project/${project.id}`}><h1>{project.title}</h1></Link>
                                    <div className='frame'>
                                        <img alt={project.title} src={baseConfig.backendImages + project.images[0]} />
                                    </div>
                                    <div className='tagholder'>
                                        {project.tags.map((tag, i) => {
                                            return <h3 style={{background: tag == selectedCategory ? Theme.colors.royalblue: null, color: tag == selectedCategory ? 'white': 'black'}} key={i}>{tag}</h3>
                                        })}
                                    </div>
                                    <h2>Build Date: {date}</h2>
                                    <p>{project.body.split('').map((char, i) => {
                                        if(i <= 200) {
                                            return char
                                        } 
                                        if(i == project.body.length - 1) {
                                            return ' ...'
                                        }
                                    })}</p>
                                    <Link href={`/project/${project.id}`}><div className='button'>View Project</div></Link>
                                </div>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
                {results == null ? null: results.map((project, i) => {                   
                    return (
                        <div className='project' key={i}>
                            <Link href={`/posts/${project.id}`}><h2>{project.title}</h2></Link>
                            <div className='frame'>
                                <img src={baseConfig.backendImages + project.images[0]} />
                            </div>
                            <div className='tagholder'>
                                {project.tags.map((tag, i) => {
                                    return <h3 key={i}>{tag + (i == project.tags.length - 1 ? '': ',')}</h3>
                                })}
                            </div>
                            <p>{project.body.split('').map((char, i) => {
                                if(i <= 200) {
                                    return char
                                } 
                                if(i == project.body.length - 1) {
                                    return ' ...'
                                }
                            })}</p>
                            <Link href={`/posts/${project.id}`}><h4>View Project</h4></Link>
                        </div>
                    )
                })}
            </div>
            </FadeIn>
            <style jsx>{`
                .filter {
                    float: left;
                    width: 200px;
                    border-radius: 4px;
                    padding: 10px 5px;
                    font: 16px 'Roboto';
                    border: 1px solid ${Theme.colors.tar};
                }
                .label {
                    float: left;
                    font: 16px 'Roboto';
                    margin: 10px 15px;
                }
                form {
                    float: left;
                    width: 100%;
                    margin: 10px 0;
                    padding: 0;
                    position: relative;
                    display: flex;
                    justify-content: center;

                }
                .item-enter {
                    opacity: 0;
                    transform: scale(0,0);
                }
                .item-enter-active {
                    opacity: 1;
                    transform: scale(1,1);
                    transition: all 500ms ease;
                }
                .item-exit {
                    opacity: 1;
                    transform: scale(1,1);
                }
                .item-exit-active {
                    transform: scale(0,0);
                    transition: all 500ms ease;
                }
                .categories {
                    float: left;
                    width: 70%;
                    padding: 10px 15%;
                    background: rgba(255,255,255,.7);
                    box-shadow: ${Theme.shadows.mat};
                    backdrop-filter: blur(8px);
                    display: ${searchQuery ? 'none': 'flex'};
                    justify-content: center;
                    align-content: center;
                    flex-wrap: wrap;
                }
                .categories h4 {
                    float: left;
                    font: 16px 'Roboto';
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 4px;
                    margin: 0;
                    color: green;
                    opacity: .8;
                    transition: all .3s ease;
                }
                .categories h4:hover {
                    color: blue;
                    opacity: 1;
                }
                .searchQuery {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    display: ${searchQuery ? 'block': 'none'};
                    background: ${Theme.colors.lightplatinum};
                }
                .searchQuery h1 {
                    float: left;
                    margin: 10px 0;
                    font: 24px ${Theme.fonts.title};
                }
                .searchQuery h2 {
                    float: left;
                    margin: 10px 0;
                    margin-left: 40px;
                    font: 20px 'Roboto';
                }
                .searching {
                    float: left;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    width: 40%;
                    padding: 10px 5%;
                    margin-top: 50px 0;
                    display: ${searchQuery && results.length == 0 ? 'block': 'none'};
                    background: white;
                    box-shadow: ${Theme.shadows.mat};
                }
                .searching p {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    font: 16px 'Roboto';
                    background: white;
                    text-align: center;
                }
                .project {
                    float: left;
                    position: relative;
                    width: 390px;
                    height: 560px;
                    padding: 0px 0px;
                    margin: 10px 25px;
                    overflow: hidden;
                    background: white;
                    transition: all .5s ease;
                    box-shadow: 0 0 1px ${Theme.colors.gunmetal};
                    border-radius: 4px;
                    border-bottom: 1px solid ${Theme.colors.gunmetal};
                }
                .frame {
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    width: 100%;
                    margin: 20px 0;
                    margin-top: 0;
                    height: 280px;
                    overflow: hidden;
                }
                .frame img {
                    float: left;
                    width: 100%;
                    height: auto;
                    transition: all .3s ease-in-out;
                }
                .project h1 {
                    position: absolute;
                    top: 2px;
                    left: 0;
                    width: 90%;
                    padding: 18px 5%;
                    transform: scale(.98,.98);
                    margin: 0px 0;
                    cursor: pointer;
                    color: white;
                    z-index: 10;
                    border-radius: 4px;
                    text-align: center;
                    font: 20px 'Montserrat';
                    transition: all .3s ease;
                }
                .project h1:hover {
                    background: rgba(255,255,255,.70);
                    backdrop-filter: blur(8px);
                    color: ${Theme.colors.tar};
                    box-shadow: ${Theme.shadows.mat};
                }
                .tagholder {
                    float: left;
                    width: 95%;
                    padding: 3px 2.5%;
                }
                .project h2 {
                    float: left;
                    margin: 2px 5%;
                    width: 90%;
                    font: 12px 'Roboto';
                }
                .project h3 {
                    float: left;
                    width: auto;
                    font: 12px ${Theme.fonts.subheader};
                    font-style: italic;
                    margin: 3px 5px;
                }
                .project .button {
                    position: absolute;
                    bottom: 15px;
                    left: 5px;
                    font: 15px 'Roboto';
                    color: white;
                    background: ${Theme.colors.tar};
                    padding: 7px;
                    margin-left: 10px;
                    cursor: pointer;
                    border-radius: 3px;
                    opacity: .8;
                    transition: all .3s ease-in-out;
                }
                .project .button:hover {
                    opacity: 1;
                    box-shadow: ${Theme.shadows.mat};
                }
                .project .button:active {
                    box-shadow: ${Theme.shadows.inset};
                }
                .project p {
                    float: left;
                    width: 90%;
                    padding: 4px 5%;
                    font: 16px 'Roboto';
                    color: black;
                }
                #projectcontainer {
                    float: left;
                    width: 95%;
                    min-height: 600px;
                    margin: 40px 2.5%;
                    transition: all .5s ease;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                #outter {
                    float: left;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    margin-top: 80px;
                    position: relative;
                    overflow: hidden;
                }
                .subtitle {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    font: 22px 'Open Sans';
                    text-align: center;
                    margin: 10px 0;
                }
                #title {
                    float: left;
                    width: 95%;
                    padding: 15px 2.5%;
                    font: 30px 'Montserrat';
                    color: ${Theme.colors.gunmetal};
                    background: white;
                    text-align: center;
                    margin: 10px 0;
                }
                #body_bg {
                    width: 100%;
                    z-index: -20;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
            `}</style>
        </div>
    )
}

Portfolio.getInitialProps = async(ctx) => {
    const searchresult = await ctx.query.searchProjects
    if(searchresult) {
        const getSearch = await searchProjects(searchresult)
        return {load: null, searchQuery: searchresult, results: getSearch}
    }
    const getAllProjects = await getProjects(50);
    return {load: getAllProjects, searchQuery: null}
}

export default Portfolio