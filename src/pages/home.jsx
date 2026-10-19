import "../styles/home.css";
import "../styles/poster.css";
import "../styles/about-preview.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Down from "/down-arrow.png";
import Headshot from "/headshot.png";

export default function Home() {
  const aboutSummary = `I'm a Fractional CFO, Controller, and Strategic Finance Consultant with more than 25 years of experience helping organizations improve financial performance, strengthen operations, and navigate growth. Throughout my career, I've partnered with companies across manufacturing, pharmaceuticals, biologics, gaming, and metals, leading everything from ERP implementations and financial transformations to operational turnarounds and multimillion-dollar cost-saving initiatives. My approach combines strategic financial leadership with practical, hands-on problem solving to help businesses make better decisions, improve profitability, and build sustainable success. Learn more about my background, experience, and the results I've delivered by visiting the About page.`;

  return (
    <section>
      <Navbar />
      <div className="poster-container">
        <div className="poster-statements">
          <h1>Providing executive-level financial leadership</h1>
          <h2>without the full-time overhead.</h2>
        </div>
        <a className="poster-arrow" href="#about">
          <img src={Down} />
        </a>
      </div>
      <div className="about preview" id="about">
        <div className="about content">
          <div className="headshot">
            <img src={Headshot} alt="None" />
          </div>
          <div className="about-text">
            <h1>Hello, I'm Tim Wendel.</h1>
            <p>{aboutSummary}</p>
          </div>
        </div>
        <div className="button-container">
          <Link className="about-button">
            <p>About Me &gt;</p>
          </Link>
        </div>
      </div>
      <div className="services preview">
        <div className="services-content">
          <div className="services-text">
            <h1>
              Helping Businesses Improve Performance Through Strategic Financial
              Leadership
            </h1>
          </div>
        </div>
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
