import React from 'react';
import './Contact.css'; // Custom styles for the contact page
function Contact() {
return (
<div className="contact-section bg-light py-5">
<div className="container text-center">
<h2>Contact Us</h2>
<p>Email: support@teampassword.com</p>
<p>Phone: +1 (979) 256-2462</p>
<form className="contact-form mt-4">
<div className="form-group">
<input type="text" className="form-control" placeholder="Your Name" required />
</div>
<div className="form-group">
<input type="email" className="form-control" placeholder="Your Email" required />
</div>
<div className="form-group">
<textarea className="form-control" rows="5" placeholder="Your Message"
required></textarea>
</div>
<button type="submit" className="btn btn-primary">Send Message</button>
</form>
</div>
</div>
);
}
export default Contact;