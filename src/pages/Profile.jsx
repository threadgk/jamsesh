import "./../css/Profile.css";
import "./../css/Page.css";
import Page from "/Users/kaylathreadgill/jamsesh/src/components/Profile/Page.jsx"; 
import { useState, useEffect } from "react";

const Profile = () => { 
    const [user, setUser] = useState(null); 

    useEffect(() => { 
        fetch("https://jamsesh-server-wcbm.onrender.com/api/profiles")
            .then(response => response.json())
            .then(data => {
                const foundUser = data.find(u => u._username === "example_user");
                setUser(foundUser);
            })
            .catch(error => {console.error("Error fetching user data:", error);});
    }, []);

    return (
        <div>
            <h2>Profile Page</h2>
            {user ? (
            
            <Page 
                banner={user["profile-picture"]}
                avatar={user.avatar}
                username={user._username}
                bio={user._bio}
                location={user._location}
                favoriteArtist={user._favoriteArtist} 
            />) : (<p>Loading...</p>)}
        </div>
    );
};

export default Profile;
