import PropTypes from 'prop-types';


import './Bottle.css'



const Bottle = ({bottle,handleAddtoCArt}) => {
    // console.log(bottle);
    const {img,name,price}=bottle
    return (
        <div className="bottle">
           <h2>Bottle :{name}</h2>
           <img src={img} alt="" />
           <p>Price:{price}</p>
           <button onClick={()=>handleAddtoCArt(bottle)}>Purchase</button>

        </div>
    );
};
Bottle.propTypes={
    bottle:PropTypes.object.isRequired,
    handleAddtoCArt:PropTypes.func.isRequired
}
export default Bottle;