import { useState } from "react";

const Signup = ({ setLoggedUser }) => {
    const [form, setForm] = useState({
        username: "", 
        password: "",
        name: "",
        dob: ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://jamsesh-server-wcbm.onrender.com/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Account created!");
                setLoggedUser(data.user);
            }
        })
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <input name="name" placeholder="First & Last Name" onChange={(handleChange)} required />
                <input name= "dob" type="date" onChange={handleChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
