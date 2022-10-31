import styled from "styled-components"

import { Link } from "react-router-dom"

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: var(--text-xsmall);
    text-transform: uppercase;
  }
`

export const IconButton = styled(Link)`
  background-color: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  margin-bottom: .75rem;
  border-radius: 8%;

  color: var(--font-white);
  font-size: 2.5rem;
  
`