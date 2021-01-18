import { useState } from 'react'
import { baseConfig } from '../../services/restservice'
import Theme from '../../styles/theme'
import { withAuthSync } from '../../services/auth'

function UploadImage({firstLoadImages}) {

    const [images, setImages] = useState(firstLoadImages)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [multipreview, setMultiPreview] = useState(null)
    const [loadingImages, setLoadingImages] = useState(true)
    const [editing, setEditing] = useState(false)

    const uploadImageSingle = async(e) => {
        e.preventDefault()
        if(file == null) return 
        const formData = new FormData()
        formData.append("myFile", file)
        const uploadImage = await fetch(baseConfig.baseURL + '/uploadfile', {
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
        console.log(multipreview)
        if(multipreview == null) return 
        const formData = new FormData()

        for (let i = 0; i < file.length; i++) {
            console.log(file[i])
            formData.append(`myFiles`, file[i])
        }

        console.log(formData)
        const newupload = await fetch(baseConfig.baseURL + '/uploadmultiple', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            return response.json()
        })
        console.log(newupload)
        if(newupload) {
            setMultiPreview(null)
            setFile(null)
            console.log(newupload)
            loadImages(e)
        }
    }

    const handleFileChangeSingle = (e) => {
        e.persist()
        setPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleFileChangeMulti = (e) => {
        e.persist()
        setFile(e.target.files)
        const files = e.target.files;
        const mpreview = []
        for (var i = 0; i < files.length; i++) {
            mpreview.push(URL.createObjectURL(files[i]))
        }
        setMultiPreview(mpreview)
    }

    const removeImage = async(e, image) => {
        e.persist()
        setLoadingImages(true)
        setImages(null)
        const newremove = await fetch(baseConfig.baseURL + '/removeimage/' + image, {
            method: 'DELETE',
        }).then(response => {
            return response.status
        })
        if(newremove) {
            console.log(newremove)
            loadImages(e)
        }
    }

    const loadImages = async(e) => {
        e.preventDefault()
        setLoadingImages(true)
        const getImages = await fetch('http://localhost:3600/getallimages', {
            method: 'GET',
        }).then (response => {
            return response.json()
        })
        if(getImages) {
            setImages(getImages.images)
        }
    }

    return (
        <div className='body'>
            <img id='body_bg' src='/bg_login.png'/>
            <div id="left">
                <h2>Single Image Upload</h2>
                <div className='uploadform'>
                    <form onSubmit={uploadImageSingle}>
                        <div className='previewframe'><img className='preview' src={preview ? preview: '/imageplaceholder.png'} /></div>
                        <label htmlFor='fileid'>Select Single Image</label>
                        <input id='fileid' type='file' accept='image/*' onChange={handleFileChangeSingle} required />
                        <button type='submit'>Upload Image</button>
                    </form>
                </div>
                <h2>Multiple Image Upload</h2>
                <div className='uploadform'>
                    <form onSubmit={uploadImageMultiple}>
                        <div className='previewframe'>
                            {multipreview == null ? <img className='preview' src='/imageplaceholder.png' />: multipreview.map((image, i) => {
                                return <div className='imgframepreview'><img src={image} /></div>
                            })}
                        </div>
                        <label htmlFor='fileidmulti'>Select Multiple Images</label>
                        <input id='fileidmulti' type='file' accept='image/*' onChange={handleFileChangeMulti} required multiple/>
                        <button type='submit'>Upload Images</button>
                    </form>
                </div>
            </div>
            <div className='images'>
                    <h1>My Images</h1>
                    <div className='edit'>
                        <h3 onClick={()=> {
                            if(editing == true) setEditing(false)
                            else setEditing(true)
                        }}>{editing == true ? 'Stop Editing Images': 'Edit/Remove Images'}</h3>
                    </div>
                    <div className='imageholder'>
                        {images != null ? images.map((image, i) => {
                            if(i == images.length - 1) {
                                return (
                                    <div key={i} className='imgframe'>
                                        <div onClick={(e) => removeImage(e, image)} className='x'>x</div>
                                        <img onLoad={()=>setLoadingImages(false)} src={baseConfig.backendImages + image} />
                                        <h3>{image.split('').map((char, i) => {
                                            if(i > 13) return char
                                        })}</h3>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={i} className='imgframe'>
                                        <div onClick={(e) => removeImage(e, image)} className='x'>x</div>
                                        <img src={baseConfig.backendImages + image} />
                                        <h3>{image.split('').map((char, i) => {
                                            if(i > 13) return char
                                        })}</h3>
                                    </div>
                                )
                            }
                        }): <h2 onClick={loadImages}>Load Images</h2>}
                        <img className='loader' src='/loading_a.gif' />
                    </div>
                </div>
            <style jsx>{`
                .edit {
                    position: absolute;
                    top: 30px;
                    right: 40px;
                }
                .edit h3 {
                    float: left;
                    font: 16px 'Roboto';
                    margin: 0;
                    padding: 8px;
                    background: ${Theme.colors.lightplatinum};
                    box-shadow: ${Theme.shadows.mat};
                    border-radius: 4px;
                    cursor: pointer;
                }
                .imageholder {
                    float: left;
                    width: 90%;
                    margin: 20px 5%;
                    padding: 10px 0;
                    border-radius: 3px;
                    height: ${loadingImages == true ? '400px': 'auto'};
                    min-height: 400px;
                    position: relative;
                    box-shadow: inset ${Theme.colors.shadowlight};
                    backdrop-filter: blur(12px);
                    background: rgba(255,255,255,.8);
                    margin-top: 20px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .loader {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: ${loadingImages == true ? 'block': 'none'};
                    width: 60px;
                    height: 60px;
                }
                .imgframe {
                    float: left;
                    width: 150px;
                    height: 120px;
                    margin: 8px;
                    overflow: hidden;
                    position: relative;
                    transition: all .3s ease;
                    opacity: ${loadingImages == true ? '0': '1'};
                    background: rgba(200,200,200,.2);
                    box-shadow: 0 0 1px ${Theme.colors.gunmetal};
                }
                .imgframe h3 {
                    position: absolute;
                    bottom: 0;
                    text-align: center;
                    left: 0;
                    width: 100%;
                    padding: 10px 0;
                    margin: 0;
                    background: rgba(255,255,255,.7);
                    color: ${Theme.colors.gunmetal};
                    font: 12px 'Open Sans';
                }
                .imgframe img {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                .x {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    padding: 0 8px;
                    padding-bottom: 4px;
                    text-align: center;
                    font: 18px 'Roboto';
                    cursor: pointer;
                    opacity: .7;
                    display: ${editing == true ? 'block': 'none'};
                    transition: all .3s ease;
                    z-index: 999;
                    background: rgba(255,255,255,1);
                }
                .x:hover {
                    opacity: 1;
                }
                .images {
                    float: left;
                    width: 60%;
                    position: relative;
                }
                .images h1 {
                    float: left;
                    font: 30px 'Montserrat';
                    margin: 0;
                    margin-left: 30px;
                    padding: 10px;
                }
                .uploadform input {
                    display: none;
                }
                .uploadform label {
                    position: absolute;
                    top: 60px;
                    left: 20px;
                    padding: 10px;
                    box-shadow: ${Theme.shadows.mat};
                    cursor: pointer;
                    opacity: .9;
                    border-radius: 3px;
                    transition: all .3s ease;
                    font: 14px 'Roboto';
                }
                .uploadform label:hover {
                    opacity: 1;
                    color: white;
                    background: ${Theme.colors.gunmetal};
                }
                .uploadform button {
                    position: absolute;
                    bottom: 90px;
                    left: 20px;
                    padding: 10px;
                    cursor: pointer;
                    background: ${Theme.colors.gunmetal};
                    color: white;
                    border: none;
                    border-radius: 6px;
                    opacity: .2;
                    transition: all .3s ease;
                    font: 16px 'Roboto';
                }
                .uploadform button:hover {
                    opacity: 1;
                    transform: scale(1.05,1.05) translateY(-2px);
                    box-shadow: ${Theme.shadows.mat};
                }
                .uploadform .previewframe {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                    width: 300px;
                    max-height: 300px;
                    overflow: hidden;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-content: center;
                }
                .uploadform .previewframe .preview {
                    float: left;
                    width: 100%;
                    height: auto;
                }
                .previewframe .imgframepreview {
                    float: left;
                    width: 80px;
                    height: 80px;
                    margin: 5px;
                    position: relative;
                }
                .imgframepreview img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
                .uploadform form {
                    float: left;
                    width: 100%;
                    height: 100%;
                }
                .uploadform {
                    float: left;
                    width: 100%;
                    position: relative;
                    min-height: 300px;
                }
                #left h2 {
                    float: left;
                    margin: 0;
                    width: 90%;
                    padding: 10px 5%;
                    background: ${Theme.colors.lightplatinum};
                    box-shadow: ${Theme.colors.shadowlight};
                    font: 22px ${Theme.fonts.title};
                }
                #left {
                    float: left;
                    width: 40%;
                    height: 100%;
                    backdrop-filter: blur(12px);
                    box-shadow: ${Theme.colors.shadowlight};
                    background: rgba(255,255,255,.8);
                    border-radius: 4px;
                }
                .body {
                    float: left;
                    width: 100%;
                    height: 100%;
                    margin-top: 90px;
                }
                #body_bg {
                    width: 100%;
                    z-index: -20;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(1.1,1.1);
                }
                @media screen and (max-width: 850px) {
                    #left {
                        width: 100%;
                        margin: 10px 0;
                    }
                    .images {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

UploadImage.getInitialProps = async(e) => {
    
    const getimg = await fetch(baseConfig.baseURL + '/getallimages', {
        method: 'GET',
    }).then (response => {
        return response.json()
    })
    return {firstLoadImages: getimg.images}
}

export default withAuthSync(UploadImage)