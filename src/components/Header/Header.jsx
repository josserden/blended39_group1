import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;

export const Header = () => {
  return (
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
    </header>
  );
};
