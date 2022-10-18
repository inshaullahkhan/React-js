import { Component } from "react";

import Image from "./components/Image";
import Details from "./components/Details";

export default class Test extends Component{

    render()
    {
       
        return(

            <div>
                <Image 
                
                url = "https://randomuser.me/portraits/women/66.jpg"


                />
                <Details
                
                name = "insha"
                semester = "7th"
                rollNo = "191056"
                Address = "Village Darraki P/O Darraki Tehsil and District Tank"



                />
            </div>

        )
    }

}