import React from 'react';
import singimg from './singing.jpg';

const Singin = () => {
  return (
    <>
      <div className='right_data col-lg-5' >
        <div className='sing_img mt-5'>
          <img className='w-100' src={singimg} alt='img' style={{ maxWidth: "400" }} />
        </div>
      </div>
    </>
  )
}

export default Singin
