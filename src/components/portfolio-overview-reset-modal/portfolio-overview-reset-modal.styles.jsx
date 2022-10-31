import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #2725259e;
  display: grid;
  place-items: center;
  visibility: ${props => props.isModalOpen ? 'visible' : 'hidden'};
  z-index: ${props => props.isModalOpen  ? 10 : -10};

  .modal-container {
  background: rgb(45, 46, 51);
  padding: 0.25em .75em .75em .75em;
  width: 90vw;
  /* height: 30vh; */
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;

    .close-btn {
      background: transparent;
      padding: 0;
      font-size: 1.8rem;
      color: var(--font-white);
    }

    h4, p {
      margin-bottom: 1rem;
    }

    .reset-btn {
      background-color: #bc2727;
      color: var(--font-white)
    }
  }
`




