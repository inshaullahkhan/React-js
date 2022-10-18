import React, { Component } from 'react'

export default class List extends Component {

    constructor(){
        super();

        this.state ={

            list:[]

        }
    
    
    }

  render() {

    const shows = () => {
         fetch("https://api.github.com/users")
    .then(json=>{
    return json.json();
    })
    .then(data => {
         this.setState({
            list:data
         })

    })
}

    return (
      <div>

             <ul>

            {this.state.list.map(
                (m,i) =><li key={i} >{m.login} - {m.id} - {

                    <img src={m.avatar_url} alt="person" />

                }</li>

            
            )}

             </ul>


             <button onClick={shows} >show</button>

      </div>
    )
            }}