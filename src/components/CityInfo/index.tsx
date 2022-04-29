import { Container, Wrapper } from './styles';
import { GiPunchBlast } from 'react-icons/gi';
import { DangerEscudoNegro } from '../DangerEscudoNegro';
import { memo, useCallback, useState } from 'react';

interface CityProps {
  cityInfo: {
    city: string;
    population: string;
  }
}

export function CityInfoComponent({ cityInfo }: CityProps){
  const [danger, setDanger] = useState(false);

  function handleDanger(){
    setDanger(!danger);
  }

  return (
    <Container danger={danger}>
      <Wrapper danger={danger}>
        <h2>{cityInfo.city}</h2>
        <p>{cityInfo.population} habitantes</p>
        <DangerEscudoNegro danger={danger} handleDanger={handleDanger}/>
      </Wrapper>
      
      <GiPunchBlast style={{ cursor: 'pointer' }} size={56} color={danger ? '#FCFCFC' : '1B1B1B'} onClick={handleDanger}/>
      
    </Container>
  )
}

export const CityInfo = memo(CityInfoComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.cityInfo, nextProps.cityInfo);
})
