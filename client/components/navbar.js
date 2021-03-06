import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}

          {/* <Link to="/homepage">Home Page</Link> */}
          <Link to="/fairchanceact">The Fair Chance Act</Link>
          <Link to="/article23a">Article 23-A</Link>
          <Link to="/employerchecklist">Post-Interview</Link>
          <Link to="/nextsteps">Legal Resources</Link>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/homepage">Home Page</Link> */}
          <Link to="/fairchanceact">The Fair Chance Act</Link>
          <Link to="/article23a">Article 23-A</Link>
          <Link to="/nextsteps">What You Can Do</Link>
          <Link to="/employerchecklist">Employer Checklist</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>

    <div className="navHead">
      <Link to="/homepage">
        <h1 className="heading">EMPLOWER</h1>

        <h3 className="subtext">Empowered & Employed</h3>
      </Link>
    </div>

    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
