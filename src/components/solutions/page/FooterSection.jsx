import  { useState } from "react";
import "../../styles/FooterSection.css";

const FooterSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSignUpClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseClick = () => {
    setIsFormVisible(false);
  };

  return (
    <footer className={`footer-section ${isFormVisible ? "form-visible" : ""}`}>
      <div className="signup-section">
        <h1>
          Lets burst some <br /> damn bubbles.
        </h1>
        <p>
          Were growing a gang of people who care enough to help our
          interventions spread like an unseasonal forest fire. Sign up to get
          them as they drop and help wake up the world.
        </p>
        <button onClick={handleSignUpClick}>Sign up now →</button>
      </div>
      <div className="form-section">
        <button className="close-button" onClick={handleCloseClick}>
          CLOSE 
        </button>
        <div className="form-text">
          <h2>
            Rousers activism
            <br /> makes people <br /> think.
          </h2>
          <p>
            Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
            to grab peoples attention and make them stop and think. Rouser does
            this to wake as many people as possible to the burning need for
            action on climate change and eco⁠-⁠collapse.
          </p>
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="First Name" />
        <button className="submit">Submit</button>
      </div>
    </footer>
  );
};

export default FooterSection;
