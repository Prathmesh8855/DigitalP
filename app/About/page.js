import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <>
    <div className="page2" id="about">
        
        </div>
        <div className="aboutme">
            <li className="aboutme1">ABOUT ME</li>
            <li className="aboutme2">------O------</li>
            <li className="aboutme3">Hii, I am <span className="pcolor">Prathmesh Balasaheb Admile.</span> </li>
            <li className="aboutme3">I have completed Diploma in <span className="pcolor">Electronics and
                    Telecommunication.</span></li>
        </div>
        <div className="wrapper">
            <div className="page2-left">
                <div className="page2-box1"><img src="photop.png" alt="Prathmesh"/></div>
                <div className="page2-box2">
                    <a href="#"><img src="instagram.png" alt="instagram"/></a>
                    <a href="#"><img src="facebook.png" alt="instagram"/></a>
                    <a href="#"><img src="whatsapp (1).png" alt="instagram"/></a>
                    <a href="#"><img src="linkedin.png" alt="instagram"/></a>
                    <a href="#"><img src="email.png" alt="instagram"/></a>
                </div>
            </div>
            <div className="page2-right">
                <div className="about-subject">
                    <h2>My Story</h2>
                    <p>Hii i am Prathmesh. Lorem ipsum dolor sit amet,
                         consectetur adipisicing elit. Nulla, ipsam totam
                         harum quia voluptatum a, velit voluptates reprehenderit
                          doloribus quam quod distinctio modi recusandae quo 
                          nesciunt quae veniam fuga enim.
                          Hii i am Prathmesh. Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Nulla, ipsam totam
                          harum quia voluptatum a, velit voluptates reprehenderit
                           doloribus quam quod distinctio modi recusandae quo 
                           nesciunt quae veniam fuga enim.</p>
                           <p>Hii i am Prathmesh. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nulla, ipsam totam
                            harum quia voluptatum a, velit voluptates reprehenderit
                             doloribus quam quod distinctio modi recusandae quo 
                             nesciunt quae veniam fuga enim.
                             Hii i am Prathmesh. Lorem ipsum dolor sit amet,
                             consectetur adipisicing elit. Nulla, ipsam totam
                             harum quia voluptatum a, velit voluptates reprehenderit
                              doloribus quam quod distinctio modi recusandae quo 
                              nesciunt quae veniam fuga enim.</p>
                              <Link  href="/Contact">Contact Me</Link>
                </div>
               
            </div>
       
        </div>
        <div className="lower-section">
            <p>Copyright &copy; 2024. All Rights Reserved To DigitalP.</p>
        </div>
      
    </>
  )
}

export default about