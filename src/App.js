import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Portfolio } from "./routes/portfolio/portfolio.component";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
