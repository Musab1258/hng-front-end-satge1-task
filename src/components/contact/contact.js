import { useState, useRef, useEffect } from 'react';
import './Contact.css';
import Footer from "../footer/Footer";

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{1,23}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{1,500}$/;

function Contact() {
  const formRef = useRef();

  const [ firstName, setFirstName ] = useState("");
  const [ validFirstName, setValidFirstName ] = useState(false);
  const [ firstNameFocus, setFirstNameFocus] = useState(false);

  const [ lastName, setLastName ] = useState("");
  const [ validLastName, setValidLastName ] = useState(false);
  const [ lastNameFocus, setLastNameFocus] = useState(false);

  const [ email, setEmail ] = useState("");
  const [ validEmail, setValidEmail ] = useState(false);
  const [ emailFocus, setEmailFocus] = useState(false);

  const [ message, setMessage ] = useState("");
  const [ validMessage, setValidMessage ] = useState(false);
  const [ messageFocus, setMessageFocus] = useState(false);

  useEffect(() => {
    formRef.current.focus();
  }, []);
  
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
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  }
  
  return (
    <div>
      <div className='contact'>
        <div className='heading'>
          <h1 className='heading-h1'>Contact Me</h1>
          <p className='heading-p'>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form>
          <div className='lg-name'>
            <div className='form-entries fst-name'>
            <label>
              First name
            </label>
            <input id="first_name"
                   type="text"
                   ref={formRef}
                   onChange={(e) => setFirstName(e.target.value)}
                   onFocus={() => setFirstNameFocus(true)}
                   placeholder="Enter your first name"
                   className='entry input' 
            />
            <p className='firstNameFocus & !validFirstName ? show : hide'>Please, enter your first name</p>
            </div>
            <div className='form-entries lst-name'>
              <label>
                Last name
              </label>
              <input id="last_name"
                     type="text"
                     ref={formRef}
                     onChange={(e) => setLastName(e.target.value)}
                     onFocus={() => setLastNameFocus(true)}
                     placeholder="Enter your last name"
                     className='entry  input' 
              />
              <p className='lastNameFocus & !validLastName ? show : hide'>Please, enter your last name</p>
            </div>
          </div>
          <div className='form-entries' >
            <label>
              Email
            </label>
            <input id="email"
                   type="email"
                   ref={formRef}
                   onChange={(e) => setEmail(e.target.value)}
                   onFocus={() => setEmailFocus(true)}
                   placeholder="yourname@email.com"
                   className='entry input' 
            />
            <p className='emailFocus & !validEmail ? show : hide'>Please, enter your email address</p>
          </div>
          <div className='form-entries'>
            <label>
              Message
            </label>
            <textarea id="message"
                      type="text"
                      ref={formRef}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setMessageFocus(true)}
                      placeholder="Send me a message and I'll reply you as soon as possible..."
                      className='entry text-area'
            />
            <p className='messageFocus & !validMessage ? show : hide'>Please, enter your message</p>
          </div>
          <div>
            <input type="checkbox" className='checkbox' />
            <span className='checkbox-span' >You agree to providing your data to Musab who may contact you.</span>
          </div>
          <div>
            <button id="btn__submit" className='send-btn' >Send message</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
      )
}

export default Contact;