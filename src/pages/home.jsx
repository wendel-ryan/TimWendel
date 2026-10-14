import "../styles/home.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Down from "/down-arrow.png";
import Headshot from "/headshot.png";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="poster-container">
        <div className="poster-statements">
          <h1>Providing executive-level financial leadership</h1>
          <h2>without the full-time overhead.</h2>
        </div>
        <Link className="poster-arrow">
          <img src={Down} />
        </Link>
      </div>
      <div className="about preview">
        <div className="about-content">
          <div className="headshot">
            <img src={Headshot} alt="None" />
          </div>
          <div className="about-text">
            <h2>
              Hello, I'm <h2 className="Tim">Tim Wendel</h2>.
            </h2>
          </div>
        </div>
      </div>
      <div className="services preview">
        <h1>Services</h1>
      </div>
      <div className="experience preview">
        <h1>Experience</h1>
      </div>
      <Footer />
    </section>
  );
}

//rgb(57,231,95)
//
