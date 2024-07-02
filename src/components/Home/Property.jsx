import propTypes from 'prop-types';

function Property(props) {
    return (
        <div className="property-detail">
            <div className="property-img">
                <img src={`src/assets/images/${props.image}`} alt="An house" />
                {props.isSold && <h4 className='sold-banner'>Sold</h4>}
            </div>
            <h3>{props.address}</h3>
            <ul className='size'>
                <li><a href="#">{props.price}</a></li>
                <li>{props.size}</li>
                <li>{props.numberOfBedroom} Bedrooms</li>
            </ul>
            <p>{props.description}</p>
        </div>
    )
}

Property.propTypes = {
    image: propTypes.string.isRequired,
    address: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    size: propTypes.string.isRequired,
    numberOfBedroom: propTypes.number.isRequired,
    description: propTypes.string.isRequired,
    isSold: propTypes.bool
}

export default Property;