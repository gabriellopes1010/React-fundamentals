import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={props.onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Gabriel's Blog",
  subtitle: "O melhor blog do mundo",
};
