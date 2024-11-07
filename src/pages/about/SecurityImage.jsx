import React from 'react'
import secImage from '../../assets/images/securityImage.png'; 
import '../../assets/style/SecurityImage.css'

const SecurityImage = () => {
  return (
    <div className='container'>
      <div className="sec-token">
      <img src={secImage} alt="Tokenization Visual" />
    </div>
    </div>
  )
}

export default SecurityImage
