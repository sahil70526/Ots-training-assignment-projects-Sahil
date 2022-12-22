import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'


const MenuBar = () => {
  return (
    <>
      <Menu>
        <Menu.Item
          name='Home'
          as={Link}
          to='home'
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="Services"
          as={Link}
          to='services'

        >
          Services
        </Menu.Item>

        <Menu.Item
          name="Contact Us"
          as={Link}
          to='contact-us'

        >
          Contact Us
        </Menu.Item>

        <Menu.Item
          name="Trainees"
          as={Link}
          to='trainees'

        >
          Trainees
        </Menu.Item>
      </Menu>
    </>
  )
};

export default MenuBar;
