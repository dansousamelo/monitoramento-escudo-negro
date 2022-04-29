import { useMemo } from 'react';
import { CityInfo } from "../CityInfo";
import { DangerEscudoNegro } from '../DangerEscudoNegro';
import { Container } from './styles';


interface SearchResultsProps {
  results: Array<{
    city: string;
    population: string;
  }>
}

// Search Results não é muito grande
export function SearchResults({ results }: SearchResultsProps) {
  const totalPeople = useMemo(() => {
    return results.reduce((total, city) => {
      return total + Number(city.population)
    }, 0)
  }, [results])

  // Usar essa primeiro
  // const total = results.reduce((total, city) => {
  //   return total + Number(city.population)
  // }, 0);

  return (
    <Container> 
      <h2>{totalPeople} vidas</h2>
      {results.map(city => {
        return(
          <CityInfo key={city.city} cityInfo={city}/>
        )
      })}
    </Container>
  );
}