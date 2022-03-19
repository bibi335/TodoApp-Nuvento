import React from 'react';
import { useFormik } from 'formik';
import './Register.css'

function Register() {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          DOB: '',
          age: '',
          
          
        
        },
        onSubmit: values => {

            var today = new Date();
            var birthDate = new Date(formik.values.DOB);
            let age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
            {
                age--;
            }
             console.log("Your in ="+age)
            let obj1= Object.assign(values,{age})
           
    
          alert(JSON.stringify(obj1, null, 2));
          alert("Register")
        },
      });
      
    return (
        <div className="form-group">
            <h1>Register form</h1>
            <br/>
            <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

        <label htmlFor="Date Of Birth">Date Of Birth</label>
        <input
        id="DOB"
        name="DOB"
        type="Date"

         onChange={formik.handleChange}
        value={formik.values.DOB}
         />
        <h1 hidden={formik.values.age=== null?'hiden':'' }>Age:{formik.values.age} </h1>



        
         

 
       <button className="registerbtn" type="submit" >Register</button>
     </form>
            
        </div>
    )
}

export default Register
