import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchPorfolioMarketDataAsync } from "./store/portfolio/portfolio.action";
import { selectPortfolioItems } from "./store/portfolio/portfolio.selector";

import { Layout } from "./routes/layout/layout.component";
import { Portfolio } from "./routes/portfolio/portfolio.component";
import { Transaction } from "./routes/transaction/transaction.component";

const App = () => {
  const portolioItems = useSelector(selectPortfolioItems)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPorfolioMarketDataAsync(portolioItems))
  }, [portolioItems])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Portfolio />} />
          <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
