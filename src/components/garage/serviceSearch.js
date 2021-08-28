import React from 'react';
import "./garage.css";

const ServiceSearch = () => {
	return (
		<div>
		  <div className='service-search'>
            <div className="service-search-edge">
                <select name="cars" id="cars">
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>
            </div>
            <div className="service-search-centre">
                <select name="cars" id="cars">
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>
            </div>
            <div className="service-search-centre">
                <select name="cars" id="cars">
				  <option value="volvo">Volvo</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select>
            </div>
            <div className="service-search-button">
                <button type="submit">{`Find Garages`}</button> 
            </div>
		  </div>
		</div>
	);
}

export default ServiceSearch;