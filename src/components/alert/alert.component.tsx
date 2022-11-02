import { useSelector } from "react-redux"

import { selectAlertText } from "../../store/transaction/transaction.selector"

import { AlertContainer } from "./alert.styles"

export const Alert = () => {
  const alertText = useSelector(selectAlertText)
  return (
    <AlertContainer>
      {alertText}
    </AlertContainer>
  )
}