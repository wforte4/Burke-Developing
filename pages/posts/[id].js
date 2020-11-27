import { getProjectById } from "../../services/projectservice"
import BannerSlider from '../../components/banner'
import { baseConfig } from "../../services/restservice"
import Theme from '../../styles/theme'
import { Row, Col } from '../../components/elements'
import Link from 'next/link'

function Project({project}) {
    return (
        <div id='body'>
            <h1>{project.title}</h1>
            <BannerSlider height={600} images={project.images} backendImageRoute={baseConfig.backendImages}/>
            <div className='tagholder'>
                {project.tags.map((tag, i) => {
                    return <h3 key={i}>{tag.toUpperCase() + (i == project.tags.length - 1 ? '': ',')}</h3>
                })}
            </div>
            <div className='title'>{project.title}</div>
            <Row height='600px'>
                <Col>
                    <h3 className='subheader'>About this project</h3>
                    <p>{project.body}</p>
                </Col>
                <Col>
                    <div className='imgcontainer'>
                        {project.images.map((image, i) => {
                            return (
                                <div className='frame'>
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
                    max-height: 500px;
                    overflow-y: scroll;
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
                    font: 14px 'Montserrat';
                    margin: 10px;
                    margin-left: 30px;
                    border-bottom: 1px solid ${Theme.colors.gunmetal};
                }
                .title {
                    float: left;
                    width: 95%;
                    padding: 30px 2.5%;
                    margin: 0;
                    font: 32px 'Montserrat';
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
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 80%;
                    padding: 40px 5%;
                    max-height: 420px;
                    box-shadow: ${Theme.colors.shadowlight};
                    background: rgba(244,244,244,.6);
                    border-radius: 16px;
                    overflow-y: scroll;
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
    return {project: getNewProject}
}

export default Project