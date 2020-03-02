import React from 'react';
import Filter from "./Filter";
import { filterOptions } from "../data";

var FiltersList = props => {
/* callback function
    - renders a single filter
    - assigns a unique 'key' prop to each 'Filter' component
    - passes the 'filter' argument to each 'Filter' component as a prop callback.
*/
var renderFilter = filter => {
    var isChecked = props.selectedFilters.includes(filter.key);
    return (
        <Filter 
            key={filter.key} 
            filter={filter} 
            isChecked={isChecked}
            toggleFilter={props.toggleFilter} 
        />
    );
};

/* functional component
    - accepts 'filters' data model as a prop
    - maps over the array of filter data, calling 'renderFilter' callback function
    to render a 'Filter' component for each item in the array
*/
    var filterListElements = filterOptions.map(renderFilter);
    return (
        <div className="filters">
            <h5 className="filters__header">Filter By:</h5>
            <hr />
            <ul className="filters-list">{filterListElements}</ul>
        </div>
    );
};


export default FiltersList;