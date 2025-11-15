import "./../css/Profile.css";
import "./../css/Page.css";
import Page from "../components/Profile/Page.jsx"; 
import Login from "../components/Profile/Login.jsx";    
import { useState } from "react";

const Profile = () => { 
    const [user, setUser] = useState(null); 
    const [showLogin, setShowLogin] = useState(false);
    

    return (
        <div>
            <h2>Profile Page</h2>

            {!user && (
                <>
                <button id="login" onClick={() => setShowLogin(!showLogin)}> 
                    {showLogin ? "Close Login" : "Login"}
                </button> 

                {showLogin && (
                    <div id ="login-box">
                            <Login setLoggedUser={setUser}/>
                    </div>
                )}
       
                </>
            )}
    
            {user ? (
            
            <Page 
                banner={user["profile-picture"]}
                avatar={user.avatar}
                username={user._username}
                bio={user._bio}
                location={user._location}
                favoriteArtist={user._favoriteArtist} 
            />) : (
                        <p>Please Login to View your profile</p> 
                  )}
        </div>
    );
};

export default Profile;
