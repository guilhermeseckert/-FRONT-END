import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  width: 80vw;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: bold;
      font-size: 1.2rem;
      padding: 1rem 2rem;
      text-align: left;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-title);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`;
