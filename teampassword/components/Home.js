import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom styles for the home page
function Home() {
return (
<div className="home">
<div className="hero-section text-center bg-primary text-white py-5">
<div className="container">
<h1>The Password Manager for Teams</h1>
<p>TeamPassword is the fastest, easiest and most secure way to store and share team
logins and passwords.</p>
<Link to="/pricing" className="btn btn-success">Get Started</Link>
</div>
</div>
<div className="features-section container my-5">
<h2 className="text-center">Easy to Use, Easy to Love</h2>
<p className="text-center">In the office or on the go, TeamPassword makes storing and
sharing passwords safely a cinch.</p>
<div className="row">
<div className="col-md-4">
<div className="card">
<img src="/images/palm.jpg" className="card-img-top" alt="Feature 1" />
<div className="card-body">
<h5 className="card-title">Passwords in your palm</h5>
<p className="card-text">Keep all your passwords secure in one place.</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="card">
<img src="/images/images.png" className="card-img-top" alt="Feature 2" />
<div className="card-body">
<h5 className="card-title">Ditch the spreadsheets</h5>
<p className="card-text">Save time by managing passwords without the hassle.</p>
</div>
</div>
</div>
<div className="col-md-4">
<div className="card">
<img src="/images/easy.jpg" className="card-img-top" alt="Feature 3" />
<div className="card-body">
<h5 className="card-title">Easy to use</h5>
<p className="card-text">Our tool is designed for simplicity and efficiency.</p>
</div>
</div>
</div>
</div>
</div>
<div className="contact-section bg-light py-5">
<div className="container text-center">
<h2>Contact Us</h2>
<p>Email: support@teampassword.com</p>
<p>Phone: +1 (979) 256-2462</p>
</div>
</div>
</div>
);
}
export default Home;