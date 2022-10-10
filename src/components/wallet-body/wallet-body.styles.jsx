import styled from "styled-components";

export const WalletBodyContainer = styled.div`
  background-color: var(--background-dark400);
  height: calc(100vh - 20rem);
  padding: 0.5em 0.75em;

  .portfolio-item {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: 0.75em 0;
    border-bottom: solid 1px var(--border-dark);

    .section {
      display: flex;
      align-items: center;
    }

    .img-container {
      height: 45px;
      width: 45px;
    }

    .stats-container {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
    }

    .price-container {
      display: flex;
      gap: 1rem;
      font-size: var(--text-xsmall);
    }

    .price {
      color: var(--light-grey);
    }

    .change {
      color: var(--dark-green);
    }

    .title {
      margin-bottom: 0.15em;
    }

    .title, .quantity {
      font-size: var(--text-medium);
    }
  }
`