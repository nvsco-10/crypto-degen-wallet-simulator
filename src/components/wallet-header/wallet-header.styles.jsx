import styled from "styled-components";

export const WalletHeaderContainer = styled.div`
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

    .btn-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icon-btn {
      margin-bottom: .75rem;
      width: 55px;
      background-color: var(--dark-blue);
      border-radius: 8%;
    }

    .icon {
      font-size: 2.7rem;
    }

    p {
      font-size: var(--text-xsmall);
    }
  }

`