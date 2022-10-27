import React , {useState , useEffect} from "react";
import axios from 'axios'

const Table = ()=>{

    const [users , setUsers] = useState()

    useEffect(()=>{

    const loadData = async () =>  {
            
            const data = await axios.get("https://api.github.com/users")

            setUsers(data)
            // console.log(data)
        }

        loadData()
})

    return(

        <div>
        <ul>

              {users.map(user => {
                return <li key={user.id} > {user.login} </li>
              })}

        </ul>
        </div>

    )

}

export default Table;