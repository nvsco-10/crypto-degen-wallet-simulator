import styled from "styled-components";

export const PortfolioItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 0.75em 0;
  border-bottom: solid 1px var(--border-dark);

    .img-container {
      height: 45px;
      width: 45px;
    }

    .title, .quantity {
      font-size: var(--text-medium);
    }
`

export const MarketInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  .title {
    margin-bottom: 0.15em;
  }

  .price-container {
    display: flex;
    gap: 1rem;
    font-size: var(--text-xsmall);

    .price {
      color: var(--light-grey);
    }

    .change {
      color: var(--dark-green);
    }
  } 
`

export const MarketValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .value {
    color: var(--light-grey);
  }
`