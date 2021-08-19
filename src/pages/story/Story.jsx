import React from 'react';
import "./story.css";

import { LinkedIn, Instagram } from "@material-ui/icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Story() {
	const founders = [
		{
			name: "Tanmay Goyal",
			post: "Founder and Managing Director",
			quote: `"The value of an idea lies in the using of it." – Thomas Edison. 	
			We at Triumb believe that everything should be a call away. Moving forward with this belief we plan to build a next-door car cleaning platform along with local garage comparisons. We wish to collaborate with various organizations across the country to avail the benefit of our services.`,
			img: "/assets/person/T.jpeg",
			linkedIn: "https://in.linkedin.com/in/tanmaygoyal19",
			insta: "https://www.instagram.com/tany_1919/?hl=en",
			twitter: "",
		},

		{
			name: "Anshuman Vyas",
			post: "Chief Technical Officer",
			quote: "Triumb was born because we believed our idea could revolutionize the car-servicing space. We aim to bring cost-effective, high-quality, eco-friendly and hassle-free car grooming services to every corner of the country. We want to help people make educated decisions on car maintenance through our garage comparisons. We look forward to partnering with organisations across India to bring our vision of shiny cars and waterless car-washing to life.",
			img: "/assets/person/A.jpg",
			linkedIn: "https://in.linkedin.com/in/anshumanvyas25",
			insta: "https://www.instagram.com/brahminboi/?hl=en",
			twitter: "",
		},
	];

	const founders2 = [
		{
			name: "Harsh Agrawal",
			post: "Chief Operating Officer",
			quote: `"Discover who you are, not what others want you to be"

			At Triumb, our aim is to provide seamless Automotive services at the doorstep. We intent to build an on hand user friendly car service platform to give our users a trouble-free experience like never before.
			Register - Sit back - let us drive you to the better future`,
			img: "/assets/person/H.jpg",
			linkedIn: "https://in.linkedin.com/in/harshagrawal538",
			insta: "https://www.instagram.com/harsh_agrawal.99/?hl=en",
			twitter: "",
		},

		{
			name: "Samarth Prakash Shrivastava",
			post: "Chief Marketing Officer",
			quote: `"Do it now. Sometimes later becomes never"

			Procrastination is the biggest slayer of minds.  Here at Triumb we intent to work and deliver our flawless sevices without any delay and leave you totally amazed. Triumb aims to make a platform to get better car services for everyone.
			 Once you have put the wheels in motion, the whole work will be accomplished even before you realize it.`,
			img: "/assets/person/S.jpg",
			linkedIn:
				"https://in.linkedin.com/in/samarth-prakash-shrivastava-a0a1aa122",
			insta: "https://www.instagram.com/samarth_prakash_/?hl=en",
			twitter: "",
		},
	];
	return (
		<div className="storycont">
			<div className="storyContainer">
				<h1 className="storyHeading">Our Story</h1>
				<div className="storyWrapper">
					<div className="storyLeft">
						<p>
							Triumb started out as a joint venture between 4
							friends from Manipal University Jaipur and has today
							been named one of the most promising startups in
							India. Tanmay, Anshuman, Harsh and Samarth worked on
							the idea of bringing a car washing revolution which
							struck them over a normal day’s conversation. The
							idea then transformed into something concrete due
							the sheer determination and hard work of our
							founders. <br />
							<br />
							Triumb is a family that is striving towards making a
							better tomorrow. The founders and employees are
							motivated to make car-washing sustainable and your
							life hassle-free.
						</p>
					</div>
					<img
						src="assets/story1.png"
						alt=""
						className="storyVector"
					/>
				</div>

				<h1 className="storyHeading">What We Do</h1>
				<div className="storyWrapper">
					<img
						src="assets/story2.png"
						alt=""
						className="storyVector"
					/>
					<div className="storyLeft">
						<p>
							When more than 1.6 billion people on this planet are
							facing hardships relating to water, Triumb does its
							part in curtailing the water crisis by making our
							car-washing services sustainable and eco-friendly.
							<br />
							<br /> Triumb is an innovative car servicing
							start-up that provides effective, pocket-friendly
							and hassle-free car washing services. We use
							environmentally friendly products that consume less
							than 1% of the average water used for car washing.
							<br />
							<br /> All you need to do is login into our app and
							select among the pocket-friendly plans, after which
							you can enjoy the best of services without being
							bothered to stand in long queues or travel to far
							places. We not only provide doorstep assistance but
							are also connected to various organisations that
							help get you services anytime, anywhere. There are
							various plans based on the car type and subscription
							duration, that helps you get a kick out of our
							amazing services.
							<br />
							<br /> Apart from car washing services, Triumb also
							provides a platform for you to compare the various
							garages in your city. We provide detailed
							comparisons between the different services offered
							at the garages near you, their price points and
							ratings, making it hassle free to pick the best
							garage fit to suit your needs. Making sure your car
							gets the best care will be made super easy.
						</p>
					</div>
				</div>

				<h1 className="storyHeading">Our Founders</h1>
				<br />

				<div className="cards">
					<div className="cardRow">
						{founders.map((founder) => (
							<div className="storyCard">
								<div className="details">
									<h2>{founder.name}</h2>
									<h4>{founder.post}</h4>

									<div className="socials">
										<ul className="socialItems">
											<li className="socialItem">
												<a href={founder.linkedIn}>
													<LinkedIn />
												</a>
											</li>

											<li className="socialItem">
												<a href={founder.insta}>
													<Instagram />
												</a>
											</li>
										</ul>
									</div>

									<p>{founder.quote}</p>
								</div>
								<div className="cardImage">
									<img
										src={founder.img}
										className="cardImg"
									></img>
								</div>
							</div>
						))}
					</div>

					<div className="cardRow">
						{founders2.map((founder) => (
							<div className="storyCard">
								<div className="details">
									<h2>{founder.name}</h2>
									<h4>{founder.post}</h4>

									<div className="socials">
										<ul className="socialItems">
											<li className="socialItem">
												<a href={founder.linkedIn}>
													<LinkedIn />
												</a>
											</li>

											<li className="socialItem">
												<a href={founder.insta}>
													<Instagram />
												</a>
											</li>
										</ul>
									</div>

									<p>{founder.quote}</p>
								</div>
								<div className="cardImage">
									<img
										src={founder.img}
										className="cardImg2"
									></img>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
