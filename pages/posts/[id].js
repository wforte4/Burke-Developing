import { getProjectById } from "../../services/projectservice"
import BannerSlider from '../../components/banner'
import { baseConfig } from "../../services/restservice"

function Project({project}) {
    console.log(project)
    return (
        <div id='body'>
            <BannerSlider height={600} images={project.images} backendImageRoute={baseConfig.baseURL + '/ftp/'} />
            <h1>{project.title}</h1>
            <div className='tagholder'>
                {project.tags.map((tag, i) => {
                    return <h3 key={i}>{tag.toUpperCase() + (i == project.tags.length - 1 ? '': ',')}</h3>
                })}
            </div>
            <p>{project.body}</p>
            <style jsx>{`
                h1 {
                    float: left;
                    width: 90%;
                    margin: 30px 5%;
                    font: 40px 'Montserrat';
                }
                .tagholder {
                    float: left;
                    width: 95%;
                    margin: 10px 2.5%;
                }
                h3 {
                    float: left;
                    margin: 4px;
                    font: 14px 'Open Sans';
                    font-style: italic;
                }
                p {
                    float: left;
                    width: 45%;
                    padding: 20px 2.5%;
                    font: 14px 'Open Sans';
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
    console.log(ctx.query)
    const getNewProject = await getProjectById(ctx.query.id)
    return {project: getNewProject}
}

export default Project