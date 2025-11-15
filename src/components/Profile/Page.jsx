import "../../css/Profile.css";
import "../../css/Page.css";
    const Page = ({banner, avatar, username, name, dob, bio, location}) => {
        return (
            <div className="profile-component"> 
            {banner && ( 
                <img className= "profile-banner" src={banner} alt="Profile Banner" />
            )}
                <div className="profile-info">
                {avatar && (
                    <img className="profile-avatar" src={avatar} alt="Profile Avatar" /> 
                )}
                    <h1 className="profile-username">{username}</h1>
                    <p className="profile-name">Name: {name}</p>
                    <p className="profile-dob">DOB: {dob}</p>
                    <p className="profile-bio">Bio: {bio}</p>
                    <p className="profile-location">Location: {location}</p>
                </div>
            </div>
        );
    };
    export default Page;