import React from "react";

const navigation = ["about", "contact"];

const Navbar = () => {
  return (
    <ul>
      {navigation.map((url) => {
        const urlToUpperCase = url.charAt(0).toUpperCase() + url.slice(1);
        return (
          <li key={url}>
            <a href={url}>{urlToUpperCase}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
