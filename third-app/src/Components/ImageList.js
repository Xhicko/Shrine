import React from 'react'


const ImageList = (props) => {
    const images = props.images.map((image) =>{
        return <img key={image.id} src={image.webformatURL}  alt='Img'/>
    })

return(
    <div className='ImageWrapper'>
        <p>Your Search returned {props.images.length} images</p>
        <div className='ImageResult'>
            {images}
        </div>
    </div>
)
}


export default ImageList;