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

    .name, .quantity {
      font-size: var(--text-medium);
    }
`