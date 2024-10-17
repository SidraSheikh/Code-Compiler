import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "./Navbar1";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homecss.css";

const languages = [
  {
    name: "HTML",
    logo: "https://razvanusc.github.io/profile/images/html.gif",
    description: "An essential markup language for creating the structure of web pages."
  },
  {
    name: "CSS",
    logo: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnh4OW90cGF2MXU2b2s4YTlpbndqejJ6em1yNnJwNG5xNjJ1OWF6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/fsEaZldNC8A1PJ3mwp/giphy.gif",
    description: "A styling language used to enhance the presentation of web pages."
  },
  {
    name: "JavaScript",
    logo: "https://user-images.githubusercontent.com/75436573/154819414-fdc4635b-0068-4117-9b17-97e6a27b6163.gif",
    description: "A versatile programming language used for interactive web development."
  },
  {
    name: "Python",
    logo: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW1yZHNqcThzb2xpNnJhdGQybWNrZnFrcm5zcWN1bW9vdzkyd2c0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KAq5w47R9rmTuvWOWa/giphy.gif",
    description: "A high-level, interpreted language known for its simplicity and versatility."
  },
  {
    name: "C",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png",
    description: "A foundational language for system programming and developing operating systems."
  },
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    description: "An extension of C with added features for object-oriented programming."
  },
  {
    name: "React",
    logo: "https://assets-v2.lottiefiles.com/a/b3202668-1151-11ee-939e-cf25d6aad422/yThIWit8xm.gif",
    description: "A JavaScript library for building user interfaces, often used in single-page applications."
  }
];

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/auth");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Say goodbye</h1>
            <h2 className="sub-heading">to boredom and hello to coding fun!</h2>
            <p className="hero-description">
              Welcome to our online coding editor where creativity knows no bounds.
            </p>
            <p className="lead">Start your coding journey today and unlock a world of possibilities.</p>
          </div>
        </div>
      </div>

      <div className="language-intro-container container py-5">
        <h2 className="section-heading">Languages Supported</h2>
        <Slider {...sliderSettings}>
          {languages.map((language, index) => (
            <LanguageCard key={index} language={language} />
          ))}
        </Slider>
      </div>

      <div className="cta-container text-center py-5">
        <h2 className="cta-heading">Ready to Get Started?</h2>
        <button onClick={handleSignUpClick} className="btn btn-primary btn-lg">
          Sign Up Now
        </button>
      </div>

      <Footer />
    </div>
  );
};

const LanguageCard = ({ language }) => {
  const { name, logo, description } = language;

  return (
    <div className="language-card">
      <img src={logo} alt={`${name} Logo`} className="img-fluid mb-3" />
      <h2 className="mb-3">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Homepage;