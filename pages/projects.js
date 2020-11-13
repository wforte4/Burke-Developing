import Theme from '../styles/theme';
import { getProjects } from '../services/projectservice';
import Link from 'next/link';
import { baseConfig } from '../services/restservice'

function Portfolio({projects}) {
    return (
        <div className='body'>
            <h1 id='title'>Home Improvement Projects</h1>
            <div id='projectcontainer'>
                {projects == null ? null: projects.map((project, i) => {
                    return (
                        <div className='project' key={i}>
                            <h2>{project.title}</h2>
                            <div className='frame'>
                                <img src={baseConfig.backendImages + project.images[0]} />
                            </div>
                            {project.tags.map((tag, i) => {
                                return <h3>{tag}</h3>
                            })}
                            <p>{project.body.split('').map((char, i) => {
                                if(i <= 200) {
                                    return char
                                } 
                                if(i == project.body.length - 1) {
                                    return ' ...'
                                }
                            })}</p>
                            <Link href={`/posts/${project.id}`}><h4>View Post</h4></Link>
                        </div>
                    )
                })}
            </div>
            <style jsx>{`
                .project {
                    float: left;
                    position: relative;
                    width: 280px;
                    height: 400px;
                    padding: 30px 10px;
                    margin: 10px 15px;
                    box-shadow: 0 0 1px ${Theme.colors.gunmetal};
                    border-radius: 3px;
                    border-bottom: 1px solid ${Theme.colors.gunmetal};
                }
                .project h3 {
                    float: left;
                    width: auto;
                    font: 11px ${Theme.fonts.fancy};
                    font-style: italic;
                    margin: 2px 2px;
                }
                .project h4 {
                    position: absolute;
                    bottom: 5px;
                    left: 10px;
                    font: 14px 'Roboto';
                    background: ${Theme.colors.charcoal};
                    color: white;
                    padding: 10px;
                    margin-left: 10px;
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all .3s ease-in-out;
                }
                .project h4:hover {
                    opacity: .8;
                }
                .frame {
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    width: 100%;
                    margin: 5px 0;
                    max-height: 150px;
                    overflow: hidden;
                }
                .frame img {
                    float: left;
                    width: 100%;
                    height: auto;
                    transition: all .3s ease-in-out;
                }
                .frame:hover img {
                    transform: scale(1.1,1.1);
                }
                .project h2 {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    margin: 0;
                    font: 16px 'Montserrat';
                    color: ${Theme.colors.gunmetal};
                }
                .project p {
                    float: left;
                    width: 90%;
                    padding: 10px 5%;
                    font: 13px 'Open Sans';
                    color: ${Theme.colors.onxy};
                }
                #projectcontainer {
                    float: left;
                    width: 95%;
                    min-height: 600px;
                    margin: 20px 2.5%;
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
                    font: 20px 'Montserrat';
                    color: ${Theme.colors.gunmetal};
                    margin: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

Portfolio.getInitialProps = async(ctx) => {
    const getAllProjects = await getProjects(50);
    return {projects: getAllProjects}
}

export default Portfolio