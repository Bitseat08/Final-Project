import axios from "axios";
import {React,useState} from "react"

const Adduser = () =>{
   

    const[user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
   const {name,username,email,phone,website} = user;
    const oninputChange = e =>{
         setUser({...user,[e.target.name]:e.target.value});
    };

    const onsubmit= async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
      

    };
   return(
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className = "text-center mb-4"> Add A User</h2>
            <from onsubmit = {e => onsubmit (e)}>
                
                <div className="form-group">
                    <input
                    type= "text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={e => oninputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                    type= "text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your UserName"
                    name="username"
                    value={username}
                    onChange={e => oninputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                    type= "text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your E-mail Address"
                    name="email"
                    value={email}
                    onChange={e => oninputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                    type= "text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => oninputChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                    type= "text"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Website Name"
                    name="website"
                    value={website}
                    onChange={e => oninputChange(e)}
                    />
                </div>
                <button className="btn btn-primary btn-block">Add User</button>
            </from>


        </div>
        
</div>
   );
}

export default Adduser;