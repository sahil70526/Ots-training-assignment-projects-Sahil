import React from "react";
import { Menu } from "semantic-ui-react";

const items = [
  { key: "home", name: "Home" },
  { key: "services", name: "Services" },
  { key: "contact-us", name: "Contact Us" },
  { key: "trainees", name: "Trainees" },
];

const MenuBar = () => <Menu items={items} />;

export default MenuBar;
