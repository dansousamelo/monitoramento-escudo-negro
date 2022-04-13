import styled from 'styled-components';
import EscudoNegro from '../../public/assets/escudoNegro.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;

    img {
      flex: 1;
      background-size: cover;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 3.5rem 5.5rem;

  form {
    display: flex;
  }

  h1 {
    font-size: 6rem;
    font-family: 'Poiret One', cursive;
    text-align: center;
    margin-bottom: 2rem;
  }

  input {
    padding: 2rem;
    border-radius: 0.5rem;
    height: 8rem;
    width: 100%;
    font-size: 2rem;
    margin-right: 2rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    height: 8rem;
    width: 16%;
    font-size: 1.5rem;
    background: #094C3B;
    border: 0;
    color: #fcfcfc;
    font-weight: 700;

    :hover {
      background: #356B5D;
    }

  }
`;

export const Separator = styled.div`
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
  p {
    padding: 0 0.5rem;
    color: #A1A1A1;
  }
`;

export const Line = styled.div`
  background-color: #A1A1A1;
  height: 1px;
  width: 100%
`;