import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom styles for the header
function Header() {
return (
<header className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<Link className="navbar-brand" to="/">TeamPassword</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" datatarget="#navbarNav" aria-controls="navbarNav" aria-expanded="false" arialabel="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ml-auto">
<li className="nav-item">
<Link className="nav-link" to="/">Plans & Pricing</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/product-tour">Product Tour</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/blog">Blog</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/security">Security</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/password-generator">Password Generator</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/customers">Customers</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/help">Help</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/sign-in">Sign In</Link>
</li>
<li className="nav-item">
<Link className="nav-link btn btn-success text-white" to="/get-started">Get
Started</Link>
</li>
</ul>
</div>
</div>
</header>
);
}
export default Header;