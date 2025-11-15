import { useState } from "react"; 

const Login = ({ setLoggedUser}) => {
    const [form, setForm] = useState ({
        username: "", 
        password: ""
    }); 

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value}); 

    }; 
    const handleSubmit = (e) => {
        e.preventDefault(); 

        fetch("https://jamsesh-server-wcbm.onrender.com/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify(form) 
    })
        
        .then(res => res.json()) 
        .then(data => {
            if(data.error){
                alert(data.error);
            } else {
                alert("Login Successful");
                setLoggedUser(data.user);
            }
        })
        .catch(error => console.error(error)); 
    };  

    return (
        
            <form onSubmit={handleSubmit}>
                <input type= "text" name= "username" placeholder="Username" onChange={handleChange} /> 
                <input type="password" name="password" placeholder= "Password" onChange={handleChange} /> 
                <button type = "submit">Login</button>
            </form>
    )
}; 

export default Login;