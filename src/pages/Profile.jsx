import "./../css/Profile.css";
import "./../css/Page.css";
import Page from "/Users/kaylathreadgill/jamsesh/src/components/Profile/Page.jsx";
import Image from "../images/profile/profile.jpg";
const Profile = () => {
    return (
        <div>
            <h2>Profile Page</h2>
            <Page 
                avatar={Image}
                username="kayla_threadgill"
                bio="i am a music lover"
                location="Columbia, SC"
                favoriteArtist="Dominic Fike"
            />
        </div>
    );
};

export default Profile;
