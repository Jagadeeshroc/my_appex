import React from 'react';
import './index.css';
import GmailIcon from '@mui/icons-material/Email';

const Contact = () => (
  <>
  <div className="contact-container">
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
      alt="contact"
      className="contact-img"
    />
    <h1 className="contact-heading">Contact</h1>
    </div>
    <div className="het">
    <h1 className="contact-heading">Lets Chat </h1>
    <p className="contact-heading">Tell me about your</p>
    <h1 className="contact-heading">project.</h1> 
    <p className="contact-heading1">Lets create something together </p>
</div>


    </div>
         
          
        <div className= "gmail-container">  
          <div className="gmailspa">
            <div className="gmail">
               <GmailIcon style={{ fontSize: 30, color:      'red' }} />
            </div>
          <div>
            <h1 className="contact-headinga">Email me at</h1>
            <p className="contact-paragraph3">jagadeeshvanganooru@gamil.com</p>
            </div>
          </div>
          <div>   

          <div className="form-container">
              <h1 className="form-heading">Send us a message</h1>
              <input type="text" placeholder="Full Name" className="contact-input" />
              <input type="email" placeholder="Email Adddress" className="contact-input" />
              <input type="email" placeholder="Subject" className="contact-input" />
              <p> Tell me more about your Project</p>
              <textarea placeholder="Your Message" className="contact-textarea" />
              <button className="contact-button">Send</button>
          </div>
            
        </div>  
      
</div>


    

  </>
)

export default Contact