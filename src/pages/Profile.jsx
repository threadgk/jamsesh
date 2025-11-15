import "./../css/Profile.css";
import "./../css/Page.css";
import Page from "../components/Profile/Page.jsx"; 
import Login from "../components/Profile/Login.jsx";     
import Signup from "../components/Profile/Signup.jsx"; 
import Settings from "../components/Profile/Settings.jsx";
import { useState } from "react";

const Profile = () => { 
    const [user, setUser] = useState(null); 
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [ShowSettings, setShowSettings] = useState(false);

    const toggleLogin = () => {
        setShowLogin(!showLogin); 
        setShowSignup(false);
    }

    const toggleSignup = () => {
        setShowSignup(!showSignup); 
        setShowLogin(false);
    }



    return (
        <div>
            <h2>Profile Page</h2>

            {!user && (
                <div className="auth-btns">
                <button id="login" onClick={toggleLogin}>  
                    {showLogin ? "Close Login" : "Login"}
                </button> 
                <button id="signup" onClick={toggleSignup}>
                    {showSignup ? "Close Signup" : "Signup"}
                </button>
                </div>
            )}
                {showLogin && !user && (
                    <div id ="login-box">
                            <Login setLoggedUser={setUser}/>
                    </div>
                )} 

                {showSignup && !user && (
                    <div id="signup-box"> 
                    <Signup setLoggedUser={setUser} />
                    </div>
                )}

                { user && (
                    <div className="profile-actions">
                        <button 
                            id="logout" 
                            onClick={() => {
                             setUser(null); 
                             setShowLogin(false);
                             setShowSignup(false);
                    }}
                    > Logout 
                </button> 
                <button id="edit-profile" onClick = {() => setShowSettings(true)}>Edit Profile</button>
                </div>
                )}  

                {ShowSettings && user && (
                     <Settings user={user} setUser={setUser} setShowSettings= {setShowSettings} />
                )}

            {user ? (
            
            <Page 
                banner={user.banner}
                avatar={user.avatar}
                username={user._username} 
                name={user.name}
                dob={user.dob}
                bio={user.bio}
                location={user.location}
            />) : (
                        <p>Please Login to View your profile</p> 
                  )}
        </div>
    );
        

};

export default Profile;
