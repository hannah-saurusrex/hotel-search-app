import React from 'react';
import Filter from "./Filter";

/* callback function
    - renders a single filter
    - assigns a unique 'key' prop to each 'Filter' component
    - passes the 'filter' argument to each 'Filter' component as a prop callback.
*/
var renderFilter = filter => <Filter key={filter.id} filter={filter} />;

/* functional component
    - accepts 'filters' data model as a prop
    - maps over the array of filter data, calling 'renderFilter' callback function
    to render a 'Filter' component for each item in the array
*/
var FiltersList = props => {
    if (!props.filters) {
        return null;
    }
    var filtersListElements = props.filters.map(renderFilter);
    return (
        <div className="filters">
            <h5 className="filters__header">Filter By:</h5>
            <hr />
            <ul className="filters-list">{filtersListElements}</ul>
        </div>
    );
};

export default FiltersList;