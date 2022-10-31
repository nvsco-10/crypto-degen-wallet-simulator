import styled from "styled-components";

export const TransactionSelectCoinContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding-bottom: 0.35em;
  }
`

export const CoinInfoContainer = styled.div`
  display: flex;
  padding: 0.75em 0;
  justify-content: space-between;
  align-items: center;
`

export const CoinName = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
`

export const CurrentPrice = styled.div`
  .price {
    margin-left: 0.5rem;
  }
`