import { Component } from "react"
import Button from './Button'
export default class Display extends Component{

    constructor(props){

        super(props);
       this.state={

        number :1

       }
         



    }

    render(){

        return(

            <div>

<h2> {this.setState.number} </h2>

     <Button></Button>


            </div>

        )

    }
}