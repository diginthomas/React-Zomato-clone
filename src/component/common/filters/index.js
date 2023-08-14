import React from 'react'
import "../filters/filters.css"
import FilterItem from './filterItem'
export const Filters = (props) => {
   const {deliveryFilters} = props
  return (
    <div className='filters'>
     {deliveryFilters && deliveryFilters.map((filter) => {
        return <FilterItem filter={filter} key={filter.id}></FilterItem>
     })}
    </div>
  )
}
