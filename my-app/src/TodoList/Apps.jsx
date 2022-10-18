import {Component, component} from "react";
import Add from './Add'
import List from './List'
import Item from './Item'
import Reset from './Reset'


export default  class App extends Component{


    constructor(props){

        super(props);

        this.state={

            tasks: []
                           

        }

    }

    render()
{

    return(

        <div>

          <Add />
          {/* <List tasks = {this.state.tasks} /> */}
          <List tasks ={this.state.tasks} />
          <Item />
          <Reset />

        </div>
        

    )

}


}