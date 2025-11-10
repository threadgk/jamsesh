import "/Users/kaylathreadgill/jamsesh/src/css/Profile.css";
import "/Users/kaylathreadgill/jamsesh/src/css/Page.css";
    const Page = ({banner, avatar, username, bio, location, favoriteArtist}) => {
        return (
            <div className="profile-component"> 
                {banner && <img className="profile-banner" src={banner} alt="Profile Banner" />}

                <div className="profile-info">
                    <img className="profile-avatar" src={avatar} alt="Profile Avatar" />
                    <h1 className="profile-username">{username}</h1>
                    <p className="profile-bio">{bio}</p>
                    <p className="profile-location">Location: {location}</p>
                    <p className="profile-favorite-artist">Favorite Artist: {favoriteArtist}</p> 
                </div>
            </div>
        );
    };
    export default Page;