import { Component } from "react";
import { useDispatch } from "react-redux";

import { setTransactionType } from "../../store/transaction/transaction.action";

import { ButtonContainer, IconButton } from "./portfolio-overview-button.styles";

type PortfolioOverviewButtonProps = {
  icon: Component,
  label: string
}

export const PortfolioOverviewButton = ({ icon, label }: PortfolioOverviewButtonProps) => {
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(setTransactionType(label))
  }

  return (
    <ButtonContainer>
      <IconButton onClick={handleClick} to="/transaction">
        {icon}
      </IconButton>
      <p>{label}</p>
    </ButtonContainer>
  )
}