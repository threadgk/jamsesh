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
        .then(users => {
            const found = users.find(
                u => u.username === form.username && u.password === form.password
            ); 
            if (!found){
                alert("Invalid username or password")          
            } else {
                setLoggedUser(found); 
                alert("Login successful");
            }
        }) 
        .catch(error => console.error(error)); 
    };  

    return (
         <div className="auth-container"> 
            <h2> Login </h2> 

            <form onSubmit={handleSubmit}>
                <input  
                type= "text"
                name= "username"
                placeholder="Username" 
                onChange={handleChange} 
                required 
                /> 

                <input 
                type="password" 
                name="password"
                placeholder= "Password" 
                onChange={handleChange} 
                required 
                /> 

                <button type = "submit">Login</button>
            </form>
         </div>
    )
}; 

export default Login;