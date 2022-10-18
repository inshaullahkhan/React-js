import { Component, useState } from "react";

export default class Count extends Component{

    constructor(){
     super()
     
     this.state ={
        lable: "show"
        // num: 0

     }

    }

    render()
    {

        const plus =()=>{

            this.setState({

                num: this.state.num + 1


            })
        }
            const minus =()=>{

                this.setState({
    
                    num: this.state.num -1
    
    
                })

        }
        

    const reset = ()=>{

        this.setState({

            num:0

        })



    }

       const show = ()=>{

        this.setState({

            lable:"hide"

        })

       }
    
        return(

            <div>
            
              <h2>counter{this.state.num}</h2>
             <button onClick={plus}> click me </button>
             {/* <h2>counter2 {this.state.num}</h2> */}
             <button onClick={minus}> click me </button>
             <button onClick={reset} > Resete</button>

            <button onClick={show} >{this.state.lable}</button>

            </div>

        )
        }
        
    
}
