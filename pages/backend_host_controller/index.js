import Theme from '../../styles/theme'
import { backendImages } from '../../services/apiservice'
import { useState } from 'react'
import { createProject } from '../../services/projectservice'
import { baseConfig } from '../../services/restservice'

function Backend() {

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [images, setImages] = useState(null)
    const [tags, setTags] = useState([])
    const [formState, setFormState] = useState()
    const [inputs, setInputs] = useState({
        title: '',
        body: '',
        images: [],
        tag: ''
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
        if(uploadImage) {
            setPreview(null)
            setFile(null)
            loadImages(e)
        }
    }

    const uploadImageMultiple = async(e) => {
        e.preventDefault()
        console.log(file)
        if(file == null) return 
        const formData = new FormData()

        for (let i = 0; i < file.length; i++) {
            console.log(file[i].uri)
            formData.append(`myImages[]`, {
                uri: file[i].uri,
                type: 'image/*',
                name: file[i].name
            })
        }

        console.log(formData)
        const newupload = await fetch('http://localhost:3600/uploadmultiple', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            return response.json()
        })
        console.log(newupload)
        if(newupload) {
            setPreview(null)
            setFile(null)
            console.log(newupload)
            loadImages(e)
        }
    }

    const handleFileChange = (e) => {
        e.persist()
        setPreview(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files.length)
        if(e.target.files.length === 1) setFile(e.target.files[0])
        else setFile(e.target.files)
    }

    const loadImages = async(e) => {
        e.preventDefault()
        const getImages = await fetch('http://localhost:3600/getallimages', {
            method: 'GET',
        }).then (response => {
            return response.json()
        })
        if(getImages) {
            setImages(getImages.images)
        }
    }

    const handleTypeing = (e) => {
        e.persist()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const addTagToList = (e) => {
        e.persist()
        if(e.charCode == 32) {
            const newtags = tags
            newtags.push(inputs.tag)
            setInputs({...inputs, tag: ''})
            setTags(newtags)
        }
    }

    const removeTag = (e, tag) => {
        e.persist()
        const newtags = tags.filter(item => item !== tag)
        setTags(newtags)
    }

    const toggleFormState = (e) => {
        e.persist()
        if(formState == 'chooseimg') setFormState('fillingout')
        else setFormState('chooseimg')
    }

    const createNewPost = async(e) => {
        e.preventDefault()
        const newPost = await createProject(inputs.title, inputs.body, tags, inputs.images)
        if(newPost) {
            console.log(newPost)
        }
    }

    const toggleImageSelection = (e, image, state) => {
        e.persist()
        const newimages = inputs.images
        if(state == false) {
            newimages.push(image)
            setInputs({...inputs, images: newimages})
        } else {
            const removeimage = inputs.images.filter(img => img !== image)
            setInputs({...inputs, images: removeimage})
        }
    }

    const removeImage = async(e, image) => {
        e.preventDefault()
        const newremove = await fetch(baseConfig.baseURL + '/removeimage/' + image, {
            method: 'DELETE',
        }).then(response => {
            return response.status
        })
        if(newremove) {
            console.log(newremove)

        }
    }

    return (
        <div className='body'>
            <img id='body_bg' src='/bg_login.png'/>
            <div id="abovelayer">
                <div className='imageupload'>
                    <form onSubmit={file == null ? null: file.length ? uploadImageMultiple: uploadImage}>
                        <div className='frame'><img className='preview' src={preview ? preview: '/imageplaceholder.png'} /></div>
                        <label htmlFor='fileid'>{file ? file.length ? 'Multiple Images': file.name: 'Select Image'}</label>
                        <input id='fileid' type='file' accept='image/*' onChange={handleFileChange} required multiple/>
                        <button type='submit'>Upload Image</button>
                    </form>
                    <div className='images'>
                        <h1>My Images</h1>
                        {images != null ? images.map((image, i) => {
                            return (
                                <div key={i} className='imgframe'>
                                    <div onClick={(e) => removeImage(e, image)} className='x'>x</div>
                                    <img src={backendImages + image} />
                                </div>
                            )
                        }): <h2 onClick={loadImages}>Load Images</h2>}
                    </div>
                </div>
                <div className='projects'>
                    <h1>Upload New Project</h1>
                    <form onSubmit={createNewPost} className='projectsform'>
                        <div className='upper'>
                            <label>Title</label>
                            <input 
                                name='title'
                                value={inputs.title}
                                onChange={handleTypeing}
                                required
                            />
                            <label>Tags</label>
                            <input 
                                name='tag'
                                value={inputs.tag}
                                onChange={handleTypeing}
                                onKeyPress={addTagToList}
                                tabIndex={0}
                                required
                             />
                            <div className='tagholder'>
                                {tags ? tags.map((tag, i) => {
                                    return <h3 key={i}>{tag}<img onClick={(e) => removeTag(e, tag)} src='logo_exx.png'/></h3>
                                }): null}
                            </div>
                            <div className='chooseImages'>
                                <h2 onClick={(e)=> {
                                    if(images == null) loadImages(e)
                                    toggleFormState(e)
                                }}>Select Images</h2>
                                <div className='imgfloat'>
                                    <div className='tri'></div>
                                    <p>Click on the images below to select them for the post</p>
                                    <img onClick={toggleFormState} className='exxx' src='/logo_exx.png'/>
                                    {images != null ? images.map((image, i) => {
                                        const isSelected = inputs.images.indexOf(image) >= 0 ? true: false
                                        return <div key={i} name={isSelected == true ? 'green': 'none'} className='imgframe'><img onClick={(e) => toggleImageSelection(e, image, isSelected)} src={backendImages + image} /></div>
                                    }): null}
                                </div>
                                <div className='selimageouter'>
                                    {inputs.images.length == 0 ? null: inputs.images.map((image, i) => {
                                        return <div className='selimage'>{image}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <label>Body</label>
                        <textarea 
                            name='body'
                            value={inputs.body}
                            onChange={handleTypeing}
                            required
                        />
                        <button type='submit'>Upload Project</button>
                    </form>
                    <div className='projectsdisplay'>

                    </div>
                </div>
            </div>
            <style jsx>{`
                .x {
                    position: absolute;
                    z-index: 10;
                    top: 3px;
                    right: 3px;
                    width: 15px;
                    font: 12px 'Roboto';
                    height: 15px;
                }
                .selimage {
                    float: left;
                    width: 90%;
                    padding: 2px 5%;
                    font: 12px 'Open Sans';
                }
                .selimageouter {
                    float: left;
                    width: 100%;
                    max-height: 150px;
                    overflow-y: scroll;
                    box-shadow: inset 0px 0px 9px -1px rgba(20,20,20,.4);
                    border-radius: 3px;
                    margin: 10px 0;
                    padding: 10px 0;
                }
                .imgfloat {
                    position: absolute;
                    top: 60px;
                    padding: 20px;
                    padding-top: 60px;
                    width: 200%;
                    background: white;
                    box-shadow: 0 0 6px rgba(30,30,30,.2);
                    border-radius: 10px;
                    display: ${formState == 'chooseimg' ? 'flex': 'none'};
                    right: 10px;
                    max-height: 450px;
                    overflow-y: scroll;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .imgfloat p {
                    position: absolute;
                    top: 10px;
                    left: 20px;
                    width: 100%;
                    font: 14px 'Roboto';
                    color: ${Theme.colors.onxy};
                }
                .imgfloat .exxx {
                    position: absolute;
                    top: 10px;
                    padding: 5px;
                    border-radius: 50%;
                    cursor: pointer;
                    background: ${Theme.colors.royalblue};
                    right: 10px;
                    width: 12px;
                    height: 12px;
                }
                .tri {
                    position: absolute;
                    top: -10px;
                    right: 25%;
                    width: 20px;
                    height: 20px;
                    transform: rotate(45deg);
                    background: white;
                }
                .chooseImages {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    width: 48%;
                }
                .chooseImages h2 {
                    float: left;
                    width: 80%;
                    padding: 10px 0;
                    margin: 10px 10%;
                    text-align: center;
                    font: 16px ${Theme.fonts.fancy};
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    transition: all .3s ease;
                    cursor: pointer;
                }
                .chooseImages h2:hover {
                    opacity: .7;
                }
                .imgframe {
                    float: left;
                    width: 130px;
                    height: 130px;
                    margin: 8px;
                    border-radius: 8px;
                    border: 2px solid ${Theme.colors.platinum};
                    position: relative;
                    overflow: hidden;
                }
                .projects .imgframe {
                    cursor: pointer;
                }
                .imgframe[name='green'] {
                    border: 2px solid rgba(59, 237, 59, 1);
                }
                .imgframe img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100%;
                    transition: all .3s ease;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
                .imgframe:hover img {
                    transform: translate(-50%, -50%) scale(1.2,1.2);
                }
                .projects {
                    float: left;
                    width: 46%;
                    margin: 20px 1%;
                    padding: 5px 1%;
                    position: relative;
                    border-radius: 10px;
                    backdrop-filter: blur(8px);
                    background: rgba(255, 255, 255, .7);
                    box-shadow: 0 0 2px rgba(20,20,20,.8);
                    min-height: 300px;
                }
                .projects h1 {
                    float: left;
                    width: 95%;
                    text-align: left;
                    margin: 20px 2.5%;
                    font: 20px 'Montserrat';
                    transition: all .3s ease-in-out;
                    color: ${Theme.colors.gunmetal};
                }
                .projectsform {
                    float: left;
                    width: 100%;
                    margin: 10px 0;
                    transition: all .3s ease-in-out;
                    opacity: ${formState == 'loading' || formState == 'done' ? 0: 1};
                }
                .projectsform input {
                    float: left;
                    width: 35%;
                    padding: 10px 2.5%;
                    margin: 2px 5%;
                    color: ${Theme.colors.onxy};
                    font: 16px 'Roboto';
                    border: none;
                    border-radius: 8px;
                    box-shadow: 0 0 2px ${Theme.colors.onxy};
                }
                .projectsform textarea {
                    float: left;
                    width: 90%;
                    padding: 10px 2.5%;
                    margin: 10px 2.5%;
                    color: ${Theme.colors.onxy};
                    font: 16px 'Roboto';
                    border: none;
                    border-radius: 8px;
                    box-shadow: 0 0 2px ${Theme.colors.onxy};
                    min-height: 150px;
                    max-height: 250px;
                    resize: vertical;
                }
                .projectsform label {
                    float: left;
                    width: 90%;
                    padding: 8px 2.5%;
                    margin: 5px 2.5%;
                    color: ${Theme.colors.onxy};
                    font: 16px 'Open Sans';
                }
                .projectsform button {
                    float: left;
                    padding: 10px;
                    border: none;
                    background: ${Theme.colors.charcoal};
                    color: white;
                    cursor: pointer;
                    margin: 10px 0;
                    font: 14px ${Theme.fonts.fancy};
                }
                .tagholder {
                    float: left;
                    width: 100%;
                    transition: all .3s ease;
                    margin-top: 20px;
                    height: ${tags.length == 0 ? '2px': '40px'};
                }
                .tagholder img {
                    width: 10px;
                    margin-left: 10px;
                    cursor: pointer;
                    height: 10px;
                    opacity: .8;
                    transition: all .3s ease;
                }
                .tagholder img:hover {
                    opacity: 1;
                }
                .tagholder h3 {
                    float: left;
                    width: auto;
                    padding: 10px;
                    border-radius: 8px;
                    color: white;
                    margin: 10px 5px;
                    font: 14px 'Roboto';
                    background: ${Theme.colors.royalblue};
                }
                .upper {
                    width: 100%;
                    min-height: 220px;
                    position: relative;
                    float: left;
                    padding: 10px 0;
                    padding-bottom: 20px;
                    border-bottom: 1px solid ${Theme.colors.royalblue};
                }
                .layertop {
                    z-index: 9999;
                }
                .images {
                    float: left;
                    width: 100%;
                    min-height: 100px;
                    max-height: 400px;
                    overflow-y: scroll;
                    margin: 10px 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .images h2 {
                    float: left;
                    width: 100%;
                    text-align: center;
                    margin: 10px 0;
                    margin-top: 30px;
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
                    z-index: -99;
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
                    position: relative;
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
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
            `}</style>
        </div>
    )
}

export default Backend