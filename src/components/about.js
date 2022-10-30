const about=()=>{
    return(     
    <section className="about" id="about">

        <h1 class="heading">About Me</h1>

        <div class="content">
            <h3 class="name">My name is <span>Belinda Malfa Basya</span></h3>
            <p>You can call me ibel, I was born in Bekasi on December 10, 2002. I am the eldest of two children. Currently, I am studying at the University of Indonesia Education majoring in Computer Science Education.</p>
            <p>I am an enthusiastic and highly motivated person with leadership skills, initiative and looking for new challenges. I also have experience in various internal campus organizations.</p>
        </div>

        <div class="skills">
            <div class="progress">
                <h3>Comunication <span>80%</span></h3>
                <div class="bar"><span></span></div>
            </div>
            <div class="progress">
                <h3>Time Work <span>85%</span></h3>
                <div class="bar"><span></span></div>
            </div>
            <div class="progress">
                <h3>Adaptation <span>65%</span></h3>
                <div class="bar"><span></span></div>
            </div>
            <div class="progress">
                <h3>Organization <span>70%</span></h3>
                <div class="bar"><span></span></div>
            </div>
        </div>

    </section>
 );
}

export default about;