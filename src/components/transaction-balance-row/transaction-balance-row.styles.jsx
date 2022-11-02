import styled from "styled-components"

export const TransactionBalanceRowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  text-transform: uppercase;
  text-align: right;

  div { 
    border-radius: 3px;
    padding: 0.35em;
  }

  span {
    background-color: var(--background-dark400);
    margin-left: 0.5rem;
    padding: 0.35em;
  }
`