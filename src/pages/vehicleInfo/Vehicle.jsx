import React from 'react';
import "./vehicle.css"
import {useState, useRef, useContext, useEffect} from "react";
import {Zoom} from 'react-reveal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect,
    useHistory
  } from "react-router-dom";
  import AuthContext from "../home/context/AuthContext";
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


  const isEmpty = (value) => value.trim() === '';
  const isSixChars = (value) => value.trim().length >= 6;
  const validateEmail = (value) =>  {
          var re = /\S+@\S+\.\S+/;
          return re.test(value);
      }
  const isPhone = (value) =>{
    let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(value) && value.trim().length === 10;
  }





  function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

// const __DEV__ = document.domain === 'localhost'


export default function Vehicle({org}) {

    const authCtx = useContext(AuthContext); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [success, setSuccess] = useState(false);
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(()=>{
        setIsAuthenticated(authCtx.authContext.isLoggedIn);
    },  [authCtx.authContext]);
    
    
    const orgRef = useRef();
    const carRef = useRef();
    const parkRef = useRef();
    const addRef = useRef();
    const plateRef = useRef();

    let history = useHistory();


    const [formInputsValidity, setFormInputsValidity] = useState({
        org: true,
        plate: true,
        car: true,
        address: true,
      });


    
    let { vehicle } = useParams();

    let plan = {
        name: "",
        price: ""
    }

    if (vehicle  === 'suv')
    {
        plan = {
            name: "SUV Monthly Plan",
            price: "599"
        }
    }
    else if(vehicle === "hatch"){
        plan = {
            name: "Hatchback Monthly Plan",
            price: "399"
        }
    }
    else if(vehicle === "sedan"){
        plan = {
            name: "Sedan Monthly Plan",
            price: "499"
        }
    }


    async function displayRazorpay(event) {
        event.preventDefault();
        const enteredOrg = orgRef.current.value;
        const enteredPlate = plateRef.current.value;
        const enteredPark = parkRef.current.value;
        const enteredAdd = addRef.current.value;
        const enteredCar = carRef.current.value;
        
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Please Make sure you have a working Internet Connection.')
			return
		}

		const data = await fetch('http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/razorpay/'+vehicle, { method: 'POST' }).then((t) =>
			t.json()
		)

		// console.log(data)

		const options = {
			key: data.key,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Triumb',
			description: plan.name,
			image: 'https://triumb-api.herokuapp.com/black.png',
			handler: async function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
                // window.location.pathname="/";
                // history.push("/");
                setOrderDetails([response.razorpay_payment_id, response.razorpay_order_id])
                setSuccess(true);
                window.scrollTo(0, 0);
                // const orderDetails = {
                //     paymentId:response.razorpay_payment_id,
                //     orderId:response.razorpay_order_id,
                //     signature:response.razorpay_signature,
                //     amount:data.amount.toString(),
                //     userId:"60e99c3ffd97462f10aa4eb1"
                // }
                const addOrder = await fetch("http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/addorder", {method: "POST", body:JSON.stringify({paymentId:response.razorpay_payment_id,
                orderId:response.razorpay_order_id,
                signature:response.razorpay_signature,
                amount:data.amount.toString(),
                organisation:enteredOrg,
                car:{ plateNo:enteredPlate,parkingId:enteredPark,address:enteredAdd, carModel:enteredCar },
                userId: authCtx.authContext.userId}),
                  headers: {
                    'Content-Type': 'application/json',
                  }})
                  console.log("request complete");
			},
			prefill: {
				name: authCtx.authContext.name,
				email: authCtx.authContext.username,
				phone_number: authCtx.authContext.phone
			}, 
            theme: {
                color: "#2F6BE5"
            }
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
        

	}



    const [isDisabled, setDisabled] = useState(false);
    const anim = !success && isDisabled;

    const handleCheckout = (event)=>{
        event.preventDefault();
        const enteredOrg = orgRef.current.value;
        const enteredPlate = plateRef.current.value;
        const enteredPark = parkRef.current.value;
        const enteredAdd = addRef.current.value;
        const enteredCar = carRef.current.value;

        const enteredOrgIsValid = !isEmpty(enteredOrg);
        const enteredPlateIsValid = !isEmpty(enteredPlate);
        const enteredAddIsValid = !isEmpty(enteredAdd);
        const enteredCarIsValid = !isEmpty(enteredCar);

        setFormInputsValidity({
            org: enteredOrgIsValid,
            plate: enteredPlateIsValid,
            car: enteredCarIsValid,
            address: enteredAddIsValid,
          });

          const formIsValid = enteredOrgIsValid && enteredPlateIsValid && enteredCarIsValid && enteredAddIsValid;

          if (!formIsValid) {
            return;
          }
        setDisabled(true);
    }

    let dynamicButton;
    if (!isDisabled && !success)
    {
        dynamicButton = <button onClick={handleCheckout} className="societyBtn" >{"Proceed > "}  </button>
    }
    else if(isDisabled && !success){
        dynamicButton = <button onClick={displayRazorpay} className="societyBtn" >{"Proceed To Payment > "}  </button>
    }
    else
    {
        dynamicButton =  <button className="societyBtn" > <Link to="/">{"Home > "} </Link> </button>
    }



    
    
    org.map((p)=>{
        console.log("val:",p)
    })
    return (
        <Zoom>
            <div className="vehicleWrapper">
                {success && <div className="paymentSuccess">
                    <div className="paymentSuccessContent">
                        <h1>Payment Successful</h1>
                    <div className="success">
                    <CheckCircleOutlineIcon/> 
                    </div></div>
                    <div className="orderDetailsContent">
                    <h1 className="orderDetailsHeader">Order Details</h1>
                    <div className="orderDetails">
                        <p>  Payment ID: {orderDetails[0]} <br /> Order ID: {orderDetails[1]}</p>
                       <div className="dynamicButton">{success&&dynamicButton}</div> 
                        </div>
                    </div>
                   
                    
                    
                </div>}
                <div className="vehicleContent">
                    <h1>{plan.name}</h1>
                    <p>Please note that our services are limited to a number of places across Jaipur and we do not serve individual memberships.</p>
                    <div className="vehicleForm">
                        
<form noValidate autoComplete="off">
                        <div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Organization Name<span className="invalid">*</span></span></label><br></br>
                            <select ref={orgRef} className="formText" disabled = {(isDisabled)? "disabled" : ""}>
                                {org.map((p)=>(
                                    <option value={p}>{p}</option>
                                ))}
                            </select>
                            {/* <input  className="formText" /> */}
                            </div>
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Car Model<span className="invalid">*</span></span></label><br></br>
                            <input disabled = {(isDisabled)? "disabled" : ""} className="formText" ref={carRef} />
                            {!formInputsValidity.car && <p className="invalid">This field is mandatory</p>}
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">License Plate Number<span className="invalid">*</span></span></label><br></br>
                            <input disabled = {(isDisabled)? "disabled" : ""} className="formText" ref={plateRef}/>
                            {!formInputsValidity.plate && <p className="invalid">This field is mandatory</p>}
                            </div>
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Car parking Number</span></label><br></br>
                            <input disabled = {(isDisabled)? "disabled" : ""}  className="formText" className="formText" ref={parkRef}/>
                            </div>
                        </div>

						<div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Address<span className="invalid">*</span></span></label><br></br>
                            <input disabled = {(isDisabled)? "disabled" : ""}  type="textarea"  className="formText" className="formText" ref={addRef}/>
                            {!formInputsValidity.address && <p className="invalid">This field is mandatory</p>}
                            </div>
                        </div>
              <Zoom>{anim && <span className="vehicleAlert">Would You Like to Checkout?</span>}</Zoom>
              <br></br>
<div className="totalFormRow">
    <h1 className="vehicleTotal">Total: <span  className="vehicleCost"> ₹ {plan.price}</span> </h1>
    {!success&&dynamicButton}

</div>

                      
                     </form>

                    </div>
                </div>
                
            </div>
        </Zoom>
    )
}
