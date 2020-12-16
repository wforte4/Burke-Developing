import Theme from '../../styles/theme'
import { useState } from 'react'
import { createProject, getProjects, removeProject, updateProject } from '../../services/projectservice'
import { baseConfig } from '../../services/restservice'
import { withAuthSync } from '../../services/auth'
import { Date, getDate } from '../../components/elements'
import Link from 'next/link' 

function Backend({initialProjectsLoad}) {

    const [images, setImages] = useState(null)
    const [tags, setTags] = useState([])
    const [editPost, setEditPost] = useState(null)
    const [formState, setFormState] = useState()
    const [newProject, setNewProject] = useState()
    const [areYouSure, setYourSure] = useState()
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [projects, setProjects] = useState(initialProjectsLoad)
    const [inputs, setInputs] = useState({
        title: '',
        body: '',
        images: [],
        tag: '',
        date: ''
    })

    const loadProjects = async(e) => {
        const getAllProjects = await getProjects(100)
        if(getAllProjects) setProjects(getAllProjects)
    }

    const clearAllInputs = (e) => {
        e.persist();
        setInputs({
            title: '',
            body: '',
            images: [],
            tag: ''
        })
        setTags([])
        setFormState('')
        setEditPost(null)
    }

    const loadImages = async(e) => {
        e.preventDefault()
        const getImages = await fetch(baseConfig.baseURL + '/getallimages', {
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

    const createNewProject = async(e) => {
        e.preventDefault()
        setFormState('loading')
        const newPost = await createProject(inputs.title, inputs.body, tags, inputs.images, inputs.date)
        if(newPost) {
            console.log(newPost)
            setNewProject(newPost.id)
            setFormState('done')
        }
    }

    const removeThisProject = async(e, pid) => {
        const removePost = await removeProject(pid)
        if(removePost) {
            console.log(removePost);
            loadProjects(e)
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

    const newPostEdit = (e, pid) => {
        e.persist()
        const thisProject = projects.filter((project) => project.id == pid)
        setEditPost(thisProject[0])
        const newdate = getDate(thisProject[0].date)
        console.log(newdate.date)
        setInputs({
            ...inputs,
            title: thisProject[0].title,
            body: thisProject[0].body,
            images: thisProject[0].images,
            date: newdate.date
        })
        setTags(thisProject[0].tags)
    }

    const uploadEdits = async(e) => {
        e.preventDefault()
        setFormState('loading')
        const newEdits = await updateProject(editPost.id, inputs.title, inputs.body, inputs.images, tags)
        if(newEdits) {
            console.log(newEdits)
            setFormState('newedit')
        }
    }

    const moveToFront = (image) => {
        const removeimage = inputs.images.filter(img => img !== image)
        setInputs({...inputs, images: removeimage})
        const newimages = removeimage.unshift(image)
        console.log(removeimage)
        setInputs({...inputs, images: removeimage})
    }

    return (
        <div className='body'>
            <img id='body_bg' src='/bg_login.png'/>
            <div id="abovelayer">
                <div className='projects'>
                    <h3 className='subheader'>{editPost ? `Editing ${editPost.title}`: 'Upload New Project'}</h3>
                    <form onSubmit={editPost == null ? createNewProject: uploadEdits} className='projectsform'>
                        <div className='upper'>
                            <div className='upleft'>
                                <label>Title</label>
                                <input 
                                    name='title'
                                    value={inputs.title}
                                    onChange={handleTypeing}
                                    placeholder="Ex: 'Hanson Project'"
                                    required
                                />
                                <p className='info'>Main title for the post</p>
                                <label>Add Tag</label>
                                <p className='info'>Hit the "Space" key to add tag to list</p>
                                <div className='tagholder'>
                                    {tags.length !== 0 ? tags.map((tag, i) => {
                                        return <h3 key={i}>{tag}<img onClick={(e) => removeTag(e, tag)} src='logo_exx.png'/></h3>
                                    }): null}
                                    <input 
                                        name='tag'
                                        value={inputs.tag}
                                        onChange={handleTypeing}
                                        onKeyPress={addTagToList}
                                        placeholder="'NewTag'"
                                        tabIndex={0}
                                        autoComplete='off'
                                    />
                                </div>
                                <label>Build Date</label>
                                <input 
                                    name='date'
                                    type='date'
                                    value={inputs.date}
                                    onChange={handleTypeing}
                                    required
                                />
                                <p className='info'>Date the Project was built</p>
                            </div>
                            <div className='chooseImages'>
                                <label>Featured Image</label>
                                <div className='imagePreview'>
                                    <img src={inputs.images.length != 0 ? baseConfig.backendImages + inputs.images[0]: '/imageplaceholder.png'}/>
                                </div>
                                <p className='info'>Click from images below to set featured image</p>
                                <div className='selectedImages'>
                                    {inputs.images.length == 0 ? <p className='info'>None Selected</p>: inputs.images.map((image, i) => {
                                        return <div key={i} onClick={() => moveToFront(image)} className='selimage'>{image}</div>
                                    })}
                                </div>
                                <h2 onClick={(e)=> {
                                    if(images == null) loadImages(e)
                                    toggleFormState(e)
                                }}>{inputs.images.length == 0 ? 'Select Images': 'Edit Selection'}</h2>
                            </div>
                        </div>
                        <label>Body</label>
                        <textarea 
                            name='body'
                            value={inputs.body}
                            onChange={handleTypeing}
                            placeholder='Information about the project'
                            required
                        />
                        <p className='info'>This is the body paragraph of your post, main description of the project goes here</p>
                        <button type='submit'>{editPost ? 'Save Edits': 'Upload Project'}</button>
                    </form>
                    <img className='loader' src='/loading_a.gif'/>
                    <div className='messagecenter'>
                        <p>Congratulation's your project has been uploaded</p>
                        <Link href={`/posts/${newProject}`}><h4>Click here to view new project!</h4></Link>
                    </div>
                    <div className='newedit'>
                        <p>Your Edit's were made to <strong>{editPost ? editPost.title: null}</strong></p>
                        <h4 onClick={clearAllInputs}>Create New Post</h4>
                        <h4 onClick={()=> setFormState('')}>Continue Editing</h4>
                        <Link href={`/posts/${editPost ? editPost.id: null}`}><h4>View Edited Post</h4></Link>
                    </div>
                </div>
                <div className='pastpro'>
                    <h3 className='subheader'>My Projects</h3>
                    <div onClick={loadProjects} className='centerbox'>View Projects</div>
                    <div className='pastproContainer'>
                        {projects ? projects.map((project, i) => {
                            return (
                                <div key={project.id} className='singleproject'>
                                    <img className='sinpreview' src={baseConfig.backendImages + project.images[1]}/>
                                    <Link href={`/posts/${project.id}`} ><h2>{project.title}</h2></Link>
                                    <div className='datetime'><Date datetime={project.date} /></div>
                                    <img className='threedots' src='/threedots.png' />
                                    <ul className='dropdown'>
                                        <Link href={`/posts/${project.id}`} ><li>View</li></Link>
                                        <li onClick={function(e) {newPostEdit(e, project.id)}}>Edit</li>
                                        <li onClick={function(e) {
                                            const thisProject = projects.filter((pj) => pj.id == project.id)
                                            setYourSure(thisProject[0])
                                        }}>Remove</li>
                                    </ul>
                                </div>
                            )
                        }): null}
                    </div>
                </div>
            </div>

            <div className='imgfloat'>
                <div className='tri'></div>
                <img className='imgloader' src='/loading_a.gif'/>
                <p>Click on the images below to select them for the post</p>
                <img onClick={toggleFormState} className='exxx' src='/logo_exx.png'/>
                <div className='imagewrapper'>
                    {images != null ? images.map((image, i) => {
                        const isSelected = inputs.images.indexOf(image) >= 0 ? true: false
                        if(i == images.length - 1) {
                            return (
                                <div onClick={(e) => toggleImageSelection(e, image, isSelected)} key={i} name={isSelected == true ? 'green': 'none'} className='imgframe'>
                                    <img onLoad={()=> setImagesLoaded(true)} src={baseConfig.backendImages + image} />
                                    <h3>{image.split('').map((char, i) => {
                                        if(i > 13) return char
                                    })}</h3>
                                </div>
                            )
                        }
                        return (
                            <div onClick={(e) => toggleImageSelection(e, image, isSelected)} key={i} name={isSelected == true ? 'green': 'none'} className='imgframe'>
                                <img src={baseConfig.backendImages + image} />
                                <h3>{image.split('').map((char, i) => {
                                    if(i > 13) return char
                                })}</h3>
                            </div>
                        )
                    }): null}
                </div>
            </div>
            <div id='areyousure'>
                <p>Are you sure you would like to delete {areYouSure ? areYouSure.title : null}</p>
                <h2>Warning, you will not be able to undo this action.</h2>
                <h4 title='red' onClick={(e)=> {
                    removeThisProject(e, areYouSure.id)
                    setYourSure(null)
                }}>Yes I Am Sure</h4>
                <h4 onClick={(e) => {
                    setYourSure(null)
                }}>No I Don't want to delete</h4>
            </div>
            <style jsx>{`
                .upleft {
                    width: 50%;
                    float: left;
                }
                .imagePreview {
                    float: left;
                    width: 90%;
                    margin: 5px 5%;
                    max-height: 180px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    box-shadow: ${Theme.shadows.mat};
                    border-radius: 3px;
                }
                .imagePreview img {
                    width: 100%;
                }
                #areyousure p {
                    float: left;
                    font: 16px 'Roboto';
                    width: 90%;
                    padding: 10px 5%;
                    color: ${Theme.colors.gunmetal};
                }
                #areyousure h2 {
                    float: left;
                    width: 90%;
                    font: 12px 'Roboto';
                    padding: 5px 5%;
                    color: ${Theme.colors.failure};
                    margin: 0;
                }
                #areyousure h4 {
                    float: left;
                    width: 80%;
                    font: 16px 'Roboto';
                    padding: 8px 0;
                    text-align: center;
                    margin: 30px 10%;
                    transition: all .3s ease;
                    cursor: pointer;
                    opacity: .7;
                    border-radius: 4px;
                    background: ${Theme.colors.gunmetal};
                    color: ${Theme.colors.white};
                }
                #areyousure h4:hover {
                    opacity: 1;
                }
                #areyousure h4[title="red"] {
                    background: ${Theme.colors.failure};
                }
                #areyousure {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate3d(-50%,-50%,0);
                    width: 600px;
                    height: 400px;
                    border-radius: 12px;
                    box-shadow: ${Theme.colors.shadow};
                    display: ${areYouSure ? 'block': 'none'};
                    background: white;
                    z-index: 99;
                }
                .newedit {
                    transform: translate(-50%,-50%);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 60%;
                    display: ${formState == 'newedit' ? 'block': 'none'};
                }
                .newedit p {
                    float: left;
                    font: 16px 'Roboto';
                    text-align: center;
                    width: 90%;
                    padding: 10px 5%;
                }
                .newedit h4 {
                    float: left;
                    text-align: center;
                    margin: 5px 0;
                    font: 16px 'Roboto';
                    width: 90%;
                    padding: 10px 5%;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    cursor: pointer;
                    box-shadow: ${Theme.colors.shadowlight};
                    border-radius: 10px;
                    margin-top: 20px;
                }
                .messagecenter {
                    transform: translate(-50%,-50%);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 80%;
                    display: ${formState == 'done' ? 'block': 'none'};
                }
                .messagecenter p {
                    float: left;
                    font: 16px 'Roboto';
                    text-align: center;
                    width: 90%;
                    padding: 10px 5%;
                }
                .messagecenter h4 {
                    float: left;
                    text-align: center;
                    margin: 0;
                    font: 16px 'Roboto';
                    width: 90%;
                    padding: 10px 5%;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    cursor: pointer;
                    box-shadow: ${Theme.colors.shadowlight};
                    border-radius: 10px;
                    margin-top: 20px;
                }
                .loader {
                    width: 60px;
                    height: 60px;
                    transform: translate(-50%,-50%);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: ${formState == 'loading' ? 'block': 'none'};
                }
                .imgloader {
                    width: 60px;
                    height: 60px;
                    transform: translate(-50%,-50%);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: ${imagesLoaded == false ? 'block': 'none'};
                }
                .pastproContainer {
                    display: ${projects ? 'flex': 'none'};
                    float: left;
                    width: 90%;
                    padding: 5px 5%;
                    min-height: 500px;
                    max-height: 620px;
                    overflow-y: scroll;
                    flex-flow: column wrap;
                    flex-wrap: nowrap;
                }
                .dropdown {
                    position: absolute;
                    top: 16px;
                    right: 2px;
                    width: 100px;
                    border-radius: 2px;
                    overflow: hidden;
                    box-shadow: ${Theme.colors.shadow};
                    padding: 0;
                    margin: 0;
                    z-index: 18;
                    display: none;
                    background: white;
                }
                .threedots:hover ~ .dropdown {
                    display: block;
                }
                .dropdown:hover {
                    display: block;
                }
                .dropdown li {
                    float: left;
                    width: 100%;
                    padding: 6px 0;
                    text-align: center;
                    cursor: pointer;
                    list-style: none;
                    font: 13px ${Theme.fonts.subheader};
                }
                .dropdown li:hover {
                    background: ${Theme.colors.lightplatinum};
                }
                .threedots {
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    cursor: pointer;
                    padding: 5px;
                }
                .singleproject {
                    float: left;
                    width: 95%;
                    height: 100px;
                    margin: 5px 0;
                    padding: 10px 2.5%;
                    border-radius: 4px;
                    box-shadow: ${Theme.colors.shadowlight};
                    background: ${Theme.colors.lightplatinum};
                    position: relative;
                    overflow: hidden;
                }
                .sinpreview {
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    width: 120px;
                    height: 120px;
                    box-shadow: ${Theme.colors.shadow};
                }
                .singleproject h2 {
                    position: absolute;
                    left: 120px;
                    top: 20px;
                    font: 14px 'Roboto';
                    max-width: 80%;
                    overflow-x: hidden;
                    margin: 0;
                    margin-left: 10px;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                }
                .singleproject .datetime {
                    position: absolute;
                    left: 120px;
                    bottom: 30px;
                    font: 12px 'Roboto';
                    max-width: 80%;
                    margin: 4px 0;
                    margin-left: 10px;
                    transition: all .3s ease-in-out;
                }
                .singleproject h2:hover {
                    color: ${Theme.colors.etonblue};
                }
                .pastpro {
                    float: left;
                    position: relative;
                    width: 28%;
                    margin: 20px 1%;
                    padding: 0;
                    border-radius: 8px;
                    background: rgba(255,255,255,.7);
                    backdrop-filter: blur(10px);
                    min-height: 600px;
                    z-index: -10;
                    box-shadow: ${Theme.colors.shadowlight};
                }
                .subheader {
                    float: left;
                    width: 90%;
                    padding: 14px 5%;
                    margin: 0px 0;
                    border-top-right-radius: 8px;
                    border-top-left-radius: 8px;
                    border-bottom: 2px solid ${Theme.colors.royalblue};
                    margin-bottom: 35px;
                    box-shadow: ${Theme.colors.shadowlight};
                    font: 18px ${Theme.fonts.title};
                }
                .centerbox {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    cursor: pointer;
                    border-radius: 10px;
                    margin: 0;
                    padding: 20px;
                    background: ${Theme.colors.charcoal};
                    color: white;
                    display: ${projects ? 'none': 'block'};
                    font: 28px ${Theme.fonts.curvy};
                }
                .centerbox:hover {
                    box-shadow: ${Theme.colors.shadow};
                }
                .selimage {
                    float: left;
                    width: 90%;
                    padding: 2px 5%;
                    cursor: pointer;
                    opacity: .7;
                    transition: all .1s ease;
                    font: 15px 'Roboto';
                }
                .selimage:hover {
                    opacity: 1;
                }
                .selectedImages {
                    float: left;
                    width: 90%;
                    max-height: 120px;
                    overflow-y: scroll;
                    background: ${Theme.colors.lightplatinum};
                    box-shadow: ${Theme.shadows.mat};
                    border-radius: 4px;
                    margin: 20px 5%;
                    padding: 10px 0;
                }
                .imagewrapper {
                    float: left;
                    width: 100%;
                    max-height: 520px;
                    min-height: 300px;
                    overflow-y: scroll;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .imgframe h3 {
                    position: absolute;
                    bottom: 0;
                    text-align: center;
                    left: 0;
                    width: 100%;
                    padding: 10px 0;
                    margin: 0;
                    background: rgba(255,255,255,.9);
                    color: ${Theme.colors.gunmetal};
                    font: 14px 'Roboto';
                }
                .imgfloat {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    padding: 20px;
                    padding-top: 60px;
                    transform: translate(-50%,-50%);
                    z-index: 100;
                    width: 90%;
                    background: white;
                    box-shadow: 0 0 6px rgba(30,30,30,.2);
                    border-radius: 6px;
                    display: ${formState == 'chooseimg' ? 'block': 'none'};
                }
                .imgfloat p {
                    position: absolute;
                    top: 10px;
                    left: 20px;
                    width: 100%;
                    font: 16px 'Roboto';
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
                    width: 15px;
                    height: 15px;
                }
                .chooseImages {
                    position: absolute;
                    right: 10px;
                    top: 0;
                    min-height: 600px;
                    padding: 5px 0;
                    width: 48%;
                }
                .chooseImages h2 {
                    float: left;
                    width: 60%;
                    padding: 10px 0;
                    margin: 10px 20%;
                    text-align: center;
                    font: 16px ${Theme.fonts.subheader};
                    background: ${Theme.colors.gunmetal};
                    border-radius: 3px;
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
                    cursor: pointer;
                    border-radius: 8px;
                    transition: all .02s ease;
                    border: 3px solid ${Theme.colors.platinum};
                    opacity: ${imagesLoaded ? '1': '0'};
                    position: relative;
                    overflow: hidden;
                }
                .projects .imgframe {
                    cursor: pointer;
                }
                .imgframe[name='green'] {
                    border: 3px solid #72ff72;
                    transform: translateY(-2px);
                    box-shadow: ${Theme.shadows.mat};
                }
                .imgframe img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    height: 100%;
                    transition: all .3s ease;
                    transform: translate(-50%, -50%) scale(1.2,1.2);
                }
                .projects {
                    float: left;
                    width: 58%;
                    margin: 20px 1%;
                    padding: 0px 0%;
                    position: relative;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                    background: rgba(255,255,255,.7);
                    transition: all .3s ease;
                    box-shadow: ${Theme.colors.shadowlight};
                    min-height: 300px;
                }
                .projectsform {
                    float: left;
                    width: 100%;
                    margin: 10px 0;
                    transition: all .3s ease-in-out;
                    opacity: ${formState == 'loading' || formState == 'done' || formState == 'newedit' ? 0: 1};
                }
                .projectsform input {
                    float: left;
                    width: 70%;
                    padding: 10px 5%;
                    margin: 5px 10%;
                    color: ${Theme.colors.onxy};
                    font: 16px 'Roboto';
                    background: white;
                    border: ${Theme.shadows.border};
                    box-shadow: ${Theme.colors.shadowlight};
                    border-radius: 8px;
                }
                .projectsform input[name="tag"] {
                    width: auto;
                    min-width: 150px;
                    max-width: 250px;
                    padding: 2px 5px;
                    margin: 0;
                    background: none;
                    border: none;
                    box-shadow: none;
                }
                .projectsform input[name="tag"]:focus {
                    box-shadow: none !important;
                }
                .projectsform textarea {
                    float: left;
                    width: 85%;
                    padding: 10px 2.5%;
                    margin: 10px 5%;
                    margin-bottom: 0;
                    color: ${Theme.colors.onxy};
                    font: 16px 'Roboto';
                    border: ${Theme.shadows.border};
                    border-radius: 8px;
                    box-shadow: ${Theme.shadows.light};
                    min-height: 150px;
                    max-height: 250px;
                    resize: vertical;
                }
                .projectsform label {
                    float: left;
                    padding: 4px 2.5%;
                    border-radius: 6px;
                    margin: 8px 10px;
                    margin-bottom: 1px;
                    color: white;
                    background: ${Theme.colors.royalblue};
                    font: 17px ${Theme.fonts.subheader};
                    font-weight: 900;
                }
                .info {
                    float: left;
                    width: 90%;
                    padding: 2px 5%;
                    margin: 0;
                    color: ${Theme.colors.onxy};
                    font: 14px ${Theme.fonts.subheader};
                }
                .projectsform button {
                    float: left;
                    padding: 10px;
                    border: none;
                    background: ${Theme.colors.charcoal};
                    color: white;
                    cursor: pointer;
                    margin: 10px 0;
                    border-radius: 6px;
                    margin-top: 30px;
                    margin-left: 40px;
                    transition: all .3s ease;
                    font: 16px ${Theme.fonts.subheader};
                }
                .projectsform button:hover {
                    opacity: .7;
                }
                .tagholder {
                    float: left;
                    width: 100%;
                    transition: all .3s ease;
                    min-height: 40px;
                    margin: 20px 0;
                    display: flex;
                    flex-wrap: wrap;
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
                    width: 90%;
                    min-height: 480px;
                    position: relative;
                    float: left;
                    padding: 10px 5%;
                    padding-bottom: 20px;
                    border-bottom: 1px solid ${Theme.colors.royalblue};
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
                    z-index: 5;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    overflow: hidden;
                    margin-top: 80px;
                    opacity: ${areYouSure ? '.7': 1};
                }
                #body_bg {
                    width: 100%;
                    z-index: -20;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
                @media only screen and (max-width: 800px) {
                    .projects {
                        width: 98%;
                    }
                    .pastpro {
                        width: 98%;
                    }
                    .imgfloat {
                        width: 180%;
                        right: 5px;
                    }
                } 
            `}</style>
        </div>
    )
}

Backend.getInitialProps = async(ctx) => {
    const getAllProjects = await getProjects(100)
    return {initialProjectsLoad: getAllProjects}
}

export default withAuthSync(Backend)