import "/Users/kaylathreadgill/jamsesh/src/css/Profile.css";

    const Page = (user) => {
        return (
            <div className="profile-component"> 
                <h1>{user.name}'s Profile</h1>
                <img src={user.avatar} alt="User Avatar" />
                <p>Email: {user.email}</p>
                <p>Bio: {user.bio}</p>
                
            </div>
        );
    };
    export default Page;