import React from 'react';
// TODO: import functional component from Hotel.js module
import Hotel from './Hotel';

/* callback function
    - renders a single hotel
    - assigns a unique `key` prop to each `Hotel` component
    - passes the `hotel` argument to each `Hotel` component as a prop called `hotel`
*/
// TODO write this callback function
var renderHotel = hotel => <Hotel key={hotel.id} hotel={hotel} />;

/* functional component
    - accepts `hotels` data model as a prop
    - maps over the array of hotel data, calling the `renderHotel` callback function to render a `Hotel` component for each item in the array
*/
var HotelsList = props => {
    if (!props.hotels) {
        return null;
    }
    // TODO: map over array using callback function to render each hotel
    // TODO: add the variable storing our list of JSX elements between the ul tags below!
    var hotelListElements = props.hotels.map(renderHotel);
    return <ul className='hotels-list'>{hotelListElements}</ul>;
};

export default HotelsList;