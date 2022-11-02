import styled from "styled-components";

export const TransactionContainer = styled.div`
  padding: 0.75em;
  background-color: var(--background-dark500);
  height: calc(100vh - 3rem);

  .heading {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .icon {
    font-size: 1.5rem;
  }
`
