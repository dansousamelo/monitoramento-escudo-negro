import styled, { css } from 'styled-components';

interface ContainerProps {
  danger: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fcfcfc;
  margin-top: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 2rem;

  ${(props) =>
    props.danger &&
    css`
      background-color: #FC0000;
      color: #FCFCFC;
    `}
`;

export const Wrapper = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  
  h2 { 
    color: #1B1B1B;
    margin-bottom: 0.5rem;
    font-weight: 700;
    ${(props) =>
    props.danger &&
    css`
      color: #FCFCFC;
    `}
  }

  P {
    ${(props) => props.danger ? (css`color: #FCFCFC`): 
      css` color: #1B1B1B`}
  }

`;

/* height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer= */