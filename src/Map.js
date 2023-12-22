function Map(){
    return(
        <div>
            <section  id="contect" class="map-sec">
                <div class="map-container">
                    <h5>CONTACT</h5>
                    <h3>Contact Us</h3>
                    <div class="map-row1">
                        {/* <div class="map-col">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.85199490873!2d76.67185632021821!3d11.014163253437022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1690264659804!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}
                    </div>
                    <div class="map-row2">
                        <div class="map-col1">
                            <div class="map-body1">
                                <div class="inner-body">
                                    <div class="map-icon">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <div class="map-para">
                                        <h3>Location:</h3>
                                        <p>A108 Adam Street, New York,NY 535022</p>
                                    </div>
                                </div>
                                <div class="inner-body">
                                    <div class="map-icon">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <div class="map-para">
                                        <h3>Email:</h3>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                                <div class="inner-body">
                                    <div class="map-icon">
                                        <i class="bi bi-phone"></i>
                                    </div>
                                    <div class="map-para">
                                        <h3>Call:</h3>
                                        <p>+1 5589 55488 55s</p>
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div class="map-col2">
                            <div class="map-body2">
                                    <div class="col2-inner">
                                        <input type="text" name="Your Name" placeholder="Your Name" />
                                        <input type="email" name="Your Email" placeholder="Your Email" />
                                    </div>
                                <div class="col2-inner1">
                                    <input type="text" name="Subject"placeholder="Subject" />
                                </div>
                                <div class="col2-inner2">
                                    <textarea row="10" col="50" placeholder="Message"></textarea>
                                </div>
                                <div class="map-btn">
                                    <a href="#">Send Message</a> 
                                </div>
                            </div>						
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Map;