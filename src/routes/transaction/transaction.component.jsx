import { useNavigate } from "react-router-dom"

import { IoArrowBack } from "react-icons/io5"
import { TransactionForm } from "../../components/transaction-form/transaction-form.component"

import { TransactionContainer, TransactionHeader} from "./transaction.styles"



export const Transaction = () => {
  const navigate = useNavigate()

  return (
    <TransactionContainer>
      <TransactionHeader>
        <div className="icon-btn" onClick={() => navigate(-1)}>
          <IoArrowBack className="icon" />
        </div>
        <div className="spacer">
        </div>
      </TransactionHeader>
      <TransactionForm />
    </TransactionContainer>
  )
}

