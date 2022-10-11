import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchPorfolioMarketDataAsync } from "../../store/portfolio/portfolio.action";

import { PortfolioOverview } from "../../components/portfolio-overview/portfolio-overview.component";
import { PortfolioItems } from "../../components/portfolio-items/portfolio-items.component";

import { PORTFOLIO_ITEMS } from "../../utils/portfolio-items";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPorfolioMarketDataAsync(PORTFOLIO_ITEMS))
  }, [])

  return (
    <>
      <PortfolioOverview />
      <PortfolioItems />
    </>
  )
}