import { Container, Button } from "./styles";

interface PaginateProps {
  totalMedication: number;
  ItemsPerPage: number;
  paginate: (number: number) => void;
}

export function Paginate({
  ItemsPerPage,
  totalMedication,
  paginate,
}: PaginateProps) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalMedication / ItemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Container>
      <ul>
        {pages.map((number) => (
          <li key={number}>
            <Button onClick={() => paginate(number)} href="!#">
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
