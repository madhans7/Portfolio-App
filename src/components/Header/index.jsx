import { Component } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp, IoMenu } from "react-icons/io5";
import "./index.css";

class Header extends Component {
  state = {
    showMenu: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  render() {
    const { showMenu } = this.state;

    return (
      <div>
        <nav className="navbarContainer">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="profile">
              <IoPersonCircleSharp size={30} />
              <p>Madhan S</p>
            </div>
          </Link>
          <button
            type="button"
            className="menuIcon"
            onClick={this.toggleMenu}
          >
            <IoMenu size={30} />
          </button>

          <ul className="navLinks1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certification">Certification</Link></li>
          </ul>
        </nav>

        {showMenu && (
            <ul className="navLinks">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certification">Certification</Link></li>
            </ul>
        )}
      </div>
    );
  }
}

export default Header;