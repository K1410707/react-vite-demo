import "./header.scss";

function Header(props) {
  return (
    <header>
      <h1>Basic react demo</h1>
      <p className="welcome">Welcome {props.loggedInUser}</p>
    </header>
  );
}

export default Header;
