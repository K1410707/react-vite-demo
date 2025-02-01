import PropTypes from "prop-types";
import "./header.scss";

function Header(props) {
  return (
    <header>
      <h1>Basic react demo</h1>
      <p className="welcome">Welcome {props.loggedInUser}</p>
    </header>
  );
}

Header.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
}

export default Header;
