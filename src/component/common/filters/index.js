import React from 'react'
import "../filters/filters.css"
import FilterItem from './filterItem'
export const Filters = (props) => {
   const {filters} = props
  return (
    <div className='filters'>
     {filters && filters.map((filter) => {
        return <FilterItem filter={filter} key={filter.id}></FilterItem>
     })}
    </div>
  )
}
