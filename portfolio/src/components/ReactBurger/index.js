import  React from 'react'
import { slide as Menu } from 'react-burger-menu'



const ReactBurger = () => {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }

  
export default ReactBurger

  
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    