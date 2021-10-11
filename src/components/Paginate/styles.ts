import styled from "styled-components";

export const Container = styled.nav`
  margin-top: 1rem;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      margin: 0.5rem;
    }
  }
`;

export const Button = styled.a`
  background: #d2d2d2;
  border-radius: 10px;
  padding: 1rem;
  text-decoration: none;
  color: var(--blue-light);
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
