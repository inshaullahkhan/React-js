import { Component } from "react";

export default class Details extends Component{

    constructor(props){
        super(props)
    }



    render()
    {
    
      
        return(
            

            <div>
            <h1 style={{color:'red', background: 'blue'}}>{this.props.name}</h1>
            <h1>{this.props.semester}</h1>
            <h1>{this.props.rollNo}</h1>
            <h1>{this.props.Address}</h1>
        </div>


        )
    }

}