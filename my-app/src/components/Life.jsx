import React from 'react'
import axios from 'axios'
export default class Life extends React.Component{

    constructor(props){

        
        super(props)
        // this.change() = this.change.bind(this);

        this.state ={

            num: 0,
            apis: []
        }

    }

   async componentDidMount(){

    const {data} = await axios.get("https://api.github.com/users")

    this.setState({

        apis: data

    })
        

    }

    componentDidUpdate(){


    }

    
    change() {
 
     this.setState(
         {
             num: Math.floor(Math.random() *100 )
         }
     )
 }
    render(){

    return(

        <div>

              {/* <p>{this.state.num}</p> */}

        <ul>

           {

              this.state.apis.map((apis=>
                
                {
                      return <li key={apis.id} >{apis.login}
                      </li>
                }

                ))
        

           }
           <button onClick={change} >Click me</button>


        </ul>  

             {/* <button onClick={this.change}> Click </button> */}
        </div>
       

    )

}

}