import './Profile.css';
import musab from '../../images/musab.jpg';
import share from '../../images/share.svg';
import dot from '../../images/dot.svg'

function Profile() {
    return (
        <div className="profile">
            <div className="profile-imgs">
                <img src={musab} alt='My profile pic' id='profile__img' className="profile-img" />
                <img src={dot} alt='dot button' className="profile-btn mobile" />
                <img src={share} alt='share button' className="profile-btn desktop" />
            </div>
            <div>
                <p id='twitter'>@MusabHabeeb2</p>
                <p id='slack' className="hidden">Musab1258</p>
            </div>
        </div>
    )
}

export default Profile;