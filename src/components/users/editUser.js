import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

const EditUser =() =>{

    
    const {id } = useParams();

    const[user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
console.log(id);
    const {name,username,email,phone,website} = user;
    const oninputChange = e =>{
         setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(() =>{
        loadUser();
    }, );

    const onsubmit= async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
       

    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    };
    return(
        <div>
         <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className = "text-center mb-4"> Edit A User</h2>
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
                <button className="btn btn-primary btn-block">Edit User</button>
            </from>


        </div>
        
</div>
        </div>
    )
}


export default EditUser;