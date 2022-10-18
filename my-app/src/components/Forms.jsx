import React from "react";
import { Component } from "react";

export  default class Forms extends Component{

constructor(props){
    super(props);

    this.state={

        keyword: ""

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

    handleSubmit(e){
        e.preventDefault()

        console.log(e.target.search.value);
        // console.log(e)

    }

    handleChange(e){

       this.setState({

        keyword: e.target.value

       })





    }

render(){

    return(

       <div>

           <form onSubmit={e=>this.handleSubmit(e)} onChange={this.handleChange} >

            <input type="text" name="search" id="search"/>

            <button>Search</button>

           </form>

       </div>
    )

}
}
