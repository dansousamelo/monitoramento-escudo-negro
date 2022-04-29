import { Container } from './styles';

export interface DangerEscudoNegroProps {
  danger: boolean;
  handleDanger(): void;
}

export function DangerEscudoNegro({ danger, handleDanger }: DangerEscudoNegroProps) {
  return (
    <Container onClick={handleDanger}>
      {danger ? <h3>Cuidado Escudo Negro!</h3> : <h3 style={{ color: 'black'}}>Protegerei todos!</h3>}
    </Container>
  );
}