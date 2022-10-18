import React from "react";
import { Component } from "react";

export default class Events extends Component{

    constructor(props){

        super(props)

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e){

        if(e.target.id="1"){

            console.log("Button 1 clicked")

        }
        else if(e.target.id="2"){

            console.log("button 2 clicked for testing....")
        }

    }


    render(){
        return(
            

                <div>
                
                   <button onClick={(e) =>  this.handleClick(e)}
                  
                  id="1" name='btn1'
                  
                   > Clicked </button>

             <button onClick={(e) => this.handleClick(e)}
                  
                  id="2" name='btn2'
                  
                   > Clicked button 2 </button> 


                
                
                </div>

            
        )
    }
}
