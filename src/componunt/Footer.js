import React, { Component } from "react";
import "./Loader.css";
import { Link } from "react-router-dom";

export class Footer extends Component {
  state = {
    darkMode: false,
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <>
        <section className="footer">
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="footer-col-1">
                  <h3>Download Our App</h3>
                  <p>Download apk for Android and ISO mobile phone for FREE.</p>
                  <div className="app-logo">
                    <a href="https://play.google.com/" target="_blank">
                      <img
                        src="https://i.ibb.co/KbPTYYQ/play-store.png"
                        alt="play-stor"
                      />
                    </a>
                    <a
                      href="https://www.apple.com/in/app-store/"
                      target="_blank"
                    >
                      <img
                        src="https://i.ibb.co/hVM4X2p/app-store.png"
                        alt="app-store"
                      />
                    </a>
                  </div>
                </div>
                <div className="footer-col-2">
                  <a href="/">
                    <img
                      src={
                        !darkMode
                          ? "https://i.ibb.co/qMjXk9P/logo-white.png"
                          : "https://i.ibb.co/KqWgqbK/logo-black.png"
                      }
                      alt="logo-white"
                    />
                  </a>
                  <p>
                    "Your One-Stop News Destination! NewsBus brings together the
                    latest updates from leading news sources, ranging from
                    top-notch TV channels to esteemed newspapers like Hindustan
                    Times. Immerse yourself in a seamless experience where
                    diverse news categories and a voice feature converge, making
                    us your ultimate news companion. Stay informed with NewsBus,
                    where every headline finds its home."
                  </p>
                </div>
                <div className="footer-col-3">
                  <h3>Useful Links</h3>
                  <ul>
                    <ul>
                      <li>
                        <Link to="/">Coupens</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Post</Link>
                      </li>
                      <li>
                        <Link to="/componunt/AboutUs">About Us</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="footer-col-3">
                  <h3>Follow Us</h3>
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/j_a_y_e_s_h___patil07/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100040313543868"
                        target="_blank"
                      >
                        Facebook{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@pjgaming8135"
                        target="_blank"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <p className="copyright">Copyright & copy; 2023 -News Buss</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
