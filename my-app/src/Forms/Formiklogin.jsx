import React from 'react'
import {useFormik} from 'formik'
// import * as Yup from 'yup'

const Formiklogin = () => {
    const formik = useFormik({
        initialValuesti :{
            username :"",
            password :" "
        },
        onSubmit : (value)=>{
        alert= (value)
        }
        // validationSchema: Yup.object({
        //   username: Yub.string().required("this is feild is required").max(10 , "Should not exceed of 10 characters").min(5 ,"Should be minimum 5")
        // }),

    })
  return (

    <div>
        <form onSubmit={formik.handleSubmit}>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={formik.username} onChange={formik.handleChange} />
        {formik.errors.username}
        <input type="password" name="password" id="password" value={formik.password} onChange={formik.handleChange} />
        
        <button type='submit' > Login </button>

        </form>
        
        </div>
  )
}

export default Formiklogin