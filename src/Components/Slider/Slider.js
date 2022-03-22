import React from 'react';
import image from './../../images/gear.png' ;
const Slider = (props) => {
    return (
        <div>
            <div className="row container pt-5">
                <div className="col-md-6">
                   <img className='img-fluid' src={image} alt="" /> 
                </div>
                <div className="col-md-6">
                    <h1 className='text-primary'>Product John</h1>
                    <h6>Wellcome To Our  Website</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, in fugiat? Voluptatum illo quidem esse magni rerum quia, architecto veniam culpa voluptatem vero eveniet enim nobis assumenda ratione doloribus vitae?</p>
                    <button className='btn btn-info'>Explore Product</button>
                </div>
            </div>
            
        </div>
    );
};

export default Slider;