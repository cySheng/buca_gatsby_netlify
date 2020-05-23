import { withPrefix, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import Buca from "../images/buca_logo.svg"

const [open, setOpen] = useState(false);

const Header = ({ siteTitle }) => (
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
      <div class="dropdown hidden-landscape">
        <button class="dropbtn">
          ▼
        </button>
        <div class="dropdown-content" id="myDropdown">
          <Link className="navigation-link" to="/features">Features</Link>
          <Link className="navigation-link" to="/pricing">Pricing</Link>
          <Link className="navigation-link" to="/about">About</Link>
        </div>
      </div>
      {/* <a href= */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScrJMD2s14lrdJ_uvSRMe-jB_U3oxkcvXTJzRd_6RLACTCxTQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="get-started">Get started</a>
    </section>
  </header>
)

function myFunction() {
  console.log('hi')
  document.getElementById("myDropdown").classList.toggle("show");
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
