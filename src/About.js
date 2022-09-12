import React from "react";
import "./About.css"

function About(){
    return(
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>This is us Star Light University</h3>
					<p><em>“Your time is limited, so don't waste it living someone else's life.”– Steve Jobs</em></p>
                    <p>We work hard to make sure that we give the best to Our Students even after graduating for it is our duty to see you prosper.</p>
					<div class="button">
						<a href=" ">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=" "><i class="fab fa-facebook-f"></i></a>
					<a href=" "><i class="fab fa-twitter"></i></a>
					<a href=" "><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
			</div>
		</div>
	</div>
    )
}

export default About;