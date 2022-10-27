
import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import {Button} from 'semantic-ui-react'

const  Header =({id , desc})=>{

    return(

        <div>
                <li> id {id} </li>

                        <li>description {desc}</li>

          <Button primary >Click</Button>
                  </div>
    )

}

export default Header;