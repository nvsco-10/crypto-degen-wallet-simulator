import styled from "styled-components"

export const PortfolioItemValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const Quantity = styled.p`
  .symbol {
    margin-left: 0.25rem;
    text-transform: uppercase;
  }
`

export const Value = styled.p`
  font-size: var(--text-xsmall);
  color: var(--light-grey);
`