import React from "react";

import { Container } from "./styles";

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={this.props.onToggleTheme}>
          {this.props.selectedTheme === "dark" ? "🌞" : "🌙"}
        </button>
      </Container>
    );
  }
}

// export default function Header({ onToggleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button type="button" onClick={onToggleTheme}>
//         {selectedTheme === "dark" ? "🌞" : "🌙"}
//       </button>
//     </Container>
//   );
// }
