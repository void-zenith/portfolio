import React from "react";
import { ToastContainer } from "react-toastify";
import HeaderContainer from "./Views/container/HeaderContainer";
import MainContainer from "./Views/container/MainContainer";
function App() {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;
