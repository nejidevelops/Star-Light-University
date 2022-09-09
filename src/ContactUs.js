import React from 'react'
import "./ContactUs.css"

function ContactUs(){
  return (
    <div className="containerr">
		<div className="contact-boxx">
			<div className="lefty"></div>
			<div className="righty">
				<h2>Contact Us</h2>
				<input type="text" className="field1" placeholder="Your Name" />
				<input type="text" className="field1" placeholder="Your Email" />
				<input type="text" className="field1" placeholder="Phone" />
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn1">Send</button>
			</div>
		</div>
	</div>
  )
}

export default ContactUs