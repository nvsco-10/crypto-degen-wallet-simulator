import styled from "styled-components";

import { Link } from "react-router-dom"

export const PortfolioOverviewContainer = styled.div`
  height: 20rem;
  padding: 0.75em;
  background-color: var(--background-dark500);
  /* border: solid 1px white; */

  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`

export const SettingsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

  .icon {
    font-size: 1.5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 2rem 0;
`