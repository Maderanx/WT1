import React from 'react';
import './Pricing.css'; // Custom styles for the pricing page
function Pricing() {
return (
<div className="pricing-section bg-dark text-white py-5">
<div className="container text-center">
<h2>Pricing</h2>
<div className="row">
<div className="col-md-6">
<div className="card bg-secondary text-white mb-3">
<div className="card-body">
<h3>Standard</h3>
<p>$2.50/user/month</p>
<p>Minimum 3 users</p>
<button className="btn btn-success">Start Free Trial</button>
</div>
</div>
</div>
<div className="col-md-6">
<div className="card bg-secondary text-white mb-3">
<div className="card-body">
<h3>Enterprise</h3>
<p>$5.00/user/month</p>
<p>Minimum 3 users</p>
<button className="btn btn-success">Start Free Trial</button>
</div>
</div>
</div>
</div>
</div>
</div>
);
}
export default Pricing;