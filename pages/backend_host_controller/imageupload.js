

function UploadImage({images}) {
    return (
        <div className='body'>
            <style jsx>{`
                .body {
                    float: left;
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

UploadImage.getInitialProp = async(e) => {
    const getimg = await getAllImages
    return {images: getimg}
}