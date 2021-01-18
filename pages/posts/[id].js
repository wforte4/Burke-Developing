import { getProjectById } from "../../services/projectservice"
import BannerSlider from '../../components/banner'
import { baseConfig } from "../../services/restservice"
import Theme from '../../styles/theme'
import { Row, Col, Date } from '../../components/elements'
import Link from 'next/link'

function Project({project}) {
    return (
        <div id='body'>
            <BannerSlider height='750px' images={project.images} backendImageRoute={baseConfig.backendImages}/>
            <div className='title'>{project.title}</div>
            <div className='tagholder'>
                {project.tags.map((tag, i) => {
                    return <h3 key={i}>{tag.toUpperCase() + (i == project.tags.length - 1 ? '': ',')}</h3>
                })}
            </div>
            <Row height='auto'>
                <Col>
                    <h3 className='subheader'>About this project</h3>
                    <div className='date'><strong>Build Date: </strong><Date datetime={project.date}/></div>
                    <p>{project.body}</p>
                </Col>
                <Col>
                    <div className='imgcontainer'>
                        {project.images.map((image, i) => {
                            return (
                                <div key={i} className='frame'>
                                    <img src={baseConfig.backendImages + image}/>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
            <div className='ban'>
                <Link href='/projects'><h4 className='backto'>Back to All Projects</h4></Link>
            </div>
            <style jsx>{`
                .frame {
                    float: left;
                    width: 260px;
                    min-width: 200px;
                    margin: 1px;
                    position: relative;
                    over-flow: hidden;
                }
                .frame img {
                    float: left;
                    width: 100%;
                }
                .imgcontainer {
                    float: left;
                    width: 90%;
                    margin: 30px 5%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: stretch;
                }
                .ban {
                    float: left;
                    width: 100%;
                    background: ${Theme.colors.lightplatinum};
                    box-shadow: ${Theme.colors.shadowlight};
                    height: 150px;
                    margin-top: 40px;
                    position: relative;
                }
                .backto {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin: 0;
                    padding: 10px 20px;
                    cursor: pointer;
                    background: ${Theme.colors.charcoal};
                    color: white;
                    font: 14px 'Roboto';
                    border-radius: 10px;
                    transition: all .3s ease;
                    opacity: .8;
                    transform: translate(-50%,-50%);
                }
                .backto:hover {
                    opacity: 1;
                    box-shadow: ${Theme.colors.shadowlight};
                    transform: translate(-50%,-50%) rotate(-5deg);
                }
                .subheader {
                    float: left;
                    width: 90%;
                    padding: 30px 5%;
                    margin: 0;
                    font: 16px 'Montserrat';
                }
                .title {
                    float: left;
                    width: 90%;
                    padding: 30px 5%;
                    margin: 0;
                    font: 32px 'Montserrat';
                }
                .date {
                    float: left;
                    width: 80%;
                    padding: 30px 10%;
                    margin: 0;
                    font: 14px 'Roboto';
                }
                h1 {
                    position: fixed;
                    width: 100%;
                    top: 80px;
                    padding: 12px 0px;
                    margin: 0;
                    background: white;
                    text-align: center;
                    z-index: 99;
                    color: ${Theme.colors.onxy};
                    font: 24px ${Theme.fonts.title};
                }
                .tagholder {
                    float: left;
                    width: 95%;
                    padding: 40px 2.5%;
                    box-shadow: ${Theme.colors.shadowlight};
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .tagholder h3 {
                    float: left;
                    margin: 4px;
                    font: 16px 'Open Sans';
                    font-style: italic;
                    cursor: pointer;
                    opacity: .8;
                    transition: all .3s ease;
                    color: ${Theme.colors.charcoal};
                }
                .tagholder h3:hover {
                    opacity: 1;
                }
                .tagholder h3:after {
                  display:block;
                  content: '';
                  border-bottom: solid 1px ${Theme.colors.charcoal};  
                  transform: scaleX(0);  
                  transition: transform 250ms ease-in-out;
                }
                .tagholder h3:after{ transform-origin: 100% 50%; }
                .tagholder h3:hover:after{ transform: scaleX(1); transform-origin: 0% 50%; }
                p {
                    float: left;
                    width: 80%;
                    padding: 40px 5%;
                    margin: 5px 5%;
                    box-shadow: ${Theme.colors.shadowlight};
                    background: rgba(244,244,244,.6);
                    border-radius: 16px;
                    font: 16px 'Open Sans';
                }
                #body {
                    float: left;
                    width: 100%;
                    margin-top: 80px;
                }
            `}</style>
        </div>
    )
}

Project.getInitialProps = async(ctx) => {
    const getNewProject = await getProjectById(ctx.query.id)
    console.log(getNewProject)
    return {project: getNewProject}
}

export default Project