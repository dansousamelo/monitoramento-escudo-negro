import { Container, Wrapper } from './styles';
import { GiPunchBlast } from 'react-icons/gi';
import { memo, useCallback, useState } from 'react';
import { DangerEscudoNegro } from '../DangerEscudoNegro';


interface CityProps {
  cityInfo: {
    city: string;
    population: string;
  }
}

export function CityInfoComponent({ cityInfo }: CityProps){
  const [danger, setDanger] = useState(false);

  // Fazer primeiro esse
  // function handleDanger(){
  //   setDanger(!danger);
  // }

  const handleDanger = useCallback(()=>{
    setDanger(!danger);
  }, [danger])
  return (
    <Container danger={danger}>
      <Wrapper danger={danger}>
        <h2>{cityInfo.city}</h2>
        <p>{cityInfo.population} habitantes</p>
        {/* Fazer depois */}
        <DangerEscudoNegro danger={danger} handleDanger={handleDanger}/>
      </Wrapper>
      
      <GiPunchBlast style={{ cursor: 'pointer' }} size={56} color={danger ? '#FCFCFC' : '1B1B1B'} onClick={handleDanger}/>
      
    </Container>
  )
}

export const CityInfo = memo(CityInfoComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.cityInfo, nextProps.cityInfo);
})