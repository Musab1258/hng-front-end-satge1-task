import './Footer.css';
import zuri from '../../images/zuri-logo.svg';
import i4g from '../../images/i4g-logo.svg';

function Footer() {
    return (
        <div className="footer">
            <hr />
            <div className="footer-content">
                <img src={zuri} alt="zuri logo" className="footer-img" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={i4g} alt="i4g logo" className="footer-img i4g" />
            </div>
        </div>
    );
}

export default Footer;