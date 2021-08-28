import React, { useState } from 'react';
import "./garage.css";
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';

const PaymentSuccesful = () => {
  const [showHeading, setShowHeading] = useState(false);

  return (
  		<div className="payment-failed">
  		<div className="failed-banner">
  		  	<h1>Payment Failed</h1>
  		</div>
  	  	<div className='booking-container'>

	  	  

	  	  <div className='booking-left'>
	  	  	<div className='container-heading'>
		  	  <h1>Booking Details</h1>
		  	  <h2>Lorem Ipsum Garage</h2>
		  	  <div className='rating'>
		  	  	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		  	      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
		  	    </svg>
		  	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		  	      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
		  	    </svg>
		  	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		  	      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
		  	    </svg>
		  	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		  	      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
		  	    </svg>
		  	    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="incomplete-star">
		  	      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
		  	    </svg>
		  	  </div>
		  	  <p>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</p>
		  	  <p>Monday - Friday</p>
		  	  <p>9:00am - 6:00pm</p>
		  	</div>
		  	<div className='container-information'>
		  	  <h2>Booking Information</h2>
		  	  <div className='information-row'>
		  	  	<div className='information-left'>
		  	  	  <p>First Name</p>
		  	      <span>Anshuman</span><br></br>
		  	  	</div>
		  	  	<div className='information-right'>
		  	  	  <p>Last Name</p>
		  	      <span>Vyas</span><br></br>
		  	  	</div>
		  	  </div>
		  	  <div className='information-row'>
		  	  	<div className='information-left'>
		  	  	  <p>Email</p>
		  	      <span>loremipsum23@gmail.com</span><br></br>
		  	  	</div>
		  	  	<div className='information-right'>
		  	  	  <p>Mobile No.</p>
		  	      <span>8855346246</span><br></br>
		  	  	</div>
		  	  </div>
		  	  <div className='information-row'>
		  	  	<div className='information-left'>
		  	  	  <p>Booking Date</p>
		  	      <span>25-12-2042</span><br></br>
		  	  	</div>
		  	  	<div className='information-right'>
		  	  	  <p>Booking Time</p>
		  	      <span>12:00</span><br></br>
		  	  	</div>
		  	  </div>
		  	</div>
		  	<div className='container-shortlist'>
		  	  <h2>Services Selected</h2>
		  	  <ul>
		  	  	<li>Brake Failure</li>
		  	    <li>Oil Change</li>
		  	    <li>Tyre Change</li>
		  	  </ul>
	  	  	</div>
	  	  	<div className='container-information'>
		  	  <h2>Vehicle Details</h2>
		  	  <div className='information-row'>
		  	  	<div className='information-left'>
		  	  	  <p>Model Name</p>
		  	      <span>Honda City VX</span><br></br>
		  	  	</div>
		  	  	<div className='information-right'>
		  	  	  <p>License Plate No.</p>
		  	      <span>KA 05 MN 2015</span><br></br>
		  	  	</div>
		  	  </div>
		  	</div>
	  	  </div>

	  	  <div className='booking-right'>
	  	  	<div className='booking-cost'>
	  	  	  <div className='cost-left'>
	  	  	    <h2>Total Price:</h2>
	  	  	    <p>Labour Cost</p>
	  	  	    <p>GST</p>
	  	  	    <p>Parts Cost</p>
	  	  	  </div>
	  	  	  <div className='cost-right'>
	  	  	    <h2>1200</h2>
	  	  	    <p>800</p>
	  	  	    <p>100</p>
	  	  	    <p>300</p>
	  	  	  </div>
	  	  	</div>
	  	  	
	  	  	<div className='booking-disclaimer'>
	  	  	  <div>
	  	  	  	<svg width="15" height="15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457
				 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM21 12C21 10.3431 22.3431 9 24 9C25.6569 9 27 10.3431
				  27 12V28C27 29.6569 25.6569 31 24 31C22.3431 31 21 29.6569 21 28V12ZM24 33C22.3431 33 21 34.3431 21 36C21
				   37.6569 22.3431 39 24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33Z" fill="#b3b3b3"/>
			  	</svg>
	  	  	  </div>
			  <div>
			  	<h3>
				  Please note that the above costs are only labour costs, additional charges may apply with respect to parts and
				  other requirements.
		  	    </h3>
			  </div>	  
	  	  	</div>
	  	  	<div className='booking-button'>
	  	  	  <div className='button-right'>
	  	  	    <Link to="/payment-succesful" style={{textDecoration:"none"}}><button>Pay Online ></button></Link>
	  	  	  </div>
	  	  	</div>
	  	  </div>
	  	</div>
  	</div>
  		  
  );
}

export default PaymentSuccesful;