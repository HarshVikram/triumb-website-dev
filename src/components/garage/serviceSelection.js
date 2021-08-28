import React from 'react';
import "./garage.css";
import "../footer/footer.css";
import { Link } from "react-router-dom";
import StarRateIcon from '@material-ui/icons/StarRate';
import Card from '@material-ui/core/Card';

const ServiceSelection = () => {
  return (
  	<div>
  	  	<div className='selection-container'>
	  	  <div className='container-heading'>
	  	    <h1>Lorem Ipsum Garage</h1>
	  	    <div className="rating">
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
	  	  <div className='container-shortlist'>
	  	    <h2>Services Selected</h2>
	  	  	<ul>
	  	  	  <li>Brake Failure</li>
	  	  	  <li>Oil Change</li>
	  	  	  <li>Tyre Change</li>
	  	  	</ul>
	  	  	<p>Missed on something? Add Now!</p>
	  	  	<div className="container-addon">
                <select name="" id="" className="formText">
	              <option value="volvo">Booba Fail</option>
	              <option value="saab">Tyre Replacement</option>
	              <option value="mercedes">Windscreen Replacement</option>
	              <option value="mercedes">Keylock Change</option>
	            </select>
                <button>Add Service</button>
            </div>
	  	  </div>
	  	  <div className='container-information'>
	  	    <h2>Booking Information</h2>
	  	  	<div className="information-form">
	  	  	  <div className="form-row-1">
	  	  	    <div className="form-items">
			      <label for="fname"><span className="labelText">First Name</span></label><br></br>
			      <input type="text" name="AdminName" className="formText" required/>
		        </div>
		        <div className="form-items">
		          <label for="fname"><span className="labelText">Last Name</span></label><br></br>
		          <input  className="formText" name="MobileNumber" required/>
		        </div>
	  	  	  </div>
	  	  	  <div className="form-row-1">
	  	  	    <div className="form-items">
	              <label for="fname"><span className="labelText">Email Adress</span></label><br></br>
	              <input type="text" name="AdminName" className="formText" required/>
	            </div>
	            <div className="form-items">
	              <label for="fname"><span className="labelText">Mobile Number</span></label><br></br>
	              <input  className="formText" name="MobileNumber" required/>
	            </div>
	  	  	  </div>
	  	  	  <div className="form-row-2">
	  	  	    <div className="form-items">
	              <label for="fname"><span className="labelText">License Plate No.</span></label><br></br>
	              <input type="text" name="AdminName" className="formText" required/>
	            </div>
	            <div className="form-items">
	              <label for="fname"><span className="labelText">Booking Date</span></label><br></br>
	              <input type="date" className="formText service-date" required/>
	            </div>
	            <div className="form-items">
	              <label for="fname"><span className="labelText">Booking Time</span></label><br></br>
	              <select name="" id="" className="formText">
	                <option value="volvo">00:00</option>
	                <option value="saab">09:00</option>
	                <option value="mercedes">09:30</option>
	              </select>
	            </div>
	  	  	  </div>
	          <Link to="/service-booking" style={{textDecoration:"none"}}><button>Proceed ></button></Link>
	        </div>
	  	  </div>

	  	  <span></span>
	  	  <label htmlFor=""></label>

	  	</div>
  	</div>
  	
  );
}

export default ServiceSelection;