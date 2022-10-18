import React, { Component } from 'react'

export default class Add extends Component {

    constructor(props)
    {
        super(props)

        this.state={

            textTask : " "

        }
    }

    handleChange =(e)=>{
        e.preventDefault();
         
        this.setState({

            textTask : e.target.value

        })

      }
    

handleSubmit(e){

   e.preventDefault();

   if(this.state.textTask=="")
   {

    alert("Form should not be empty")

   }

   else if(this.state.tasks.indexOf(this.state.textTask) < 0){

    this.setState(
        {
            list: this.state.tasks.concat(this.state.textTask)
        }
    )


}

    else{

        alert("Item is already in the list")

    }

}



  render() 
  
  {
    return (


      <div>

     <form onSubmit={this.handleSubmit}>

          <input type="text"
          id='text'
          name='search'
          value={this.state.tasks}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit} >Add</button>

     </form>

<h2>hello this is insha</h2>
      </div>


    )


    }
  }