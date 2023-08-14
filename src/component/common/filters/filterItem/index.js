
import React from 'react'
import "../filterItem/filterItem.css"

const FilterItem = (props) => {
    const {filter} = props
  return (
    <div className='filter-item cur-po'>
        {/* {filter.icon && filter.name} */}
        <div className='filter-icon'>{filter.icon}</div> 
        <div className='filter-name'>{filter.name}</div>
    </div>
  )
}

export default FilterItem