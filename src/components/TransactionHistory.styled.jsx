
import styled from "@emotion/styled";

export const Table = styled.table`


  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  border: 3px solid ${props => props.theme.colors.secondaryText};
  /* margin: 0 auto; */


`

export const Thead = styled.thead`
  background: ${props => props.theme.colors.adelyn};
  color: white;
  text-shadow: 1px 1px 1px black;
  height: 40px;
  text-transform: uppercase;
  border: 1px solid ${props => props.theme.colors.secondaryText};
`

export const Td = styled.td`
    
`