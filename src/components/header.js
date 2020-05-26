import { withPrefix, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import Buca from "../images/buca_logo.svg"

// const [open, setOpen] = useState(false);

// const Header = ({ siteTitle }) => (
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropdown: false };
  }

  toggleDropdown() {
    // console.log('tests')
    this.setState(prevState => ({
      dropdown: !prevState.dropdown
    }));
  }

  render (){
    return (
      <header>
        <Helmet>
          <script src={withPrefix('script.js')} type="text/javascript" />
        </Helmet>
        <section class="left">
          <Link to="/">
            <img src={Buca} alt="Logo of BUCA App"/>
          </Link>
          <Link className="navigation-link" to="/features">Features</Link>
          <Link className="navigation-link" to="/pricing">Pricing</Link>
          <Link className="navigation-link" to="/about">About</Link>
        </section>

        <section class="right">
          {/* <Menu right className="hidden-landscape" width={ 200 } isOpen={ false }>
            <Link className="navigation-link menu-item" to="/features">Features</Link>
            <Link className="navigation-link menu-item" to="/pricing">Pricing</Link>
            <Link className="navigation-link menu-item" to="/about">About</Link>
          </Menu> */}
          <div class="dropdown hidden-landscape">
            <button class="dropbtn" onClick={() => this.toggleDropdown()}>
              ▼
            </button>
            <div id="myDropdown" className={this.state.dropdown ? 'dropdown-content show' : 'dropdown-content' }>
              <Link className="navigation-link" to="/features">Features</Link>
              <Link className="navigation-link" to="/pricing">Pricing</Link>
              <Link className="navigation-link" to="/about">About</Link>
            </div>

          </div>
          {/* <a href= */}
          <a href="https://forms.gle/NHbVCBFLMxjFxg657" target="_blank" rel="noreferrer" class="get-started">Get started</a>
        </section>
      </header>
    );
  }
}

// function myFunction() {
//   console.log('hi')
//   document.getElementById("myDropdown").classList.toggle("show");
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
