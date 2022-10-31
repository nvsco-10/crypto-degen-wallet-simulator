import {
 ModalOverlay
} from "./portfolio-overview-reset-modal.styles"

type PortfolioOverviewResetModalProps = {
  isModalOpen: boolean,
  handleModal: () => void
  handleReset: () => void
}

export const PortfolioOverviewResetModal = ({ 
  isModalOpen, 
  handleModal, 
  handleReset 
}: PortfolioOverviewResetModalProps
) => {
  return (
    <ModalOverlay isModalOpen={isModalOpen}>
      <div className="modal-container">
        <div className="btn-container">
          <div></div>
          <button className="close-btn" onClick={handleModal}>&times;</button>
        </div>
        <h4>Reset Portfolio</h4>
        <p>WARNING: Resetting will remove all existing items in your portfolio. This cannot be undone.</p>
        <p>A new portfolio will give you starting  balance of 5000 Tether(USDT).</p>
        <button className="reset-btn" onClick={handleReset}>RESET</button>
      </div>
    </ModalOverlay>
  )
}