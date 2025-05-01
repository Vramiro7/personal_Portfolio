import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <p>
        © {new Date().getFullYear()} Valentino Ramiro. All rights reserved.
      </p>
      <p>
        Made with ❤️ using React.js
      </p>
    </footer>
  );
}

export default Footer;