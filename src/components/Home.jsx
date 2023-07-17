import React from 'react'
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechyStark</h1>
          <p>Solution to all your</p>
        </main>

      </div>

      <div className="home2">

        <img src={vg} alt='Graphics' />

        <div>
          <p>
            We are your one and only solution to the tech problems
            you face every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>

      </div>

      <div className="home3" id='about'>

        <div>
          <h1>Who we are?</h1>
          <p>Since our inception, we have been at the forefront of technological advancements, constantly adapting to the evolving landscape of the digital age. Our expertise spans across various domains, including software development,
            artificial intelligence, cloud computing, cybersecurity, and more.
            We stay up-to-date with the latest industry trends and leverage our deep understanding of emerging technologies to create innovative solutions that address the unique challenges faced by our clients.
          </p>
        </div>
      </div>


      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            
            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            
            <div style={{
              animationDelay: "0.7s"
            }}> 
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
           
            <div style={{
              animationDelay: "1s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>


          </article>
        </div>
      </div>





    </>
  );

}

export default Home