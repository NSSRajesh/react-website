function Footer(){
    return(
        <div>
            <section className="footer-sec">
		    <div className="footer-container">
			    <div className="footer-row">
				    <div className="footer-col">
					    <h2>GP<span>.</span></h2>
						<p className="footer-para1">A108 Adam Street</p>
						<p className="footer-para2">NY 535022,USA</p>
						<div>
							<p className="footer-para3">Phone:+1558955488855</p>
							<p className="footer-para4">info@example.com</p>
						</div>
						<div className="footer-icon">
						    <i className="bi bi-twitter"></i>
							<i className="bi bi-facebook"></i>
							<i className="bi bi-instagram"></i>
							<i className="bi bi-skype"></i>
							<i className="bi bi-linkedin"></i>
						</div>
					</div>
					<div className="footer-col">
					    <h3 className="foot-head">Useful Links</h3>
						<ul>
							<li><i className="bi bi-chevron-right"></i>Home</li>
							<li><i className="bi bi-chevron-right"></i>About Us</li>
							<li><i className="bi bi-chevron-right"></i>Services</li>
							<li><i className="bi bi-chevron-right"></i>Terms of service</li>
							<li><i className="bi bi-chevron-right"></i>Privacy policy</li>
						</ul>
					</div>
					<div className="footer-col">
					    <h3 className="footer-head">Our Services</h3>
						<ul>
							<li><i className="bi bi-chevron-right"></i>Web Design</li>
							<li><i className="bi bi-chevron-right"></i>Web Development</li>
							<li><i className="bi bi-chevron-right"></i>Product Management</li>
							<li><i className="bi bi-chevron-right"></i>Marketing</li>
							<li><i className="bi bi-chevron-right"></i>Graphic Design</li>
						</ul>
					</div>
					<div className="footer-col">
					    <h3 className="footer-head">Our Newsletter</h3>
						<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
						<div className="footer-input">
						    <input type="email" />
						    <input type="submit" value="Subscribe" />
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Footer;