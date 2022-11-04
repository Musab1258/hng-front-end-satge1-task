import './Links.css';
import slack from '../../images/slack.svg';
import github from '../../images/github.svg';
import { Link } from 'react-router-dom';

function Links() {
  return (
    <div>
      <a href='https://training.zuri.team/'
        id='btn__zuri'
        className="a"
      >
        <div className="btn">
          <h4>Zuri Team</h4>
        </div>
      </a>
      <a href='http://books.zuri.team'
        id='books'
      >
        <div className="btn">
          <h4>Zuri Books</h4>
          <h6>If you are looking for books on coding and design, click here.</h6>
        </div>
      </a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=MusabHabeeb'
        id='book__python'
      >
        <div className="btn">
          <h4>Python Book</h4>
          <h6>If you want to learn how to code with python, then, this is the book you need.</h6>
        </div>
      </a>
      <a href='https://background.zuri.team/'
        id='pitch'
      >
        <div className="btn">
          <h4>Background Check for Coders.</h4>
          <h6>If you want to know more about the software developers you are hiring, click here.</h6>
        </div>
      </a>
      <a href='https://books.zuri.team/design-rules'
        id='book__design'
      >
        <div className="btn">
          <h4>Design Book</h4>
          <h6>If you want to be conversant with the rules of professional design, check out this book</h6>
        </div>
      </a>
      <a  href='#'
          id='contact'
          className="a"
      >
        <Link to="/contact">
          <div className="btn">
            <h4>Contact Me</h4>
          </div>
        </Link>
      </a>
      <img src={slack} alt='slack logo' className="links-img slack-img" />
      <img src={github} alt='github logo' className="links-img github-img" />
    </div>
  );
}

export default Links;
