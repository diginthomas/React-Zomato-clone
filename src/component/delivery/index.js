import React from 'react'
import "../delivery/delivery.css"
import { Filters } from '../common/filters'
import DeliveryCollection from './deliveryCollection'
import BrandCollection from './brandCollection'
import { Explore } from '../common/explore'
import { restaurants } from '../../service/data'

const deliveryFilters= [
  {
    id :1,
    icon:<i class="fa fa-filter" aria-hidden="true"></i>,
    name:"Filters",

  },
  {
    id :2,
    icon:"",
    name:"Rating 4.0+",
    
  },
  {
    id :3,
    icon:"",
    name:"Cuisines",
    
  }
]
const restaurantList = restaurants
export const Delivery = () => {
  return (
    <div>
     <div className='max-width'>
     <Filters deliveryFilters ={deliveryFilters}></Filters>
     </div>
     <DeliveryCollection></DeliveryCollection>
     <BrandCollection></BrandCollection>
     <Explore restaurantList ={restaurantList} collectionName = "Delivery"></Explore> 
    </div>
  )
}
