import { useState } from "react"; 

const Settings = ({ user, setUser, setShowSettings }) => {
    const [form, setForm] = useState ({
        avatar: user.avatar || "",
        banner: user.banner || "", 
        bio: user.bio || "", 
        location: user.location || ""
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value}) ; 
    }; 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        fetch("https://jamsesh-server-wcbm.onrender.com/api/profile/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json"}, 
            body: JSON.stringify({
                username: user._username, 
                ...form
            })
        })
        .then(res => res.json()) 
        .then(data => {
            if (data.error) alert(data.error); 
            else {
                alert("Profile Updated!"); 
                setUser(data.user); 
                setShowSettings(false);
            }
        });
    };

    return (
        <div className="settings-modal"> 
            <div className="settings-box">
                <h2> Edit Profile </h2> 

                <form onSubmit={handleSubmit}>
                    <input name="avatar" placeholder="Profile Picture" value={form.avatar} onChange={handleChange} /> 
                    <input name="banner" placeholder="Banner URL" value={form.banner} onChange={handleChange} /> 
                    <input name="location" placeholder="Location" value={form.location} onChange={handleChange} /> 
                    <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} /> 

                    <button type="submit"> Save Changes </button>
                </form>

                <button className="close-settings" onClick={() => setShowSettings(false)}> Cancel </button> 
            </div>
        </div>
    );
}; 

export default Settings;