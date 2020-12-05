import Theme from '../styles/theme';
import { getProjects } from '../services/projectservice';
import Link from 'next/link';
import { baseConfig } from '../services/restservice'

function Portfolio({projects, searchQuery}) {
    return (
        <div className='body'>
            <h1 id='title'>Home Improvement Projects</h1>
            <div className='searchQuery'>
                <h1>Search Result:</h1>
                <h2>{searchQuery ? searchQuery: null}</h2>
            </div>
            <div id='projectcontainer'>
                {projects == null ? null: projects.map((project, i) => {
                    if(searchQuery && project.title.toUpperCase().indexOf(searchQuery.toUpperCase()) == -1) return
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
            <style jsx>{`
                .searchQuery {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    display: ${searchQuery ? 'block': 'none'};
                    background: ${Theme.colors.lightplatinum};
                }
                .searchQuery h1 {
                    float: left;
                    margin: 0;
                    font: 30px ${Theme.fonts.title};
                }
                .searchQuery h2 {
                    float: left;
                    margin: 8px 0;
                    margin-left: 40px;
                    font: 20px 'Roboto';
                }
                .tagholder {
                    float: left;
                    width: 90%;
                    padding: 3px 5%;
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
                .project {
                    float: left;
                    position: relative;
                    width: 380px;
                    height: 590px;
                    padding: 0px 0px;
                    margin: 10px 25px;
                    overflow: hidden;
                    box-shadow: 0 0 1px ${Theme.colors.gunmetal};
                    border-radius: 14px;
                    border-bottom: 1px solid ${Theme.colors.gunmetal};
                }
                .project h3 {
                    float: left;
                    width: auto;
                    font: 12px ${Theme.fonts.subheader};
                    font-style: italic;
                    margin: 2px 2px;
                }
                .project h4 {
                    position: absolute;
                    bottom: 5px;
                    left: 10px;
                    font: 16px 'Roboto';
                    color: white;
                    background: ${Theme.colors.tar};
                    padding: 10px;
                    margin-left: 10px;
                    cursor: pointer;
                    border-radius: 8px;
                    opacity: .8;
                    transition: all .3s ease-in-out;
                }
                .project h4:hover {
                    opacity: 1;
                    box-shadow: ${Theme.shadows.neo};
                }
                .project h4:active {
                    box-shadow: ${Theme.shadows.inset};
                }
                .project h2 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 90%;
                    padding: 10px 5%;
                    margin: 0px 0;
                    cursor: pointer;
                    color: white;
                    z-index: 10;
                    background: ${Theme.colors.tar};
                    text-align: center;
                    font: 17px 'Montserrat';
                    transition: all .3s ease;
                }
                .project h2:hover {
                    transform: scale(1.05,1.05);
                    border-radius: 8px;
                    box-shadow: ${Theme.shadows.mat};
                }
                .project p {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    font: 16px 'Open Sans';
                    color: ${Theme.colors.onxy};
                }
                #projectcontainer {
                    float: left;
                    width: 95%;
                    min-height: 600px;
                    margin: 40px 2.5%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    margin-top: 80px;
                }
                #title {
                    float: left;
                    width: 100%;
                    font: 34px 'Montserrat';
                    color: ${Theme.colors.gunmetal};
                    margin: 40px 0;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

Portfolio.getInitialProps = async(ctx) => {
    const getAllProjects = await getProjects(50);
    const searchresult = await ctx.query.searchProjects
    return {projects: getAllProjects, searchQuery: searchresult}
}

export default Portfolio