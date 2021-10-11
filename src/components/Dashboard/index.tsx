import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { MedicationTable } from '../MedicationTable';
import { Container, SearchButton } from './styles';

interface Medication {
  _id: string;
  category: string;
  name: string;
  dose: string;
  description: string;
  cost: number;
}
export function Dashboard() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [search, setSearch] = useState('');

  const [category, setCategory] = useState('');

  useEffect(() => {
    api.get('medications').then((response) => setMedications(response.data));
  }, []);

  const arrayCategory = [
    ...new Map(
      medications.map((item) => [
        item.category,
        item.category.toLocaleLowerCase(),
      ])
    ).values(),
    '',
  ];

  return (
    <Container>
      <div>
        <SearchButton
          type='text'
          name='search'
          value={search}
          placeholder='Search by name'
          onChange={(event) => setSearch(event.target.value)}
        ></SearchButton>
        <SearchButton
          type='text'
          name='serach'
          value={category}
          placeholder='Search by category'
          onChange={(event) => setCategory(event.target.value)}
        ></SearchButton>
        <label>Category Select</label>
        <select onChange={(event) => setCategory(event.target.value)}>
          {arrayCategory.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>

      <MedicationTable
        medications={medications}
        search={search}
        category={category}
      />
    </Container>
  );
}
