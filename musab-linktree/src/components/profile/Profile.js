import './Profile.css';
import musab from '../../images/musab.jpg';

function Profile() {
    return (
        <div>
            <img src={musab} alt='My profile pic' id='profile__img' className="profile-img" />
            <p>Musab Habeeb</p>
            <div className="btn"
                 id='twitter'
            >
                <h4>Twitter Username</h4>
                <h6>@MusabHabeeb2</h6>
            </div>

        </div>
    )
}

export default Profile;