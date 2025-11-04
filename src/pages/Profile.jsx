import "./../css/Profile.css";
import "./../css/Page.css";
import Page from "/Users/kaylathreadgill/jamsesh/src/components/Profile/Page.jsx";
const Profile = () => {
    return (
        <div>
            <h2>Profile Page</h2>
            <Page 
                avatar=""
                username="kayla_threadgill"
                bio="i am a music lover"
                location="Columbia, SC"
                favoriteArtist="Dominic Fike"
            />
        </div>
    );
};

export default Profile;
