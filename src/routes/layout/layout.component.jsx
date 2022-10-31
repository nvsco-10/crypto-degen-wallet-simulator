import { Outlet } from "react-router-dom";

import { NavigationContainer } from "./layout.styles";
import logo from "../../assets/logo-light.png"

export const Layout = () => {
  return (
    <>
      <NavigationContainer>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </NavigationContainer>
      <main>
        <Outlet />
      </main>
    </>
  )
}