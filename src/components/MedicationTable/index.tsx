import { useMemo, useState } from "react";
import { Paginate } from "../Paginate";
import { Container } from "./styles";

interface Medication {
  _id: string;
  category: string;
  name: string;
  dose: string;
  description: string;
  cost: number;
}

interface NewMedicationProps {
  medications: Medication[];
  search: string;
  category: string;
}

export function MedicationTable({
  medications,
  search,
  category,
}: NewMedicationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage] = useState(10);
  const indexOfLastMeds = currentPage * ItemsPerPage;
  const indexOfFirstMeds = indexOfLastMeds - ItemsPerPage;
  const paginateMeds = medications.slice(indexOfFirstMeds, indexOfLastMeds);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const data = useMemo(() => {
    if (search === "" && category === "") {
      return paginateMeds;
    }
    if (category !== "") {
      return medications.filter((medication) =>
        medication.category
          .toLocaleLowerCase()
          .includes(category.toLocaleLowerCase())
      );
    } else {
      return medications.filter((medication) =>
        medication.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  }, [medications, search, category, paginateMeds]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Dose</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((medication) => (
            <tr key={medication._id}>
              <td>{medication.category.toLocaleLowerCase()}</td>
              <td>{medication.name} </td>
              <td>{medication.dose}</td>
              <td>{medication.description}</td>
              <td>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(medication.cost)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate
        ItemsPerPage={ItemsPerPage}
        totalMedication={medications.length}
        paginate={paginate}
      />
    </Container>
  );
}
