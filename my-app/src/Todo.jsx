import { Component } from "react";

export default class Todo extends Component{

    constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)

    this.state={

        item: " ",
        list: []

    }

}

handleChange(e){
    e.preventDefault();
        this.setState(
            {
                item: e.target.value
            }
        )

}
handleSubmit(e){
   e.preventDefault();

   if(this.state.item=="")
   {

    alert("Form should not be empty")

   }

   else if(this.state.list.indexOf(this.state.item) < 0){

    this.setState(
        {
            list: this.state.list.concat(this.state.item)
        }
    )


}

    else{

        alert("Item is already in the list")

    }

}


render(){

    return(


        <div>
          <form onSubmit={this.handleSubmit}>

           <input type="text" 
           
           id="item"
           name="item"
           value={this.state.item}
           onChange={this.handleChange}
           />
           <button> Add </button>

          </form>
<ul>

       {
        this.state.list.map((l,k)=>
            {
          return  <li key={k}>{l}</li>

            }
            )
       }

       <button onClick={()=>
    
          this.setState({list:[]})

    } >Reset</button>

</ul>

        </div>
    )
}}