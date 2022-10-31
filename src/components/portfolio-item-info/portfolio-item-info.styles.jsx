import styled from "styled-components";

export const PortfolioItemInfoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  .name {
    margin-bottom: 0.15em;
  }

  .price-container {
    display: flex;
    gap: 1rem;
    font-size: var(--text-xsmall);

    .price {
      color: var(--light-grey);
    }

    .positive {
      color: var(--dark-green);
    }

    .negative {
      color: var(--red);
    }
  } 
`