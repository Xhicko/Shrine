import React from 'react'
import './HemisphereDisplay.css'
import NorthernImage from './images/Northern.jpg'
import SouthernImage from './images/Southern.jpg'

const HemisphereConfig = {
    Northern :{
        Picture: NorthernImage,
        Text: 'You are in the Northern Hemisphere '
    },
    Southern:{
        Picture: SouthernImage,
        Text: 'You are in the Southern Hemisphere '
    }
}

const HemisphereDisplay = ({Latitude}) =>{
  const  Hemisphere = Latitude > 0 ? "Northern": "Southern"
  const {Picture, Text} = HemisphereConfig[Hemisphere]
    return(
        <div className={Hemisphere}>
            <img src={Picture} alt='Hemisphere-Shot' />
                <p>{Text}!</p>
        </div>
    )
}


export default HemisphereDisplay;