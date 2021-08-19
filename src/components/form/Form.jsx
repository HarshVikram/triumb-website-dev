import "./form.css";

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

const __DEV__ = document.domain === 'localhost'

export default function Form() {

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		let vehicle="suv";

		const data = await fetch('http://localhost:8800/razorpay/'+vehicle, { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: data.key,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Triumb',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name: data.name,
				email: data.email,
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<>
		{/* <form action="http://localhost:8800/register" method="post">
			
	
	<div className="formContainer">
			<div className="rows">
				<div className="formRow">
					<div className="formItems">
						<label htmlFor="fname">userName</label>
						<br />
						<input
							type="text"
							name="username"
							id="fname"
							placeholder="Name"
						/>
						</div>

					<div className="formItems">
						<label htmlFor="fmob">Password.</label>
						<br />
						<input
							type="text"
							name="password"
							id="fmob"
							placeholder=""
						/>
				</div>

					<div className="formItems">
						<label htmlFor="fmob">Naam.</label>
						<br />
						<input
							type="text"
							name="name"
							id="fmob"
							placeholder=""
						/>
				</div>
				</div>

				<div className="formRow">
					<button type="submit">Register</button>
				</div>

				
			</div>
		</div>
		</form> */}


		<div className="formRow">
		<button onClick={displayRazorpay}>Razorpay</button>
	</div>
	</>


	);
}
