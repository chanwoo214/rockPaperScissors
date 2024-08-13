import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-image' src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_197,q_auto,w_350/c_pad,h_197,w_350/C5099960-06?pgw=1" alt="The image"/>
        <h2>WIN</h2>
    </div>
  );
};

export default Box