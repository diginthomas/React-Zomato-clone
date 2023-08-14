import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react'
import "../tabOption/tabOption.css"

const  tabOption = [
 {
  id: 1,
  name: "Delivery",
  activeTab: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
  backDrop:"#FCEEC0",
  inactiveTab:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",

 }  ,
 {
  id: 2,
  name: "DiningOut",
  activeTab: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
  backDrop:"#E5F3F3",
  inactiveTab:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",

 }  ,
 {
  id: 3,
  name: "NightLife",
  activeTab: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
  backDrop:"#EDf4FF",
  inactiveTab:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",

 }  
]

export const TabOptions = (props) => {
    const {activeTab,setActiveTab} = props;
    console.log(activeTab);

  return (
    <div className='tab-options'>
      <div className='max-width option-wrapper'>
         {tabOption.map((option, index) => {
           let image_image_container_class = 'tab-item absolute-center cur-po '; 
            return <div onClick={()=>{setActiveTab(option.name)}} className={activeTab===option.name ? image_image_container_class+" active-tab" : image_image_container_class}>
            <div className='tab-image-container absolute-center' style={{
              backgroundColor:'${activeTab=== option.name ? option.backDrop : ""}'
             } }>
              <img className='tab-image'alt='tab.image'
              src={activeTab===option.name ? option.activeTab:option.inactiveTab}></img>
              </div> 
              <div className="tab-name">{option.name} </div>
              
            </div>
         })}
      </div>
    </div>
  )
}
