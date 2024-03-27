import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="page5" id="contact">
       
        
        <div className="upper-section">
            <li>
                <h1>Get in Touch </h1>
            </li>
            
        </div>
        <div className="middel-section">
            <div className="contact-box">
                <h2>Contact Information</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim. Quae</h3>
                <h4><img src="phone-call.png" alt="contact"/>+91********** <br/>
                    <img src="phone-call.png" alt="contact"/> +91**********</h4>
                <h4><img src="email.png" alt="contact"/>************@gmail.com</h4>
                <h4><img src="pin.png" alt="contact"/>Solapur, India</h4>
            </div>
            <div className="form">
               <div className="form-wrap">
               <li>Your Name <br/><input type="text" className="name"/></li>
               <li>Your Email <br/><input type="email" className="name"/></li>
               <li>Subject <br/><input type="text" className="subject"/></li>   
               <li>Comment <br/><textarea name="text" id="comment" cols="30" rows="10"></textarea></li>  
               <li><button className="msg-submit">Send Message</button>
               </li>
            </div>
        </div>     
        </div>
        <div className="lower-section">
            <p>Copyright &copy; 2024. All Rights Reserved To DigitalP.</p>
        </div>
        </div>
    </>
  )
}

export default Contact