import React from 'react'
import vit from '../../assets/adobe.png'
import del from '../../assets/microsoft.png'
import paypal from '../../assets/facebook.png'
import  walmart from '../../assets/walmart.png'
import './contact.css'


const Contact = () => {
  return (
    <section id='contactpage'>
            <div id="client">
                <h1 className='contactheading'>My Clients</h1>
                <p className='clientdiscription'> I have had the opportunity yo work with a diverse group of companies. Some of the notable companies I have Worked with includes</p>
                <div className="clientimgs">
                    <img src={paypal} alt="clients" className="clientimg" />
                    <img src={del} alt="clients" className="clientimg" />
                    <img src={vit} alt="clients" className="clientimg" />
                    <img src={walmart} alt="clients" className="clientimg" />
                </div>
            </div>
            
            <div id="contact">
                <h1 className="pagetitle">Contact Me</h1>
                <span className="contactdiscription">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactform'>
                    <input type="text" placeholder='Your Name' className="name" />
                    <input type="email" placeholder='Your Email' className="email" />
                    <textarea className='msg' name="message"  cols="30" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitbtn">Submit</button>
                    <div className="links">
                        <a className='link' href="#"> <i class="fa-brands fa-facebook fa-bounce fa-3x" style={{ color: "#004bd6" }}></i> </a>
                        <a className='link' href="#">  <i className="fa-brands fa-square-whatsapp fa-bounce fa-3x" style={{ color: "#109e27" }}></i> </a>
                        <a className='link' href="#">  <i className="fa-brands fa-youtube fa-bounce fa-3x" style={{ color: "#ff0000" }}></i> </a>
                        <a className='link' href="#">  <i className="fa-brands fa-instagram fa-bounce fa-3x" style={{ color: "#ffff" }}></i> </a>
                       
                        
                    </div>
                </form>
            </div>
    </section>
  )
}

export default Contact
