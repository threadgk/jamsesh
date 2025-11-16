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

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0]; 
        const formData = new FormData(); 
        formData.append("avatar", file); 

        const res = await fetch ("https://jamsesh-server-wcbm.onrender.com/api/upload/avatar", {
            method: "POST", 
            body: formData
        } ); 

        const data = await res.json();
        setForm(prev => ({ ...prev, avatar: data.filePath}));
    }; 

    const handleBannerUpload = async (e) => {
        const file = e.target.files[0]; 
        const formData = new FormData(); 
        formData.append("banner", file); 

        const res = await fetch("https://jamsesh-server-wcbm.onrender.com/api/upload/banner", {
            method: "POST", 
            body: formData
        }); 

        const data = await res.json(); 
        setForm(prev => ({ ...prev, banner: data.filePath })) ; 
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
                    <label> Upload Profile Picture: </label>
                    <input type="file" accept="image/*" onChange={handleAvatarUpload} /> 
                    
                    <label> Upload Banner: </label>
                    <input type="file" accept="image/*" onChange={handleBannerUpload} /> 
                    
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