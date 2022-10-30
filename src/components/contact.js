const contact=()=>{
    return(     
        <section className="contact" id="contact">

        <h1 class="heading">Contact Me</h1>

        <div class="row">

            <form action="">
                <input type="text" class="box" placeholder="first name"/>
                <input type="text" class="box" placeholder="last name"/>
                <input type="email" class="box" placeholder="your email"/>
                <input type="text" class="box" placeholder="your subject"/>
                <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="Message"></textarea>
                <input type="submit" value="Message" class="btn"/>
            </form>

            <div class="content">
                <div class="icons">
                    <h3><i class="fas fa-map-marker-alt"></i> address </h3>
                    <p>Bandung, Indonesia, 40154</p>
                </div>
                <div class="icons">
                    <h3><i class="fas fa-envelope"></i> email </h3>
                    <p>belindamalfaa@upi.edu</p>
                </div>
                <div class="icons">
                    <h3><i class="fas fa-phone"></i> phone </h3>
                    <p>+62 878-8797-3256</p>
                </div>
            </div>

        </div>

    </section>

 );
}

export default contact;