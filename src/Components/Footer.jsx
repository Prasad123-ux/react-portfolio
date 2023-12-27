import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={""}
          alt="Founder"
        />

        <h2>Prasad Metkar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.facebook.com/prasad.metkar.925/" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/prasad.metkar.925/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Prasad123-ux" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/prasad-metkar/" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>    
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;