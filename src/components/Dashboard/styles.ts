import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-weight: 400;
    padding: 1rem;
  }
  select {
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    width: 13rem;
    height: 4rem;

    option {
      min-height: 20px;
      padding: 2rem;
    }
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const SearchButton = styled.input`
  margin-top: 2rem;
  width: 10rem;
  height: 2rem;
  padding: 1rem;
  border-radius: 10px;
  margin-right: 1rem;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;
