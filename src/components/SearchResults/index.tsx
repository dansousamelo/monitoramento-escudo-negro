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
  return (
    <Container> 
      {results.map(city => {
        return(
          <CityInfo key={city.city} cityInfo={city}/>
        )
      })}
    </Container>
  );
}