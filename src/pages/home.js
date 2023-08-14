
import { useState } from "react"
import Footer from "../component/common/footer/index.js"
import  Header  from "../component/common/header/header.js"
import { TabOptions } from "../component/common/tabOption/index.js"
import { Delivery } from "../component/delivery/index.js"
import { DiningOut } from "../component/diningOut/index.js"
import { NightLife } from "../component/nightLife/index.js"
export const Home = () => {
    const [activeTab, setActiveTab] = useState("Delivery")
    return <div>
        <Header></Header>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} ></TabOptions>
         {getCorrectScreen(activeTab)} 
        <Footer></Footer>
    </div>
}
const getCorrectScreen = (tab) => {
   // console.log(tab)
    switch (tab) {
        case "DiningOut":
            return <DiningOut/> 
            break
        case "NightLife" :
            return <NightLife/>
            break
        default :
            return <Delivery/>
            break;    

    }

}