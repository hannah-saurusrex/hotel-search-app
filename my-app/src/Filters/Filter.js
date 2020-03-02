import React from 'react';
import { hotels } from "../data";

/* functional component
    - accepts the data model for a single filter as a prop
    - uses that data to render the UI for a single filter in the list
*/

var getMatchCount = filterKey =>
    hotels.filter(hotel => hotel[filterKey]).length;

var Filter = props => {
    var onChange = () => props.toggleFilter(props.filter.key);
    var matchCount = getMatchCount(props.filter.key);
    return (
        <li className='filter'>
            <span>
                <input 
                    type='checkbox' 
                    checked={props.isChecked}
                    onChange={onChange}
                    className='filter__checkbox' 
                />
                {props.filter.display}
            </span>
            <span className='filter__match-count'>{matchCount}</span>
        </li>
    )
}


export default Filter;