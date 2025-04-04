import React from 'react'
import PropTypes from "prop-types";

export default function Header(props){
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  title: "Gabriel's Blog",
  subtitle: "Subtítulo padrão",
}