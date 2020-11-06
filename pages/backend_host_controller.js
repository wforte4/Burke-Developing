import Theme from '../styles/theme'
import nextCookie from 'next-cookies'
import { backendImages } from '../services/apiservice'
import { useState } from 'react'
import { createProject } from '../services/projectservice'
import { getTasks } from '../services/apiservice'
import TaskManager, {compare} from '../components/backend/taskmanager'

function Backend({getFirstLoad}) {

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [images, setImages] = useState(null)
    const [inputs, setInputs] = useState({
        title: '',
        body: '',
        images: [],
        tags: ''
    })

    const uploadImage = async(e) => {
        e.preventDefault()
        if(file == null) return 
        const formData = new FormData()
        formData.append("myFile", file)
        const uploadImage = await fetch('http://localhost:3600/uploadfile', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            return response.json()
        })
    }

    const handleFileChange = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
    }

    const loadImages = async(e) => {
        e.preventDefault()
        const getImages = await fetch('http://localhost:3600/getallimages', {
            method: 'GET',
        }).then (response => {
            return response.json()
        })
        if(getImages) {
            console.log(getImages)
            setImages(getImages.images)
        }
    }

    const handleTypeing = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return (
        <div className='body'>
            <img id='body_bg' src='/bg_login.png'/>
            <div id="abovelayer">
                <TaskManager getFirstLoad={getFirstLoad} />
                <div className='imageupload'>
                    <form onSubmit={uploadImage}>
                        <div className='frame'><img className='preview' src={preview ? preview: '/imageplaceholder.png'} /></div>
                        <label htmlFor='fileid'>{file ? file.name: 'Upload Image'}</label>
                        <input id='fileid' type='file' onChange={handleFileChange} required />
                        <button type='submit'>Upload File</button>
                    </form>
                    <div className='images'>
                        <h1>My Images</h1>
                        {images != null ? images.map((image, i) => {
                            return <img src={backendImages + image} />
                        }): <h2 onClick={loadImages}>Load Images</h2>}
                    </div>
                </div>
                <div className='projects'>
                    <form className='projectsform'>
                        <input 
                            name='title'
                            value={inputs.title}
                            onChange={handleTypeing}
                        />
                        <input 
                            name='body'
                            value={inputs.body}
                            onChange={handleTypeing}
                        />
                    </form>
                    <div className='projectsdisplay'>

                    </div>
                </div>
            </div>
            <style jsx>{`
                .projects {
                    float: left;
                    width: 48%;
                    margin: 20px 1%;
                    position: relative;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .7);
                    box-shadow: 0 0 2px rgba(20,20,20,.8);

                }
                .images {
                    float: left;
                    width: 100%;
                    min-height: 100px;
                    margin: 10px 0;
                }
                .images img {
                    float: left;
                    width: 40%;
                    margin: 10px 5%;
                }
                .images h2 {
                    float: left;
                    width: 100%;
                    text-align: center;
                    margin: 10px 0;
                    cursor: pointer;
                    font: 14px 'Montserrat';
                    transition: all .3s ease-in-out;
                    color: ${Theme.colors.royalblue};
                }
                .images h1 {
                    float: left;
                    width: 90%;
                    text-align: left;
                    margin: 10px 5%;
                    font: 20px 'Montserrat';
                    transition: all .3s ease-in-out;
                    color: ${Theme.colors.royalblue};
                }
                .images h2:hover {
                    transform: scale(1.05, 1.05);
                }
                .imageupload {
                    float: left;
                    width: 23%;
                    margin: 20px 1%;
                    position: relative;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .7);
                    box-shadow: 0 0 2px rgba(20,20,20,.8);
                    overflow: hidden;
                    z-index: 99;
                }
                .imageupload form {
                    width: 100%;
                    float: left;
                }
                .imageupload label {
                    float: left;
                    width: 80%;
                    cursor: pointer;
                    padding: 10px 0;
                    margin: 10px 10%;
                    margin-top: 20px;
                    border-radius: 8px;
                    background: ${Theme.colors.onxy};
                    transition: background .3s ease;
                    color: white;
                    text-align: center;
                    font: 14px 'Roboto';
                }
                .imageupload label:hover {
                    background: ${Theme.colors.royalblue};
                }
                .imageupload button {
                    float: left;
                    width: 80%;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    padding: 10px 0;
                    margin: 10px 10%;
                    margin-bottom: 20px;
                    background: ${Theme.colors.onxy};
                    transition: background .3s ease;
                    color: white;
                    text-align: center;
                    font: 14px 'Roboto';
                }
                .imageupload button:hover {
                    background: ${Theme.colors.royalblue};
                }
                .frame {
                    float: left;
                    width: 100%;
                    height: ${preview ? '260px': '200px'};
                    transition: all .3s ease-in-out;
                    overflow: hidden;
                    position: relative;
                }
                .imageupload .preview {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
                #fileid {
                    display: none;
                }
                .body {
                    float: left; 
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    overflow: hidden;
                }
                #abovelayer {
                    float: left;
                    width: 100%;
                    height: 100%;
                    z-index: 99;
                    position: relative;
                    overflow: hidden;
                    margin-top: 80px;
                }
                #body_bg {
                    width: 100%;
                    z-index: -20;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
            `}</style>
        </div>
    )
}

Backend.getInitialProps = async(ctx) => {
    const cookies = await nextCookie(ctx)
    const getfirsttasks = await getTasks(50, cookies.accessToken)
    if(getfirsttasks == 'Not Authorized') {
        if (ctx.res) {
            ctx.res.writeHead(301, {
              Location: '/login'
            });
            ctx.res.end();
        } 
    }
    getfirsttasks.sort(compare('status'))
    return {getFirstLoad: getfirsttasks}
}

export default Backend