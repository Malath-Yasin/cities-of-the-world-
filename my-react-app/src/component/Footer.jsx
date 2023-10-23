import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white absolute bottom-0 w-full">
      <div className="flex flex-wrap justify-center items-end h-24 pb-40 pt-10">
        <div className="social-media m-10">
          <a href="https://web.facebook.com/" className="text-white">
            Facebook
          </a>
          <a href="https://www.instagram.com/" className="text-white">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/malath-yasin-611882263/" className="text-white">
            LinkedIn
          </a>
        </div>
        <div className="contact-info m-10">
          <div>email: cities@gmail.com</div>
          <div>phone: +9624566545</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
