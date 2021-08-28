import React, { useState } from 'react';
import "./garage.css";
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';

const PaymentSuccesful = () => {
  const [showHeading, setShowHeading] = useState(false);

  return (
  		<div className='payment-succesful'>
  		  <div className="success-banner">
  		  	<h1>Payment Successful</h1>
  		  </div>
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
  		</div>
  		  
  );
}

export default PaymentSuccesful;