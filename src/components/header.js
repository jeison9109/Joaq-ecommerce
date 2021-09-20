import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import logo1 from "../images/logo1.jpeg"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src={logo1} alt="logo" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>

        <MenuItem margin>
          <a href="http://www.platzi.com">Joaq</a>
        </MenuItem>

        <MenuItem>
          <Link to="/cart">
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cartlog" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
