import { useState, useEffect } from 'react';
import './Contact.css';
import Footer from "../footer/Footer";

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{1,23}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{1,500}$/;

function Contact() {

  const checkmark = '✔';
  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [ checked, setChecked ] = useState(false)

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = NAME_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message was sent successfuly');
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }

  const handleCheck = () => {
    setChecked(!checked);
  }

  return (
    <div className='body'>
      <div className='contact'>
        <div className='heading'>
          <h1 className='heading-h1'>Contact Me</h1>
          <p className='heading-p'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='lg-name'>
            <div className='form-entries fst-name'>
              <label htmlFor="firstname" >
                First name
              </label>
              <input id="first_name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                placeholder="Enter your first name"
                className='entry input'
              />
              <p className={firstNameFocus & !validFirstName ? 'show' : 'hide'}>Please, enter your first name</p>
            </div>
            <div className='form-entries lst-name'>
              <label htmlFor="lastname" >
                Last name
              </label>
              <input id="last_name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                placeholder="Enter your last name"
                className='entry  input'
              />
              <p className={lastNameFocus & !validLastName ? 'show' : 'hide'}>Please, enter your last name</p>
            </div>
          </div>
          <div className='form-entries' >
            <label htmlFor="email" >
              Email
            </label>
            <input id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder="yourname@email.com"
              className='entry input'
            />
            <p className={emailFocus & !validEmail ? 'show' : 'hide'} >Please, enter your email address</p>
          </div>
          <div className='form-entries'>
            <label htmlFor="message" >
              Message
            </label>
            <textarea id="message"
              type="text"
              value={message}
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setMessageFocus(true)}
              onBlur={() => setMessageFocus(false)}
              placeholder="Send me a message and I'll reply you as soon as possible..."
              className='entry text-area'
            />
            <p className={messageFocus & !validMessage ? 'show' : 'hide'} >Please, enter your message</p>
          </div>
          <div className='checkbox-container'>
            <div onClick={handleCheck}>
              <input type="checkbox"
                   value={checked}
                   className='checkbox' />
              <span className={checked ? 'checkmark' : 'hide'}>{checkmark}</span>
            </div>
            <span className='checkbox-span' >You agree to providing your data to Musab who may contact you.</span>
          </div>
          <div>
            <button id="btn__submit"
              type="button"
              onClick={handleSubmit}
              className='send-btn'
            >
              Send message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Contact;
