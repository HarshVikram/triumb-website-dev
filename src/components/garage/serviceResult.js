import React from 'react';
import "./garage.css";
import { Link } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';

const ServiceResult = () => {
  return (
    <div>
      <div className='service-results'>
        <div className='service-results-left'>
          <div>
            <p>Sort By: </p>
            <select name="" id="">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </select>
          </div>
          <div>
            <Card className='result-card'>
              <img src="./oilchange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <Link to="/service-selection" style={{textDecoration:"none"}}><button>Book Now ></button></Link>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <img src="../../../public/assets/services/brakechange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <Link to="/service-selection" style={{textDecoration:"none"}}><button>Book Now ></button></Link>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <img src="../../../public/assets/services/brakechange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <Link to="/service-selection" style={{textDecoration:"none"}}><button>Book Now ></button></Link>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <img src="../../../public/assets/services/brakechange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <Link><button>Book Now ></button></Link>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <img src="../../../public/assets/services/brakechange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <button>Book Now</button>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <img src="../../../public/assets/services/brakechange.jpg" alt = "Brake Change" />
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p>1200</p>
                <button>Book Now</button>
              </div>
            </Card>
          </div>
          <div>
            <Card className='result-card'>
              <div className='result-image'>
                <img src="./oilchange.jpg" alt = "Brake Change" />
              </div>
              <div className='result-info-1'>
                <p>Lorem Ipsum Garage</p>
                <span>Individual</span>
                <hr />
                <label>Address: </label><span>Titos Ln, Near Baga Beach, Saunta Vaddo, Calangute, Goa, 403516</span><br />
                <label>Hours: </label><span>9:00am - 6:00pm</span>
                <hr />
                <button>4.0 
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                </button><label htmlFor="">Excellent</label><span>  (48 reviews)</span>
              </div>
              <div className='result-info-2'>
                <p>Lorem Ipsum Garage
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/>
                  </svg>
                </p>
                <span>Free Car Check * Free Oiling</span><br />
                <span>Price: </span>
                <p><i class="fas fa-rupee-sign"></i>1200</p>
                <button>Book Now</button>
              </div>
            </Card>
          </div>
        </div>
        <div className='service-results-right'>
          <img src="./map.jpg" alt = "City Map" />
        </div>
      </div>
    </div>
  );
}

export default ServiceResult;