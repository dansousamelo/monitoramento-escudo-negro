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
  const people = useMemo(() => {
    return results.reduce((total, city)=>{
        return total + Number(city.population);
      }, 0)
  }, [results])

  return (
    <Container>
      <h2>{people} vida(s) que serão protegidas </h2>
      {results.map(city => {
        return(
          <CityInfo key={city.city} cityInfo={city}/>
        )
      })}
    </Container>
  );
}