import "/Users/kaylathreadgill/jamsesh/src/css/Profile.css";
import "/Users/kaylathreadgill/jamsesh/src/css/Page.css";
    const Page = (user) => {
        return (
            <div className="profile-component"> 
                {user.banner && <img className="profile-banner" src={user.banner} alt="Profile Banner" />}

                <div className="profile-info">
                    <img className="profile-avatar" src={user.avatar} alt="Profile Avatar" />
                    <h1 className="profile-username">{user.username}</h1>
                    <p className="profile-bio">{user.bio}</p>
                    <p className="profile-location">Location: {user.location}</p>
                    <p className="profile-favorite-artist">Favorite Artist: {user.favoriteArtist}</p> 
                </div>
            </div>
        );
    };
    export default Page;