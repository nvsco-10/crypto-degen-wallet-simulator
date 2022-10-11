import styled from "styled-components";

import { Link } from "react-router-dom"

export const PortfolioOverviewContainer = styled.div`
  height: 20rem;
  padding: 0.75em;
  /* border: solid 1px white; */

  display: flex;
  flex-direction: column;
  align-items: center;

  .settings-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;

    .icon {
      font-size: 2rem;
    }
  }

  .total-balance-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .total-balance {
      font-size: 2.4rem;
    }
  }

  .btns-container {
    display: flex;
    gap: 2.5rem;
    margin: 2rem 0;

  }

`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: var(--text-xsmall);
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